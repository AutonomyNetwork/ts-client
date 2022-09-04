import { StdFee } from '@cosmjs/amino';
const fee: StdFee = {
    amount: [
      {
        denom: 'uaut',
        amount: '20000',
      },
    ],
    gas: '2000000',
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
    DENOM_ID:"nftdenomb1e245bc42bf4cbdafe97f38a3fa2b15", 
    NFT_ID: "", // Updated while doing request
    NFT_NAME:"Prime Access",
    NFT_DESCRIPTION:"Prime Access is participant nft, who completed the quiz able to get the nft as reward per participation.",
    NFT_PREVIEW_URI:"https://ipfs.autonomy.network/ipfs/QmXrbvwqfZqmDEq2XBhSyZNKzXFJozXmNpQEDp54UsgCua",
    NFT_MEDIA_URI:"https://ipfs.autonomy.network/ipfs/QmXrbvwqfZqmDEq2XBhSyZNKzXFJozXmNpQEDp54UsgCua",
    TRANSFER:true,
    SENDER:"autonomy1wcnpm6vja67d37rjpjvurc7w30rh6566ucshj4",
    ROYALITIES:"0.05",
    FEE:fee,
    MEMO:"prime nft transfer for quiz participants",
}


