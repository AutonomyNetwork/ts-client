/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Metadata } from "../../nft/v1beta1/nft";

export const protobufPackage = "nft.v1beta1";

export interface MsgCreateDenom {
  id: string;
  name: string;
  symbol: string;
  description: string;
  previewUri: string;
  creator: string;
}

export interface MsgCreateDenomResponse {}

export interface MsgMintNFT {
  id: string;
  denomId: string;
  metadata?: Metadata;
  data: string;
  transferable: boolean;
  creator: string;
  royalties: string;
}

export interface MsgMintNFTResponse {}

export interface MsgUpdateNFT {
  id: string;
  denomID: string;
  royalties: string;
  owner: string;
  name: string;
  description: string;
}

export interface MsgUpdateNFTResponse {}

export interface MsgTransferNFT {
  id: string;
  denomId: string;
  sender: string;
  recipient: string;
}

export interface MsgTransferNFTResponse {}

export interface MsgSellNFT {
  id: string;
  denomId: string;
  price: string;
  seller: string;
}

export interface MsgSellNFTResponse {}

export interface MsgBuyNFT {
  id: string;
  denomId: string;
  buyer: string;
}

export interface MsgBuyNFTResponse {}

const baseMsgCreateDenom: object = {
  id: "",
  name: "",
  symbol: "",
  description: "",
  previewUri: "",
  creator: "",
};

export const MsgCreateDenom = {
  encode(
    message: MsgCreateDenom,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgCreateDenom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateDenom } as MsgCreateDenom;
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
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateDenom {
    const message = { ...baseMsgCreateDenom } as MsgCreateDenom;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = String(object.symbol);
    } else {
      message.symbol = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.previewUri !== undefined && object.previewUri !== null) {
      message.previewUri = String(object.previewUri);
    } else {
      message.previewUri = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    return message;
  },

  toJSON(message: MsgCreateDenom): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.description !== undefined &&
      (obj.description = message.description);
    message.previewUri !== undefined && (obj.previewUri = message.previewUri);
    message.creator !== undefined && (obj.creator = message.creator);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateDenom>): MsgCreateDenom {
    const message = { ...baseMsgCreateDenom } as MsgCreateDenom;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.symbol !== undefined && object.symbol !== null) {
      message.symbol = object.symbol;
    } else {
      message.symbol = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.previewUri !== undefined && object.previewUri !== null) {
      message.previewUri = object.previewUri;
    } else {
      message.previewUri = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    return message;
  },
};

const baseMsgCreateDenomResponse: object = {};

export const MsgCreateDenomResponse = {
  encode(
    _: MsgCreateDenomResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgCreateDenomResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateDenomResponse } as MsgCreateDenomResponse;
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
    const message = { ...baseMsgCreateDenomResponse } as MsgCreateDenomResponse;
    return message;
  },

  toJSON(_: MsgCreateDenomResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgCreateDenomResponse>): MsgCreateDenomResponse {
    const message = { ...baseMsgCreateDenomResponse } as MsgCreateDenomResponse;
    return message;
  },
};

const baseMsgMintNFT: object = {
  id: "",
  denomId: "",
  data: "",
  transferable: false,
  creator: "",
  royalties: "",
};

export const MsgMintNFT = {
  encode(
    message: MsgMintNFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseMsgMintNFT } as MsgMintNFT;
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
    const message = { ...baseMsgMintNFT } as MsgMintNFT;
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
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromJSON(object.metadata);
    } else {
      message.metadata = undefined;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = String(object.data);
    } else {
      message.data = "";
    }
    if (object.transferable !== undefined && object.transferable !== null) {
      message.transferable = Boolean(object.transferable);
    } else {
      message.transferable = false;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
    }
    if (object.royalties !== undefined && object.royalties !== null) {
      message.royalties = String(object.royalties);
    } else {
      message.royalties = "";
    }
    return message;
  },

  toJSON(message: MsgMintNFT): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.metadata !== undefined &&
      (obj.metadata = message.metadata
        ? Metadata.toJSON(message.metadata)
        : undefined);
    message.data !== undefined && (obj.data = message.data);
    message.transferable !== undefined &&
      (obj.transferable = message.transferable);
    message.creator !== undefined && (obj.creator = message.creator);
    message.royalties !== undefined && (obj.royalties = message.royalties);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMintNFT>): MsgMintNFT {
    const message = { ...baseMsgMintNFT } as MsgMintNFT;
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
    if (object.metadata !== undefined && object.metadata !== null) {
      message.metadata = Metadata.fromPartial(object.metadata);
    } else {
      message.metadata = undefined;
    }
    if (object.data !== undefined && object.data !== null) {
      message.data = object.data;
    } else {
      message.data = "";
    }
    if (object.transferable !== undefined && object.transferable !== null) {
      message.transferable = object.transferable;
    } else {
      message.transferable = false;
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
    }
    if (object.royalties !== undefined && object.royalties !== null) {
      message.royalties = object.royalties;
    } else {
      message.royalties = "";
    }
    return message;
  },
};

const baseMsgMintNFTResponse: object = {};

export const MsgMintNFTResponse = {
  encode(
    _: MsgMintNFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgMintNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMintNFTResponse } as MsgMintNFTResponse;
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
    const message = { ...baseMsgMintNFTResponse } as MsgMintNFTResponse;
    return message;
  },

  toJSON(_: MsgMintNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgMintNFTResponse>): MsgMintNFTResponse {
    const message = { ...baseMsgMintNFTResponse } as MsgMintNFTResponse;
    return message;
  },
};

const baseMsgUpdateNFT: object = {
  id: "",
  denomID: "",
  royalties: "",
  owner: "",
  name: "",
  description: "",
};

export const MsgUpdateNFT = {
  encode(
    message: MsgUpdateNFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseMsgUpdateNFT } as MsgUpdateNFT;
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
    const message = { ...baseMsgUpdateNFT } as MsgUpdateNFT;
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.denomID !== undefined && object.denomID !== null) {
      message.denomID = String(object.denomID);
    } else {
      message.denomID = "";
    }
    if (object.royalties !== undefined && object.royalties !== null) {
      message.royalties = String(object.royalties);
    } else {
      message.royalties = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = String(object.owner);
    } else {
      message.owner = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    return message;
  },

  toJSON(message: MsgUpdateNFT): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.denomID !== undefined && (obj.denomID = message.denomID);
    message.royalties !== undefined && (obj.royalties = message.royalties);
    message.owner !== undefined && (obj.owner = message.owner);
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined &&
      (obj.description = message.description);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgUpdateNFT>): MsgUpdateNFT {
    const message = { ...baseMsgUpdateNFT } as MsgUpdateNFT;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.denomID !== undefined && object.denomID !== null) {
      message.denomID = object.denomID;
    } else {
      message.denomID = "";
    }
    if (object.royalties !== undefined && object.royalties !== null) {
      message.royalties = object.royalties;
    } else {
      message.royalties = "";
    }
    if (object.owner !== undefined && object.owner !== null) {
      message.owner = object.owner;
    } else {
      message.owner = "";
    }
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    return message;
  },
};

const baseMsgUpdateNFTResponse: object = {};

export const MsgUpdateNFTResponse = {
  encode(
    _: MsgUpdateNFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgUpdateNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgUpdateNFTResponse } as MsgUpdateNFTResponse;
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
    const message = { ...baseMsgUpdateNFTResponse } as MsgUpdateNFTResponse;
    return message;
  },

  toJSON(_: MsgUpdateNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgUpdateNFTResponse>): MsgUpdateNFTResponse {
    const message = { ...baseMsgUpdateNFTResponse } as MsgUpdateNFTResponse;
    return message;
  },
};

const baseMsgTransferNFT: object = {
  id: "",
  denomId: "",
  sender: "",
  recipient: "",
};

export const MsgTransferNFT = {
  encode(
    message: MsgTransferNFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseMsgTransferNFT } as MsgTransferNFT;
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
    const message = { ...baseMsgTransferNFT } as MsgTransferNFT;
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
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = String(object.recipient);
    } else {
      message.recipient = "";
    }
    return message;
  },

  toJSON(message: MsgTransferNFT): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.sender !== undefined && (obj.sender = message.sender);
    message.recipient !== undefined && (obj.recipient = message.recipient);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgTransferNFT>): MsgTransferNFT {
    const message = { ...baseMsgTransferNFT } as MsgTransferNFT;
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
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.recipient !== undefined && object.recipient !== null) {
      message.recipient = object.recipient;
    } else {
      message.recipient = "";
    }
    return message;
  },
};

const baseMsgTransferNFTResponse: object = {};

export const MsgTransferNFTResponse = {
  encode(
    _: MsgTransferNFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MsgTransferNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgTransferNFTResponse } as MsgTransferNFTResponse;
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
    const message = { ...baseMsgTransferNFTResponse } as MsgTransferNFTResponse;
    return message;
  },

  toJSON(_: MsgTransferNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgTransferNFTResponse>): MsgTransferNFTResponse {
    const message = { ...baseMsgTransferNFTResponse } as MsgTransferNFTResponse;
    return message;
  },
};

const baseMsgSellNFT: object = { id: "", denomId: "", price: "", seller: "" };

export const MsgSellNFT = {
  encode(
    message: MsgSellNFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseMsgSellNFT } as MsgSellNFT;
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
    const message = { ...baseMsgSellNFT } as MsgSellNFT;
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
    return message;
  },

  toJSON(message: MsgSellNFT): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.price !== undefined && (obj.price = message.price);
    message.seller !== undefined && (obj.seller = message.seller);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSellNFT>): MsgSellNFT {
    const message = { ...baseMsgSellNFT } as MsgSellNFT;
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
    return message;
  },
};

const baseMsgSellNFTResponse: object = {};

export const MsgSellNFTResponse = {
  encode(
    _: MsgSellNFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgSellNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSellNFTResponse } as MsgSellNFTResponse;
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
    const message = { ...baseMsgSellNFTResponse } as MsgSellNFTResponse;
    return message;
  },

  toJSON(_: MsgSellNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgSellNFTResponse>): MsgSellNFTResponse {
    const message = { ...baseMsgSellNFTResponse } as MsgSellNFTResponse;
    return message;
  },
};

const baseMsgBuyNFT: object = { id: "", denomId: "", buyer: "" };

export const MsgBuyNFT = {
  encode(
    message: MsgBuyNFT,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseMsgBuyNFT } as MsgBuyNFT;
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
    const message = { ...baseMsgBuyNFT } as MsgBuyNFT;
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
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = String(object.buyer);
    } else {
      message.buyer = "";
    }
    return message;
  },

  toJSON(message: MsgBuyNFT): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.denomId !== undefined && (obj.denomId = message.denomId);
    message.buyer !== undefined && (obj.buyer = message.buyer);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBuyNFT>): MsgBuyNFT {
    const message = { ...baseMsgBuyNFT } as MsgBuyNFT;
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
    if (object.buyer !== undefined && object.buyer !== null) {
      message.buyer = object.buyer;
    } else {
      message.buyer = "";
    }
    return message;
  },
};

const baseMsgBuyNFTResponse: object = {};

export const MsgBuyNFTResponse = {
  encode(
    _: MsgBuyNFTResponse,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgBuyNFTResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBuyNFTResponse } as MsgBuyNFTResponse;
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
    const message = { ...baseMsgBuyNFTResponse } as MsgBuyNFTResponse;
    return message;
  },

  toJSON(_: MsgBuyNFTResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgBuyNFTResponse>): MsgBuyNFTResponse {
    const message = { ...baseMsgBuyNFTResponse } as MsgBuyNFTResponse;
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
  }
  CreateDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse> {
    const data = MsgCreateDenom.encode(request).finish();
    const promise = this.rpc.request("nft.v1beta1.Msg", "CreateDenom", data);
    return promise.then((data) =>
      MsgCreateDenomResponse.decode(new _m0.Reader(data))
    );
  }

  MintNFT(request: MsgMintNFT): Promise<MsgMintNFTResponse> {
    const data = MsgMintNFT.encode(request).finish();
    const promise = this.rpc.request("nft.v1beta1.Msg", "MintNFT", data);
    return promise.then((data) =>
      MsgMintNFTResponse.decode(new _m0.Reader(data))
    );
  }

  UpdateNFT(request: MsgUpdateNFT): Promise<MsgUpdateNFTResponse> {
    const data = MsgUpdateNFT.encode(request).finish();
    const promise = this.rpc.request("nft.v1beta1.Msg", "UpdateNFT", data);
    return promise.then((data) =>
      MsgUpdateNFTResponse.decode(new _m0.Reader(data))
    );
  }

  TransferNFT(request: MsgTransferNFT): Promise<MsgTransferNFTResponse> {
    const data = MsgTransferNFT.encode(request).finish();
    const promise = this.rpc.request("nft.v1beta1.Msg", "TransferNFT", data);
    return promise.then((data) =>
      MsgTransferNFTResponse.decode(new _m0.Reader(data))
    );
  }

  SellNFT(request: MsgSellNFT): Promise<MsgSellNFTResponse> {
    const data = MsgSellNFT.encode(request).finish();
    const promise = this.rpc.request("nft.v1beta1.Msg", "SellNFT", data);
    return promise.then((data) =>
      MsgSellNFTResponse.decode(new _m0.Reader(data))
    );
  }

  BuyNFT(request: MsgBuyNFT): Promise<MsgBuyNFTResponse> {
    const data = MsgBuyNFT.encode(request).finish();
    const promise = this.rpc.request("nft.v1beta1.Msg", "BuyNFT", data);
    return promise.then((data) =>
      MsgBuyNFTResponse.decode(new _m0.Reader(data))
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
