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

const baseCommunity: object = {
  name: "",
  id: "",
  creator: "",
  description: "",
  previewUri: "",
};

export const Community = {
  encode(
    message: Community,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseCommunity } as Community;
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
    const message = { ...baseCommunity } as Community;
    if (object.name !== undefined && object.name !== null) {
      message.name = String(object.name);
    } else {
      message.name = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = String(object.id);
    } else {
      message.id = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = "";
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
    return message;
  },

  toJSON(message: Community): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.id !== undefined && (obj.id = message.id);
    message.creator !== undefined && (obj.creator = message.creator);
    message.description !== undefined &&
      (obj.description = message.description);
    message.previewUri !== undefined && (obj.previewUri = message.previewUri);
    return obj;
  },

  fromPartial(object: DeepPartial<Community>): Community {
    const message = { ...baseCommunity } as Community;
    if (object.name !== undefined && object.name !== null) {
      message.name = object.name;
    } else {
      message.name = "";
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = "";
    }
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = "";
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
    return message;
  },
};

const baseCommunityMembers: object = { communityId: "", addresses: "" };

export const CommunityMembers = {
  encode(
    message: CommunityMembers,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
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
    const message = { ...baseCommunityMembers } as CommunityMembers;
    message.addresses = [];
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
    const message = { ...baseCommunityMembers } as CommunityMembers;
    message.addresses = [];
    if (object.communityId !== undefined && object.communityId !== null) {
      message.communityId = String(object.communityId);
    } else {
      message.communityId = "";
    }
    if (object.addresses !== undefined && object.addresses !== null) {
      for (const e of object.addresses) {
        message.addresses.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: CommunityMembers): unknown {
    const obj: any = {};
    message.communityId !== undefined &&
      (obj.communityId = message.communityId);
    if (message.addresses) {
      obj.addresses = message.addresses.map((e) => e);
    } else {
      obj.addresses = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<CommunityMembers>): CommunityMembers {
    const message = { ...baseCommunityMembers } as CommunityMembers;
    message.addresses = [];
    if (object.communityId !== undefined && object.communityId !== null) {
      message.communityId = object.communityId;
    } else {
      message.communityId = "";
    }
    if (object.addresses !== undefined && object.addresses !== null) {
      for (const e of object.addresses) {
        message.addresses.push(e);
      }
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
