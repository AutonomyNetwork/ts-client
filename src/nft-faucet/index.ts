import { DirectSecp256k1HdWallet, Registry } from '@cosmjs/proto-signing';
import { AutonomyClient, autonomyRegistry } from '../txs';
import { GasPrice, SigningStargateClient, DeliverTxResponse } from '@cosmjs/stargate';
import { MINTNFT } from './types';

export class NFTFaucet {
  public static async make(
    apiUrl: string,
    menmonic: string,
    addressPrefix: string,
    gasPrices: string,
    gasLimit: Number,
  ): Promise<NFTFaucet> {
    const gasPrice = GasPrice.fromString(gasPrices);
    const gasLimits = {
      send: gasLimit,
    };

    const options = {
      gasPrice: gasPrice,
      gasLimits: gasLimits,
      registry: new Registry([...autonomyRegistry]),
      broadcastTimeoutMs:5,
    };
    const wallet = await DirectSecp256k1HdWallet.fromMnemonic(menmonic, { prefix: addressPrefix });
    const client = await AutonomyClient.autonomySigner(apiUrl, wallet, options);
    return new NFTFaucet(client);
  }

  public readonly readonlyClient: SigningStargateClient;

  private constructor(readonlyClient: SigningStargateClient) {
    this.readonlyClient = readonlyClient;
  }
  public async mintandtransfer(reciever: string, mintNFT: MINTNFT, isMint: boolean): Promise<DeliverTxResponse> {

    let msgs = []
    if (isMint) {
      // Mint NFT
      const mintMsg = {
        typeUrl: '/nft.v1beta1.MsgMintNFT',
        value: {
          id: mintNFT.NFT_ID,
          denomId: mintNFT.DENOM_ID,
          metadata: {
            name: mintNFT.NFT_NAME,
            description: mintNFT.NFT_DESCRIPTION,
            mediaUri: mintNFT.NFT_MEDIA_URI,
            previewUri: mintNFT.NFT_PREVIEW_URI,
          },
          transferable: mintNFT.TRANSFER,
          creator: mintNFT.SENDER,
          royalties: mintNFT.ROYALITIES,
        },
      };

      msgs.push(mintMsg)
    }

    const transferMsg = {
      typeUrl: '/nft.v1beta1.MsgTransferNFT',
      value: {
        id: mintNFT.NFT_ID,
        denomId: mintNFT.DENOM_ID,
        sender: mintNFT.SENDER,
        recipient:reciever,
      },
    };
    msgs.push(transferMsg)
    return this.readonlyClient.signAndBroadcast(mintNFT.SENDER, msgs, mintNFT.FEE, mintNFT.MEMO);
  }
}
