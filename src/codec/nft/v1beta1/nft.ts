/* eslint-disable */
import Long from "long";
import _m0 from "protobufjs/minimal";
import { Timestamp } from "../../google/protobuf/timestamp";

export const protobufPackage = "nft.v1beta1";

export interface Collection {
  denom?: Denom;
  nfts: NFT[];
}

export interface IDCollection {
  denomId: string;
  nftIds: string[];
}

export interface Denom {
  id: string;
  name: string;
  symbol: string;
  creator: string;
  description: string;
  previewUri: string;
  dependentDenoms: string[];
  communityId: string;
}

export interface Metadata {
  name: string;
  description: string;
  mediaUri: string;
  previewUri: string;
}

export interface NFT {
  id: string;
  metadata?: Metadata;
  owner: string;
  transferable: boolean;
  royalties: string;
  creator: string;
  listed: boolean;
  createdAt?: Date;
  data: string;
}

export interface Owner {
  address: string;
  idCollections: IDCollection[];
}

function createBaseCollection(): Collection {
  return { denom: undefined, nfts: [] };
}

export const Collection = {
  encode(message: Collection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== undefined) {
      Denom.encode(message.denom, writer.uint32(10).fork()).ldelim();
    }
    for (const v of message.nfts) {
      NFT.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Collection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseCollection();
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

  fromJSON(object: any): Collection {
    return {
      denom: isSet(object.denom) ? Denom.fromJSON(object.denom) : undefined,
      nfts: Array.isArray(object?.nfts) ? object.nfts.map((e: any) => NFT.fromJSON(e)) : [],
    };
  },

  toJSON(message: Collection): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom ? Denom.toJSON(message.denom) : undefined);
    if (message.nfts) {
      obj.nfts = message.nfts.map((e) => e ? NFT.toJSON(e) : undefined);
    } else {
      obj.nfts = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Collection>, I>>(object: I): Collection {
    const message = createBaseCollection();
    message.denom = (object.denom !== undefined && object.denom !== null) ? Denom.fromPartial(object.denom) : undefined;
    message.nfts = object.nfts?.map((e) => NFT.fromPartial(e)) || [];
    return message;
  },
};

function createBaseIDCollection(): IDCollection {
  return { denomId: "", nftIds: [] };
}

export const IDCollection = {
  encode(message: IDCollection, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denomId !== "") {
      writer.uint32(10).string(message.denomId);
    }
    for (const v of message.nftIds) {
      writer.uint32(18).string(v!);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): IDCollection {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseIDCollection();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denomId = reader.string();
          break;
        case 2:
          message.nftIds.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): IDCollection {
    return {
      denomId: isSet(object.denomId) ? String(object.denomId) : "",
      nftIds: Array.isArray(object?.nftIds) ? object.nftIds.map((e: any) => String(e)) : [],
    };
  },

  toJSON(message: IDCollection): unknown {
    const obj: any = {};
    message.denomId !== undefined && (obj.denomId = message.denomId);
    if (message.nftIds) {
      obj.nftIds = message.nftIds.map((e) => e);
    } else {
      obj.nftIds = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<IDCollection>, I>>(object: I): IDCollection {
    const message = createBaseIDCollection();
    message.denomId = object.denomId ?? "";
    message.nftIds = object.nftIds?.map((e) => e) || [];
    return message;
  },
};

function createBaseDenom(): Denom {
  return {
    id: "",
    name: "",
    symbol: "",
    creator: "",
    description: "",
    previewUri: "",
    dependentDenoms: [],
    communityId: "",
  };
}

export const Denom = {
  encode(message: Denom, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.name !== "") {
      writer.uint32(18).string(message.name);
    }
    if (message.symbol !== "") {
      writer.uint32(26).string(message.symbol);
    }
    if (message.creator !== "") {
      writer.uint32(34).string(message.creator);
    }
    if (message.description !== "") {
      writer.uint32(42).string(message.description);
    }
    if (message.previewUri !== "") {
      writer.uint32(50).string(message.previewUri);
    }
    for (const v of message.dependentDenoms) {
      writer.uint32(58).string(v!);
    }
    if (message.communityId !== "") {
      writer.uint32(66).string(message.communityId);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Denom {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDenom();
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
          message.creator = reader.string();
          break;
        case 5:
          message.description = reader.string();
          break;
        case 6:
          message.previewUri = reader.string();
          break;
        case 7:
          message.dependentDenoms.push(reader.string());
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

  fromJSON(object: any): Denom {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      name: isSet(object.name) ? String(object.name) : "",
      symbol: isSet(object.symbol) ? String(object.symbol) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      description: isSet(object.description) ? String(object.description) : "",
      previewUri: isSet(object.previewUri) ? String(object.previewUri) : "",
      dependentDenoms: Array.isArray(object?.dependentDenoms) ? object.dependentDenoms.map((e: any) => String(e)) : [],
      communityId: isSet(object.communityId) ? String(object.communityId) : "",
    };
  },

  toJSON(message: Denom): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.name !== undefined && (obj.name = message.name);
    message.symbol !== undefined && (obj.symbol = message.symbol);
    message.creator !== undefined && (obj.creator = message.creator);
    message.description !== undefined && (obj.description = message.description);
    message.previewUri !== undefined && (obj.previewUri = message.previewUri);
    if (message.dependentDenoms) {
      obj.dependentDenoms = message.dependentDenoms.map((e) => e);
    } else {
      obj.dependentDenoms = [];
    }
    message.communityId !== undefined && (obj.communityId = message.communityId);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Denom>, I>>(object: I): Denom {
    const message = createBaseDenom();
    message.id = object.id ?? "";
    message.name = object.name ?? "";
    message.symbol = object.symbol ?? "";
    message.creator = object.creator ?? "";
    message.description = object.description ?? "";
    message.previewUri = object.previewUri ?? "";
    message.dependentDenoms = object.dependentDenoms?.map((e) => e) || [];
    message.communityId = object.communityId ?? "";
    return message;
  },
};

function createBaseMetadata(): Metadata {
  return { name: "", description: "", mediaUri: "", previewUri: "" };
}

export const Metadata = {
  encode(message: Metadata, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.name !== "") {
      writer.uint32(10).string(message.name);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.mediaUri !== "") {
      writer.uint32(26).string(message.mediaUri);
    }
    if (message.previewUri !== "") {
      writer.uint32(34).string(message.previewUri);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Metadata {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMetadata();
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
          message.mediaUri = reader.string();
          break;
        case 4:
          message.previewUri = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Metadata {
    return {
      name: isSet(object.name) ? String(object.name) : "",
      description: isSet(object.description) ? String(object.description) : "",
      mediaUri: isSet(object.mediaUri) ? String(object.mediaUri) : "",
      previewUri: isSet(object.previewUri) ? String(object.previewUri) : "",
    };
  },

  toJSON(message: Metadata): unknown {
    const obj: any = {};
    message.name !== undefined && (obj.name = message.name);
    message.description !== undefined && (obj.description = message.description);
    message.mediaUri !== undefined && (obj.mediaUri = message.mediaUri);
    message.previewUri !== undefined && (obj.previewUri = message.previewUri);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Metadata>, I>>(object: I): Metadata {
    const message = createBaseMetadata();
    message.name = object.name ?? "";
    message.description = object.description ?? "";
    message.mediaUri = object.mediaUri ?? "";
    message.previewUri = object.previewUri ?? "";
    return message;
  },
};

function createBaseNFT(): NFT {
  return {
    id: "",
    metadata: undefined,
    owner: "",
    transferable: false,
    royalties: "",
    creator: "",
    listed: false,
    createdAt: undefined,
    data: "",
  };
}

export const NFT = {
  encode(message: NFT, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.id !== "") {
      writer.uint32(10).string(message.id);
    }
    if (message.metadata !== undefined) {
      Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
    }
    if (message.owner !== "") {
      writer.uint32(26).string(message.owner);
    }
    if (message.transferable === true) {
      writer.uint32(32).bool(message.transferable);
    }
    if (message.royalties !== "") {
      writer.uint32(42).string(message.royalties);
    }
    if (message.creator !== "") {
      writer.uint32(50).string(message.creator);
    }
    if (message.listed === true) {
      writer.uint32(56).bool(message.listed);
    }
    if (message.createdAt !== undefined) {
      Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(66).fork()).ldelim();
    }
    if (message.data !== "") {
      writer.uint32(74).string(message.data);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): NFT {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseNFT();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.string();
          break;
        case 2:
          message.metadata = Metadata.decode(reader, reader.uint32());
          break;
        case 3:
          message.owner = reader.string();
          break;
        case 4:
          message.transferable = reader.bool();
          break;
        case 5:
          message.royalties = reader.string();
          break;
        case 6:
          message.creator = reader.string();
          break;
        case 7:
          message.listed = reader.bool();
          break;
        case 8:
          message.createdAt = fromTimestamp(Timestamp.decode(reader, reader.uint32()));
          break;
        case 9:
          message.data = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): NFT {
    return {
      id: isSet(object.id) ? String(object.id) : "",
      metadata: isSet(object.metadata) ? Metadata.fromJSON(object.metadata) : undefined,
      owner: isSet(object.owner) ? String(object.owner) : "",
      transferable: isSet(object.transferable) ? Boolean(object.transferable) : false,
      royalties: isSet(object.royalties) ? String(object.royalties) : "",
      creator: isSet(object.creator) ? String(object.creator) : "",
      listed: isSet(object.listed) ? Boolean(object.listed) : false,
      createdAt: isSet(object.createdAt) ? fromJsonTimestamp(object.createdAt) : undefined,
      data: isSet(object.data) ? String(object.data) : "",
    };
  },

  toJSON(message: NFT): unknown {
    const obj: any = {};
    message.id !== undefined && (obj.id = message.id);
    message.metadata !== undefined && (obj.metadata = message.metadata ? Metadata.toJSON(message.metadata) : undefined);
    message.owner !== undefined && (obj.owner = message.owner);
    message.transferable !== undefined && (obj.transferable = message.transferable);
    message.royalties !== undefined && (obj.royalties = message.royalties);
    message.creator !== undefined && (obj.creator = message.creator);
    message.listed !== undefined && (obj.listed = message.listed);
    message.createdAt !== undefined && (obj.createdAt = message.createdAt.toISOString());
    message.data !== undefined && (obj.data = message.data);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<NFT>, I>>(object: I): NFT {
    const message = createBaseNFT();
    message.id = object.id ?? "";
    message.metadata = (object.metadata !== undefined && object.metadata !== null)
      ? Metadata.fromPartial(object.metadata)
      : undefined;
    message.owner = object.owner ?? "";
    message.transferable = object.transferable ?? false;
    message.royalties = object.royalties ?? "";
    message.creator = object.creator ?? "";
    message.listed = object.listed ?? false;
    message.createdAt = object.createdAt ?? undefined;
    message.data = object.data ?? "";
    return message;
  },
};

function createBaseOwner(): Owner {
  return { address: "", idCollections: [] };
}

export const Owner = {
  encode(message: Owner, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.address !== "") {
      writer.uint32(10).string(message.address);
    }
    for (const v of message.idCollections) {
      IDCollection.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Owner {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseOwner();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.address = reader.string();
          break;
        case 2:
          message.idCollections.push(IDCollection.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Owner {
    return {
      address: isSet(object.address) ? String(object.address) : "",
      idCollections: Array.isArray(object?.idCollections)
        ? object.idCollections.map((e: any) => IDCollection.fromJSON(e))
        : [],
    };
  },

  toJSON(message: Owner): unknown {
    const obj: any = {};
    message.address !== undefined && (obj.address = message.address);
    if (message.idCollections) {
      obj.idCollections = message.idCollections.map((e) => e ? IDCollection.toJSON(e) : undefined);
    } else {
      obj.idCollections = [];
    }
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Owner>, I>>(object: I): Owner {
    const message = createBaseOwner();
    message.address = object.address ?? "";
    message.idCollections = object.idCollections?.map((e) => IDCollection.fromPartial(e)) || [];
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

function toTimestamp(date: Date): Timestamp {
  const seconds = numberToLong(date.getTime() / 1_000);
  const nanos = (date.getTime() % 1_000) * 1_000_000;
  return { seconds, nanos };
}

function fromTimestamp(t: Timestamp): Date {
  let millis = t.seconds.toNumber() * 1_000;
  millis += t.nanos / 1_000_000;
  return new Date(millis);
}

function fromJsonTimestamp(o: any): Date {
  if (o instanceof Date) {
    return o;
  } else if (typeof o === "string") {
    return new Date(o);
  } else {
    return fromTimestamp(Timestamp.fromJSON(o));
  }
}

function numberToLong(number: number) {
  return Long.fromNumber(number);
}

if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
