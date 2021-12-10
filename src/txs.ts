import { StdFee } from '@cosmjs/amino';
import {
  SigningStargateClient,
  defaultRegistryTypes,
  SigningStargateClientOptions,
  BroadcastTxResponse,
} from '@cosmjs/stargate';
import { Tendermint34Client } from '@cosmjs/tendermint-rpc';
import { GeneratedType, OfflineSigner } from '@cosmjs/proto-signing';
import Long from 'long';
import { MsgSend } from './codec/cosmos/bank/v1beta1/tx';
import { MsgIssueToken } from './codec/issuance/v1beta1/tx';
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
import { Coin } from './codec/cosmos_proto/coin';

export const autonomyRegistry: ReadonlyArray<[string, GeneratedType]> = [
  ...defaultRegistryTypes,
  ['/issuance.v1beta1.MsgIssueToken', MsgIssueToken],
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
    options: SigningStargateClientOptions = {},
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
  ): Promise<BroadcastTxResponse> {
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

  public async buildMultiSendMsgAndBroadcast(
    sends: MsgSend[],
    fee: StdFee,
    memo: string,
  ): Promise<BroadcastTxResponse> {
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
}
