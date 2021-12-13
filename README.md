# ts-client
Autonomy custom ts-client  

Client has two different functions for both transactions & queries
- `setupIssuanceExtension`
- `AutonomyClient`

## Usage

### To query
```ts

import { setupIssuanceExtension, setupLiquidityExtension } from './queries';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { QueryClient, setupBankExtension } from '@cosmjs/stargate';
import Long from 'long';
(async () => {
  const tendermintClient = await Tendermint34Client.connect('localhost:26657');

  const queryClient = QueryClient.withExtensions(tendermintClient, setupIssuanceExtension, setupBankExtension, setupLiquidityExtension);
  const res = await queryClient.issuance.tokenAll();
  console.log(res);
  let res1 = await queryClient.issuance.token(Long.fromNumber(1));
  console.log(res1);
  const res2 = await queryClient.bank.allBalances(res1!.creator);
  console.log(res2);

  // Query Pools 
  const pools = await queryClient.liquidity.pools();
  console.log(pools);

  // Query PoolById 
  const poolById = await queryClient.liquidity.poolById(Long.fromNumber(1))
  console.log(poolById)

  //Query PoolByName
    const poolByName = await queryClient.liquidity.poolByDenom("pool9040880A9D2FB7AB4CF2B87AF5454379D9602EEF16985ED997D9E38755BF9F63")
  console.log(poolByName)
})();
```
### To transactions

```ts

import { AutonomyClient, autonomyRegistry } from './txs';
import { DirectSecp256k1HdWallet, Registry } from '@cosmjs/proto-signing';
import { StdFee } from '@cosmjs/amino';
import Long from 'long';
import { coins } from '@cosmjs/amino';
import { GasPrice } from '@cosmjs/stargate';
const sender = {
  menmonic:
    'kind surge maximum rapid rocket smart cycle slab infant flock alone suffer grit element indicate cricket benefit cricket sausage venture talk rib exact hair',
  address: 'autonomy1s5gng5s7w4yk4tk6qmfld8r7p4468jw2hfpklu',
  path: "m/44'/118'/0'/0/0",
  recipient: 'autonomy1r9nfvcdctxyg5q48ae9kupwdh4jlr8kur4sc6q',
};

const fee: StdFee = {
  amount: [
    {
      denom: 'atn',
      amount: '200000',
    },
  ],
  gas: '200000',
};
(async () => {
  const gasPrice = GasPrice.fromString('3.14atn');
  const gasLimits = {
    send: 200000,
  };
  const options = { gasPrice: gasPrice, gasLimits: gasLimits, registry: new Registry([...autonomyRegistry]) };

  const wallet = await DirectSecp256k1HdWallet.fromMnemonic(sender.menmonic, { prefix: 'autonomy' });

  const [addres] = await wallet.getAccounts();
  console.log(addres.address);

  const autonomyClient = await AutonomyClient.autonomySigner('localhost:26657', wallet, options);

  const msgs = [];
  for (let i = 0; i < 5; i++) {
    const msg = {
      fromAddress: 'autonomy1s5gng5s7w4yk4tk6qmfld8r7p4468jw2hfpklu',
      toAddress: 'autonomy1r9nfvcdctxyg5q48ae9kupwdh4jlr8kur4sc6q',
      amount: coins(12, 'atn'),
    };

    msgs.push(msg);
  }
  const resSend = await autonomyClient.sendTokens(sender.address, sender.recipient, coins(12, 'atn'));
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

  const resMSend = await autonomyClient.buildMultiSendMsgAndBroadcast(msgs, fee, 'test multisend');
  console.log(resMSend);
})();

```
