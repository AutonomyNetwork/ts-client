/* eslint-disable */
import Long from 'long';
import _m0 from 'protobufjs/minimal';

export const protobufPackage = 'issuance.v1beta1';

/** this line is used by starport scaffolding # proto/tx/message */
export interface MsgIssueToken {
  creator: string;
  denom: string;
  displayName: string;
  decimals: Long;
  initialSupply: Long;
}

export interface MsgIssueTokenResponse {
  id: Long;
}

const baseMsgIssueToken: object = {
  creator: '',
  denom: '',
  displayName: '',
  decimals: Long.UZERO,
  initialSupply: Long.UZERO,
};

export const MsgIssueToken = {
  encode(message: MsgIssueToken, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== '') {
      writer.uint32(18).string(message.denom);
    }
    if (message.displayName !== '') {
      writer.uint32(26).string(message.displayName);
    }
    if (!message.decimals.isZero()) {
      writer.uint32(32).uint64(message.decimals);
    }
    if (!message.initialSupply.isZero()) {
      writer.uint32(40).uint64(message.initialSupply);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueToken {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgIssueToken } as MsgIssueToken;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.displayName = reader.string();
          break;
        case 4:
          message.decimals = reader.uint64() as Long;
          break;
        case 5:
          message.initialSupply = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgIssueToken {
    const message = { ...baseMsgIssueToken } as MsgIssueToken;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = '';
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
    if (object.decimals !== undefined && object.decimals !== null) {
      message.decimals = Long.fromString(object.decimals);
    } else {
      message.decimals = Long.UZERO;
    }
    if (object.initialSupply !== undefined && object.initialSupply !== null) {
      message.initialSupply = Long.fromString(object.initialSupply);
    } else {
      message.initialSupply = Long.UZERO;
    }
    return message;
  },

  toJSON(message: MsgIssueToken): unknown {
    const obj: any = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.displayName !== undefined && (obj.displayName = message.displayName);
    message.decimals !== undefined && (obj.decimals = (message.decimals || Long.UZERO).toString());
    message.initialSupply !== undefined && (obj.initialSupply = (message.initialSupply || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgIssueToken>): MsgIssueToken {
    const message = { ...baseMsgIssueToken } as MsgIssueToken;
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = '';
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
    if (object.decimals !== undefined && object.decimals !== null) {
      message.decimals = object.decimals as Long;
    } else {
      message.decimals = Long.UZERO;
    }
    if (object.initialSupply !== undefined && object.initialSupply !== null) {
      message.initialSupply = object.initialSupply as Long;
    } else {
      message.initialSupply = Long.UZERO;
    }
    return message;
  },
};

const baseMsgIssueTokenResponse: object = { id: Long.UZERO };

export const MsgIssueTokenResponse = {
  encode(message: MsgIssueTokenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MsgIssueTokenResponse {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgIssueTokenResponse } as MsgIssueTokenResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64() as Long;
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgIssueTokenResponse {
    const message = { ...baseMsgIssueTokenResponse } as MsgIssueTokenResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = Long.fromString(object.id);
    } else {
      message.id = Long.UZERO;
    }
    return message;
  },

  toJSON(message: MsgIssueTokenResponse): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = (message.id || Long.UZERO).toString());
    return obj;
  },

  fromPartial(object: DeepPartial<MsgIssueTokenResponse>): MsgIssueTokenResponse {
    const message = { ...baseMsgIssueTokenResponse } as MsgIssueTokenResponse;
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id as Long;
    } else {
      message.id = Long.UZERO;
    }
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** this line is used by starport scaffolding # proto/tx/rpc */
  IssueToken(request: MsgIssueToken): Promise<MsgIssueTokenResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.IssueToken = this.IssueToken.bind(this);
  }
  IssueToken(request: MsgIssueToken): Promise<MsgIssueTokenResponse> {
    const data = MsgIssueToken.encode(request).finish();
    const promise = this.rpc.request('issuance.v1beta1.Msg', 'IssueToken', data);
    return promise.then((data) => MsgIssueTokenResponse.decode(new _m0.Reader(data)));
  }
}

interface Rpc {
  request(service: string, method: string, data: Uint8Array): Promise<Uint8Array>;
}

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
