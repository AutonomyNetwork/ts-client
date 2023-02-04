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




export const defaultNFT:MINTNFT = {
    DENOM_ID:"denom-id", 
    NFT_ID: "", // Updated while doing request
    NFT_NAME:"access-id",
    NFT_DESCRIPTION:"description",
    NFT_PREVIEW_URI:"https://ipfs.autonomy.network/ipfs/ipfs-url",
    NFT_MEDIA_URI:"https://ipfs.autonomy.network/ipfs/ipfs-url",
    TRANSFER:true,
    SENDER:"autonomy1wcnpm6vja67d37rjpjvurc7w30rh6566ucshj4",
    ROYALITIES:"0.05",
    FEE:fee,
    MEMO:"Memo ",
}
