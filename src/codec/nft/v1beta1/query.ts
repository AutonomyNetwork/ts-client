/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Denom, NFT, Collection } from "../../nft/v1beta1/nft";
import { MarketPlace } from "../../nft/v1beta1/market_place";
import {
  PageRequest,
  PageResponse,
} from "../../cosmos/base/query/v1beta1/pagination";
import { Community, CommunityMembers } from "../../nft/v1beta1/community";

export const protobufPackage = "nft.v1beta1";

export interface QueryDenomRequest {
  denomId: string;
}

export interface QueryDenomResponse {
  denom?: Denom;
}

export interface QueryDenomsRequest {}

export interface QueryDenomsResponse {
  denoms: Denom[];
}

export interface QueryNFTRequest {
  denomId: string;
  id: string;
}

export interface QueryNFTResponse {
  nft?: NFT;
  denom?: Denom;
}

export interface QueryMarketPlaceNFTRequest {
  id: string;
  denomId: string;
}

export interface QueryMarketPlaceNFTResponse {
  marketPlace?: MarketPlace;
  nft?: NFT;
}

export interface QueryMarketPlaceRequest {
  pagination?: PageRequest;
}

export interface QueryMarketPlaceResponse {
  marketPlace: MarketPlace[];
  pagination?: PageResponse;
}

export interface QueryOwnerNFTsRequest {
  owner: string;
}

export interface QueryOwnerNFTsResponse {
  owner: string;
  collections: OwnerNFTCollection[];
}

export interface OwnerNFTCollection {
  denom?: Denom;
  nfts: NFT[];
}

export interface QueryCommunityRequest {
  communityId: string;
}

export interface QueryCommunityResponse {
  community?: Community;
}

/** TODO: pagination */
export interface QueryCommunitiesRequest {}

export interface QueryCommunitiesResponse {
  communities: Community[];
}

export interface QueryCommunityMembersRequest {
  communityId: string;
}

export interface QueryCommunityMembersResponse {
  members?: CommunityMembers;
}

export interface QueryCollectionRequest {
  denomId: string;
}

export interface QueryCollectionResponse {
  collection?: Collection;
}

export interface QueryDenomIDsByOwnerRequest {
  address: string;
}

export interface QueryDenomIDsByOwnerResponse {
  ids: string[];
}

export interface QueryAllNFTsRequest {}

export interface DenomInfo {
  denomId: string;
  name: string;
}

export interface CommunityInfo {
  communityId: string;
  name: string;
}

export interface ALLNFT {
  nft?: NFT;
  denomInfo?: DenomInfo;
  communityInfo?: CommunityInfo;
}

export interface QueryAllNFTsResponse {
  all: ALLNFT[];
}

export interface QueryCommunityCollectionsRequest {
  communityId: string;
}

export interface QueryCommunityCollectionsResponse {
  community?: Community;
  denoms: Denom[];
}

const baseQueryDenomRequest: object = { denomId: "" };

export const QueryDenomRequest = {
  encode(
    message: QueryDenomRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDenomRequest } as QueryDenomRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomRequest {
    const message = { ...baseQueryDenomRequest } as QueryDenomRequest;
    if (object.denomId !== undefined && object.denomId !== null) {
      message.denomId = String(object.denomId);
    } else {
      message.denomId = "";
    }
    return message;
  },

  toJSON(message: QueryDenomRequest): unknown {
    const obj: any = {};
    message.denomId !== undefined && (obj.denomId = message.denomId);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDenomRequest>): QueryDenomRequest {
    const message = { ...baseQueryDenomRequest } as QueryDenomRequest;
    if (object.denomId !== undefined && object.denomId !== null) {
      message.denomId = object.denomId;
    } else {
      message.denomId = "";
    }
    return message;
  },
};

const baseQueryDenomResponse: object = {};

export const QueryDenomResponse = {
  encode(
    message: QueryDenomResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== undefined) {
      Denom.encode(message.denom, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDenomResponse } as QueryDenomResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = Denom.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomResponse {
    const message = { ...baseQueryDenomResponse } as QueryDenomResponse;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = Denom.fromJSON(object.denom);
    } else {
      message.denom = undefined;
    }
    return message;
  },

  toJSON(message: QueryDenomResponse): unknown {
    const obj: any = {};
    message.denom !== undefined &&
      (obj.denom = message.denom ? Denom.toJSON(message.denom) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDenomResponse>): QueryDenomResponse {
    const message = { ...baseQueryDenomResponse } as QueryDenomResponse;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = Denom.fromPartial(object.denom);
    } else {
      message.denom = undefined;
    }
    return message;
  },
};

const baseQueryDenomsRequest: object = {};

export const QueryDenomsRequest = {
  encode(
    _: QueryDenomsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDenomsRequest } as QueryDenomsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryDenomsRequest {
    const message = { ...baseQueryDenomsRequest } as QueryDenomsRequest;
    return message;
  },

  toJSON(_: QueryDenomsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryDenomsRequest>): QueryDenomsRequest {
    const message = { ...baseQueryDenomsRequest } as QueryDenomsRequest;
    return message;
  },
};

const baseQueryDenomsResponse: object = {};

export const QueryDenomsResponse = {
  encode(
    message: QueryDenomsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.denoms) {
      Denom.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryDenomsResponse } as QueryDenomsResponse;
    message.denoms = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denoms.push(Denom.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomsResponse {
    const message = { ...baseQueryDenomsResponse } as QueryDenomsResponse;
    message.denoms = [];
    if (object.denoms !== undefined && object.denoms !== null) {
      for (const e of object.denoms) {
        message.denoms.push(Denom.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryDenomsResponse): unknown {
    const obj: any = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map((e) => (e ? Denom.toJSON(e) : undefined));
    } else {
      obj.denoms = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueryDenomsResponse>): QueryDenomsResponse {
    const message = { ...baseQueryDenomsResponse } as QueryDenomsResponse;
    message.denoms = [];
    if (object.denoms !== undefined && object.denoms !== null) {
      for (const e of object.denoms) {
        message.denoms.push(Denom.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryNFTRequest: object = { denomId: "", id: "" };

export const QueryNFTRequest = {
  encode(
    message: QueryNFTRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryNFTRequest } as QueryNFTRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomId = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryNFTRequest {
    const message = { ...baseQueryNFTRequest } as QueryNFTRequest;
    if (object.denomId !== undefined && object.denomId !== null) {
      message.denomId = String(object.denomId);
    } else {
      message.denomId = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    return message;
  },

  toJSON(message: QueryNFTRequest): unknown {
    const obj: any = {};
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryNFTRequest>): QueryNFTRequest {
    const message = { ...baseQueryNFTRequest } as QueryNFTRequest;
    if (object.denomId !== undefined && object.denomId !== null) {
      message.denomId = object.denomId;
    } else {
      message.denomId = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    return message;
  },
};

const baseQueryNFTResponse: object = {};

export const QueryNFTResponse = {
  encode(
    message: QueryNFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.nft !== undefined) {
      NFT.encode(message.nft, writer.uint32(10).fork()).ldelim();
    }
    if (message.denom !== undefined) {
      Denom.encode(message.denom, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryNFTResponse } as QueryNFTResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nft = NFT.decode(reader, reader.uint32());
          break;
        case 2:
          message.denom = Denom.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryNFTResponse {
    const message = { ...baseQueryNFTResponse } as QueryNFTResponse;
    if (object.nft !== undefined && object.nft !== null) {
      message.nft = NFT.fromJSON(object.nft);
    } else {
      message.nft = undefined;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = Denom.fromJSON(object.denom);
    } else {
      message.denom = undefined;
    }
    return message;
  },

  toJSON(message: QueryNFTResponse): unknown {
    const obj: any = {};
    message.nft !== undefined &&
      (obj.nft = message.nft ? NFT.toJSON(message.nft) : undefined);
    message.denom !== undefined &&
      (obj.denom = message.denom ? Denom.toJSON(message.denom) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryNFTResponse>): QueryNFTResponse {
    const message = { ...baseQueryNFTResponse } as QueryNFTResponse;
    if (object.nft !== undefined && object.nft !== null) {
      message.nft = NFT.fromPartial(object.nft);
    } else {
      message.nft = undefined;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = Denom.fromPartial(object.denom);
    } else {
      message.denom = undefined;
    }
    return message;
  },
};

const baseQueryMarketPlaceNFTRequest: object = { id: "", denomId: "" };

export const QueryMarketPlaceNFTRequest = {
  encode(
    message: QueryMarketPlaceNFTRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.denomId !== "") {
      writer.uint32(18).string(message.denomId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryMarketPlaceNFTRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryMarketPlaceNFTRequest,
    } as QueryMarketPlaceNFTRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.denomId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMarketPlaceNFTRequest {
    const message = {
      ...baseQueryMarketPlaceNFTRequest,
    } as QueryMarketPlaceNFTRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.denomId !== undefined && object.denomId !== null) {
      message.denomId = String(object.denomId);
    } else {
      message.denomId = "";
    }
    return message;
  },

  toJSON(message: QueryMarketPlaceNFTRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.denomId !== undefined && (obj.denomId = message.denomId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryMarketPlaceNFTRequest>
  ): QueryMarketPlaceNFTRequest {
    const message = {
      ...baseQueryMarketPlaceNFTRequest,
    } as QueryMarketPlaceNFTRequest;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.denomId !== undefined && object.denomId !== null) {
      message.denomId = object.denomId;
    } else {
      message.denomId = "";
    }
    return message;
  },
};

const baseQueryMarketPlaceNFTResponse: object = {};

export const QueryMarketPlaceNFTResponse = {
  encode(
    message: QueryMarketPlaceNFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.marketPlace !== undefined) {
      MarketPlace.encode(
        message.marketPlace,
        writer.uint32(10).fork()
      ).ldelim();
    }
    if (message.nft !== undefined) {
      NFT.encode(message.nft, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryMarketPlaceNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryMarketPlaceNFTResponse,
    } as QueryMarketPlaceNFTResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketPlace = MarketPlace.decode(reader, reader.uint32());
          break;
        case 2:
          message.nft = NFT.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMarketPlaceNFTResponse {
    const message = {
      ...baseQueryMarketPlaceNFTResponse,
    } as QueryMarketPlaceNFTResponse;
    if (object.marketPlace !== undefined && object.marketPlace !== null) {
      message.marketPlace = MarketPlace.fromJSON(object.marketPlace);
    } else {
      message.marketPlace = undefined;
    }
    if (object.nft !== undefined && object.nft !== null) {
      message.nft = NFT.fromJSON(object.nft);
    } else {
      message.nft = undefined;
    }
    return message;
  },

  toJSON(message: QueryMarketPlaceNFTResponse): unknown {
    const obj: any = {};
    message.marketPlace !== undefined &&
      (obj.marketPlace = message.marketPlace
        ? MarketPlace.toJSON(message.marketPlace)
        : undefined);
    message.nft !== undefined &&
      (obj.nft = message.nft ? NFT.toJSON(message.nft) : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryMarketPlaceNFTResponse>
  ): QueryMarketPlaceNFTResponse {
    const message = {
      ...baseQueryMarketPlaceNFTResponse,
    } as QueryMarketPlaceNFTResponse;
    if (object.marketPlace !== undefined && object.marketPlace !== null) {
      message.marketPlace = MarketPlace.fromPartial(object.marketPlace);
    } else {
      message.marketPlace = undefined;
    }
    if (object.nft !== undefined && object.nft !== null) {
      message.nft = NFT.fromPartial(object.nft);
    } else {
      message.nft = undefined;
    }
    return message;
  },
};

const baseQueryMarketPlaceRequest: object = {};

export const QueryMarketPlaceRequest = {
  encode(
    message: QueryMarketPlaceRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryMarketPlaceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryMarketPlaceRequest,
    } as QueryMarketPlaceRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMarketPlaceRequest {
    const message = {
      ...baseQueryMarketPlaceRequest,
    } as QueryMarketPlaceRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryMarketPlaceRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageRequest.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryMarketPlaceRequest>
  ): QueryMarketPlaceRequest {
    const message = {
      ...baseQueryMarketPlaceRequest,
    } as QueryMarketPlaceRequest;
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryMarketPlaceResponse: object = {};

export const QueryMarketPlaceResponse = {
  encode(
    message: QueryMarketPlaceResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.marketPlace) {
      MarketPlace.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(
        message.pagination,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryMarketPlaceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryMarketPlaceResponse,
    } as QueryMarketPlaceResponse;
    message.marketPlace = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.marketPlace.push(MarketPlace.decode(reader, reader.uint32()));
          break;
        case 2:
          message.pagination = PageResponse.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMarketPlaceResponse {
    const message = {
      ...baseQueryMarketPlaceResponse,
    } as QueryMarketPlaceResponse;
    message.marketPlace = [];
    if (object.marketPlace !== undefined && object.marketPlace !== null) {
      for (const e of object.marketPlace) {
        message.marketPlace.push(MarketPlace.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },

  toJSON(message: QueryMarketPlaceResponse): unknown {
    const obj: any = {};
    if (message.marketPlace) {
      obj.marketPlace = message.marketPlace.map((e) =>
        e ? MarketPlace.toJSON(e) : undefined
      );
    } else {
      obj.marketPlace = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination
        ? PageResponse.toJSON(message.pagination)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryMarketPlaceResponse>
  ): QueryMarketPlaceResponse {
    const message = {
      ...baseQueryMarketPlaceResponse,
    } as QueryMarketPlaceResponse;
    message.marketPlace = [];
    if (object.marketPlace !== undefined && object.marketPlace !== null) {
      for (const e of object.marketPlace) {
        message.marketPlace.push(MarketPlace.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};

const baseQueryOwnerNFTsRequest: object = { owner: "" };

export const QueryOwnerNFTsRequest = {
  encode(
    message: QueryOwnerNFTsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryOwnerNFTsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryOwnerNFTsRequest } as QueryOwnerNFTsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOwnerNFTsRequest {
    const message = { ...baseQueryOwnerNFTsRequest } as QueryOwnerNFTsRequest;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    return message;
  },

  toJSON(message: QueryOwnerNFTsRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryOwnerNFTsRequest>
  ): QueryOwnerNFTsRequest {
    const message = { ...baseQueryOwnerNFTsRequest } as QueryOwnerNFTsRequest;
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    return message;
  },
};

const baseQueryOwnerNFTsResponse: object = { owner: "" };

export const QueryOwnerNFTsResponse = {
  encode(
    message: QueryOwnerNFTsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    for (const v of message.collections) {
      OwnerNFTCollection.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryOwnerNFTsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryOwnerNFTsResponse } as QueryOwnerNFTsResponse;
    message.collections = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.collections.push(
            OwnerNFTCollection.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOwnerNFTsResponse {
    const message = { ...baseQueryOwnerNFTsResponse } as QueryOwnerNFTsResponse;
    message.collections = [];
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.collections !== undefined && object.collections !== null) {
      for (const e of object.collections) {
        message.collections.push(OwnerNFTCollection.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryOwnerNFTsResponse): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    if (message.collections) {
      obj.collections = message.collections.map((e) =>
        e ? OwnerNFTCollection.toJSON(e) : undefined
      );
    } else {
      obj.collections = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryOwnerNFTsResponse>
  ): QueryOwnerNFTsResponse {
    const message = { ...baseQueryOwnerNFTsResponse } as QueryOwnerNFTsResponse;
    message.collections = [];
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.collections !== undefined && object.collections !== null) {
      for (const e of object.collections) {
        message.collections.push(OwnerNFTCollection.fromPartial(e));
      }
    }
    return message;
  },
};

const baseOwnerNFTCollection: object = {};

export const OwnerNFTCollection = {
  encode(
    message: OwnerNFTCollection,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denom !== undefined) {
      Denom.encode(message.denom, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.nfts) {
      NFT.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): OwnerNFTCollection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseOwnerNFTCollection } as OwnerNFTCollection;
    message.nfts = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = Denom.decode(reader, reader.uint32());
          break;
        case 2:
          message.nfts.push(NFT.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): OwnerNFTCollection {
    const message = { ...baseOwnerNFTCollection } as OwnerNFTCollection;
    message.nfts = [];
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = Denom.fromJSON(object.denom);
    } else {
      message.denom = undefined;
    }
    if (object.nfts !== undefined && object.nfts !== null) {
      for (const e of object.nfts) {
        message.nfts.push(NFT.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: OwnerNFTCollection): unknown {
    const obj: any = {};
    message.denom !== undefined &&
      (obj.denom = message.denom ? Denom.toJSON(message.denom) : undefined);
    if (message.nfts) {
      obj.nfts = message.nfts.map((e) => (e ? NFT.toJSON(e) : undefined));
    } else {
      obj.nfts = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<OwnerNFTCollection>): OwnerNFTCollection {
    const message = { ...baseOwnerNFTCollection } as OwnerNFTCollection;
    message.nfts = [];
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = Denom.fromPartial(object.denom);
    } else {
      message.denom = undefined;
    }
    if (object.nfts !== undefined && object.nfts !== null) {
      for (const e of object.nfts) {
        message.nfts.push(NFT.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryCommunityRequest: object = { communityId: "" };

export const QueryCommunityRequest = {
  encode(
    message: QueryCommunityRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.communityId !== "") {
      writer.uint32(10).string(message.communityId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCommunityRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryCommunityRequest } as QueryCommunityRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.communityId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCommunityRequest {
    const message = { ...baseQueryCommunityRequest } as QueryCommunityRequest;
    if (object.communityId !== undefined && object.communityId !== null) {
      message.communityId = String(object.communityId);
    } else {
      message.communityId = "";
    }
    return message;
  },

  toJSON(message: QueryCommunityRequest): unknown {
    const obj: any = {};
    message.communityId !== undefined &&
      (obj.communityId = message.communityId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCommunityRequest>
  ): QueryCommunityRequest {
    const message = { ...baseQueryCommunityRequest } as QueryCommunityRequest;
    if (object.communityId !== undefined && object.communityId !== null) {
      message.communityId = object.communityId;
    } else {
      message.communityId = "";
    }
    return message;
  },
};

const baseQueryCommunityResponse: object = {};

export const QueryCommunityResponse = {
  encode(
    message: QueryCommunityResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.community !== undefined) {
      Community.encode(message.community, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCommunityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryCommunityResponse } as QueryCommunityResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.community = Community.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCommunityResponse {
    const message = { ...baseQueryCommunityResponse } as QueryCommunityResponse;
    if (object.community !== undefined && object.community !== null) {
      message.community = Community.fromJSON(object.community);
    } else {
      message.community = undefined;
    }
    return message;
  },

  toJSON(message: QueryCommunityResponse): unknown {
    const obj: any = {};
    message.community !== undefined &&
      (obj.community = message.community
        ? Community.toJSON(message.community)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCommunityResponse>
  ): QueryCommunityResponse {
    const message = { ...baseQueryCommunityResponse } as QueryCommunityResponse;
    if (object.community !== undefined && object.community !== null) {
      message.community = Community.fromPartial(object.community);
    } else {
      message.community = undefined;
    }
    return message;
  },
};

const baseQueryCommunitiesRequest: object = {};

export const QueryCommunitiesRequest = {
  encode(
    _: QueryCommunitiesRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCommunitiesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCommunitiesRequest,
    } as QueryCommunitiesRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryCommunitiesRequest {
    const message = {
      ...baseQueryCommunitiesRequest,
    } as QueryCommunitiesRequest;
    return message;
  },

  toJSON(_: QueryCommunitiesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryCommunitiesRequest>
  ): QueryCommunitiesRequest {
    const message = {
      ...baseQueryCommunitiesRequest,
    } as QueryCommunitiesRequest;
    return message;
  },
};

const baseQueryCommunitiesResponse: object = {};

export const QueryCommunitiesResponse = {
  encode(
    message: QueryCommunitiesResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.communities) {
      Community.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCommunitiesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCommunitiesResponse,
    } as QueryCommunitiesResponse;
    message.communities = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.communities.push(Community.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCommunitiesResponse {
    const message = {
      ...baseQueryCommunitiesResponse,
    } as QueryCommunitiesResponse;
    message.communities = [];
    if (object.communities !== undefined && object.communities !== null) {
      for (const e of object.communities) {
        message.communities.push(Community.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryCommunitiesResponse): unknown {
    const obj: any = {};
    if (message.communities) {
      obj.communities = message.communities.map((e) =>
        e ? Community.toJSON(e) : undefined
      );
    } else {
      obj.communities = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCommunitiesResponse>
  ): QueryCommunitiesResponse {
    const message = {
      ...baseQueryCommunitiesResponse,
    } as QueryCommunitiesResponse;
    message.communities = [];
    if (object.communities !== undefined && object.communities !== null) {
      for (const e of object.communities) {
        message.communities.push(Community.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryCommunityMembersRequest: object = { communityId: "" };

export const QueryCommunityMembersRequest = {
  encode(
    message: QueryCommunityMembersRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.communityId !== "") {
      writer.uint32(10).string(message.communityId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCommunityMembersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCommunityMembersRequest,
    } as QueryCommunityMembersRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.communityId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCommunityMembersRequest {
    const message = {
      ...baseQueryCommunityMembersRequest,
    } as QueryCommunityMembersRequest;
    if (object.communityId !== undefined && object.communityId !== null) {
      message.communityId = String(object.communityId);
    } else {
      message.communityId = "";
    }
    return message;
  },

  toJSON(message: QueryCommunityMembersRequest): unknown {
    const obj: any = {};
    message.communityId !== undefined &&
      (obj.communityId = message.communityId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCommunityMembersRequest>
  ): QueryCommunityMembersRequest {
    const message = {
      ...baseQueryCommunityMembersRequest,
    } as QueryCommunityMembersRequest;
    if (object.communityId !== undefined && object.communityId !== null) {
      message.communityId = object.communityId;
    } else {
      message.communityId = "";
    }
    return message;
  },
};

const baseQueryCommunityMembersResponse: object = {};

export const QueryCommunityMembersResponse = {
  encode(
    message: QueryCommunityMembersResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.members !== undefined) {
      CommunityMembers.encode(
        message.members,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCommunityMembersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCommunityMembersResponse,
    } as QueryCommunityMembersResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.members = CommunityMembers.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCommunityMembersResponse {
    const message = {
      ...baseQueryCommunityMembersResponse,
    } as QueryCommunityMembersResponse;
    if (object.members !== undefined && object.members !== null) {
      message.members = CommunityMembers.fromJSON(object.members);
    } else {
      message.members = undefined;
    }
    return message;
  },

  toJSON(message: QueryCommunityMembersResponse): unknown {
    const obj: any = {};
    message.members !== undefined &&
      (obj.members = message.members
        ? CommunityMembers.toJSON(message.members)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCommunityMembersResponse>
  ): QueryCommunityMembersResponse {
    const message = {
      ...baseQueryCommunityMembersResponse,
    } as QueryCommunityMembersResponse;
    if (object.members !== undefined && object.members !== null) {
      message.members = CommunityMembers.fromPartial(object.members);
    } else {
      message.members = undefined;
    }
    return message;
  },
};

const baseQueryCollectionRequest: object = { denomId: "" };

export const QueryCollectionRequest = {
  encode(
    message: QueryCollectionRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCollectionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryCollectionRequest } as QueryCollectionRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCollectionRequest {
    const message = { ...baseQueryCollectionRequest } as QueryCollectionRequest;
    if (object.denomId !== undefined && object.denomId !== null) {
      message.denomId = String(object.denomId);
    } else {
      message.denomId = "";
    }
    return message;
  },

  toJSON(message: QueryCollectionRequest): unknown {
    const obj: any = {};
    message.denomId !== undefined && (obj.denomId = message.denomId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCollectionRequest>
  ): QueryCollectionRequest {
    const message = { ...baseQueryCollectionRequest } as QueryCollectionRequest;
    if (object.denomId !== undefined && object.denomId !== null) {
      message.denomId = object.denomId;
    } else {
      message.denomId = "";
    }
    return message;
  },
};

const baseQueryCollectionResponse: object = {};

export const QueryCollectionResponse = {
  encode(
    message: QueryCollectionResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.collection !== undefined) {
      Collection.encode(message.collection, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCollectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCollectionResponse,
    } as QueryCollectionResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collection = Collection.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCollectionResponse {
    const message = {
      ...baseQueryCollectionResponse,
    } as QueryCollectionResponse;
    if (object.collection !== undefined && object.collection !== null) {
      message.collection = Collection.fromJSON(object.collection);
    } else {
      message.collection = undefined;
    }
    return message;
  },

  toJSON(message: QueryCollectionResponse): unknown {
    const obj: any = {};
    message.collection !== undefined &&
      (obj.collection = message.collection
        ? Collection.toJSON(message.collection)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCollectionResponse>
  ): QueryCollectionResponse {
    const message = {
      ...baseQueryCollectionResponse,
    } as QueryCollectionResponse;
    if (object.collection !== undefined && object.collection !== null) {
      message.collection = Collection.fromPartial(object.collection);
    } else {
      message.collection = undefined;
    }
    return message;
  },
};

const baseQueryDenomIDsByOwnerRequest: object = { address: "" };

export const QueryDenomIDsByOwnerRequest = {
  encode(
    message: QueryDenomIDsByOwnerRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDenomIDsByOwnerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryDenomIDsByOwnerRequest,
    } as QueryDenomIDsByOwnerRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomIDsByOwnerRequest {
    const message = {
      ...baseQueryDenomIDsByOwnerRequest,
    } as QueryDenomIDsByOwnerRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = String(object.address);
    } else {
      message.address = "";
    }
    return message;
  },

  toJSON(message: QueryDenomIDsByOwnerRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryDenomIDsByOwnerRequest>
  ): QueryDenomIDsByOwnerRequest {
    const message = {
      ...baseQueryDenomIDsByOwnerRequest,
    } as QueryDenomIDsByOwnerRequest;
    if (object.address !== undefined && object.address !== null) {
      message.address = object.address;
    } else {
      message.address = "";
    }
    return message;
  },
};

const baseQueryDenomIDsByOwnerResponse: object = { ids: "" };

export const QueryDenomIDsByOwnerResponse = {
  encode(
    message: QueryDenomIDsByOwnerResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.ids) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryDenomIDsByOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryDenomIDsByOwnerResponse,
    } as QueryDenomIDsByOwnerResponse;
    message.ids = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.ids.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomIDsByOwnerResponse {
    const message = {
      ...baseQueryDenomIDsByOwnerResponse,
    } as QueryDenomIDsByOwnerResponse;
    message.ids = [];
    if (object.ids !== undefined && object.ids !== null) {
      for (const e of object.ids) {
        message.ids.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: QueryDenomIDsByOwnerResponse): unknown {
    const obj: any = {};
    if (message.ids) {
      obj.ids = message.ids.map((e) => e);
    } else {
      obj.ids = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryDenomIDsByOwnerResponse>
  ): QueryDenomIDsByOwnerResponse {
    const message = {
      ...baseQueryDenomIDsByOwnerResponse,
    } as QueryDenomIDsByOwnerResponse;
    message.ids = [];
    if (object.ids !== undefined && object.ids !== null) {
      for (const e of object.ids) {
        message.ids.push(e);
      }
    }
    return message;
  },
};

const baseQueryAllNFTsRequest: object = {};

export const QueryAllNFTsRequest = {
  encode(
    _: QueryAllNFTsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllNFTsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllNFTsRequest } as QueryAllNFTsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): QueryAllNFTsRequest {
    const message = { ...baseQueryAllNFTsRequest } as QueryAllNFTsRequest;
    return message;
  },

  toJSON(_: QueryAllNFTsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryAllNFTsRequest>): QueryAllNFTsRequest {
    const message = { ...baseQueryAllNFTsRequest } as QueryAllNFTsRequest;
    return message;
  },
};

const baseDenomInfo: object = { denomId: "", name: "" };

export const DenomInfo = {
  encode(
    message: DenomInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DenomInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseDenomInfo } as DenomInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DenomInfo {
    const message = { ...baseDenomInfo } as DenomInfo;
    if (object.denomId !== undefined && object.denomId !== null) {
      message.denomId = String(object.denomId);
    } else {
      message.denomId = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: DenomInfo): unknown {
    const obj: any = {};
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<DenomInfo>): DenomInfo {
    const message = { ...baseDenomInfo } as DenomInfo;
    if (object.denomId !== undefined && object.denomId !== null) {
      message.denomId = object.denomId;
    } else {
      message.denomId = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseCommunityInfo: object = { communityId: "", name: "" };

export const CommunityInfo = {
  encode(
    message: CommunityInfo,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.communityId !== "") {
      writer.uint32(10).string(message.communityId);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommunityInfo {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCommunityInfo } as CommunityInfo;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.communityId = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommunityInfo {
    const message = { ...baseCommunityInfo } as CommunityInfo;
    if (object.communityId !== undefined && object.communityId !== null) {
      message.communityId = String(object.communityId);
    } else {
      message.communityId = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    return message;
  },

  toJSON(message: CommunityInfo): unknown {
    const obj: any = {};
    message.communityId !== undefined &&
      (obj.communityId = message.communityId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial(object: DeepPartial<CommunityInfo>): CommunityInfo {
    const message = { ...baseCommunityInfo } as CommunityInfo;
    if (object.communityId !== undefined && object.communityId !== null) {
      message.communityId = object.communityId;
    } else {
      message.communityId = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    return message;
  },
};

const baseALLNFT: object = {};

export const ALLNFT = {
  encode(
    message: ALLNFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.nft !== undefined) {
      NFT.encode(message.nft, writer.uint32(10).fork()).ldelim();
    }
    if (message.denomInfo !== undefined) {
      DenomInfo.encode(message.denomInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.communityInfo !== undefined) {
      CommunityInfo.encode(
        message.communityInfo,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ALLNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseALLNFT } as ALLNFT;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nft = NFT.decode(reader, reader.uint32());
          break;
        case 2:
          message.denomInfo = DenomInfo.decode(reader, reader.uint32());
          break;
        case 3:
          message.communityInfo = CommunityInfo.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ALLNFT {
    const message = { ...baseALLNFT } as ALLNFT;
    if (object.nft !== undefined && object.nft !== null) {
      message.nft = NFT.fromJSON(object.nft);
    } else {
      message.nft = undefined;
    }
    if (object.denomInfo !== undefined && object.denomInfo !== null) {
      message.denomInfo = DenomInfo.fromJSON(object.denomInfo);
    } else {
      message.denomInfo = undefined;
    }
    if (object.communityInfo !== undefined && object.communityInfo !== null) {
      message.communityInfo = CommunityInfo.fromJSON(object.communityInfo);
    } else {
      message.communityInfo = undefined;
    }
    return message;
  },

  toJSON(message: ALLNFT): unknown {
    const obj: any = {};
    message.nft !== undefined &&
      (obj.nft = message.nft ? NFT.toJSON(message.nft) : undefined);
    message.denomInfo !== undefined &&
      (obj.denomInfo = message.denomInfo
        ? DenomInfo.toJSON(message.denomInfo)
        : undefined);
    message.communityInfo !== undefined &&
      (obj.communityInfo = message.communityInfo
        ? CommunityInfo.toJSON(message.communityInfo)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<ALLNFT>): ALLNFT {
    const message = { ...baseALLNFT } as ALLNFT;
    if (object.nft !== undefined && object.nft !== null) {
      message.nft = NFT.fromPartial(object.nft);
    } else {
      message.nft = undefined;
    }
    if (object.denomInfo !== undefined && object.denomInfo !== null) {
      message.denomInfo = DenomInfo.fromPartial(object.denomInfo);
    } else {
      message.denomInfo = undefined;
    }
    if (object.communityInfo !== undefined && object.communityInfo !== null) {
      message.communityInfo = CommunityInfo.fromPartial(object.communityInfo);
    } else {
      message.communityInfo = undefined;
    }
    return message;
  },
};

const baseQueryAllNFTsResponse: object = {};

export const QueryAllNFTsResponse = {
  encode(
    message: QueryAllNFTsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    for (const v of message.all) {
      ALLNFT.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryAllNFTsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryAllNFTsResponse } as QueryAllNFTsResponse;
    message.all = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.all.push(ALLNFT.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllNFTsResponse {
    const message = { ...baseQueryAllNFTsResponse } as QueryAllNFTsResponse;
    message.all = [];
    if (object.all !== undefined && object.all !== null) {
      for (const e of object.all) {
        message.all.push(ALLNFT.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryAllNFTsResponse): unknown {
    const obj: any = {};
    if (message.all) {
      obj.all = message.all.map((e) => (e ? ALLNFT.toJSON(e) : undefined));
    } else {
      obj.all = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueryAllNFTsResponse>): QueryAllNFTsResponse {
    const message = { ...baseQueryAllNFTsResponse } as QueryAllNFTsResponse;
    message.all = [];
    if (object.all !== undefined && object.all !== null) {
      for (const e of object.all) {
        message.all.push(ALLNFT.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryCommunityCollectionsRequest: object = { communityId: "" };

export const QueryCommunityCollectionsRequest = {
  encode(
    message: QueryCommunityCollectionsRequest,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.communityId !== "") {
      writer.uint32(10).string(message.communityId);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCommunityCollectionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCommunityCollectionsRequest,
    } as QueryCommunityCollectionsRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.communityId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCommunityCollectionsRequest {
    const message = {
      ...baseQueryCommunityCollectionsRequest,
    } as QueryCommunityCollectionsRequest;
    if (object.communityId !== undefined && object.communityId !== null) {
      message.communityId = String(object.communityId);
    } else {
      message.communityId = "";
    }
    return message;
  },

  toJSON(message: QueryCommunityCollectionsRequest): unknown {
    const obj: any = {};
    message.communityId !== undefined &&
      (obj.communityId = message.communityId);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCommunityCollectionsRequest>
  ): QueryCommunityCollectionsRequest {
    const message = {
      ...baseQueryCommunityCollectionsRequest,
    } as QueryCommunityCollectionsRequest;
    if (object.communityId !== undefined && object.communityId !== null) {
      message.communityId = object.communityId;
    } else {
      message.communityId = "";
    }
    return message;
  },
};

const baseQueryCommunityCollectionsResponse: object = {};

export const QueryCommunityCollectionsResponse = {
  encode(
    message: QueryCommunityCollectionsResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.community !== undefined) {
      Community.encode(message.community, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.denoms) {
      Denom.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): QueryCommunityCollectionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCommunityCollectionsResponse,
    } as QueryCommunityCollectionsResponse;
    message.denoms = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.community = Community.decode(reader, reader.uint32());
          break;
        case 2:
          message.denoms.push(Denom.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCommunityCollectionsResponse {
    const message = {
      ...baseQueryCommunityCollectionsResponse,
    } as QueryCommunityCollectionsResponse;
    message.denoms = [];
    if (object.community !== undefined && object.community !== null) {
      message.community = Community.fromJSON(object.community);
    } else {
      message.community = undefined;
    }
    if (object.denoms !== undefined && object.denoms !== null) {
      for (const e of object.denoms) {
        message.denoms.push(Denom.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryCommunityCollectionsResponse): unknown {
    const obj: any = {};
    message.community !== undefined &&
      (obj.community = message.community
        ? Community.toJSON(message.community)
        : undefined);
    if (message.denoms) {
      obj.denoms = message.denoms.map((e) => (e ? Denom.toJSON(e) : undefined));
    } else {
      obj.denoms = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCommunityCollectionsResponse>
  ): QueryCommunityCollectionsResponse {
    const message = {
      ...baseQueryCommunityCollectionsResponse,
    } as QueryCommunityCollectionsResponse;
    message.denoms = [];
    if (object.community !== undefined && object.community !== null) {
      message.community = Community.fromPartial(object.community);
    } else {
      message.community = undefined;
    }
    if (object.denoms !== undefined && object.denoms !== null) {
      for (const e of object.denoms) {
        message.denoms.push(Denom.fromPartial(e));
      }
    }
    return message;
  },
};

export interface Query {
  Denom(request: QueryDenomRequest): Promise<QueryDenomResponse>;
  Denoms(request: QueryDenomsRequest): Promise<QueryDenomsResponse>;
  DenomIDsByOwner(
    request: QueryDenomIDsByOwnerRequest
  ): Promise<QueryDenomIDsByOwnerResponse>;
  Collection(request: QueryCollectionRequest): Promise<QueryCollectionResponse>;
  NFT(request: QueryNFTRequest): Promise<QueryNFTResponse>;
  MarketPlaceNFT(
    request: QueryMarketPlaceNFTRequest
  ): Promise<QueryMarketPlaceNFTResponse>;
  MarketPlace(
    request: QueryMarketPlaceRequest
  ): Promise<QueryMarketPlaceResponse>;
  OwnerNFTs(request: QueryOwnerNFTsRequest): Promise<QueryOwnerNFTsResponse>;
  AllNFTs(request: QueryAllNFTsRequest): Promise<QueryAllNFTsResponse>;
  Communities(
    request: QueryCommunitiesRequest
  ): Promise<QueryCommunitiesResponse>;
  Community(request: QueryCommunityRequest): Promise<QueryCommunityResponse>;
  CommunityCollections(
    request: QueryCommunityCollectionsRequest
  ): Promise<QueryCommunityCollectionsResponse>;
  CommunityMembers(
    request: QueryCommunityMembersRequest
  ): Promise<QueryCommunityMembersResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.Denom = this.Denom.bind(this);
    this.Denoms = this.Denoms.bind(this);
    this.DenomIDsByOwner = this.DenomIDsByOwner.bind(this);
    this.Collection = this.Collection.bind(this);
    this.NFT = this.NFT.bind(this);
    this.MarketPlaceNFT = this.MarketPlaceNFT.bind(this);
    this.MarketPlace = this.MarketPlace.bind(this);
    this.OwnerNFTs = this.OwnerNFTs.bind(this);
    this.AllNFTs = this.AllNFTs.bind(this);
    this.Communities = this.Communities.bind(this);
    this.Community = this.Community.bind(this);
    this.CommunityCollections = this.CommunityCollections.bind(this);
    this.CommunityMembers = this.CommunityMembers.bind(this);
  }
  Denom(request: QueryDenomRequest): Promise<QueryDenomResponse> {
    const data = QueryDenomRequest.encode(request).finish();
    const promise = this.rpc.request("nft.v1beta1.Query", "Denom", data);
    return promise.then((data) =>
      QueryDenomResponse.decode(new _m0.Reader(data))
    );
  }

  Denoms(request: QueryDenomsRequest): Promise<QueryDenomsResponse> {
    const data = QueryDenomsRequest.encode(request).finish();
    const promise = this.rpc.request("nft.v1beta1.Query", "Denoms", data);
    return promise.then((data) =>
      QueryDenomsResponse.decode(new _m0.Reader(data))
    );
  }

  DenomIDsByOwner(
    request: QueryDenomIDsByOwnerRequest
  ): Promise<QueryDenomIDsByOwnerResponse> {
    const data = QueryDenomIDsByOwnerRequest.encode(request).finish();
    const promise = this.rpc.request(
      "nft.v1beta1.Query",
      "DenomIDsByOwner",
      data
    );
    return promise.then((data) =>
      QueryDenomIDsByOwnerResponse.decode(new _m0.Reader(data))
    );
  }

  Collection(
    request: QueryCollectionRequest
  ): Promise<QueryCollectionResponse> {
    const data = QueryCollectionRequest.encode(request).finish();
    const promise = this.rpc.request("nft.v1beta1.Query", "Collection", data);
    return promise.then((data) =>
      QueryCollectionResponse.decode(new _m0.Reader(data))
    );
  }

  NFT(request: QueryNFTRequest): Promise<QueryNFTResponse> {
    const data = QueryNFTRequest.encode(request).finish();
    const promise = this.rpc.request("nft.v1beta1.Query", "NFT", data);
    return promise.then((data) =>
      QueryNFTResponse.decode(new _m0.Reader(data))
    );
  }

  MarketPlaceNFT(
    request: QueryMarketPlaceNFTRequest
  ): Promise<QueryMarketPlaceNFTResponse> {
    const data = QueryMarketPlaceNFTRequest.encode(request).finish();
    const promise = this.rpc.request(
      "nft.v1beta1.Query",
      "MarketPlaceNFT",
      data
    );
    return promise.then((data) =>
      QueryMarketPlaceNFTResponse.decode(new _m0.Reader(data))
    );
  }

  MarketPlace(
    request: QueryMarketPlaceRequest
  ): Promise<QueryMarketPlaceResponse> {
    const data = QueryMarketPlaceRequest.encode(request).finish();
    const promise = this.rpc.request("nft.v1beta1.Query", "MarketPlace", data);
    return promise.then((data) =>
      QueryMarketPlaceResponse.decode(new _m0.Reader(data))
    );
  }

  OwnerNFTs(request: QueryOwnerNFTsRequest): Promise<QueryOwnerNFTsResponse> {
    const data = QueryOwnerNFTsRequest.encode(request).finish();
    const promise = this.rpc.request("nft.v1beta1.Query", "OwnerNFTs", data);
    return promise.then((data) =>
      QueryOwnerNFTsResponse.decode(new _m0.Reader(data))
    );
  }

  AllNFTs(request: QueryAllNFTsRequest): Promise<QueryAllNFTsResponse> {
    const data = QueryAllNFTsRequest.encode(request).finish();
    const promise = this.rpc.request("nft.v1beta1.Query", "AllNFTs", data);
    return promise.then((data) =>
      QueryAllNFTsResponse.decode(new _m0.Reader(data))
    );
  }

  Communities(
    request: QueryCommunitiesRequest
  ): Promise<QueryCommunitiesResponse> {
    const data = QueryCommunitiesRequest.encode(request).finish();
    const promise = this.rpc.request("nft.v1beta1.Query", "Communities", data);
    return promise.then((data) =>
      QueryCommunitiesResponse.decode(new _m0.Reader(data))
    );
  }

  Community(request: QueryCommunityRequest): Promise<QueryCommunityResponse> {
    const data = QueryCommunityRequest.encode(request).finish();
    const promise = this.rpc.request("nft.v1beta1.Query", "Community", data);
    return promise.then((data) =>
      QueryCommunityResponse.decode(new _m0.Reader(data))
    );
  }

  CommunityCollections(
    request: QueryCommunityCollectionsRequest
  ): Promise<QueryCommunityCollectionsResponse> {
    const data = QueryCommunityCollectionsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "nft.v1beta1.Query",
      "CommunityCollections",
      data
    );
    return promise.then((data) =>
      QueryCommunityCollectionsResponse.decode(new _m0.Reader(data))
    );
  }

  CommunityMembers(
    request: QueryCommunityMembersRequest
  ): Promise<QueryCommunityMembersResponse> {
    const data = QueryCommunityMembersRequest.encode(request).finish();
    const promise = this.rpc.request(
      "nft.v1beta1.Query",
      "CommunityMembers",
      data
    );
    return promise.then((data) =>
      QueryCommunityMembersResponse.decode(new _m0.Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined
  | Long;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}
