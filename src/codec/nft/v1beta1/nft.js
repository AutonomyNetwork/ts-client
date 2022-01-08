"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
/* eslint-disable */
var long_1 = require("long");
var minimal_1 = require("protobufjs/minimal");
var timestamp_1 = require("../../google/protobuf/timestamp");
exports.protobufPackage = "nft.v1beta1";
var baseCollection = {};
exports.Collection = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.denom !== undefined) {
            exports.Denom.encode(message.denom, writer.uint32(10).fork()).ldelim();
        }
        for (var _i = 0, _a = message.nfts; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.NFT.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseCollection);
        message.nfts = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = exports.Denom.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.nfts.push(exports.NFT.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseCollection);
        message.nfts = [];
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = exports.Denom.fromJSON(object.denom);
        }
        else {
            message.denom = undefined;
        }
        if (object.nfts !== undefined && object.nfts !== null) {
            for (var _i = 0, _a = object.nfts; _i < _a.length; _i++) {
                var e = _a[_i];
                message.nfts.push(exports.NFT.fromJSON(e));
            }
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.denom !== undefined &&
            (obj.denom = message.denom ? exports.Denom.toJSON(message.denom) : undefined);
        if (message.nfts) {
            obj.nfts = message.nfts.map(function (e) { return (e ? exports.NFT.toJSON(e) : undefined); });
        }
        else {
            obj.nfts = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseCollection);
        message.nfts = [];
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = exports.Denom.fromPartial(object.denom);
        }
        else {
            message.denom = undefined;
        }
        if (object.nfts !== undefined && object.nfts !== null) {
            for (var _i = 0, _a = object.nfts; _i < _a.length; _i++) {
                var e = _a[_i];
                message.nfts.push(exports.NFT.fromPartial(e));
            }
        }
        return message;
    }
};
var baseIDCollection = { denomId: "", nftIds: "" };
exports.IDCollection = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.denomId !== "") {
            writer.uint32(10).string(message.denomId);
        }
        for (var _i = 0, _a = message.nftIds; _i < _a.length; _i++) {
            var v = _a[_i];
            writer.uint32(18).string(v);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseIDCollection);
        message.nftIds = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseIDCollection);
        message.nftIds = [];
        if (object.denomId !== undefined && object.denomId !== null) {
            message.denomId = String(object.denomId);
        }
        else {
            message.denomId = "";
        }
        if (object.nftIds !== undefined && object.nftIds !== null) {
            for (var _i = 0, _a = object.nftIds; _i < _a.length; _i++) {
                var e = _a[_i];
                message.nftIds.push(String(e));
            }
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.denomId !== undefined && (obj.denomId = message.denomId);
        if (message.nftIds) {
            obj.nftIds = message.nftIds.map(function (e) { return e; });
        }
        else {
            obj.nftIds = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseIDCollection);
        message.nftIds = [];
        if (object.denomId !== undefined && object.denomId !== null) {
            message.denomId = object.denomId;
        }
        else {
            message.denomId = "";
        }
        if (object.nftIds !== undefined && object.nftIds !== null) {
            for (var _i = 0, _a = object.nftIds; _i < _a.length; _i++) {
                var e = _a[_i];
                message.nftIds.push(e);
            }
        }
        return message;
    }
};
var baseDenom = {
    id: "",
    name: "",
    symbol: "",
    creator: "",
    description: "",
    previewUri: ""
};
exports.Denom = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
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
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseDenom);
        while (reader.pos < end) {
            var tag = reader.uint32();
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
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseDenom);
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = String(object.symbol);
        }
        else {
            message.symbol = "";
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = "";
        }
        if (object.previewUri !== undefined && object.previewUri !== null) {
            message.previewUri = String(object.previewUri);
        }
        else {
            message.previewUri = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.creator !== undefined && (obj.creator = message.creator);
        message.description !== undefined &&
            (obj.description = message.description);
        message.previewUri !== undefined && (obj.previewUri = message.previewUri);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseDenom);
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = object.symbol;
        }
        else {
            message.symbol = "";
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = "";
        }
        if (object.previewUri !== undefined && object.previewUri !== null) {
            message.previewUri = object.previewUri;
        }
        else {
            message.previewUri = "";
        }
        return message;
    }
};
var baseMetadata = {
    name: "",
    description: "",
    mediaUri: "",
    previewUri: ""
};
exports.Metadata = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMetadata);
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseMetadata);
        if (object.name !== undefined && object.name !== null) {
            message.name = String(object.name);
        }
        else {
            message.name = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = String(object.description);
        }
        else {
            message.description = "";
        }
        if (object.mediaUri !== undefined && object.mediaUri !== null) {
            message.mediaUri = String(object.mediaUri);
        }
        else {
            message.mediaUri = "";
        }
        if (object.previewUri !== undefined && object.previewUri !== null) {
            message.previewUri = String(object.previewUri);
        }
        else {
            message.previewUri = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        message.mediaUri !== undefined && (obj.mediaUri = message.mediaUri);
        message.previewUri !== undefined && (obj.previewUri = message.previewUri);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseMetadata);
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        else {
            message.name = "";
        }
        if (object.description !== undefined && object.description !== null) {
            message.description = object.description;
        }
        else {
            message.description = "";
        }
        if (object.mediaUri !== undefined && object.mediaUri !== null) {
            message.mediaUri = object.mediaUri;
        }
        else {
            message.mediaUri = "";
        }
        if (object.previewUri !== undefined && object.previewUri !== null) {
            message.previewUri = object.previewUri;
        }
        else {
            message.previewUri = "";
        }
        return message;
    }
};
var baseNFT = {
    id: "",
    owner: "",
    transferable: false,
    royalties: "",
    creator: "",
    listed: false
};
exports.NFT = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.metadata !== undefined) {
            exports.Metadata.encode(message.metadata, writer.uint32(18).fork()).ldelim();
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
            timestamp_1.Timestamp.encode(toTimestamp(message.createdAt), writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseNFT);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.metadata = exports.Metadata.decode(reader, reader.uint32());
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
                    message.createdAt = fromTimestamp(timestamp_1.Timestamp.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseNFT);
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = exports.Metadata.fromJSON(object.metadata);
        }
        else {
            message.metadata = undefined;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
        if (object.transferable !== undefined && object.transferable !== null) {
            message.transferable = Boolean(object.transferable);
        }
        else {
            message.transferable = false;
        }
        if (object.royalties !== undefined && object.royalties !== null) {
            message.royalties = String(object.royalties);
        }
        else {
            message.royalties = "";
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.listed !== undefined && object.listed !== null) {
            message.listed = Boolean(object.listed);
        }
        else {
            message.listed = false;
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = fromJsonTimestamp(object.createdAt);
        }
        else {
            message.createdAt = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.metadata !== undefined &&
            (obj.metadata = message.metadata
                ? exports.Metadata.toJSON(message.metadata)
                : undefined);
        message.owner !== undefined && (obj.owner = message.owner);
        message.transferable !== undefined &&
            (obj.transferable = message.transferable);
        message.royalties !== undefined && (obj.royalties = message.royalties);
        message.creator !== undefined && (obj.creator = message.creator);
        message.listed !== undefined && (obj.listed = message.listed);
        message.createdAt !== undefined &&
            (obj.createdAt = message.createdAt.toISOString());
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseNFT);
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = exports.Metadata.fromPartial(object.metadata);
        }
        else {
            message.metadata = undefined;
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
        if (object.transferable !== undefined && object.transferable !== null) {
            message.transferable = object.transferable;
        }
        else {
            message.transferable = false;
        }
        if (object.royalties !== undefined && object.royalties !== null) {
            message.royalties = object.royalties;
        }
        else {
            message.royalties = "";
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.listed !== undefined && object.listed !== null) {
            message.listed = object.listed;
        }
        else {
            message.listed = false;
        }
        if (object.createdAt !== undefined && object.createdAt !== null) {
            message.createdAt = object.createdAt;
        }
        else {
            message.createdAt = undefined;
        }
        return message;
    }
};
var baseOwner = { address: "" };
exports.Owner = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.address !== "") {
            writer.uint32(10).string(message.address);
        }
        for (var _i = 0, _a = message.idCollections; _i < _a.length; _i++) {
            var v = _a[_i];
            exports.IDCollection.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseOwner);
        message.idCollections = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.address = reader.string();
                    break;
                case 2:
                    message.idCollections.push(exports.IDCollection.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseOwner);
        message.idCollections = [];
        if (object.address !== undefined && object.address !== null) {
            message.address = String(object.address);
        }
        else {
            message.address = "";
        }
        if (object.idCollections !== undefined && object.idCollections !== null) {
            for (var _i = 0, _a = object.idCollections; _i < _a.length; _i++) {
                var e = _a[_i];
                message.idCollections.push(exports.IDCollection.fromJSON(e));
            }
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.address !== undefined && (obj.address = message.address);
        if (message.idCollections) {
            obj.idCollections = message.idCollections.map(function (e) {
                return e ? exports.IDCollection.toJSON(e) : undefined;
            });
        }
        else {
            obj.idCollections = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseOwner);
        message.idCollections = [];
        if (object.address !== undefined && object.address !== null) {
            message.address = object.address;
        }
        else {
            message.address = "";
        }
        if (object.idCollections !== undefined && object.idCollections !== null) {
            for (var _i = 0, _a = object.idCollections; _i < _a.length; _i++) {
                var e = _a[_i];
                message.idCollections.push(exports.IDCollection.fromPartial(e));
            }
        }
        return message;
    }
};
function toTimestamp(date) {
    var seconds = numberToLong(date.getTime() / 1000);
    var nanos = (date.getTime() % 1000) * 1000000;
    return { seconds: seconds, nanos: nanos };
}
function fromTimestamp(t) {
    var millis = t.seconds.toNumber() * 1000;
    millis += t.nanos / 1000000;
    return new Date(millis);
}
function fromJsonTimestamp(o) {
    if (o instanceof Date) {
        return o;
    }
    else if (typeof o === "string") {
        return new Date(o);
    }
    else {
        return fromTimestamp(timestamp_1.Timestamp.fromJSON(o));
    }
}
function numberToLong(number) {
    return long_1["default"].fromNumber(number);
}
if (minimal_1["default"].util.Long !== long_1["default"]) {
    minimal_1["default"].util.Long = long_1["default"];
    minimal_1["default"].configure();
}
