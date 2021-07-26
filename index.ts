import { setupIssuanceExtension } from "./query"
import { Tendermint34Client } from "@cosmjs/tendermint-rpc";
import { QueryClient } from "@cosmjs/stargate"
import Long from 'long'
(async ()=>{

  const tendermintClient = await Tendermint34Client.connect("localhost:26657");


  const queryClient = QueryClient.withExtensions(
  tendermintClient, setupIssuanceExtension );
  const res = await queryClient.issuance.tokenAll()
  console.log(res)
  const res1 = await queryClient.issuance.token(Long.fromNumber(1))
  console.log(res1)
})();
