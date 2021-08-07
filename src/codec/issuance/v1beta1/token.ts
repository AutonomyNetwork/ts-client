/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'issuance.v1beta1';

export interface Token {
  creator: string;
  id: Long;
  denom: string;
  displayName: string;
  initialSupply: Long;
  holders: Long;
}

export interface TokenDenoms {
  denoms: string[];
}

const baseToken: object = {
  creator: '',
  id: Long.UZERO,
  denom: '',
  displayName: '',
  initialSupply: Long.UZERO,
  holders: Long.UZERO,
};

export const Token = {
  encode(message: Token, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.denom !== '') {
      writer.uint32(26).string(message.denom);
    }
    if (message.displayName !== '') {
      writer.uint32(34).string(message.displayName);
    }
    if (!message.initialSupply.isZero()) {
      writer.uint32(40).uint64(message.initialSupply);
    }
    if (!message.holders.isZero()) {
      writer.uint32(48).uint64(message.holders);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Token {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseToken } as Token;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64() as Long;
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.displayName = reader.string();
          break;
        case 5:
          message.initialSupply = reader.uint64() as Long;
          break;
        case 6:
          message.holders = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Token {
    const message = { ...baseToken } as Token;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = '';
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = Long.fromString(object.id);
    } else {
      message.id = Long.UZERO;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = '';
    }
    if (object.displayName !== undefined && object.displayName !== null) {
      message.displayName = String(object.displayName);
    } else {
      message.displayName = '';
    }
    if (object.initialSupply !== undefined && object.initialSupply !== null) {
      message.initialSupply = Long.fromString(object.initialSupply);
    } else {
      message.initialSupply = Long.UZERO;
    }
    if (object.holders !== undefined && object.holders !== null) {
      message.holders = Long.fromString(object.holders);
    } else {
      message.holders = Long.UZERO;
    }
    return message;
  },

  toJSON(message: Token): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.displayName !== undefined && (obj.displayName = message.displayName);
    message.initialSupply !== undefined && (obj.initialSupply = (message.initialSupply || Long.UZERO).toString());
    message.holders !== undefined && (obj.holders = (message.holders || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<Token>): Token {
    const message = { ...baseToken } as Token;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = '';
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id as Long;
    } else {
      message.id = Long.UZERO;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = '';
    }
    if (object.displayName !== undefined && object.displayName !== null) {
      message.displayName = object.displayName;
    } else {
      message.displayName = '';
    }
    if (object.initialSupply !== undefined && object.initialSupply !== null) {
      message.initialSupply = object.initialSupply as Long;
    } else {
      message.initialSupply = Long.UZERO;
    }
    if (object.holders !== undefined && object.holders !== null) {
      message.holders = object.holders as Long;
    } else {
      message.holders = Long.UZERO;
    }
    return message;
  },
};

const baseTokenDenoms: object = { denoms: '' };

export const TokenDenoms = {
  encode(message: TokenDenoms, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.denoms) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): TokenDenoms {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTokenDenoms } as TokenDenoms;
    message.denoms = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denoms.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TokenDenoms {
    const message = { ...baseTokenDenoms } as TokenDenoms;
    message.denoms = [];
    if (object.denoms !== undefined && object.denoms !== null) {
      for (const e of object.denoms) {
        message.denoms.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: TokenDenoms): unknown {
    const obj: any = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map((e) => e);
    } else {
      obj.denoms = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<TokenDenoms>): TokenDenoms {
    const message = { ...baseTokenDenoms } as TokenDenoms;
    message.denoms = [];
    if (object.denoms !== undefined && object.denoms !== null) {
      for (const e of object.denoms) {
        message.denoms.push(e);
      }
    }
    return message;
  },
};

type Builtin = Date | Function | Uint8Array | string | number | boolean | undefined | Long;
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
