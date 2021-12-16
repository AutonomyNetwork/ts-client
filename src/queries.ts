import { createProtobufRpcClient, QueryClient } from '@cosmjs/stargate';
import Long from 'long';
import { QueryClientImpl as QueryIssuanceClient,QueryAllTokenResponse, QueryGetTokenResponse  } from './codec/issuance/v1beta1/query';
import { Token } from './codec/issuance/v1beta1/token';

import { QueryClientImpl as QueryLiquidityClient,QueryLiquidityPoolsResponse , QueryLiquidityPoolResponse} from './codec/tendermint/liquidity/v1beta1/query';

export interface IssuanceExtension {
  readonly issuance: {
    readonly token: (id: Long.Long) => Promise<Token | null>;
    readonly tokenAll: () => Promise<Token[] | null>;
    readonly tokensByOwner: (address:string ) => Promise<QueryAllTokenResponse>
    readonly tokenByDenom: (id: string) => Promise<QueryGetTokenResponse>
  };
}

export interface LiquidityExtension {
  readonly liquidity:{
    readonly pools: (paginationKey?: Uint8Array) => Promise<QueryLiquidityPoolsResponse>;
    readonly poolByDenom:(poolCoinDenom: string) => Promise<QueryLiquidityPoolResponse>;
    readonly poolById:(poolId: Long) => Promise<QueryLiquidityPoolResponse>;
  }
}

export function setupIssuanceExtension(base: QueryClient): IssuanceExtension {
  const rpc = createProtobufRpcClient(base);

  const queryService = new QueryIssuanceClient(rpc);

  return {
    issuance: {
      token: async (id: Long.Long) => {
        const { token } = await queryService.Token({
          id: id,
        });
        return token ?? null;
      },
      tokenAll: async () => {
        const { tokens } = await queryService.TokenAll({});
        return tokens ?? null;
      },
      tokensByOwner: async(addr: string) =>{
        const res = await queryService.TokensByOwner({
          address: addr,
        })
        return res
      },
      tokenByDenom: async(denom: string)=>{
        const res = await queryService.TokenByDenom({
          denom,
        })
        return res
      }
    },
  };
}

export function setupLiquidityExtension(base: QueryClient): LiquidityExtension{
  const rpc = createProtobufRpcClient(base);

  const queryService = new QueryLiquidityClient(rpc);

  return {
    liquidity:{
      pools: async()=>{
        const res = await queryService.LiquidityPools({});
        return res;
      },
      poolByDenom: async(id: string) =>{
          const res = await queryService.LiquidityPoolByPoolCoinDenom({
             poolCoinDenom: id,
          })
          return res;
      },
      poolById: async(id: Long)=>{
          const res = await queryService.LiquidityPool({
            poolId: id,
          })
          return res;
      }
    }
  }

}
