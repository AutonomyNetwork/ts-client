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
var market_place_1 = require("../../nft/v1beta1/market_place");
exports.protobufPackage = "nft.v1beta1";
var baseQueryDenomRequest = { denomId: "" };
exports.QueryDenomRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.denomId !== "") {
            writer.uint32(10).string(message.denomId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryDenomRequest);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denomId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseQueryDenomRequest);
        if (object.denomId !== undefined && object.denomId !== null) {
            message.denomId = String(object.denomId);
        }
        else {
            message.denomId = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.denomId !== undefined && (obj.denomId = message.denomId);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseQueryDenomRequest);
        if (object.denomId !== undefined && object.denomId !== null) {
            message.denomId = object.denomId;
        }
        else {
            message.denomId = "";
        }
        return message;
    }
};
var baseQueryDenomResponse = {};
exports.QueryDenomResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.denom !== undefined) {
            nft_1.Denom.encode(message.denom, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryDenomResponse);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denom = nft_1.Denom.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseQueryDenomResponse);
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = nft_1.Denom.fromJSON(object.denom);
        }
        else {
            message.denom = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.denom !== undefined &&
            (obj.denom = message.denom ? nft_1.Denom.toJSON(message.denom) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseQueryDenomResponse);
        if (object.denom !== undefined && object.denom !== null) {
            message.denom = nft_1.Denom.fromPartial(object.denom);
        }
        else {
            message.denom = undefined;
        }
        return message;
    }
};
var baseQueryNFTRequest = { denomId: "", id: "" };
exports.QueryNFTRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.denomId !== "") {
            writer.uint32(10).string(message.denomId);
        }
        if (message.id !== "") {
            writer.uint32(18).string(message.id);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryNFTRequest);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denomId = reader.string();
                    break;
                case 2:
                    message.id = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseQueryNFTRequest);
        if (object.denomId !== undefined && object.denomId !== null) {
            message.denomId = String(object.denomId);
        }
        else {
            message.denomId = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = String(object.id);
        }
        else {
            message.id = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.denomId !== undefined && (obj.denomId = message.denomId);
        message.id !== undefined && (obj.id = message.id);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseQueryNFTRequest);
        if (object.denomId !== undefined && object.denomId !== null) {
            message.denomId = object.denomId;
        }
        else {
            message.denomId = "";
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = "";
        }
        return message;
    }
};
var baseQueryNFTResponse = {};
exports.QueryNFTResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.nft !== undefined) {
            nft_1.NFT.encode(message.nft, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryNFTResponse);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nft = nft_1.NFT.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseQueryNFTResponse);
        if (object.nft !== undefined && object.nft !== null) {
            message.nft = nft_1.NFT.fromJSON(object.nft);
        }
        else {
            message.nft = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.nft !== undefined &&
            (obj.nft = message.nft ? nft_1.NFT.toJSON(message.nft) : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseQueryNFTResponse);
        if (object.nft !== undefined && object.nft !== null) {
            message.nft = nft_1.NFT.fromPartial(object.nft);
        }
        else {
            message.nft = undefined;
        }
        return message;
    }
};
var baseQueryMarketPlaceNFTRequest = { id: "", denomId: "" };
exports.QueryMarketPlaceNFTRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.id !== "") {
            writer.uint32(10).string(message.id);
        }
        if (message.denomId !== "") {
            writer.uint32(18).string(message.denomId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryMarketPlaceNFTRequest);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.string();
                    break;
                case 2:
                    message.denomId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseQueryMarketPlaceNFTRequest);
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
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.denomId !== undefined && (obj.denomId = message.denomId);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseQueryMarketPlaceNFTRequest);
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
        return message;
    }
};
var baseQueryMarketPlaceNFTResponse = {};
exports.QueryMarketPlaceNFTResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.marketPlace !== undefined) {
            market_place_1.MarketPlace.encode(message.marketPlace, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryMarketPlaceNFTResponse);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.marketPlace = market_place_1.MarketPlace.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseQueryMarketPlaceNFTResponse);
        if (object.marketPlace !== undefined && object.marketPlace !== null) {
            message.marketPlace = market_place_1.MarketPlace.fromJSON(object.marketPlace);
        }
        else {
            message.marketPlace = undefined;
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.marketPlace !== undefined &&
            (obj.marketPlace = message.marketPlace
                ? market_place_1.MarketPlace.toJSON(message.marketPlace)
                : undefined);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseQueryMarketPlaceNFTResponse);
        if (object.marketPlace !== undefined && object.marketPlace !== null) {
            message.marketPlace = market_place_1.MarketPlace.fromPartial(object.marketPlace);
        }
        else {
            message.marketPlace = undefined;
        }
        return message;
    }
};
var baseQueryMarketPlaceRequest = { denomId: "" };
exports.QueryMarketPlaceRequest = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        if (message.denomId !== "") {
            writer.uint32(10).string(message.denomId);
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryMarketPlaceRequest);
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.denomId = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseQueryMarketPlaceRequest);
        if (object.denomId !== undefined && object.denomId !== null) {
            message.denomId = String(object.denomId);
        }
        else {
            message.denomId = "";
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        message.denomId !== undefined && (obj.denomId = message.denomId);
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseQueryMarketPlaceRequest);
        if (object.denomId !== undefined && object.denomId !== null) {
            message.denomId = object.denomId;
        }
        else {
            message.denomId = "";
        }
        return message;
    }
};
var baseQueryMarketPlaceResponse = {};
exports.QueryMarketPlaceResponse = {
    encode: function (message, writer) {
        if (writer === void 0) { writer = minimal_1["default"].Writer.create(); }
        for (var _i = 0, _a = message.nfts; _i < _a.length; _i++) {
            var v = _a[_i];
            nft_1.NFT.encode(v, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode: function (input, length) {
        var reader = input instanceof minimal_1["default"].Reader ? input : new minimal_1["default"].Reader(input);
        var end = length === undefined ? reader.len : reader.pos + length;
        var message = __assign({}, baseQueryMarketPlaceResponse);
        message.nfts = [];
        while (reader.pos < end) {
            var tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.nfts.push(nft_1.NFT.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON: function (object) {
        var message = __assign({}, baseQueryMarketPlaceResponse);
        message.nfts = [];
        if (object.nfts !== undefined && object.nfts !== null) {
            for (var _i = 0, _a = object.nfts; _i < _a.length; _i++) {
                var e = _a[_i];
                message.nfts.push(nft_1.NFT.fromJSON(e));
            }
        }
        return message;
    },
    toJSON: function (message) {
        var obj = {};
        if (message.nfts) {
            obj.nfts = message.nfts.map(function (e) { return (e ? nft_1.NFT.toJSON(e) : undefined); });
        }
        else {
            obj.nfts = [];
        }
        return obj;
    },
    fromPartial: function (object) {
        var message = __assign({}, baseQueryMarketPlaceResponse);
        message.nfts = [];
        if (object.nfts !== undefined && object.nfts !== null) {
            for (var _i = 0, _a = object.nfts; _i < _a.length; _i++) {
                var e = _a[_i];
                message.nfts.push(nft_1.NFT.fromPartial(e));
            }
        }
        return message;
    }
};
var QueryClientImpl = /** @class */ (function () {
    function QueryClientImpl(rpc) {
        this.rpc = rpc;
        this.Denom = this.Denom.bind(this);
        this.NFT = this.NFT.bind(this);
        this.MarketPlaceNFT = this.MarketPlaceNFT.bind(this);
        this.MarketPlace = this.MarketPlace.bind(this);
    }
    QueryClientImpl.prototype.Denom = function (request) {
        var data = exports.QueryDenomRequest.encode(request).finish();
        var promise = this.rpc.request("nft.v1beta1.Query", "Denom", data);
        return promise.then(function (data) {
            return exports.QueryDenomResponse.decode(new minimal_1["default"].Reader(data));
        });
    };
    QueryClientImpl.prototype.NFT = function (request) {
        var data = exports.QueryNFTRequest.encode(request).finish();
        var promise = this.rpc.request("nft.v1beta1.Query", "NFT", data);
        return promise.then(function (data) {
            return exports.QueryNFTResponse.decode(new minimal_1["default"].Reader(data));
        });
    };
    QueryClientImpl.prototype.MarketPlaceNFT = function (request) {
        var data = exports.QueryMarketPlaceNFTRequest.encode(request).finish();
        var promise = this.rpc.request("nft.v1beta1.Query", "MarketPlaceNFT", data);
        return promise.then(function (data) {
            return exports.QueryMarketPlaceNFTResponse.decode(new minimal_1["default"].Reader(data));
        });
    };
    QueryClientImpl.prototype.MarketPlace = function (request) {
        var data = exports.QueryMarketPlaceRequest.encode(request).finish();
        var promise = this.rpc.request("nft.v1beta1.Query", "MarketPlace", data);
        return promise.then(function (data) {
            return exports.QueryMarketPlaceResponse.decode(new minimal_1["default"].Reader(data));
        });
    };
    return QueryClientImpl;
}());
exports.QueryClientImpl = QueryClientImpl;
if (minimal_1["default"].util.Long !== long_1["default"]) {
    minimal_1["default"].util.Long = long_1["default"];
    minimal_1["default"].configure();
}
