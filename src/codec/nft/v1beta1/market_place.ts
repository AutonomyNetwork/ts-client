/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "nft.v1beta1";

export interface MarketPlace {
  nftId: string;
  denomID: string;
  price: string;
  seller: string;
  buyer: string;
  filled: boolean;
}

const baseMarketPlace: object = {
  nftId: "",
  denomID: "",
  price: "",
  seller: "",
  buyer: "",
  filled: false,
};

export const MarketPlace = {
  encode(
    message: MarketPlace,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MarketPlace {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMarketPlace } as MarketPlace;
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MarketPlace {
    const message = { ...baseMarketPlace } as MarketPlace;
    if (object.nftId !== undefined && object.nftId !== null) {
      message.nftId = String(object.nftId);
    } else {
      message.nftId = "";
    }
    if (object.denomID !== undefined && object.denomID !== null) {
      message.denomID = String(object.denomID);
    } else {
      message.denomID = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = String(object.price);
    } else {
      message.price = "";
    }
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = String(object.seller);
    } else {
      message.seller = "";
    }
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = String(object.buyer);
    } else {
      message.buyer = "";
    }
    if (object.filled !== undefined && object.filled !== null) {
      message.filled = Boolean(object.filled);
    } else {
      message.filled = false;
    }
    return message;
  },

  toJSON(message: MarketPlace): unknown {
    const obj: any = {};
    message.nftId !== undefined && (obj.nftId = message.nftId);
    message.denomID !== undefined && (obj.denomID = message.denomID);
    message.price !== undefined && (obj.price = message.price);
    message.seller !== undefined && (obj.seller = message.seller);
    message.buyer !== undefined && (obj.buyer = message.buyer);
    message.filled !== undefined && (obj.filled = message.filled);
    return obj;
  },

  fromPartial(object: DeepPartial<MarketPlace>): MarketPlace {
    const message = { ...baseMarketPlace } as MarketPlace;
    if (object.nftId !== undefined && object.nftId !== null) {
      message.nftId = object.nftId;
    } else {
      message.nftId = "";
    }
    if (object.denomID !== undefined && object.denomID !== null) {
      message.denomID = object.denomID;
    } else {
      message.denomID = "";
    }
    if (object.price !== undefined && object.price !== null) {
      message.price = object.price;
    } else {
      message.price = "";
    }
    if (object.seller !== undefined && object.seller !== null) {
      message.seller = object.seller;
    } else {
      message.seller = "";
    }
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = object.buyer;
    } else {
      message.buyer = "";
    }
    if (object.filled !== undefined && object.filled !== null) {
      message.filled = object.filled;
    } else {
      message.filled = false;
    }
    return message;
  },
};

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
