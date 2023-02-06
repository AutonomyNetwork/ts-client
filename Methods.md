## test functionality
```js=

import { AutonomyClient, autonomyRegistry } from './txs';
import { DirectSecp256k1HdWallet, Registry } from '@cosmjs/proto-signing';
import { StdFee } from '@cosmjs/amino';
// import { Coin } from './codec/cosmos_proto/coin';
// import Long from 'long';
import { v4 as uuidv4 } from 'uuid';
import { GasPrice } from '@cosmjs/stargate';
const sender = {
  menmonic:
    'need excess raven crunch march front raw stuff divide spend water repair mystery member connect casino grid market fossil rigid lounge citizen enrich prosper',
  address: 'autonomy1s5gng5s7w4yk4tk6qmfld8r7p4468jw2hfpklu',
  path: "m/44'/118'/0'/0/0",
  recipient: 'autonomy1r9nfvcdctxyg5q48ae9kupwdh4jlr8kur4sc6q',
};

console.log(sender);
// const testswapAccount = {
//   menmonic:
//     'all gate bulk bread decide dignity grocery force flavor clean column excite increase alert photo donkey stable achieve wedding parade paper identify cherry name',
// };

const fee: StdFee = {
  amount: [
    {
      denom: 'uaut',
      amount: '2000000',
    },
  ],
  gas: '200000',
};
(async () => {
  const gasPrice = GasPrice.fromString('0.02uaut');
  const gasLimits = {
    send: 200000,
  };
  const options = { gasPrice: gasPrice, gasLimits: gasLimits, registry: new Registry([...autonomyRegistry]) };

  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(sender.menmonic, { prefix: 'autonomy' });

  const [addres] = await wallet.getAccounts();
  console.log(addres.address);

  const autonomyClient = await AutonomyClient.autonomySigner('localhost:26657', wallet, options);

  //   const msgs = [];
  //   for (let i = 0; i < 5; i++) {
  //     const msg = {
  //       fromAddress: 'autonomy1s5gng5s7w4yk4tk6qmfld8r7p4468jw2hfpklu',
  //       toAddress: 'autonomy1r9nfvcdctxyg5q48ae9kupwdh4jlr8kur4sc6q',
  //       amount: coins(12, 'atn'),
  //     };

  //     msgs.push(msg);
  //   }
  // const resSend = await autono/myClient.sendTokens(sender.address, sender.recipient, coins(12, 'atn'));
  // console.log(resSend);

  // ISSUE NEW TOKEN
  // let supply: number = 1000000 * Math.pow(10, 6);
  // const res = await autonomyClient.issueTokens(
  //   sender.address,
  //   'tokenb',
  //   'TokenB',
  //   Long.fromNumber(10),
  //   Long.fromNumber(supply),
  //   fee,
  //   'token B issuance',
  // );
  // console.log(res);

  // CREATE POOL MSG

  //   let poolCoins = parseCoins('100000000000usri,200000000000usai')
  // poolCoins.sort((a,b)=> a.denom <b.denom ? -1 : a.denom > b.denom ? 1  : 0)

  // console.log("Sorted", poolCoins);
  // const resMSend = await autonomyClient.buildMultiSendMsgAndBroadcast(msgs, fee, 'test multisend');
  // console.log(resMSend);

  // const resPool = await autonomyClient.createpool(
  //   sender.address,
  //   1,
  //   poolCoins,
  //   fee,
  //   'test create pool',
  // );
  //
  // console.log(resPool);

  // SWAP POOL
  // let amount = coin(10000000000, 'tokena'); // todo with decimals
  // let amount = 100 * Math.pow(10, 6);
  // let denom: string = 'tokenb';
  // let orderPrice: bigint = BigInt(0.4 * Math.pow(10, 18));
  // let swapRate = 0.003 / 2;
  // console.log('swapRate', swapRate, 0.003 / 2, Math.ceil(amount * swapRate));
  //
  // let offerCoinFee: string = Math.trunc(Math.ceil(amount * swapRate)).toString();
  // console.log('offerCoinFee', offerCoinFee);
  //
  // const swapPool = await autonomyClient.swappool(
  //   addres.address,
  //   1,
  //   1,
  //   coin(amount, denom),
  //   'tokena',
  //   orderPrice.toString(),
  //   { amount: offerCoinFee, denom: 'tokenb' },
  //   'test swap pool',
  //   fee,
  // );
  //
  // console.log(swapPool);

  // DEPOSIT POOL
  // let resDeposit = await autonomyClient.depositpool(
  //   addres.address,
  //   1,
  //   parseCoins('500000000tokena, 1905150000tokenb'),
  //   fee,
  //   'test deposit pool',
  // );

  // console.log(resDeposit);

  // WITHDRAW POOL
  // let resWithdraw = await autonomyClient.withdrawpool(
  //   addres.address,
  //   Long.fromNumber(1),
  //   {
  //     amount: '4000',
  //     denom: 'pool9040880A9D2FB7AB4CF2B87AF5454379D9602EEF16985ED997D9E38755BF9F63',
  //   },
  //   fee,
  //   'test withdraw pool',
  // );

  // console.log(resWithdraw);




   const nftPrefix = 'nft';
  const denomPrefix = 'nftdenom';
  const communityPrefix ='community';

  const regex = /-/gi;
  let denom = denomPrefix + uuidv4().toString().replace(regex, '');
  console.log('denom', denom);

  // CREATE COMMUNITY
  let community = communityPrefix + uuidv4().toString().replace(regex, '');
  console.log('community', community);

  let resS = await autonomyClient.createcommunity(
    addres.address,community,"Community","Community Descri", "preview_url", fee," memo test"
  )
  console.log("Community res", resS)

  // CREATE DENOM
  let res = await autonomyClient.createdenom(
    addres.address,
    denom, // is alphanumeric with
    'TwitterName', // need to be unique
    'TWTSymb', // is alphabets b/w 3 to 12 length
    'test description',
    'https://testpreview_url.com',
    "community1ff2e572f31e4835b89b72e20cb92536",
    fee,
    'test memo',
  );
  console.log(res);

  // CREATE NFT
  let nft_id = nftPrefix + uuidv4().toString().replace(regex, '');
  console.log('nft_id', nft_id);

  let resNFT = await autonomyClient.mintnft(
    'nftdenom62c3e6c10ebd4db1937dd2489287948c',
    nft_id,
    'nft_name_1',
    'nft_description',
    'nft_media_url',
    'nft_preview_uri',
    true,
    addres.address,
    '0.01',
    fee,
    'test memo',
  );

  console.log(resNFT);

  // // TRANSFER NFT
  // resNFT = await autonomyClient.transfernft(nft_id, denom, addres.address, sender.recipient, fee, 'test transfernft');
  // console.log(resNFT);

  // // Sell NFT
  // resNFT = await autonomyClient.sellnft(
  //   'nft946f832db5af46239f7995b2423b523a', //nft_id
  //   'nftdenomf42a77c08cc3448b937076e9e85d9489', // nft_denom_id
  //   '1000uaut',
  //   addres.address,
  //   fee,
  //   'test sell nft',
  // );

  // console.log(resNFT);

  // Buy NFT
  resNFT = await autonomyClient.buynft(
    'nft78e580d171834723805b726700ffd978',
    'nftdenomf42a77c08cc3448b937076e9e85d9489',
    addres.address,
    fee,
    'test buy nft',
  );

  console.log(resNFT);
})();

```
