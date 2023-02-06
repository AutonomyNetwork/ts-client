/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";

export const protobufPackage = "nft.v1beta1";

export interface Community {
  name: string;
  id: string;
  creator: string;
  description: string;
  previewUri: string;
}

export interface CommunityMembers {
  communityId: string;
  addresses: string[];
}

function createBaseCommunity(): Community {
  return { name: "", id: "", creator: "", description: "", previewUri: "" };
}

export const Community = {
  encode(message: Community, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.id !== "") {
      writer.uint32(18).string(message.id);
    }
    if (message.creator !== "") {
      writer.uint32(26).string(message.creator);
    }
    if (message.description !== "") {
      writer.uint32(34).string(message.description);
    }
    if (message.previewUri !== "") {
      writer.uint32(42).string(message.previewUri);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Community {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommunity();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.name = reader.string();
          break;
        case 2:
          message.id = reader.string();
          break;
        case 3:
          message.creator = reader.string();
          break;
        case 4:
          message.description = reader.string();
          break;
        case 5:
          message.previewUri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Community {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      id: isSet(object.id) ? String(object.id) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      description: isSet(object.description) ? String(object.description) : "",
      previewUri: isSet(object.previewUri) ? String(object.previewUri) : "",
    };
  },

  toJSON(message: Community): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.id !== undefined && (obj.id = message.id);
    message.creator !== undefined && (obj.creator = message.creator);
    message.description !== undefined && (obj.description = message.description);
    message.previewUri !== undefined && (obj.previewUri = message.previewUri);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Community>, I>>(object: I): Community {
    const message = createBaseCommunity();
    message.name = object.name ?? "";
    message.id = object.id ?? "";
    message.creator = object.creator ?? "";
    message.description = object.description ?? "";
    message.previewUri = object.previewUri ?? "";
    return message;
  },
};

function createBaseCommunityMembers(): CommunityMembers {
  return { communityId: "", addresses: [] };
}

export const CommunityMembers = {
  encode(message: CommunityMembers, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.communityId !== "") {
      writer.uint32(10).string(message.communityId);
    }
    for (const v of message.addresses) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): CommunityMembers {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCommunityMembers();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.communityId = reader.string();
          break;
        case 2:
          message.addresses.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CommunityMembers {
    return {
      communityId: isSet(object.communityId) ? String(object.communityId) : "",
      addresses: Array.isArray(object?.addresses) ? object.addresses.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: CommunityMembers): unknown {
    const obj: any = {};
    message.communityId !== undefined && (obj.communityId = message.communityId);
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<CommunityMembers>, I>>(object: I): CommunityMembers {
    const message = createBaseCommunityMembers();
    message.communityId = object.communityId ?? "";
    message.addresses = object.addresses?.map((e) => e) || [];
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
