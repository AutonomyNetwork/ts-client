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
exports.protobufPackage = "nft.v1beta1";
var baseMarketPlace = {
    nftId: "",
    denomID: "",
    price: "",
    seller: "",
    buyer: "",
    filled: false
};
exports.MarketPlace = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
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
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseMarketPlace);
        while (reader.pos < end) {
            var tag = reader.uint32();
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
    fromJSON: function (object) {
        var message = __assign({}, baseMarketPlace);
        if (object.nftId !== undefined && object.nftId !== null) {
            message.nftId = String(object.nftId);
        }
        else {
            message.nftId = "";
        }
        if (object.denomID !== undefined && object.denomID !== null) {
            message.denomID = String(object.denomID);
        }
        else {
            message.denomID = "";
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
        if (object.buyer !== undefined && object.buyer !== null) {
            message.buyer = String(object.buyer);
        }
        else {
            message.buyer = "";
        }
        if (object.filled !== undefined && object.filled !== null) {
            message.filled = Boolean(object.filled);
        }
        else {
            message.filled = false;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.nftId !== undefined && (obj.nftId = message.nftId);
        message.denomID !== undefined && (obj.denomID = message.denomID);
        message.price !== undefined && (obj.price = message.price);
        message.seller !== undefined && (obj.seller = message.seller);
        message.buyer !== undefined && (obj.buyer = message.buyer);
        message.filled !== undefined && (obj.filled = message.filled);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseMarketPlace);
        if (object.nftId !== undefined && object.nftId !== null) {
            message.nftId = object.nftId;
        }
        else {
            message.nftId = "";
        }
        if (object.denomID !== undefined && object.denomID !== null) {
            message.denomID = object.denomID;
        }
        else {
            message.denomID = "";
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
        if (object.buyer !== undefined && object.buyer !== null) {
            message.buyer = object.buyer;
        }
        else {
            message.buyer = "";
        }
        if (object.filled !== undefined && object.filled !== null) {
            message.filled = object.filled;
        }
        else {
            message.filled = false;
        }
        return message;
    }
};
if (minimal_1["default"].util.Long !== long_1["default"]) {
    minimal_1["default"].util.Long = long_1["default"];
    minimal_1["default"].configure();
}
