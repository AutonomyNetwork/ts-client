import { StdFee } from '@cosmjs/amino';
const fee: StdFee = {
    amount: [
      {
        denom: 'uaut',
        amount: '500',
      },
    ],
    gas: '150000',
  };

export type MINTNFT = {
    DENOM_ID:string, 
    NFT_ID:string,
    NFT_NAME:string,
    NFT_DESCRIPTION:string,
    NFT_PREVIEW_URI:string,
    NFT_MEDIA_URI:string,
    TRANSFER:boolean,
    SENDER:string,
    ROYALITIES:string,
    FEE:StdFee,
    MEMO:string,
}



