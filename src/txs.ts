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
import { MsgIssueToken } from './codec/issuance/v1beta1/tx';

export const autonomyRegistry: ReadonlyArray<[string, GeneratedType]> = [
  ...defaultRegistryTypes,
  ['/issuance.v1beta1.MsgIssueToken', MsgIssueToken],
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
        denom: denom,
        displayName: displayName,
        decimals: decimal,
        initialSupply: initialSupply,
      },
    };

    return this.signAndBroadcast(sender, [issueMsg], fee, memo);
  }
}
