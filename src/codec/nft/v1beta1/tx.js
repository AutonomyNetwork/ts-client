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
var nft_1 = require("../../nft/v1beta1/nft");
exports.protobufPackage = "nft.v1beta1";
var baseMsgCreateDenom = {
    id: "",
    name: "",
    symbol: "",
    description: "",
    previewUri: "",
    creator: ""
};
exports.MsgCreateDenom = {
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
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMsgCreateDenom);
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
    fromJSON: function (object) {
        var message = __assign({}, baseMsgCreateDenom);
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
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.symbol !== undefined && (obj.symbol = message.symbol);
        message.description !== undefined &&
            (obj.description = message.description);
        message.previewUri !== undefined && (obj.previewUri = message.previewUri);
        message.creator !== undefined && (obj.creator = message.creator);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseMsgCreateDenom);
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
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        return message;
    }
};
var baseMsgCreateDenomResponse = {};
exports.MsgCreateDenomResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMsgCreateDenomResponse);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        var message = __assign({}, baseMsgCreateDenomResponse);
        return message;
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = __assign({}, baseMsgCreateDenomResponse);
        return message;
    }
};
var baseMsgMintNFT = {
    id: "",
    denomId: "",
    data: "",
    transferable: false,
    creator: "",
    royalties: ""
};
exports.MsgMintNFT = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.denomId !== "") {
            writer.uint32(18).string(message.denomId);
        }
        if (message.metadata !== undefined) {
            nft_1.Metadata.encode(message.metadata, writer.uint32(26).fork()).ldelim();
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
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMsgMintNFT);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.denomId = reader.string();
                    break;
                case 3:
                    message.metadata = nft_1.Metadata.decode(reader, reader.uint32());
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
    fromJSON: function (object) {
        var message = __assign({}, baseMsgMintNFT);
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        if (object.denomId !== undefined && object.denomId !== null) {
            message.denomId = String(object.denomId);
        }
        else {
            message.denomId = "";
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = nft_1.Metadata.fromJSON(object.metadata);
        }
        else {
            message.metadata = undefined;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = String(object.data);
        }
        else {
            message.data = "";
        }
        if (object.transferable !== undefined && object.transferable !== null) {
            message.transferable = Boolean(object.transferable);
        }
        else {
            message.transferable = false;
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = String(object.creator);
        }
        else {
            message.creator = "";
        }
        if (object.royalties !== undefined && object.royalties !== null) {
            message.royalties = String(object.royalties);
        }
        else {
            message.royalties = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.denomId !== undefined && (obj.denomId = message.denomId);
        message.metadata !== undefined &&
            (obj.metadata = message.metadata
                ? nft_1.Metadata.toJSON(message.metadata)
                : undefined);
        message.data !== undefined && (obj.data = message.data);
        message.transferable !== undefined &&
            (obj.transferable = message.transferable);
        message.creator !== undefined && (obj.creator = message.creator);
        message.royalties !== undefined && (obj.royalties = message.royalties);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseMsgMintNFT);
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        if (object.denomId !== undefined && object.denomId !== null) {
            message.denomId = object.denomId;
        }
        else {
            message.denomId = "";
        }
        if (object.metadata !== undefined && object.metadata !== null) {
            message.metadata = nft_1.Metadata.fromPartial(object.metadata);
        }
        else {
            message.metadata = undefined;
        }
        if (object.data !== undefined && object.data !== null) {
            message.data = object.data;
        }
        else {
            message.data = "";
        }
        if (object.transferable !== undefined && object.transferable !== null) {
            message.transferable = object.transferable;
        }
        else {
            message.transferable = false;
        }
        if (object.creator !== undefined && object.creator !== null) {
            message.creator = object.creator;
        }
        else {
            message.creator = "";
        }
        if (object.royalties !== undefined && object.royalties !== null) {
            message.royalties = object.royalties;
        }
        else {
            message.royalties = "";
        }
        return message;
    }
};
var baseMsgMintNFTResponse = {};
exports.MsgMintNFTResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMsgMintNFTResponse);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        var message = __assign({}, baseMsgMintNFTResponse);
        return message;
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = __assign({}, baseMsgMintNFTResponse);
        return message;
    }
};
var baseMsgUpdateNFT = {
    id: "",
    denomID: "",
    royalties: "",
    owner: "",
    name: "",
    description: ""
};
exports.MsgUpdateNFT = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMsgUpdateNFT);
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseMsgUpdateNFT);
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        if (object.denomID !== undefined && object.denomID !== null) {
            message.denomID = String(object.denomID);
        }
        else {
            message.denomID = "";
        }
        if (object.royalties !== undefined && object.royalties !== null) {
            message.royalties = String(object.royalties);
        }
        else {
            message.royalties = "";
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = String(object.owner);
        }
        else {
            message.owner = "";
        }
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
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.denomID !== undefined && (obj.denomID = message.denomID);
        message.royalties !== undefined && (obj.royalties = message.royalties);
        message.owner !== undefined && (obj.owner = message.owner);
        message.name !== undefined && (obj.name = message.name);
        message.description !== undefined &&
            (obj.description = message.description);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseMsgUpdateNFT);
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        if (object.denomID !== undefined && object.denomID !== null) {
            message.denomID = object.denomID;
        }
        else {
            message.denomID = "";
        }
        if (object.royalties !== undefined && object.royalties !== null) {
            message.royalties = object.royalties;
        }
        else {
            message.royalties = "";
        }
        if (object.owner !== undefined && object.owner !== null) {
            message.owner = object.owner;
        }
        else {
            message.owner = "";
        }
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
        return message;
    }
};
var baseMsgUpdateNFTResponse = {};
exports.MsgUpdateNFTResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMsgUpdateNFTResponse);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        var message = __assign({}, baseMsgUpdateNFTResponse);
        return message;
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = __assign({}, baseMsgUpdateNFTResponse);
        return message;
    }
};
var baseMsgTransferNFT = {
    id: "",
    denomId: "",
    sender: "",
    recipient: ""
};
exports.MsgTransferNFT = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMsgTransferNFT);
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseMsgTransferNFT);
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        if (object.denomId !== undefined && object.denomId !== null) {
            message.denomId = String(object.denomId);
        }
        else {
            message.denomId = "";
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = String(object.sender);
        }
        else {
            message.sender = "";
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = String(object.recipient);
        }
        else {
            message.recipient = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.denomId !== undefined && (obj.denomId = message.denomId);
        message.sender !== undefined && (obj.sender = message.sender);
        message.recipient !== undefined && (obj.recipient = message.recipient);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseMsgTransferNFT);
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        if (object.denomId !== undefined && object.denomId !== null) {
            message.denomId = object.denomId;
        }
        else {
            message.denomId = "";
        }
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = object.sender;
        }
        else {
            message.sender = "";
        }
        if (object.recipient !== undefined && object.recipient !== null) {
            message.recipient = object.recipient;
        }
        else {
            message.recipient = "";
        }
        return message;
    }
};
var baseMsgTransferNFTResponse = {};
exports.MsgTransferNFTResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMsgTransferNFTResponse);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        var message = __assign({}, baseMsgTransferNFTResponse);
        return message;
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = __assign({}, baseMsgTransferNFTResponse);
        return message;
    }
};
var baseMsgSellNFT = { id: "", denomId: "", price: "", seller: "" };
exports.MsgSellNFT = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMsgSellNFT);
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseMsgSellNFT);
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        if (object.denomId !== undefined && object.denomId !== null) {
            message.denomId = String(object.denomId);
        }
        else {
            message.denomId = "";
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = String(object.price);
        }
        else {
            message.price = "";
        }
        if (object.seller !== undefined && object.seller !== null) {
            message.seller = String(object.seller);
        }
        else {
            message.seller = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.denomId !== undefined && (obj.denomId = message.denomId);
        message.price !== undefined && (obj.price = message.price);
        message.seller !== undefined && (obj.seller = message.seller);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseMsgSellNFT);
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        if (object.denomId !== undefined && object.denomId !== null) {
            message.denomId = object.denomId;
        }
        else {
            message.denomId = "";
        }
        if (object.price !== undefined && object.price !== null) {
            message.price = object.price;
        }
        else {
            message.price = "";
        }
        if (object.seller !== undefined && object.seller !== null) {
            message.seller = object.seller;
        }
        else {
            message.seller = "";
        }
        return message;
    }
};
var baseMsgSellNFTResponse = {};
exports.MsgSellNFTResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMsgSellNFTResponse);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        var message = __assign({}, baseMsgSellNFTResponse);
        return message;
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = __assign({}, baseMsgSellNFTResponse);
        return message;
    }
};
var baseMsgBuyNFT = { id: "", denomId: "", buyer: "" };
exports.MsgBuyNFT = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMsgBuyNFT);
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseMsgBuyNFT);
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        if (object.denomId !== undefined && object.denomId !== null) {
            message.denomId = String(object.denomId);
        }
        else {
            message.denomId = "";
        }
        if (object.buyer !== undefined && object.buyer !== null) {
            message.buyer = String(object.buyer);
        }
        else {
            message.buyer = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.denomId !== undefined && (obj.denomId = message.denomId);
        message.buyer !== undefined && (obj.buyer = message.buyer);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseMsgBuyNFT);
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        if (object.denomId !== undefined && object.denomId !== null) {
            message.denomId = object.denomId;
        }
        else {
            message.denomId = "";
        }
        if (object.buyer !== undefined && object.buyer !== null) {
            message.buyer = object.buyer;
        }
        else {
            message.buyer = "";
        }
        return message;
    }
};
var baseMsgBuyNFTResponse = {};
exports.MsgBuyNFTResponse = {
    encode: function (_, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMsgBuyNFTResponse);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (_) {
        var message = __assign({}, baseMsgBuyNFTResponse);
        return message;
    },
    toJSON: function (_) {
        var obj = {};
        return obj;
    },
    fromPartial: function (_) {
        var message = __assign({}, baseMsgBuyNFTResponse);
        return message;
    }
};
var MsgClientImpl = /** @class */ (function () {
    function MsgClientImpl(rpc) {
        this.rpc = rpc;
        this.CreateDenom = this.CreateDenom.bind(this);
        this.MintNFT = this.MintNFT.bind(this);
        this.UpdateNFT = this.UpdateNFT.bind(this);
        this.TransferNFT = this.TransferNFT.bind(this);
        this.SellNFT = this.SellNFT.bind(this);
        this.BuyNFT = this.BuyNFT.bind(this);
    }
    MsgClientImpl.prototype.CreateDenom = function (request) {
        var data = exports.MsgCreateDenom.encode(request).finish();
        var promise = this.rpc.request("nft.v1beta1.Msg", "CreateDenom", data);
        return promise.then(function (data) {
            return exports.MsgCreateDenomResponse.decode(new minimal_1["default"].Reader(data));
        });
    };
    MsgClientImpl.prototype.MintNFT = function (request) {
        var data = exports.MsgMintNFT.encode(request).finish();
        var promise = this.rpc.request("nft.v1beta1.Msg", "MintNFT", data);
        return promise.then(function (data) {
            return exports.MsgMintNFTResponse.decode(new minimal_1["default"].Reader(data));
        });
    };
    MsgClientImpl.prototype.UpdateNFT = function (request) {
        var data = exports.MsgUpdateNFT.encode(request).finish();
        var promise = this.rpc.request("nft.v1beta1.Msg", "UpdateNFT", data);
        return promise.then(function (data) {
            return exports.MsgUpdateNFTResponse.decode(new minimal_1["default"].Reader(data));
        });
    };
    MsgClientImpl.prototype.TransferNFT = function (request) {
        var data = exports.MsgTransferNFT.encode(request).finish();
        var promise = this.rpc.request("nft.v1beta1.Msg", "TransferNFT", data);
        return promise.then(function (data) {
            return exports.MsgTransferNFTResponse.decode(new minimal_1["default"].Reader(data));
        });
    };
    MsgClientImpl.prototype.SellNFT = function (request) {
        var data = exports.MsgSellNFT.encode(request).finish();
        var promise = this.rpc.request("nft.v1beta1.Msg", "SellNFT", data);
        return promise.then(function (data) {
            return exports.MsgSellNFTResponse.decode(new minimal_1["default"].Reader(data));
        });
    };
    MsgClientImpl.prototype.BuyNFT = function (request) {
        var data = exports.MsgBuyNFT.encode(request).finish();
        var promise = this.rpc.request("nft.v1beta1.Msg", "BuyNFT", data);
        return promise.then(function (data) {
            return exports.MsgBuyNFTResponse.decode(new minimal_1["default"].Reader(data));
        });
    };
    return MsgClientImpl;
}());
exports.MsgClientImpl = MsgClientImpl;
if (minimal_1["default"].util.Long !== long_1["default"]) {
    minimal_1["default"].util.Long = long_1["default"];
    minimal_1["default"].configure();
}
