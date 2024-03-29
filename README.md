# ts-client
Autonomy custom ts-client  

Client has two different functions for both transactions & queries
- `setupIssuanceExtension`
- `AutonomyClient`

## Usage

### To query
```ts

import { setupIssuanceExtension, setupLiquidityExtension, setupNFTExtension } from './queries';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { QueryClient, setupBankExtension } from '@cosmjs/stargate';
import Long from 'long';
(async () => {
  const tendermintClient = await Tendermint34Client.connect('localhost:26657');

  const queryClient = QueryClient.withExtensions(tendermintClient, setupIssuanceExtension, setupBankExtension, setupLiquidityExtension, setupNFTExtension);

  // Query Token All
  const res = await queryClient.issuance.tokenAll();
  console.log(res);

  // Query Token by Id
  let tokenById = await queryClient.issuance.token(Long.fromNumber(1));
  console.log(tokenById);

  // Query Tokens By TokensByOwner
  let tokensByOwner = await queryClient.issuance.tokensByOwner(tokenById!.creator);
  console.log(tokensByOwner);

  // Query Token By denom
  let tokenByDenom = await queryClient.issuance.tokenByDenom(tokenById!.denom)
  console.log(tokenByDenom);

  const res3 = await queryClient.bank.allBalances(tokenById!.creator);
  console.log(res3);

  // Query Pools
  const pools = await queryClient.liquidity.pools();
  console.log(pools);

  // Query PoolById
  const poolById = await queryClient.liquidity.poolById(Long.fromNumber(1))
  console.log(poolById)

  //Query PoolByName
    const poolByName = await queryClient.liquidity.poolByDenom("pool9040880A9D2FB7AB4CF2B87AF5454379D9602EEF16985ED997D9E38755BF9F63")
  console.log(poolByName)


  // Query denoms
  const res = await queryClient.nfts.denoms();
  console.log(res);

  // Query Owner Collcetions
  let collection = await queryClient.nfts.ownerCollection('autonomy1s5gng5s7w4yk4tk6qmfld8r7p4468jw2hfpklu')
  console.log(collection);


  const paginationKey = new Uint8Array()

  // default Query MarketPlace
  let marketplaceDefault = await queryClient.nfts.marketplace();
  console.log(marketplaceDefault);


  // Query MarketPlace with pagination
  let marketplace = await queryClient.nfts.marketplace(Long.fromNumber(2), paginationKey);
  console.log(marketplace.marketPlace);


  // Query with nextKey pagination
  let marketplaceNext = await queryClient.nfts.marketplace(Long.fromNumber(4), marketplace.pagination!.nextKey);
  console.log(marketplaceNext);


  // Query MarketPlace
  let marketplace = await queryClient.nfts.marketplace();
  console.log(marketplace);

  let singleNFT = marketplace.marketPlace[0]
  console.log(singleNFT);

  let marketplaceNFT = await queryClient.nfts.marketplaceNFT(singleNFT.denomID, singleNFT.nftId)
  console.log(marketplaceNFT);


    // Query Denom
    let denom = await queryClient.nfts.denom("nftdenomc55b629434824b3cb33bedcfa206c34c")
    console.log(denom);

// Query nft with nft_denom_id, nft_id
  let nft = await queryClient.nfts.nft("nftdenomc55b629434824b3cb33bedcfa206c34c","nftb836f4f54fee4d4d87b3cff722231afd")
  console.log(nft);

    // Query Collection by collection ID
    let collection = await queryClient.nfts.collectionById(denoms.denoms[0].id)
    console.log(collection);

    // Query Communities
    let communities = await queryClient.community.communities();
    console.log(communities);

     // Query all NFTs
  let nfts = await queryClient.nfts.all();
  console.log(nfts);

  // Query community collections

  let communityCollections = await queryClient.community.communityCollections(communities.communities[0].id);
  console.log(communityCollections);

    // Query Communities by Community ID
    let community = await queryClient.community.communityById(communities.communities[0].id)
    console.log(community);

    let collectionByOwner = await queryClient.nfts.ownerCollection("autonomy1089z23a6pkkl5dulktklcjxe8mgprgpd3cuuu5")
    console.log(JSON.stringify(collectionByOwner));

  // Query Communities By Owner
    let communityByOwner = await queryClient.nfts.communitiesByOwner("autonomy1t0l9jljp3nq95a66e25dall7ag9x0jpy8z8jm7")
    console.log("Owner communities",communityByOwner);

    // Query Denoms By Owner
    let denomsByOwner = await queryClient.nfts.denomsByOwner("autonomy1t0l9jljp3nq95a66e25dall7ag9x0jpy8z8jm7")
    console.log(JSON.stringify(denomsByOwner));

    // Query Marketplace by type 0 
    // To get all nfts with fiat and crypto
    let marketType0 = await queryClient.nfts.marketplaceType(0,Long.fromNumber(2),paginationKey)
    console.log("Marketplace0",marketType0);

     // Query Marketplace by type 1
     // To get all nfts with fiat
     let marketType1 = await queryClient.nfts.marketplaceType(1,Long.fromNumber(2),paginationKey)
     console.log("marketplace1",marketType1);

      // Query Marketplace by type 2 
      // To get all nfts with crypto
    let marketType2 = await queryClient.nfts.marketplaceType(2,Long.fromNumber(2),paginationKey)
    console.log(JSON.stringify(marketType2));
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
      denom: 'stake',
      amount: '200000',
    },
  ],
  gas: '200000',
};
(async () => {
  const gasPrice = GasPrice.fromString('3.14stake');
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
//       amount: coins(12, 'uaut'),
//     };

//     msgs.push(msg);
//   }
//   const resMSend = await autonomyClient.buildMultiSendMsgAndBroadcast(msgs, fee, 'test multisend');
//   console.log(resMSend);


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

  
  const grantRes = await autonomyClient.feeGrantAllowance(sender.address, sender.address, fee, "test fee grant")
  console.log(grantRes);
  

})();
```
