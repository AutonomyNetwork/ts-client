import { createProtobufRpcClient, QueryClient } from '@cosmjs/stargate';
import Long from 'long';
import {
  QueryClientImpl as QueryIssuanceClient,
  QueryAllTokenResponse,
  QueryGetTokenResponse,
} from './codec/issuance/v1beta1/query';
import { Token } from './codec/issuance/v1beta1/token';
import {
  QueryClientImpl as QueryNFTClient,
  QueryOwnerNFTsResponse,
  QueryDenomsResponse,
  QueryMarketPlaceResponse,
  QueryDenomResponse,
  QueryNFTResponse,
  QueryCommunitiesResponse,
  QueryCommunityResponse,
  QueryCollectionResponse,
  QueryCommunityMembersResponse,
  QueryAllNFTsResponse,
  QueryCommunityCollectionsResponse,
} from './codec/nft/v1beta1/query';
import {
  QueryClientImpl as QueryLiquidityClient,
  QueryLiquidityPoolsResponse,
  QueryLiquidityPoolResponse,
} from './codec/tendermint/liquidity/v1beta1/query';

export interface IssuanceExtension {
  readonly issuance: {
    readonly token: (id: Long.Long) => Promise<Token | null>;
    readonly tokenAll: () => Promise<Token[] | null>;
    readonly tokensByOwner: (address: string) => Promise<QueryAllTokenResponse>;
    readonly tokenByDenom: (id: string) => Promise<QueryGetTokenResponse>;
  };
}

export interface LiquidityExtension {
  readonly liquidity: {
    readonly pools: (paginationKey?: Uint8Array) => Promise<QueryLiquidityPoolsResponse>;
    readonly poolByDenom: (poolCoinDenom: string) => Promise<QueryLiquidityPoolResponse>;
    readonly poolById: (poolId: Long) => Promise<QueryLiquidityPoolResponse>;
  };
}

export interface NFTExtension {
  readonly nfts: {
    readonly ownerCollection: (address: string) => Promise<QueryOwnerNFTsResponse>;
    readonly collectionById: (id: string) => Promise<QueryCollectionResponse>;
    readonly denoms: () => Promise<QueryDenomsResponse>;
    readonly marketplace: () => Promise<QueryMarketPlaceResponse>;
    readonly denom: (id: string) => Promise<QueryDenomResponse>;
    readonly nft: (denom_id: string, nft_id: string) => Promise<QueryNFTResponse>;
    readonly all: () => Promise<QueryAllNFTsResponse>;
  };
}

export interface CommunityExtension {
  readonly community: {
    readonly communityById: (id: string) => Promise<QueryCommunityResponse>;
    readonly communities: () => Promise<QueryCommunitiesResponse>;
    readonly comunityMembers: (id: string) => Promise<QueryCommunityMembersResponse>;
    readonly communityCollections: (id: string) => Promise<QueryCommunityCollectionsResponse>;
  };
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
      tokensByOwner: async (addr: string) => {
        const res = await queryService.TokensByOwner({
          address: addr,
        });
        return res;
      },
      tokenByDenom: async (denom: string) => {
        const res = await queryService.TokenByDenom({
          denom,
        });
        return res;
      },
    },
  };
}

export function setupLiquidityExtension(base: QueryClient): LiquidityExtension {
  const rpc = createProtobufRpcClient(base);

  const queryService = new QueryLiquidityClient(rpc);

  return {
    liquidity: {
      pools: async () => {
        const res = await queryService.LiquidityPools({});
        return res;
      },
      poolByDenom: async (id: string) => {
        const res = await queryService.LiquidityPoolByPoolCoinDenom({
          poolCoinDenom: id,
        });
        return res;
      },
      poolById: async (id: Long) => {
        const res = await queryService.LiquidityPool({
          poolId: id,
        });
        return res;
      },
    },
  };
}

export function setupNFTExtension(base: QueryClient): NFTExtension {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryNFTClient(rpc);

  return {
    nfts: {
      ownerCollection: async (address: string) => {
        const res = await queryService.OwnerNFTs({
          owner: address,
        });

        return res;
      },

      denoms: async () => {
        const res = await queryService.Denoms({});
        return res;
      },
      marketplace: async () => {
        const res = await queryService.MarketPlace({});
        return res;
      },
      denom: async (id: string) => {
        const res = await queryService.Denom({
          denomId: id,
        });

        return res;
      },
      nft: async (denom_id: string, nft_id: string) => {
        const res = await queryService.NFT({
          denomId: denom_id,
          id: nft_id,
        });
        return res;
      },
      collectionById: async (id: string) => {
        const res = await queryService.Collection({
          denomId: id,
        });

        return res;
      },

      all: async () => {
        const res = await queryService.AllNFTs({});
        return res;
      },
    },
  };
}

export function setUpCommunityExtension(base: QueryClient): CommunityExtension {
  const rpc = createProtobufRpcClient(base);
  const queryService = new QueryNFTClient(rpc);

  return {
    community: {
      communities: async () => {
        const res = await queryService.Communities({});
        return res;
      },
      communityById: async (id: string) => {
        const res = await queryService.Community({
          communityId: id,
        });

        return res;
      },
      comunityMembers: async (id: string) => {
        const res = await queryService.CommunityMembers({
          communityId: id,
        });

        return res;
      },

      communityCollections: async (id: string) => {
        const res = await queryService.CommunityCollections({
          communityId: id,
        });

        return res;
      },
    },
  };
}
