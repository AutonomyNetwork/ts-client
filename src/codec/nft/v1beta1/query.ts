/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { PageRequest, PageResponse } from "../../cosmos/base/query/v1beta1/pagination";
import { Community, CommunityMembers } from "./community";
import { ListedType, listedTypeFromJSON, listedTypeToJSON, MarketPlace } from "./market_place";
import { Collection, Denom, NFT } from "./nft";

export const protobufPackage = "nft.v1beta1";

export interface QueryMarketPlaceByTypeRequest {
  listedType: ListedType;
  pagination?: PageRequest;
}

export interface QueryMarketPlaceByTypeResponse {
  marketPlace: MarketPlace[];
  pagination?: PageResponse;
}

export interface QueryCommunitiesByOwnerRequest {
  address: string;
  pagination?: PageRequest;
}

export interface QueryCommunitiesByOwnerResponse {
  communities: Community[];
  pagination?: PageResponse;
}

export interface QueryDenomsByOwnerRequest {
  address: string;
  pagination?: PageRequest;
}

export interface QueryDenomsByOwnerResponse {
  denom: Denom[];
  pagination?: PageResponse;
}

export interface QueryDenomRequest {
  denomId: string;
}

export interface QueryDenomResponse {
  denom?: Denom;
}

export interface QueryDenomsRequest {
}

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
export interface QueryCommunitiesRequest {
}

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

export interface QueryAllNFTsRequest {
}

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

function createBaseQueryMarketPlaceByTypeRequest(): QueryMarketPlaceByTypeRequest {
  return { listedType: 0, pagination: undefined };
}

export const QueryMarketPlaceByTypeRequest = {
  encode(message: QueryMarketPlaceByTypeRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.listedType !== 0) {
      writer.uint32(8).int32(message.listedType);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketPlaceByTypeRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketPlaceByTypeRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.listedType = reader.int32() as any;
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMarketPlaceByTypeRequest {
    return {
      listedType: isSet(object.listedType) ? listedTypeFromJSON(object.listedType) : 0,
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryMarketPlaceByTypeRequest): unknown {
    const obj: any = {};
    message.listedType !== undefined && (obj.listedType = listedTypeToJSON(message.listedType));
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMarketPlaceByTypeRequest>, I>>(
    object: I,
  ): QueryMarketPlaceByTypeRequest {
    const message = createBaseQueryMarketPlaceByTypeRequest();
    message.listedType = object.listedType ?? 0;
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryMarketPlaceByTypeResponse(): QueryMarketPlaceByTypeResponse {
  return { marketPlace: [], pagination: undefined };
}

export const QueryMarketPlaceByTypeResponse = {
  encode(message: QueryMarketPlaceByTypeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.marketPlace) {
      MarketPlace.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketPlaceByTypeResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketPlaceByTypeResponse();
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

  fromJSON(object: any): QueryMarketPlaceByTypeResponse {
    return {
      marketPlace: Array.isArray(object?.marketPlace)
        ? object.marketPlace.map((e: any) => MarketPlace.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryMarketPlaceByTypeResponse): unknown {
    const obj: any = {};
    if (message.marketPlace) {
      obj.marketPlace = message.marketPlace.map((e) => e ? MarketPlace.toJSON(e) : undefined);
    } else {
      obj.marketPlace = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMarketPlaceByTypeResponse>, I>>(
    object: I,
  ): QueryMarketPlaceByTypeResponse {
    const message = createBaseQueryMarketPlaceByTypeResponse();
    message.marketPlace = object.marketPlace?.map((e) => MarketPlace.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryCommunitiesByOwnerRequest(): QueryCommunitiesByOwnerRequest {
  return { address: "", pagination: undefined };
}

export const QueryCommunitiesByOwnerRequest = {
  encode(message: QueryCommunitiesByOwnerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommunitiesByOwnerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommunitiesByOwnerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCommunitiesByOwnerRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryCommunitiesByOwnerRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCommunitiesByOwnerRequest>, I>>(
    object: I,
  ): QueryCommunitiesByOwnerRequest {
    const message = createBaseQueryCommunitiesByOwnerRequest();
    message.address = object.address ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryCommunitiesByOwnerResponse(): QueryCommunitiesByOwnerResponse {
  return { communities: [], pagination: undefined };
}

export const QueryCommunitiesByOwnerResponse = {
  encode(message: QueryCommunitiesByOwnerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.communities) {
      Community.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommunitiesByOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommunitiesByOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.communities.push(Community.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryCommunitiesByOwnerResponse {
    return {
      communities: Array.isArray(object?.communities) ? object.communities.map((e: any) => Community.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryCommunitiesByOwnerResponse): unknown {
    const obj: any = {};
    if (message.communities) {
      obj.communities = message.communities.map((e) => e ? Community.toJSON(e) : undefined);
    } else {
      obj.communities = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCommunitiesByOwnerResponse>, I>>(
    object: I,
  ): QueryCommunitiesByOwnerResponse {
    const message = createBaseQueryCommunitiesByOwnerResponse();
    message.communities = object.communities?.map((e) => Community.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryDenomsByOwnerRequest(): QueryDenomsByOwnerRequest {
  return { address: "", pagination: undefined };
}

export const QueryDenomsByOwnerRequest = {
  encode(message: QueryDenomsByOwnerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsByOwnerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsByOwnerRequest();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.pagination = PageRequest.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryDenomsByOwnerRequest {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryDenomsByOwnerRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenomsByOwnerRequest>, I>>(object: I): QueryDenomsByOwnerRequest {
    const message = createBaseQueryDenomsByOwnerRequest();
    message.address = object.address ?? "";
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryDenomsByOwnerResponse(): QueryDenomsByOwnerResponse {
  return { denom: [], pagination: undefined };
}

export const QueryDenomsByOwnerResponse = {
  encode(message: QueryDenomsByOwnerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.denom) {
      Denom.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsByOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsByOwnerResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom.push(Denom.decode(reader, reader.uint32()));
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

  fromJSON(object: any): QueryDenomsByOwnerResponse {
    return {
      denom: Array.isArray(object?.denom) ? object.denom.map((e: any) => Denom.fromJSON(e)) : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryDenomsByOwnerResponse): unknown {
    const obj: any = {};
    if (message.denom) {
      obj.denom = message.denom.map((e) => e ? Denom.toJSON(e) : undefined);
    } else {
      obj.denom = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenomsByOwnerResponse>, I>>(object: I): QueryDenomsByOwnerResponse {
    const message = createBaseQueryDenomsByOwnerResponse();
    message.denom = object.denom?.map((e) => Denom.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryDenomRequest(): QueryDenomRequest {
  return { denomId: "" };
}

export const QueryDenomRequest = {
  encode(message: QueryDenomRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomRequest();
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
    return { denomId: isSet(object.denomId) ? String(object.denomId) : "" };
  },

  toJSON(message: QueryDenomRequest): unknown {
    const obj: any = {};
    message.denomId !== undefined && (obj.denomId = message.denomId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenomRequest>, I>>(object: I): QueryDenomRequest {
    const message = createBaseQueryDenomRequest();
    message.denomId = object.denomId ?? "";
    return message;
  },
};

function createBaseQueryDenomResponse(): QueryDenomResponse {
  return { denom: undefined };
}

export const QueryDenomResponse = {
  encode(message: QueryDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== undefined) {
      Denom.encode(message.denom, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomResponse();
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
    return { denom: isSet(object.denom) ? Denom.fromJSON(object.denom) : undefined };
  },

  toJSON(message: QueryDenomResponse): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom ? Denom.toJSON(message.denom) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenomResponse>, I>>(object: I): QueryDenomResponse {
    const message = createBaseQueryDenomResponse();
    message.denom = (object.denom !== undefined && object.denom !== null) ? Denom.fromPartial(object.denom) : undefined;
    return message;
  },
};

function createBaseQueryDenomsRequest(): QueryDenomsRequest {
  return {};
}

export const QueryDenomsRequest = {
  encode(_: QueryDenomsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsRequest();
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
    return {};
  },

  toJSON(_: QueryDenomsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenomsRequest>, I>>(_: I): QueryDenomsRequest {
    const message = createBaseQueryDenomsRequest();
    return message;
  },
};

function createBaseQueryDenomsResponse(): QueryDenomsResponse {
  return { denoms: [] };
}

export const QueryDenomsResponse = {
  encode(message: QueryDenomsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.denoms) {
      Denom.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomsResponse();
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
    return { denoms: Array.isArray(object?.denoms) ? object.denoms.map((e: any) => Denom.fromJSON(e)) : [] };
  },

  toJSON(message: QueryDenomsResponse): unknown {
    const obj: any = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map((e) => e ? Denom.toJSON(e) : undefined);
    } else {
      obj.denoms = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenomsResponse>, I>>(object: I): QueryDenomsResponse {
    const message = createBaseQueryDenomsResponse();
    message.denoms = object.denoms?.map((e) => Denom.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryNFTRequest(): QueryNFTRequest {
  return { denomId: "", id: "" };
}

export const QueryNFTRequest = {
  encode(message: QueryNFTRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const message = createBaseQueryNFTRequest();
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
    return {
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: QueryNFTRequest): unknown {
    const obj: any = {};
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryNFTRequest>, I>>(object: I): QueryNFTRequest {
    const message = createBaseQueryNFTRequest();
    message.denomId = object.denomId ?? "";
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseQueryNFTResponse(): QueryNFTResponse {
  return { nft: undefined, denom: undefined };
}

export const QueryNFTResponse = {
  encode(message: QueryNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const message = createBaseQueryNFTResponse();
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
    return {
      nft: isSet(object.nft) ? NFT.fromJSON(object.nft) : undefined,
      denom: isSet(object.denom) ? Denom.fromJSON(object.denom) : undefined,
    };
  },

  toJSON(message: QueryNFTResponse): unknown {
    const obj: any = {};
    message.nft !== undefined && (obj.nft = message.nft ? NFT.toJSON(message.nft) : undefined);
    message.denom !== undefined && (obj.denom = message.denom ? Denom.toJSON(message.denom) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryNFTResponse>, I>>(object: I): QueryNFTResponse {
    const message = createBaseQueryNFTResponse();
    message.nft = (object.nft !== undefined && object.nft !== null) ? NFT.fromPartial(object.nft) : undefined;
    message.denom = (object.denom !== undefined && object.denom !== null) ? Denom.fromPartial(object.denom) : undefined;
    return message;
  },
};

function createBaseQueryMarketPlaceNFTRequest(): QueryMarketPlaceNFTRequest {
  return { id: "", denomId: "" };
}

export const QueryMarketPlaceNFTRequest = {
  encode(message: QueryMarketPlaceNFTRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.denomId !== "") {
      writer.uint32(18).string(message.denomId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketPlaceNFTRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketPlaceNFTRequest();
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
    return {
      id: isSet(object.id) ? String(object.id) : "",
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
    };
  },

  toJSON(message: QueryMarketPlaceNFTRequest): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.denomId !== undefined && (obj.denomId = message.denomId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMarketPlaceNFTRequest>, I>>(object: I): QueryMarketPlaceNFTRequest {
    const message = createBaseQueryMarketPlaceNFTRequest();
    message.id = object.id ?? "";
    message.denomId = object.denomId ?? "";
    return message;
  },
};

function createBaseQueryMarketPlaceNFTResponse(): QueryMarketPlaceNFTResponse {
  return { marketPlace: undefined, nft: undefined };
}

export const QueryMarketPlaceNFTResponse = {
  encode(message: QueryMarketPlaceNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.marketPlace !== undefined) {
      MarketPlace.encode(message.marketPlace, writer.uint32(10).fork()).ldelim();
    }
    if (message.nft !== undefined) {
      NFT.encode(message.nft, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketPlaceNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketPlaceNFTResponse();
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
    return {
      marketPlace: isSet(object.marketPlace) ? MarketPlace.fromJSON(object.marketPlace) : undefined,
      nft: isSet(object.nft) ? NFT.fromJSON(object.nft) : undefined,
    };
  },

  toJSON(message: QueryMarketPlaceNFTResponse): unknown {
    const obj: any = {};
    message.marketPlace !== undefined &&
      (obj.marketPlace = message.marketPlace ? MarketPlace.toJSON(message.marketPlace) : undefined);
    message.nft !== undefined && (obj.nft = message.nft ? NFT.toJSON(message.nft) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMarketPlaceNFTResponse>, I>>(object: I): QueryMarketPlaceNFTResponse {
    const message = createBaseQueryMarketPlaceNFTResponse();
    message.marketPlace = (object.marketPlace !== undefined && object.marketPlace !== null)
      ? MarketPlace.fromPartial(object.marketPlace)
      : undefined;
    message.nft = (object.nft !== undefined && object.nft !== null) ? NFT.fromPartial(object.nft) : undefined;
    return message;
  },
};

function createBaseQueryMarketPlaceRequest(): QueryMarketPlaceRequest {
  return { pagination: undefined };
}

export const QueryMarketPlaceRequest = {
  encode(message: QueryMarketPlaceRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.pagination !== undefined) {
      PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketPlaceRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketPlaceRequest();
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
    return { pagination: isSet(object.pagination) ? PageRequest.fromJSON(object.pagination) : undefined };
  },

  toJSON(message: QueryMarketPlaceRequest): unknown {
    const obj: any = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMarketPlaceRequest>, I>>(object: I): QueryMarketPlaceRequest {
    const message = createBaseQueryMarketPlaceRequest();
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageRequest.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryMarketPlaceResponse(): QueryMarketPlaceResponse {
  return { marketPlace: [], pagination: undefined };
}

export const QueryMarketPlaceResponse = {
  encode(message: QueryMarketPlaceResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.marketPlace) {
      MarketPlace.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryMarketPlaceResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryMarketPlaceResponse();
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
    return {
      marketPlace: Array.isArray(object?.marketPlace)
        ? object.marketPlace.map((e: any) => MarketPlace.fromJSON(e))
        : [],
      pagination: isSet(object.pagination) ? PageResponse.fromJSON(object.pagination) : undefined,
    };
  },

  toJSON(message: QueryMarketPlaceResponse): unknown {
    const obj: any = {};
    if (message.marketPlace) {
      obj.marketPlace = message.marketPlace.map((e) => e ? MarketPlace.toJSON(e) : undefined);
    } else {
      obj.marketPlace = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryMarketPlaceResponse>, I>>(object: I): QueryMarketPlaceResponse {
    const message = createBaseQueryMarketPlaceResponse();
    message.marketPlace = object.marketPlace?.map((e) => MarketPlace.fromPartial(e)) || [];
    message.pagination = (object.pagination !== undefined && object.pagination !== null)
      ? PageResponse.fromPartial(object.pagination)
      : undefined;
    return message;
  },
};

function createBaseQueryOwnerNFTsRequest(): QueryOwnerNFTsRequest {
  return { owner: "" };
}

export const QueryOwnerNFTsRequest = {
  encode(message: QueryOwnerNFTsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOwnerNFTsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerNFTsRequest();
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
    return { owner: isSet(object.owner) ? String(object.owner) : "" };
  },

  toJSON(message: QueryOwnerNFTsRequest): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryOwnerNFTsRequest>, I>>(object: I): QueryOwnerNFTsRequest {
    const message = createBaseQueryOwnerNFTsRequest();
    message.owner = object.owner ?? "";
    return message;
  },
};

function createBaseQueryOwnerNFTsResponse(): QueryOwnerNFTsResponse {
  return { owner: "", collections: [] };
}

export const QueryOwnerNFTsResponse = {
  encode(message: QueryOwnerNFTsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.owner !== "") {
      writer.uint32(10).string(message.owner);
    }
    for (const v of message.collections) {
      OwnerNFTCollection.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryOwnerNFTsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryOwnerNFTsResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.owner = reader.string();
          break;
        case 2:
          message.collections.push(OwnerNFTCollection.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryOwnerNFTsResponse {
    return {
      owner: isSet(object.owner) ? String(object.owner) : "",
      collections: Array.isArray(object?.collections)
        ? object.collections.map((e: any) => OwnerNFTCollection.fromJSON(e))
        : [],
    };
  },

  toJSON(message: QueryOwnerNFTsResponse): unknown {
    const obj: any = {};
    message.owner !== undefined && (obj.owner = message.owner);
    if (message.collections) {
      obj.collections = message.collections.map((e) => e ? OwnerNFTCollection.toJSON(e) : undefined);
    } else {
      obj.collections = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryOwnerNFTsResponse>, I>>(object: I): QueryOwnerNFTsResponse {
    const message = createBaseQueryOwnerNFTsResponse();
    message.owner = object.owner ?? "";
    message.collections = object.collections?.map((e) => OwnerNFTCollection.fromPartial(e)) || [];
    return message;
  },
};

function createBaseOwnerNFTCollection(): OwnerNFTCollection {
  return { denom: undefined, nfts: [] };
}

export const OwnerNFTCollection = {
  encode(message: OwnerNFTCollection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const message = createBaseOwnerNFTCollection();
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
    return {
      denom: isSet(object.denom) ? Denom.fromJSON(object.denom) : undefined,
      nfts: Array.isArray(object?.nfts) ? object.nfts.map((e: any) => NFT.fromJSON(e)) : [],
    };
  },

  toJSON(message: OwnerNFTCollection): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom ? Denom.toJSON(message.denom) : undefined);
    if (message.nfts) {
      obj.nfts = message.nfts.map((e) => e ? NFT.toJSON(e) : undefined);
    } else {
      obj.nfts = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<OwnerNFTCollection>, I>>(object: I): OwnerNFTCollection {
    const message = createBaseOwnerNFTCollection();
    message.denom = (object.denom !== undefined && object.denom !== null) ? Denom.fromPartial(object.denom) : undefined;
    message.nfts = object.nfts?.map((e) => NFT.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryCommunityRequest(): QueryCommunityRequest {
  return { communityId: "" };
}

export const QueryCommunityRequest = {
  encode(message: QueryCommunityRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.communityId !== "") {
      writer.uint32(10).string(message.communityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommunityRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommunityRequest();
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
    return { communityId: isSet(object.communityId) ? String(object.communityId) : "" };
  },

  toJSON(message: QueryCommunityRequest): unknown {
    const obj: any = {};
    message.communityId !== undefined && (obj.communityId = message.communityId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCommunityRequest>, I>>(object: I): QueryCommunityRequest {
    const message = createBaseQueryCommunityRequest();
    message.communityId = object.communityId ?? "";
    return message;
  },
};

function createBaseQueryCommunityResponse(): QueryCommunityResponse {
  return { community: undefined };
}

export const QueryCommunityResponse = {
  encode(message: QueryCommunityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.community !== undefined) {
      Community.encode(message.community, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommunityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommunityResponse();
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
    return { community: isSet(object.community) ? Community.fromJSON(object.community) : undefined };
  },

  toJSON(message: QueryCommunityResponse): unknown {
    const obj: any = {};
    message.community !== undefined &&
      (obj.community = message.community ? Community.toJSON(message.community) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCommunityResponse>, I>>(object: I): QueryCommunityResponse {
    const message = createBaseQueryCommunityResponse();
    message.community = (object.community !== undefined && object.community !== null)
      ? Community.fromPartial(object.community)
      : undefined;
    return message;
  },
};

function createBaseQueryCommunitiesRequest(): QueryCommunitiesRequest {
  return {};
}

export const QueryCommunitiesRequest = {
  encode(_: QueryCommunitiesRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommunitiesRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommunitiesRequest();
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
    return {};
  },

  toJSON(_: QueryCommunitiesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCommunitiesRequest>, I>>(_: I): QueryCommunitiesRequest {
    const message = createBaseQueryCommunitiesRequest();
    return message;
  },
};

function createBaseQueryCommunitiesResponse(): QueryCommunitiesResponse {
  return { communities: [] };
}

export const QueryCommunitiesResponse = {
  encode(message: QueryCommunitiesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.communities) {
      Community.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommunitiesResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommunitiesResponse();
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
    return {
      communities: Array.isArray(object?.communities) ? object.communities.map((e: any) => Community.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryCommunitiesResponse): unknown {
    const obj: any = {};
    if (message.communities) {
      obj.communities = message.communities.map((e) => e ? Community.toJSON(e) : undefined);
    } else {
      obj.communities = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCommunitiesResponse>, I>>(object: I): QueryCommunitiesResponse {
    const message = createBaseQueryCommunitiesResponse();
    message.communities = object.communities?.map((e) => Community.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryCommunityMembersRequest(): QueryCommunityMembersRequest {
  return { communityId: "" };
}

export const QueryCommunityMembersRequest = {
  encode(message: QueryCommunityMembersRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.communityId !== "") {
      writer.uint32(10).string(message.communityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommunityMembersRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommunityMembersRequest();
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
    return { communityId: isSet(object.communityId) ? String(object.communityId) : "" };
  },

  toJSON(message: QueryCommunityMembersRequest): unknown {
    const obj: any = {};
    message.communityId !== undefined && (obj.communityId = message.communityId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCommunityMembersRequest>, I>>(object: I): QueryCommunityMembersRequest {
    const message = createBaseQueryCommunityMembersRequest();
    message.communityId = object.communityId ?? "";
    return message;
  },
};

function createBaseQueryCommunityMembersResponse(): QueryCommunityMembersResponse {
  return { members: undefined };
}

export const QueryCommunityMembersResponse = {
  encode(message: QueryCommunityMembersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.members !== undefined) {
      CommunityMembers.encode(message.members, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommunityMembersResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommunityMembersResponse();
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
    return { members: isSet(object.members) ? CommunityMembers.fromJSON(object.members) : undefined };
  },

  toJSON(message: QueryCommunityMembersResponse): unknown {
    const obj: any = {};
    message.members !== undefined &&
      (obj.members = message.members ? CommunityMembers.toJSON(message.members) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCommunityMembersResponse>, I>>(
    object: I,
  ): QueryCommunityMembersResponse {
    const message = createBaseQueryCommunityMembersResponse();
    message.members = (object.members !== undefined && object.members !== null)
      ? CommunityMembers.fromPartial(object.members)
      : undefined;
    return message;
  },
};

function createBaseQueryCollectionRequest(): QueryCollectionRequest {
  return { denomId: "" };
}

export const QueryCollectionRequest = {
  encode(message: QueryCollectionRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectionRequest();
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
    return { denomId: isSet(object.denomId) ? String(object.denomId) : "" };
  },

  toJSON(message: QueryCollectionRequest): unknown {
    const obj: any = {};
    message.denomId !== undefined && (obj.denomId = message.denomId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCollectionRequest>, I>>(object: I): QueryCollectionRequest {
    const message = createBaseQueryCollectionRequest();
    message.denomId = object.denomId ?? "";
    return message;
  },
};

function createBaseQueryCollectionResponse(): QueryCollectionResponse {
  return { collection: undefined };
}

export const QueryCollectionResponse = {
  encode(message: QueryCollectionResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.collection !== undefined) {
      Collection.encode(message.collection, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCollectionResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCollectionResponse();
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
    return { collection: isSet(object.collection) ? Collection.fromJSON(object.collection) : undefined };
  },

  toJSON(message: QueryCollectionResponse): unknown {
    const obj: any = {};
    message.collection !== undefined &&
      (obj.collection = message.collection ? Collection.toJSON(message.collection) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCollectionResponse>, I>>(object: I): QueryCollectionResponse {
    const message = createBaseQueryCollectionResponse();
    message.collection = (object.collection !== undefined && object.collection !== null)
      ? Collection.fromPartial(object.collection)
      : undefined;
    return message;
  },
};

function createBaseQueryDenomIDsByOwnerRequest(): QueryDenomIDsByOwnerRequest {
  return { address: "" };
}

export const QueryDenomIDsByOwnerRequest = {
  encode(message: QueryDenomIDsByOwnerRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomIDsByOwnerRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomIDsByOwnerRequest();
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
    return { address: isSet(object.address) ? String(object.address) : "" };
  },

  toJSON(message: QueryDenomIDsByOwnerRequest): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryDenomIDsByOwnerRequest>, I>>(object: I): QueryDenomIDsByOwnerRequest {
    const message = createBaseQueryDenomIDsByOwnerRequest();
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseQueryDenomIDsByOwnerResponse(): QueryDenomIDsByOwnerResponse {
  return { ids: [] };
}

export const QueryDenomIDsByOwnerResponse = {
  encode(message: QueryDenomIDsByOwnerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.ids) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryDenomIDsByOwnerResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryDenomIDsByOwnerResponse();
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
    return { ids: Array.isArray(object?.ids) ? object.ids.map((e: any) => String(e)) : [] };
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

  fromPartial<I extends Exact<DeepPartial<QueryDenomIDsByOwnerResponse>, I>>(object: I): QueryDenomIDsByOwnerResponse {
    const message = createBaseQueryDenomIDsByOwnerResponse();
    message.ids = object.ids?.map((e) => e) || [];
    return message;
  },
};

function createBaseQueryAllNFTsRequest(): QueryAllNFTsRequest {
  return {};
}

export const QueryAllNFTsRequest = {
  encode(_: QueryAllNFTsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllNFTsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllNFTsRequest();
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
    return {};
  },

  toJSON(_: QueryAllNFTsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllNFTsRequest>, I>>(_: I): QueryAllNFTsRequest {
    const message = createBaseQueryAllNFTsRequest();
    return message;
  },
};

function createBaseDenomInfo(): DenomInfo {
  return { denomId: "", name: "" };
}

export const DenomInfo = {
  encode(message: DenomInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const message = createBaseDenomInfo();
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
    return {
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: DenomInfo): unknown {
    const obj: any = {};
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DenomInfo>, I>>(object: I): DenomInfo {
    const message = createBaseDenomInfo();
    message.denomId = object.denomId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseCommunityInfo(): CommunityInfo {
  return { communityId: "", name: "" };
}

export const CommunityInfo = {
  encode(message: CommunityInfo, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
    const message = createBaseCommunityInfo();
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
    return {
      communityId: isSet(object.communityId) ? String(object.communityId) : "",
      name: isSet(object.name) ? String(object.name) : "",
    };
  },

  toJSON(message: CommunityInfo): unknown {
    const obj: any = {};
    message.communityId !== undefined && (obj.communityId = message.communityId);
    message.name !== undefined && (obj.name = message.name);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CommunityInfo>, I>>(object: I): CommunityInfo {
    const message = createBaseCommunityInfo();
    message.communityId = object.communityId ?? "";
    message.name = object.name ?? "";
    return message;
  },
};

function createBaseALLNFT(): ALLNFT {
  return { nft: undefined, denomInfo: undefined, communityInfo: undefined };
}

export const ALLNFT = {
  encode(message: ALLNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nft !== undefined) {
      NFT.encode(message.nft, writer.uint32(10).fork()).ldelim();
    }
    if (message.denomInfo !== undefined) {
      DenomInfo.encode(message.denomInfo, writer.uint32(18).fork()).ldelim();
    }
    if (message.communityInfo !== undefined) {
      CommunityInfo.encode(message.communityInfo, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ALLNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseALLNFT();
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
    return {
      nft: isSet(object.nft) ? NFT.fromJSON(object.nft) : undefined,
      denomInfo: isSet(object.denomInfo) ? DenomInfo.fromJSON(object.denomInfo) : undefined,
      communityInfo: isSet(object.communityInfo) ? CommunityInfo.fromJSON(object.communityInfo) : undefined,
    };
  },

  toJSON(message: ALLNFT): unknown {
    const obj: any = {};
    message.nft !== undefined && (obj.nft = message.nft ? NFT.toJSON(message.nft) : undefined);
    message.denomInfo !== undefined &&
      (obj.denomInfo = message.denomInfo ? DenomInfo.toJSON(message.denomInfo) : undefined);
    message.communityInfo !== undefined &&
      (obj.communityInfo = message.communityInfo ? CommunityInfo.toJSON(message.communityInfo) : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ALLNFT>, I>>(object: I): ALLNFT {
    const message = createBaseALLNFT();
    message.nft = (object.nft !== undefined && object.nft !== null) ? NFT.fromPartial(object.nft) : undefined;
    message.denomInfo = (object.denomInfo !== undefined && object.denomInfo !== null)
      ? DenomInfo.fromPartial(object.denomInfo)
      : undefined;
    message.communityInfo = (object.communityInfo !== undefined && object.communityInfo !== null)
      ? CommunityInfo.fromPartial(object.communityInfo)
      : undefined;
    return message;
  },
};

function createBaseQueryAllNFTsResponse(): QueryAllNFTsResponse {
  return { all: [] };
}

export const QueryAllNFTsResponse = {
  encode(message: QueryAllNFTsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.all) {
      ALLNFT.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryAllNFTsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryAllNFTsResponse();
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
    return { all: Array.isArray(object?.all) ? object.all.map((e: any) => ALLNFT.fromJSON(e)) : [] };
  },

  toJSON(message: QueryAllNFTsResponse): unknown {
    const obj: any = {};
    if (message.all) {
      obj.all = message.all.map((e) => e ? ALLNFT.toJSON(e) : undefined);
    } else {
      obj.all = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryAllNFTsResponse>, I>>(object: I): QueryAllNFTsResponse {
    const message = createBaseQueryAllNFTsResponse();
    message.all = object.all?.map((e) => ALLNFT.fromPartial(e)) || [];
    return message;
  },
};

function createBaseQueryCommunityCollectionsRequest(): QueryCommunityCollectionsRequest {
  return { communityId: "" };
}

export const QueryCommunityCollectionsRequest = {
  encode(message: QueryCommunityCollectionsRequest, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.communityId !== "") {
      writer.uint32(10).string(message.communityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommunityCollectionsRequest {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommunityCollectionsRequest();
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
    return { communityId: isSet(object.communityId) ? String(object.communityId) : "" };
  },

  toJSON(message: QueryCommunityCollectionsRequest): unknown {
    const obj: any = {};
    message.communityId !== undefined && (obj.communityId = message.communityId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCommunityCollectionsRequest>, I>>(
    object: I,
  ): QueryCommunityCollectionsRequest {
    const message = createBaseQueryCommunityCollectionsRequest();
    message.communityId = object.communityId ?? "";
    return message;
  },
};

function createBaseQueryCommunityCollectionsResponse(): QueryCommunityCollectionsResponse {
  return { community: undefined, denoms: [] };
}

export const QueryCommunityCollectionsResponse = {
  encode(message: QueryCommunityCollectionsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.community !== undefined) {
      Community.encode(message.community, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.denoms) {
      Denom.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): QueryCommunityCollectionsResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseQueryCommunityCollectionsResponse();
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
    return {
      community: isSet(object.community) ? Community.fromJSON(object.community) : undefined,
      denoms: Array.isArray(object?.denoms) ? object.denoms.map((e: any) => Denom.fromJSON(e)) : [],
    };
  },

  toJSON(message: QueryCommunityCollectionsResponse): unknown {
    const obj: any = {};
    message.community !== undefined &&
      (obj.community = message.community ? Community.toJSON(message.community) : undefined);
    if (message.denoms) {
      obj.denoms = message.denoms.map((e) => e ? Denom.toJSON(e) : undefined);
    } else {
      obj.denoms = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<QueryCommunityCollectionsResponse>, I>>(
    object: I,
  ): QueryCommunityCollectionsResponse {
    const message = createBaseQueryCommunityCollectionsResponse();
    message.community = (object.community !== undefined && object.community !== null)
      ? Community.fromPartial(object.community)
      : undefined;
    message.denoms = object.denoms?.map((e) => Denom.fromPartial(e)) || [];
    return message;
  },
};

export interface Query {
  Denom(request: QueryDenomRequest): Promise<QueryDenomResponse>;
  Denoms(request: QueryDenomsRequest): Promise<QueryDenomsResponse>;
  DenomIDsByOwner(request: QueryDenomIDsByOwnerRequest): Promise<QueryDenomIDsByOwnerResponse>;
  Collection(request: QueryCollectionRequest): Promise<QueryCollectionResponse>;
  NFT(request: QueryNFTRequest): Promise<QueryNFTResponse>;
  MarketPlaceNFT(request: QueryMarketPlaceNFTRequest): Promise<QueryMarketPlaceNFTResponse>;
  MarketPlace(request: QueryMarketPlaceRequest): Promise<QueryMarketPlaceResponse>;
  MarketPlaceByType(request: QueryMarketPlaceByTypeRequest): Promise<QueryMarketPlaceByTypeResponse>;
  OwnerNFTs(request: QueryOwnerNFTsRequest): Promise<QueryOwnerNFTsResponse>;
  AllNFTs(request: QueryAllNFTsRequest): Promise<QueryAllNFTsResponse>;
  Communities(request: QueryCommunitiesRequest): Promise<QueryCommunitiesResponse>;
  Community(request: QueryCommunityRequest): Promise<QueryCommunityResponse>;
  CommunityCollections(request: QueryCommunityCollectionsRequest): Promise<QueryCommunityCollectionsResponse>;
  CommunityMembers(request: QueryCommunityMembersRequest): Promise<QueryCommunityMembersResponse>;
  CommunitiesByOwner(request: QueryCommunitiesByOwnerRequest): Promise<QueryCommunitiesByOwnerResponse>;
  DenomsByOwner(request: QueryDenomsByOwnerRequest): Promise<QueryDenomsByOwnerResponse>;
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
    this.MarketPlaceByType = this.MarketPlaceByType.bind(this);
    this.OwnerNFTs = this.OwnerNFTs.bind(this);
    this.AllNFTs = this.AllNFTs.bind(this);
    this.Communities = this.Communities.bind(this);
    this.Community = this.Community.bind(this);
    this.CommunityCollections = this.CommunityCollections.bind(this);
    this.CommunityMembers = this.CommunityMembers.bind(this);
    this.CommunitiesByOwner = this.CommunitiesByOwner.bind(this);
    this.DenomsByOwner = this.DenomsByOwner.bind(this);
  }
  Denom(request: QueryDenomRequest): Promise<QueryDenomResponse> {
    const data = QueryDenomRequest.encode(request).finish();
    const promise = this.rpc.request("nft.v1beta1.Query", "Denom", data);
    return promise.then((data) => QueryDenomResponse.decode(new _m0.Reader(data)));
  }

  Denoms(request: QueryDenomsRequest): Promise<QueryDenomsResponse> {
    const data = QueryDenomsRequest.encode(request).finish();
    const promise = this.rpc.request("nft.v1beta1.Query", "Denoms", data);
    return promise.then((data) => QueryDenomsResponse.decode(new _m0.Reader(data)));
  }

  DenomIDsByOwner(request: QueryDenomIDsByOwnerRequest): Promise<QueryDenomIDsByOwnerResponse> {
    const data = QueryDenomIDsByOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("nft.v1beta1.Query", "DenomIDsByOwner", data);
    return promise.then((data) => QueryDenomIDsByOwnerResponse.decode(new _m0.Reader(data)));
  }

  Collection(request: QueryCollectionRequest): Promise<QueryCollectionResponse> {
    const data = QueryCollectionRequest.encode(request).finish();
    const promise = this.rpc.request("nft.v1beta1.Query", "Collection", data);
    return promise.then((data) => QueryCollectionResponse.decode(new _m0.Reader(data)));
  }

  NFT(request: QueryNFTRequest): Promise<QueryNFTResponse> {
    const data = QueryNFTRequest.encode(request).finish();
    const promise = this.rpc.request("nft.v1beta1.Query", "NFT", data);
    return promise.then((data) => QueryNFTResponse.decode(new _m0.Reader(data)));
  }

  MarketPlaceNFT(request: QueryMarketPlaceNFTRequest): Promise<QueryMarketPlaceNFTResponse> {
    const data = QueryMarketPlaceNFTRequest.encode(request).finish();
    const promise = this.rpc.request("nft.v1beta1.Query", "MarketPlaceNFT", data);
    return promise.then((data) => QueryMarketPlaceNFTResponse.decode(new _m0.Reader(data)));
  }

  MarketPlace(request: QueryMarketPlaceRequest): Promise<QueryMarketPlaceResponse> {
    const data = QueryMarketPlaceRequest.encode(request).finish();
    const promise = this.rpc.request("nft.v1beta1.Query", "MarketPlace", data);
    return promise.then((data) => QueryMarketPlaceResponse.decode(new _m0.Reader(data)));
  }

  MarketPlaceByType(request: QueryMarketPlaceByTypeRequest): Promise<QueryMarketPlaceByTypeResponse> {
    const data = QueryMarketPlaceByTypeRequest.encode(request).finish();
    const promise = this.rpc.request("nft.v1beta1.Query", "MarketPlaceByType", data);
    return promise.then((data) => QueryMarketPlaceByTypeResponse.decode(new _m0.Reader(data)));
  }

  OwnerNFTs(request: QueryOwnerNFTsRequest): Promise<QueryOwnerNFTsResponse> {
    const data = QueryOwnerNFTsRequest.encode(request).finish();
    const promise = this.rpc.request("nft.v1beta1.Query", "OwnerNFTs", data);
    return promise.then((data) => QueryOwnerNFTsResponse.decode(new _m0.Reader(data)));
  }

  AllNFTs(request: QueryAllNFTsRequest): Promise<QueryAllNFTsResponse> {
    const data = QueryAllNFTsRequest.encode(request).finish();
    const promise = this.rpc.request("nft.v1beta1.Query", "AllNFTs", data);
    return promise.then((data) => QueryAllNFTsResponse.decode(new _m0.Reader(data)));
  }

  Communities(request: QueryCommunitiesRequest): Promise<QueryCommunitiesResponse> {
    const data = QueryCommunitiesRequest.encode(request).finish();
    const promise = this.rpc.request("nft.v1beta1.Query", "Communities", data);
    return promise.then((data) => QueryCommunitiesResponse.decode(new _m0.Reader(data)));
  }

  Community(request: QueryCommunityRequest): Promise<QueryCommunityResponse> {
    const data = QueryCommunityRequest.encode(request).finish();
    const promise = this.rpc.request("nft.v1beta1.Query", "Community", data);
    return promise.then((data) => QueryCommunityResponse.decode(new _m0.Reader(data)));
  }

  CommunityCollections(request: QueryCommunityCollectionsRequest): Promise<QueryCommunityCollectionsResponse> {
    const data = QueryCommunityCollectionsRequest.encode(request).finish();
    const promise = this.rpc.request("nft.v1beta1.Query", "CommunityCollections", data);
    return promise.then((data) => QueryCommunityCollectionsResponse.decode(new _m0.Reader(data)));
  }

  CommunityMembers(request: QueryCommunityMembersRequest): Promise<QueryCommunityMembersResponse> {
    const data = QueryCommunityMembersRequest.encode(request).finish();
    const promise = this.rpc.request("nft.v1beta1.Query", "CommunityMembers", data);
    return promise.then((data) => QueryCommunityMembersResponse.decode(new _m0.Reader(data)));
  }

  CommunitiesByOwner(request: QueryCommunitiesByOwnerRequest): Promise<QueryCommunitiesByOwnerResponse> {
    const data = QueryCommunitiesByOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("nft.v1beta1.Query", "CommunitiesByOwner", data);
    return promise.then((data) => QueryCommunitiesByOwnerResponse.decode(new _m0.Reader(data)));
  }

  DenomsByOwner(request: QueryDenomsByOwnerRequest): Promise<QueryDenomsByOwnerResponse> {
    const data = QueryDenomsByOwnerRequest.encode(request).finish();
    const promise = this.rpc.request("nft.v1beta1.Query", "DenomsByOwner", data);
    return promise.then((data) => QueryDenomsByOwnerResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined;

export type DeepPartial<T> = T extends Builtin ? T
  : T extends Long ? string | number | Long : T extends Array<infer U> ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>>
  : T extends {} ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & { [K in Exclude<keyof I, KeysOfUnion<P>>]: never };

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
