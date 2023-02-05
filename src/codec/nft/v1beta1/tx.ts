/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Metadata } from "./nft";

export const protobufPackage = "nft.v1beta1";

export interface MsgCreateDenom {
  id: string;
  name: string;
  symbol: string;
  description: string;
  previewUri: string;
  creator: string;
  depedentCollection: string[];
  communityId: string;
}

export interface MsgCreateDenomResponse {
}

export interface MsgMintNFT {
  id: string;
  denomId: string;
  metadata?: Metadata;
  data: string;
  transferable: boolean;
  creator: string;
  royalties: string;
}

export interface MsgMintNFTResponse {
}

export interface MsgUpdateNFT {
  id: string;
  denomID: string;
  royalties: string;
  owner: string;
  name: string;
  description: string;
}

export interface MsgUpdateNFTResponse {
}

export interface MsgTransferNFT {
  id: string;
  denomId: string;
  sender: string;
  recipient: string;
}

export interface MsgTransferNFTResponse {
}

export interface MsgSellNFT {
  id: string;
  denomId: string;
  price: string;
  seller: string;
}

export interface MsgSellNFTResponse {
}

export interface MsgBuyNFT {
  id: string;
  denomId: string;
  buyer: string;
}

export interface MsgBuyNFTResponse {
}

export interface MsgCreateCommunity {
  name: string;
  description: string;
  creator: string;
  previewUri: string;
  id: string;
}

export interface MsgCreateCommunityResponse {
  id: string;
}

export interface MsgJoinCommunity {
  communityId: string;
  address: string;
}

export interface MsgJoinCommunityResponse {
}

function createBaseMsgCreateDenom(): MsgCreateDenom {
  return {
    id: "",
    name: "",
    symbol: "",
    description: "",
    previewUri: "",
    creator: "",
    depedentCollection: [],
    communityId: "",
  };
}

export const MsgCreateDenom = {
  encode(message: MsgCreateDenom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.previewUri !== "") {
      writer.uint32(42).string(message.previewUri);
    }
    if (message.creator !== "") {
      writer.uint32(50).string(message.creator);
    }
    for (const v of message.depedentCollection) {
      writer.uint32(58).string(v!);
    }
    if (message.communityId !== "") {
      writer.uint32(66).string(message.communityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDenom();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.name = reader.string();
          break;
        case 3:
          message.symbol = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.previewUri = reader.string();
          break;
        case 6:
          message.creator = reader.string();
          break;
        case 7:
          message.depedentCollection.push(reader.string());
          break;
        case 8:
          message.communityId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDenom {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      description: isSet(object.description) ? String(object.description) : "",
      previewUri: isSet(object.previewUri) ? String(object.previewUri) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      depedentCollection: Array.isArray(object?.depedentCollection)
        ? object.depedentCollection.map((e: any) => String(e))
        : [],
      communityId: isSet(object.communityId) ? String(object.communityId) : "",
    };
  },

  toJSON(message: MsgCreateDenom): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.description !== undefined && (obj.description = message.description);
    message.previewUri !== undefined && (obj.previewUri = message.previewUri);
    message.creator !== undefined && (obj.creator = message.creator);
    if (message.depedentCollection) {
      obj.depedentCollection = message.depedentCollection.map((e) => e);
    } else {
      obj.depedentCollection = [];
    }
    message.communityId !== undefined && (obj.communityId = message.communityId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateDenom>, I>>(object: I): MsgCreateDenom {
    const message = createBaseMsgCreateDenom();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.description = object.description ?? "";
    message.previewUri = object.previewUri ?? "";
    message.creator = object.creator ?? "";
    message.depedentCollection = object.depedentCollection?.map((e) => e) || [];
    message.communityId = object.communityId ?? "";
    return message;
  },
};

function createBaseMsgCreateDenomResponse(): MsgCreateDenomResponse {
  return {};
}

export const MsgCreateDenomResponse = {
  encode(_: MsgCreateDenomResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateDenomResponse();
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

  fromJSON(_: any): MsgCreateDenomResponse {
    return {};
  },

  toJSON(_: MsgCreateDenomResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateDenomResponse>, I>>(_: I): MsgCreateDenomResponse {
    const message = createBaseMsgCreateDenomResponse();
    return message;
  },
};

function createBaseMsgMintNFT(): MsgMintNFT {
  return { id: "", denomId: "", metadata: undefined, data: "", transferable: false, creator: "", royalties: "" };
}

export const MsgMintNFT = {
  encode(message: MsgMintNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.denomId !== "") {
      writer.uint32(18).string(message.denomId);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(26).fork()).ldelim();
    }
    if (message.data !== "") {
      writer.uint32(34).string(message.data);
    }
    if (message.transferable === true) {
      writer.uint32(40).bool(message.transferable);
    }
    if (message.creator !== "") {
      writer.uint32(50).string(message.creator);
    }
    if (message.royalties !== "") {
      writer.uint32(58).string(message.royalties);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.denomId = reader.string();
          break;
        case 3:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        case 4:
          message.data = reader.string();
          break;
        case 5:
          message.transferable = reader.bool();
          break;
        case 6:
          message.creator = reader.string();
          break;
        case 7:
          message.royalties = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintNFT {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      metadata: isSet(object.metadata) ? Metadata.fromJSON(object.metadata) : undefined,
      data: isSet(object.data) ? String(object.data) : "",
      transferable: isSet(object.transferable) ? Boolean(object.transferable) : false,
      creator: isSet(object.creator) ? String(object.creator) : "",
      royalties: isSet(object.royalties) ? String(object.royalties) : "",
    };
  },

  toJSON(message: MsgMintNFT): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.metadata !== undefined && (obj.metadata = message.metadata ? Metadata.toJSON(message.metadata) : undefined);
    message.data !== undefined && (obj.data = message.data);
    message.transferable !== undefined && (obj.transferable = message.transferable);
    message.creator !== undefined && (obj.creator = message.creator);
    message.royalties !== undefined && (obj.royalties = message.royalties);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintNFT>, I>>(object: I): MsgMintNFT {
    const message = createBaseMsgMintNFT();
    message.id = object.id ?? "";
    message.denomId = object.denomId ?? "";
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? Metadata.fromPartial(object.metadata)
      : undefined;
    message.data = object.data ?? "";
    message.transferable = object.transferable ?? false;
    message.creator = object.creator ?? "";
    message.royalties = object.royalties ?? "";
    return message;
  },
};

function createBaseMsgMintNFTResponse(): MsgMintNFTResponse {
  return {};
}

export const MsgMintNFTResponse = {
  encode(_: MsgMintNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgMintNFTResponse();
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

  fromJSON(_: any): MsgMintNFTResponse {
    return {};
  },

  toJSON(_: MsgMintNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgMintNFTResponse>, I>>(_: I): MsgMintNFTResponse {
    const message = createBaseMsgMintNFTResponse();
    return message;
  },
};

function createBaseMsgUpdateNFT(): MsgUpdateNFT {
  return { id: "", denomID: "", royalties: "", owner: "", name: "", description: "" };
}

export const MsgUpdateNFT = {
  encode(message: MsgUpdateNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.denomID !== "") {
      writer.uint32(18).string(message.denomID);
    }
    if (message.royalties !== "") {
      writer.uint32(26).string(message.royalties);
    }
    if (message.owner !== "") {
      writer.uint32(34).string(message.owner);
    }
    if (message.name !== "") {
      writer.uint32(42).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(50).string(message.description);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.denomID = reader.string();
          break;
        case 3:
          message.royalties = reader.string();
          break;
        case 4:
          message.owner = reader.string();
          break;
        case 5:
          message.name = reader.string();
          break;
        case 6:
          message.description = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgUpdateNFT {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      denomID: isSet(object.denomID) ? String(object.denomID) : "",
      royalties: isSet(object.royalties) ? String(object.royalties) : "",
      owner: isSet(object.owner) ? String(object.owner) : "",
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
    };
  },

  toJSON(message: MsgUpdateNFT): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.denomID !== undefined && (obj.denomID = message.denomID);
    message.royalties !== undefined && (obj.royalties = message.royalties);
    message.owner !== undefined && (obj.owner = message.owner);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateNFT>, I>>(object: I): MsgUpdateNFT {
    const message = createBaseMsgUpdateNFT();
    message.id = object.id ?? "";
    message.denomID = object.denomID ?? "";
    message.royalties = object.royalties ?? "";
    message.owner = object.owner ?? "";
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    return message;
  },
};

function createBaseMsgUpdateNFTResponse(): MsgUpdateNFTResponse {
  return {};
}

export const MsgUpdateNFTResponse = {
  encode(_: MsgUpdateNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgUpdateNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgUpdateNFTResponse();
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

  fromJSON(_: any): MsgUpdateNFTResponse {
    return {};
  },

  toJSON(_: MsgUpdateNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgUpdateNFTResponse>, I>>(_: I): MsgUpdateNFTResponse {
    const message = createBaseMsgUpdateNFTResponse();
    return message;
  },
};

function createBaseMsgTransferNFT(): MsgTransferNFT {
  return { id: "", denomId: "", sender: "", recipient: "" };
}

export const MsgTransferNFT = {
  encode(message: MsgTransferNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.denomId !== "") {
      writer.uint32(18).string(message.denomId);
    }
    if (message.sender !== "") {
      writer.uint32(26).string(message.sender);
    }
    if (message.recipient !== "") {
      writer.uint32(34).string(message.recipient);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.denomId = reader.string();
          break;
        case 3:
          message.sender = reader.string();
          break;
        case 4:
          message.recipient = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgTransferNFT {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      sender: isSet(object.sender) ? String(object.sender) : "",
      recipient: isSet(object.recipient) ? String(object.recipient) : "",
    };
  },

  toJSON(message: MsgTransferNFT): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.sender !== undefined && (obj.sender = message.sender);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferNFT>, I>>(object: I): MsgTransferNFT {
    const message = createBaseMsgTransferNFT();
    message.id = object.id ?? "";
    message.denomId = object.denomId ?? "";
    message.sender = object.sender ?? "";
    message.recipient = object.recipient ?? "";
    return message;
  },
};

function createBaseMsgTransferNFTResponse(): MsgTransferNFTResponse {
  return {};
}

export const MsgTransferNFTResponse = {
  encode(_: MsgTransferNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgTransferNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgTransferNFTResponse();
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

  fromJSON(_: any): MsgTransferNFTResponse {
    return {};
  },

  toJSON(_: MsgTransferNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgTransferNFTResponse>, I>>(_: I): MsgTransferNFTResponse {
    const message = createBaseMsgTransferNFTResponse();
    return message;
  },
};

function createBaseMsgSellNFT(): MsgSellNFT {
  return { id: "", denomId: "", price: "", seller: "" };
}

export const MsgSellNFT = {
  encode(message: MsgSellNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.denomId !== "") {
      writer.uint32(18).string(message.denomId);
    }
    if (message.price !== "") {
      writer.uint32(26).string(message.price);
    }
    if (message.seller !== "") {
      writer.uint32(34).string(message.seller);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSellNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSellNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.denomId = reader.string();
          break;
        case 3:
          message.price = reader.string();
          break;
        case 4:
          message.seller = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSellNFT {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      price: isSet(object.price) ? String(object.price) : "",
      seller: isSet(object.seller) ? String(object.seller) : "",
    };
  },

  toJSON(message: MsgSellNFT): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.price !== undefined && (obj.price = message.price);
    message.seller !== undefined && (obj.seller = message.seller);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSellNFT>, I>>(object: I): MsgSellNFT {
    const message = createBaseMsgSellNFT();
    message.id = object.id ?? "";
    message.denomId = object.denomId ?? "";
    message.price = object.price ?? "";
    message.seller = object.seller ?? "";
    return message;
  },
};

function createBaseMsgSellNFTResponse(): MsgSellNFTResponse {
  return {};
}

export const MsgSellNFTResponse = {
  encode(_: MsgSellNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSellNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgSellNFTResponse();
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

  fromJSON(_: any): MsgSellNFTResponse {
    return {};
  },

  toJSON(_: MsgSellNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgSellNFTResponse>, I>>(_: I): MsgSellNFTResponse {
    const message = createBaseMsgSellNFTResponse();
    return message;
  },
};

function createBaseMsgBuyNFT(): MsgBuyNFT {
  return { id: "", denomId: "", buyer: "" };
}

export const MsgBuyNFT = {
  encode(message: MsgBuyNFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.denomId !== "") {
      writer.uint32(18).string(message.denomId);
    }
    if (message.buyer !== "") {
      writer.uint32(26).string(message.buyer);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyNFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuyNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.denomId = reader.string();
          break;
        case 3:
          message.buyer = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBuyNFT {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      buyer: isSet(object.buyer) ? String(object.buyer) : "",
    };
  },

  toJSON(message: MsgBuyNFT): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.buyer !== undefined && (obj.buyer = message.buyer);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBuyNFT>, I>>(object: I): MsgBuyNFT {
    const message = createBaseMsgBuyNFT();
    message.id = object.id ?? "";
    message.denomId = object.denomId ?? "";
    message.buyer = object.buyer ?? "";
    return message;
  },
};

function createBaseMsgBuyNFTResponse(): MsgBuyNFTResponse {
  return {};
}

export const MsgBuyNFTResponse = {
  encode(_: MsgBuyNFTResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgBuyNFTResponse();
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

  fromJSON(_: any): MsgBuyNFTResponse {
    return {};
  },

  toJSON(_: MsgBuyNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgBuyNFTResponse>, I>>(_: I): MsgBuyNFTResponse {
    const message = createBaseMsgBuyNFTResponse();
    return message;
  },
};

function createBaseMsgCreateCommunity(): MsgCreateCommunity {
  return { name: "", description: "", creator: "", previewUri: "", id: "" };
}

export const MsgCreateCommunity = {
  encode(message: MsgCreateCommunity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }
    if (message.previewUri !== "") {
      writer.uint32(34).string(message.previewUri);
    }
    if (message.id !== "") {
      writer.uint32(42).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCommunity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCommunity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.creator = reader.string();
          break;
        case 4:
          message.previewUri = reader.string();
          break;
        case 5:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCommunity {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      previewUri: isSet(object.previewUri) ? String(object.previewUri) : "",
      id: isSet(object.id) ? String(object.id) : "",
    };
  },

  toJSON(message: MsgCreateCommunity): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.creator !== undefined && (obj.creator = message.creator);
    message.previewUri !== undefined && (obj.previewUri = message.previewUri);
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateCommunity>, I>>(object: I): MsgCreateCommunity {
    const message = createBaseMsgCreateCommunity();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.creator = object.creator ?? "";
    message.previewUri = object.previewUri ?? "";
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseMsgCreateCommunityResponse(): MsgCreateCommunityResponse {
  return { id: "" };
}

export const MsgCreateCommunityResponse = {
  encode(message: MsgCreateCommunityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateCommunityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgCreateCommunityResponse();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateCommunityResponse {
    return { id: isSet(object.id) ? String(object.id) : "" };
  },

  toJSON(message: MsgCreateCommunityResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgCreateCommunityResponse>, I>>(object: I): MsgCreateCommunityResponse {
    const message = createBaseMsgCreateCommunityResponse();
    message.id = object.id ?? "";
    return message;
  },
};

function createBaseMsgJoinCommunity(): MsgJoinCommunity {
  return { communityId: "", address: "" };
}

export const MsgJoinCommunity = {
  encode(message: MsgJoinCommunity, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.communityId !== "") {
      writer.uint32(10).string(message.communityId);
    }
    if (message.address !== "") {
      writer.uint32(18).string(message.address);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinCommunity {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinCommunity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.communityId = reader.string();
          break;
        case 2:
          message.address = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgJoinCommunity {
    return {
      communityId: isSet(object.communityId) ? String(object.communityId) : "",
      address: isSet(object.address) ? String(object.address) : "",
    };
  },

  toJSON(message: MsgJoinCommunity): unknown {
    const obj: any = {};
    message.communityId !== undefined && (obj.communityId = message.communityId);
    message.address !== undefined && (obj.address = message.address);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgJoinCommunity>, I>>(object: I): MsgJoinCommunity {
    const message = createBaseMsgJoinCommunity();
    message.communityId = object.communityId ?? "";
    message.address = object.address ?? "";
    return message;
  },
};

function createBaseMsgJoinCommunityResponse(): MsgJoinCommunityResponse {
  return {};
}

export const MsgJoinCommunityResponse = {
  encode(_: MsgJoinCommunityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgJoinCommunityResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMsgJoinCommunityResponse();
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

  fromJSON(_: any): MsgJoinCommunityResponse {
    return {};
  },

  toJSON(_: MsgJoinCommunityResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MsgJoinCommunityResponse>, I>>(_: I): MsgJoinCommunityResponse {
    const message = createBaseMsgJoinCommunityResponse();
    return message;
  },
};

export interface Msg {
  CreateDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse>;
  MintNFT(request: MsgMintNFT): Promise<MsgMintNFTResponse>;
  UpdateNFT(request: MsgUpdateNFT): Promise<MsgUpdateNFTResponse>;
  TransferNFT(request: MsgTransferNFT): Promise<MsgTransferNFTResponse>;
  SellNFT(request: MsgSellNFT): Promise<MsgSellNFTResponse>;
  BuyNFT(request: MsgBuyNFT): Promise<MsgBuyNFTResponse>;
  CreateCommunity(request: MsgCreateCommunity): Promise<MsgCreateCommunityResponse>;
  JoinCommunity(request: MsgJoinCommunity): Promise<MsgJoinCommunityResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.CreateDenom = this.CreateDenom.bind(this);
    this.MintNFT = this.MintNFT.bind(this);
    this.UpdateNFT = this.UpdateNFT.bind(this);
    this.TransferNFT = this.TransferNFT.bind(this);
    this.SellNFT = this.SellNFT.bind(this);
    this.BuyNFT = this.BuyNFT.bind(this);
    this.CreateCommunity = this.CreateCommunity.bind(this);
    this.JoinCommunity = this.JoinCommunity.bind(this);
  }
  CreateDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse> {
    const data = MsgCreateDenom.encode(request).finish();
    const promise = this.rpc.request("nft.v1beta1.Msg", "CreateDenom", data);
    return promise.then((data) => MsgCreateDenomResponse.decode(new _m0.Reader(data)));
  }

  MintNFT(request: MsgMintNFT): Promise<MsgMintNFTResponse> {
    const data = MsgMintNFT.encode(request).finish();
    const promise = this.rpc.request("nft.v1beta1.Msg", "MintNFT", data);
    return promise.then((data) => MsgMintNFTResponse.decode(new _m0.Reader(data)));
  }

  UpdateNFT(request: MsgUpdateNFT): Promise<MsgUpdateNFTResponse> {
    const data = MsgUpdateNFT.encode(request).finish();
    const promise = this.rpc.request("nft.v1beta1.Msg", "UpdateNFT", data);
    return promise.then((data) => MsgUpdateNFTResponse.decode(new _m0.Reader(data)));
  }

  TransferNFT(request: MsgTransferNFT): Promise<MsgTransferNFTResponse> {
    const data = MsgTransferNFT.encode(request).finish();
    const promise = this.rpc.request("nft.v1beta1.Msg", "TransferNFT", data);
    return promise.then((data) => MsgTransferNFTResponse.decode(new _m0.Reader(data)));
  }

  SellNFT(request: MsgSellNFT): Promise<MsgSellNFTResponse> {
    const data = MsgSellNFT.encode(request).finish();
    const promise = this.rpc.request("nft.v1beta1.Msg", "SellNFT", data);
    return promise.then((data) => MsgSellNFTResponse.decode(new _m0.Reader(data)));
  }

  BuyNFT(request: MsgBuyNFT): Promise<MsgBuyNFTResponse> {
    const data = MsgBuyNFT.encode(request).finish();
    const promise = this.rpc.request("nft.v1beta1.Msg", "BuyNFT", data);
    return promise.then((data) => MsgBuyNFTResponse.decode(new _m0.Reader(data)));
  }

  CreateCommunity(request: MsgCreateCommunity): Promise<MsgCreateCommunityResponse> {
    const data = MsgCreateCommunity.encode(request).finish();
    const promise = this.rpc.request("nft.v1beta1.Msg", "CreateCommunity", data);
    return promise.then((data) => MsgCreateCommunityResponse.decode(new _m0.Reader(data)));
  }

  JoinCommunity(request: MsgJoinCommunity): Promise<MsgJoinCommunityResponse> {
    const data = MsgJoinCommunity.encode(request).finish();
    const promise = this.rpc.request("nft.v1beta1.Msg", "JoinCommunity", data);
    return promise.then((data) => MsgJoinCommunityResponse.decode(new _m0.Reader(data)));
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
