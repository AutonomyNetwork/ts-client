import Koa, { Middleware } from 'koa';
import Router from 'koa-router';
import { NFTFaucet } from '.';
import HttpError from './http-error';
import logger from 'koa-logger';
import json from 'koa-json';
import bodyParser from 'koa-bodyparser';
const cors = require('@koa/cors');

import {RequestParser } from './request-parser'
import dotenv from 'dotenv';
import { defaultNFT } from './types';
import { v4 as uuidv4 } from 'uuid';

dotenv.config();

const PORT = 9092;
const app = new Koa();
const router = new Router();
const nftPrefix = 'nft';
const regex = /-/gi;


router.post('/credit', async (ctx) => {

    try{

        if (ctx.request.method !== 'POST') {
            throw new HttpError(405, 'This endpoint requires a POST request');
          }
        
          if (ctx.request.type !== 'application/json') {
            throw new HttpError(415, 'Content-type application/json expected');
          }
        
          const creditBody = RequestParser.parseCreditBody(ctx.request.body)
          const { address } = creditBody;
        
          

         let nft_id = nftPrefix + uuidv4().toString().replace(regex, '');
         console.log(address,nft_id)
          let apiURL = process.env['API_URL'];
          let menmonic = process.env['MNEMONIC'];
          let gasPrice = process.env['GAS_PRICE'];
          let addressPrefix = process.env['ADDRESS_PREFIX'];
          let gasLimit = process.env['GAS_LIMIT'];
        
          defaultNFT.NFT_ID = nft_id
          const client = await NFTFaucet.make(apiURL!, menmonic!, addressPrefix!, gasPrice!, parseInt(gasLimit!));
          let response = await client.mintandtransfer(address,defaultNFT,true)
          
          console.log(response)
          if (response.code == 0){
            ctx.res.statusCode = 200
          }else{
            ctx.res.statusCode = 500
          }

    }catch(e){
        console.log(e)
    }
 
  return true;
});

const FaucetStatus: Middleware = async function (ctx) {
  console.log('Recieved a request for status');
  ctx.body = {
    message: 'Faucet is active',
  };
};

// Middlewares
app.use(json());
app.use(logger());
app.use(bodyParser());
app.use(cors());

// Routes
router.get('/status', FaucetStatus);
app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, () => {
  console.log(`NFT Faucet Server Started at ${PORT} `);
  console.log(`/status Request for statsu `);
  console.log(`/credit  to get NFTFaucet `);
});
