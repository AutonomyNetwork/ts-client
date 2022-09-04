// export { setupIssuanceExtension, setupLiquidityExtension, setupNFTExtension, setUpCommunityExtension } from './queries';
import { AutonomyClient, autonomyRegistry } from './txs';

import { fromHex } from "@cosmjs/encoding";
import { GasPrice,coins,StdFee } from '@cosmjs/stargate';
import Long from 'long';


const sender = {
    menmonic:
      'kind surge maximum rapid rocket smart cycle slab infant flock alone suffer grit element indicate cricket benefit cricket sausage venture talk rib exact hair',
    address: 'autonomy17amq3mnl2plyxekfjrpfc8v0sw2w6p62vx00gs',
    path: "m/44'/118'/0'/0/0",
    recipient: 'autonomy1r9nfvcdctxyg5q48ae9kupwdh4jlr8kur4sc6q',
  };


const fee: StdFee = {
    amount: [
      {
        denom: 'uaut',
        amount: '200000',
      },
    ],
    gas: '200000',
  };


import { DirectSecp256k1Wallet, Registry} from '@cosmjs/proto-signing'
(async ()=>{

    const gasPrice = GasPrice.fromString('200000000uaut');
    const gasLimits = {
      send: 200000,
    };

   let wallet = await DirectSecp256k1Wallet.fromKey(fromHex('292968105f67a3329b9e19f75d70cf662e7f042dc85133f483a9b933ca4470f3'),"autonomy")
    console.log(wallet);

    let accounts = await wallet.getAccounts()
    console.log(accounts[0].address)

    const options = { gasPrice: gasPrice, gasLimits: gasLimits, registry: new Registry([...autonomyRegistry]) };

    const autonomyClient = await AutonomyClient.autonomySigner('localhost:26657', wallet, options);

  const msgs = [];
  for (let i = 0; i < 5; i++) {
    const msg = {
      fromAddress: 'autonomy17amq3mnl2plyxekfjrpfc8v0sw2w6p62vx00gs',
      toAddress: 'autonomy1r9nfvcdctxyg5q48ae9kupwdh4jlr8kur4sc6q',
      amount: coins(12, 'uaut'),
    };

    msgs.push(msg);
  }
  const resMSend = await autonomyClient.buildMultiSendMsgAndBroadcast(msgs, fee, 'test multisend');
  console.log(resMSend);


  const resSend = await autonomyClient.sendTokens(sender.address, sender.recipient, coins(12, 'uaut'), "auto","test token transfer");
  console.log(resSend);


  const res = await autonomyClient.issueTokens(
    sender.address,
    'atom',
    'ATOM',
    new Long(10),
    new Long(1919199),
    fee,
    'test tx-1',
  );
  console.log(res);

})();