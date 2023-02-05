import { StdFee } from '@cosmjs/amino';
import {
  SigningStargateClient,
  defaultRegistryTypes,
  SigningStargateClientOptions,
  DeliverTxResponse,
} from '@cosmjs/stargate';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { GeneratedType, OfflineSigner } from '@cosmjs/proto-signing';
import Long from 'long';
import { MsgSend } from './codec/cosmos/bank/v1beta1/tx';
import { MsgIssueToken } from './codec/issuance/v1beta1/tx';
// import { coins } from '@cosmjs/amino';


import {
  MsgCreatePool,
  MsgCreatePoolResponse,
  MsgDepositWithinBatch,
  MsgDepositWithinBatchResponse,
  MsgSwapWithinBatch,
  MsgSwapWithinBatchResponse,
  MsgWithdrawWithinBatch,
  MsgWithdrawWithinBatchResponse,
} from './codec/tendermint/liquidity/v1beta1/tx';

import {
  MsgCreateDenom,
  MsgCreateDenomResponse,
  MsgMintNFT,
  MsgMintNFTResponse,
  MsgTransferNFT,
  MsgTransferNFTResponse,
  MsgSellNFT,
  MsgSellNFTResponse,
  MsgBuyNFT,
  MsgBuyNFTResponse,
  MsgCreateCommunity,
} from './codec/nft/v1beta1/tx';
import { Coin } from './codec/cosmos_proto/coin';
// import { Any } from './codec/google/protobuf/any';

export const autonomyRegistry: ReadonlyArray<[string, GeneratedType]> = [
  ...defaultRegistryTypes,
  ['/issuance.v1beta1.MsgIssueToken', MsgIssueToken],
  ['/nft.v1beta1.MsgCreateDenom', MsgCreateDenom],
  ['/nft.v1beta1.MsgMintNFT', MsgMintNFT],
  ['/nft.v1beta1.MsgTransferNFT', MsgTransferNFT],
  ['/nft.v1beta1.MsgSellNFT', MsgSellNFT],
  ['/nft.v1beta1.MsgBuyNFT', MsgBuyNFT],
  ['/nft.v1beta1.MsgCreateCommunity', MsgCreateCommunity],

  ['/tendermint.liquidity.v1beta1.MsgCreatePool', MsgCreatePool],
  ['/tendermint.liquidity.v1beta1.MsgDepositWithinBatch', MsgDepositWithinBatch],
  ['/tendermint.liquidity.v1beta1.MsgSwapWithinBatch', MsgSwapWithinBatch],
  ['/tendermint.liquidity.v1beta1.MsgWithdrawWithinBatch', MsgWithdrawWithinBatch],
];
export class AutonomyClient extends SigningStargateClient {
  protected constructor(
    tmClient: Tendermint34Client | undefined,
    signer: OfflineSigner,
    options: SigningStargateClientOptions,
  ) {
    super(tmClient, signer, options);
  }

  public static async autonomySigner(
    endpoint: string,
    signer: OfflineSigner,
    options: SigningStargateClientOptions,
  ): Promise<AutonomyClient> {
    const tmClient = await Tendermint34Client.connect(endpoint);
    return new AutonomyClient(tmClient, signer, options);
  }
  public async issueTokens(
    sender: string,
    denom: string,
    displayName: string,
    decimal: Long,
    initialSupply: Long,
    fee: StdFee,
    memo: string,
  ): Promise<DeliverTxResponse> {
    const issueMsg = {
      typeUrl: '/issuance.v1beta1.MsgIssueToken',
      value: {
        creator: sender,
        denom: denom, //TODO: need to update
        displayName: displayName,
        decimals: decimal,
        initialSupply: initialSupply,
      },
    };
    return this.signAndBroadcast(sender, [issueMsg], fee, memo);
  }

  public async createcommunity(
    sender: string,
    id: string,
    name: string,
    description: string,
    preview_url: string,
    fee: StdFee,
    memo: string,
  ): Promise<DeliverTxResponse> {
    const msg = {
      typeUrl: '/nft.v1beta1.MsgCreateCommunity',
      value: {
        id: id,
        name: name,
        description: description,
        previewUri: preview_url,
        creator: sender,
      },
    };

    return this.signAndBroadcast(sender, [msg], fee, memo);
  }



  public async createdenom(
    sender: string,
    id: string,
    name: string,
    symbol: string,
    description: string,
    preview_url: string,
    community_id:string,
    fee: StdFee,
    memo: string,
  ): Promise<MsgCreateDenomResponse> {
    const msg = {
      typeUrl: '/nft.v1beta1.MsgCreateDenom',
      value: {
        id: id,
        name: name,
        symbol: symbol,
        description: description,
        previewUri: preview_url,
        creator: sender,
        community_id: community_id,
      },
    };

    return this.signAndBroadcast(sender, [msg], fee, memo);
  }

  public async mintnft(
    denomId: string,
    nft_id: string,
    nft_name: string,
    nft_description: string,
    nft_media_uri: string,
    nft_preview_uri: String,
    transfer: boolean,
    sender: string,
    royalties: string,
    fee: StdFee,
    memo: string,
  ): Promise<MsgMintNFTResponse> {
    const msg = {
      typeUrl: '/nft.v1beta1.MsgMintNFT',
      value: {
        id: nft_id,
        denomId: denomId,
        metadata: {
          name: nft_name,
          description: nft_description,
          mediaUri: nft_media_uri,
          previewUri: nft_preview_uri,
        },
        transferable: transfer,
        creator: sender,
        royalties: royalties,
      },
    };
    return this.signAndBroadcast(sender, [msg], fee, memo);
  }

  public async transfernft(
    nft_id: string,
    denomId: string,
    sender: string,
    recipient: string,
    fee: StdFee,
    memo: string,
  ): Promise<MsgTransferNFTResponse> {
    const msg = {
      typeUrl: '/nft.v1beta1.MsgTransferNFT',
      value: {
        id: nft_id,
        denomId: denomId,
        sender,
        recipient,
      },
    };

    return this.signAndBroadcast(sender, [msg], fee, memo);
  }
  public async sellnft(
    nft_id: string,
    denom_id: string,
    price: string,
    seller: string,
    fee: StdFee,
    memo: string,
  ): Promise<MsgSellNFTResponse> {
    const msg = {
      typeUrl: '/nft.v1beta1.MsgSellNFT',
      value: {
        id: nft_id,
        denomId: denom_id,
        price,
        seller,
      },
    };

    return this.signAndBroadcast(seller, [msg], fee, memo);
  }

  public async buynft(
    nft_id: string,
    denom_id: string,
    buyer: string,
    fee: StdFee,
    memo: string,
  ): Promise<MsgBuyNFTResponse> {
    const msg = {
      typeUrl: '/nft.v1beta1.MsgBuyNFT',
      value: {
        id: nft_id,
        denomId: denom_id,
        buyer,
      },
    };

    return this.signAndBroadcast(buyer, [msg], fee, memo);
  }

  public async buildMultiSendMsgAndBroadcast(
    sends: MsgSend[],
    fee: StdFee,
    memo: string,
  ): Promise<DeliverTxResponse> {
    const msgs = [];
    for (let data of sends) {
      const msg = {
        typeUrl: '/cosmos.bank.v1beta1.MsgSend',
        value: {
          fromAddress: data.fromAddress,
          toAddress: data.toAddress,
          amount: [...data.amount],
        },
      };
      msgs.push(msg);
    }
    return this.signAndBroadcast(sends[0].fromAddress, msgs, fee, memo);
  }

  public async createpool(
    creator: string,
    poolId: number,
    depositCoins: Coin[],
    fee: StdFee,
    memo: string,
  ): Promise<MsgCreatePoolResponse> {
    const msg = {
      typeUrl: '/tendermint.liquidity.v1beta1.MsgCreatePool',
      value: {
        poolCreatorAddress: creator,
        poolTypeId: poolId,
        depositCoins,
      },
    };
    return this.signAndBroadcast(creator, [msg], fee, memo);
  }

  public async depositpool(
    depositor: string,
    poolId: number,
    depositCoins: Coin[],
    fee: StdFee,
    memo: string,
  ): Promise<MsgDepositWithinBatchResponse> {
    const msg = {
      typeUrl: '/tendermint.liquidity.v1beta1.MsgDepositWithinBatch',
      value: {
        depositorAddress: depositor,
        poolId: Long.fromNumber(poolId),
        depositCoins,
      },
    };
    return this.signAndBroadcast(depositor, [msg], fee, memo);
  }

  public async swappool(
    requsterAddress: string,
    poolId: number,
    swapTypeId: number,
    offerCoin: Coin,
    demandCoinDenom: string,
    orderPrice: string,
    offerCoinFee: Coin,
    memo: string,
    fee: StdFee,
  ): Promise<MsgSwapWithinBatchResponse> {
    const msg = {
      typeUrl: '/tendermint.liquidity.v1beta1.MsgSwapWithinBatch',
      value: {
        swapRequesterAddress: requsterAddress,
        poolId: Long.fromNumber(poolId),
        swapTypeId,
        offerCoin,
        demandCoinDenom,
        orderPrice,
        offerCoinFee,
      },
    };
    return this.signAndBroadcast(requsterAddress, [msg], fee, memo);
  }

  public async withdrawpool(
    withdrawerAddress: string,
    poolId: Long,
    poolCoin: Coin,
    fee: StdFee,
    memo: string,
  ): Promise<MsgWithdrawWithinBatchResponse> {
    const msg = {
      typeUrl: '/tendermint.liquidity.v1beta1.MsgWithdrawWithinBatch',
      value: {
        withdrawerAddress,
        poolId,
        poolCoin,
      },
    };
    return this.signAndBroadcast(withdrawerAddress, [msg], fee, memo);
  }


  // public async feeGrantAllowance(granter:string, grantee:string,fee:StdFee, memo:string) :Promise<DeliverTxResponse>{
  //   const allowance = {
  //     typeUrl : '/cosmos.feegrant.v1beta1.AllowedMsgAllowance',
  //     value : AllowedMsgAllowance.encode(AllowedMsgAllowance.fromPartial({
  //       allowance:{
  //           typeUrl:"/cosmos.feegrant.v1beta1.BasicAllowance",
  //           value: BasicAllowance.encode(
  //               BasicAllowance.fromPartial({
  //                   spendLimit: coins(100, 'stake')
  //               })
  //           ).finish()
  //       },
  //       allowedMessages:["/nft.v1beta1.MsgCreateCommunity"]
  //     })).finish()
  //   }

  //   const msg_fee_grant_allowance = {
  //     typeUrl :'/cosmos.feegrant.v1beta1.MsgGrantAllowance',
  //     value:{
  //       granter: granter,
  //       grantee:grantee,
  //       allowance:allowance,
  //     }
  //   }

  //   return this.signAndBroadcast(granter, [msg_fee_grant_allowance], fee, memo)

  // }
}
