/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "nft.v1beta1";

export enum ListedType {
  LISTED_TYPE_UNSPECIFIED = 0,
  LISTED_TYPE_FIAT = 1,
  LISTED_TYPE_CRYPTO = 2,
  UNRECOGNIZED = -1,
}

export function listedTypeFromJSON(object: any): ListedType {
  switch (object) {
    case 0:
    case "LISTED_TYPE_UNSPECIFIED":
      return ListedType.LISTED_TYPE_UNSPECIFIED;
    case 1:
    case "LISTED_TYPE_FIAT":
      return ListedType.LISTED_TYPE_FIAT;
    case 2:
    case "LISTED_TYPE_CRYPTO":
      return ListedType.LISTED_TYPE_CRYPTO;
    case -1:
    case "UNRECOGNIZED":
    default:
      return ListedType.UNRECOGNIZED;
  }
}

export function listedTypeToJSON(object: ListedType): string {
  switch (object) {
    case ListedType.LISTED_TYPE_UNSPECIFIED:
      return "LISTED_TYPE_UNSPECIFIED";
    case ListedType.LISTED_TYPE_FIAT:
      return "LISTED_TYPE_FIAT";
    case ListedType.LISTED_TYPE_CRYPTO:
      return "LISTED_TYPE_CRYPTO";
    case ListedType.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}

export interface MarketPlace {
  nftId: string;
  denomID: string;
  price: string;
  seller: string;
  buyer: string;
  filled: boolean;
  listedType: ListedType;
  currency: string;
  fiatAmount: string;
  orderRefId: string;
  listed: boolean;
}

function createBaseMarketPlace(): MarketPlace {
  return {
    nftId: "",
    denomID: "",
    price: "",
    seller: "",
    buyer: "",
    filled: false,
    listedType: 0,
    currency: "",
    fiatAmount: "",
    orderRefId: "",
    listed: false,
  };
}

export const MarketPlace = {
  encode(message: MarketPlace, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.nftId !== "") {
      writer.uint32(10).string(message.nftId);
    }
    if (message.denomID !== "") {
      writer.uint32(18).string(message.denomID);
    }
    if (message.price !== "") {
      writer.uint32(26).string(message.price);
    }
    if (message.seller !== "") {
      writer.uint32(34).string(message.seller);
    }
    if (message.buyer !== "") {
      writer.uint32(42).string(message.buyer);
    }
    if (message.filled === true) {
      writer.uint32(48).bool(message.filled);
    }
    if (message.listedType !== 0) {
      writer.uint32(56).int32(message.listedType);
    }
    if (message.currency !== "") {
      writer.uint32(66).string(message.currency);
    }
    if (message.fiatAmount !== "") {
      writer.uint32(74).string(message.fiatAmount);
    }
    if (message.orderRefId !== "") {
      writer.uint32(82).string(message.orderRefId);
    }
    if (message.listed === true) {
      writer.uint32(88).bool(message.listed);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketPlace {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMarketPlace();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.nftId = reader.string();
          break;
        case 2:
          message.denomID = reader.string();
          break;
        case 3:
          message.price = reader.string();
          break;
        case 4:
          message.seller = reader.string();
          break;
        case 5:
          message.buyer = reader.string();
          break;
        case 6:
          message.filled = reader.bool();
          break;
        case 7:
          message.listedType = reader.int32() as any;
          break;
        case 8:
          message.currency = reader.string();
          break;
        case 9:
          message.fiatAmount = reader.string();
          break;
        case 10:
          message.orderRefId = reader.string();
          break;
        case 11:
          message.listed = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarketPlace {
    return {
      nftId: isSet(object.nftId) ? String(object.nftId) : "",
      denomID: isSet(object.denomID) ? String(object.denomID) : "",
      price: isSet(object.price) ? String(object.price) : "",
      seller: isSet(object.seller) ? String(object.seller) : "",
      buyer: isSet(object.buyer) ? String(object.buyer) : "",
      filled: isSet(object.filled) ? Boolean(object.filled) : false,
      listedType: isSet(object.listedType) ? listedTypeFromJSON(object.listedType) : 0,
      currency: isSet(object.currency) ? String(object.currency) : "",
      fiatAmount: isSet(object.fiatAmount) ? String(object.fiatAmount) : "",
      orderRefId: isSet(object.orderRefId) ? String(object.orderRefId) : "",
      listed: isSet(object.listed) ? Boolean(object.listed) : false,
    };
  },

  toJSON(message: MarketPlace): unknown {
    const obj: any = {};
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.denomID !== undefined && (obj.denomID = message.denomID);
    message.price !== undefined && (obj.price = message.price);
    message.seller !== undefined && (obj.seller = message.seller);
    message.buyer !== undefined && (obj.buyer = message.buyer);
    message.filled !== undefined && (obj.filled = message.filled);
    message.listedType !== undefined && (obj.listedType = listedTypeToJSON(message.listedType));
    message.currency !== undefined && (obj.currency = message.currency);
    message.fiatAmount !== undefined && (obj.fiatAmount = message.fiatAmount);
    message.orderRefId !== undefined && (obj.orderRefId = message.orderRefId);
    message.listed !== undefined && (obj.listed = message.listed);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MarketPlace>, I>>(object: I): MarketPlace {
    const message = createBaseMarketPlace();
    message.nftId = object.nftId ?? "";
    message.denomID = object.denomID ?? "";
    message.price = object.price ?? "";
    message.seller = object.seller ?? "";
    message.buyer = object.buyer ?? "";
    message.filled = object.filled ?? false;
    message.listedType = object.listedType ?? 0;
    message.currency = object.currency ?? "";
    message.fiatAmount = object.fiatAmount ?? "";
    message.orderRefId = object.orderRefId ?? "";
    message.listed = object.listed ?? false;
    return message;
  },
};

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
