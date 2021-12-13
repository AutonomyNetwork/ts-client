"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QueryClientImpl = exports.QueryPoolBatchWithdrawMsgResponse = exports.QueryPoolBatchWithdrawMsgsResponse = exports.QueryPoolBatchWithdrawMsgRequest = exports.QueryPoolBatchWithdrawMsgsRequest = exports.QueryPoolBatchDepositMsgResponse = exports.QueryPoolBatchDepositMsgsResponse = exports.QueryPoolBatchDepositMsgRequest = exports.QueryPoolBatchDepositMsgsRequest = exports.QueryPoolBatchSwapMsgResponse = exports.QueryPoolBatchSwapMsgsResponse = exports.QueryPoolBatchSwapMsgRequest = exports.QueryPoolBatchSwapMsgsRequest = exports.QueryParamsResponse = exports.QueryParamsRequest = exports.QueryLiquidityPoolsResponse = exports.QueryLiquidityPoolsRequest = exports.QueryLiquidityPoolBatchResponse = exports.QueryLiquidityPoolBatchRequest = exports.QueryLiquidityPoolByReserveAccRequest = exports.QueryLiquidityPoolByPoolCoinDenomRequest = exports.QueryLiquidityPoolResponse = exports.QueryLiquidityPoolRequest = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const liquidity_1 = require("../../../tendermint/liquidity/v1beta1/liquidity");
const pagination_1 = require("../../../cosmos_proto/pagination");
exports.protobufPackage = "tendermint.liquidity.v1beta1";
const baseQueryLiquidityPoolRequest = { poolId: long_1.default.UZERO };
exports.QueryLiquidityPoolRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryLiquidityPoolRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryLiquidityPoolRequest);
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromString(object.poolId)
                : long_1.default.UZERO;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryLiquidityPoolRequest);
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId;
        }
        else {
            message.poolId = long_1.default.UZERO;
        }
        return message;
    },
};
const baseQueryLiquidityPoolResponse = {};
exports.QueryLiquidityPoolResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pool !== undefined) {
            liquidity_1.Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryLiquidityPoolResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool = liquidity_1.Pool.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryLiquidityPoolResponse);
        message.pool =
            object.pool !== undefined && object.pool !== null
                ? liquidity_1.Pool.fromJSON(object.pool)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pool !== undefined &&
            (obj.pool = message.pool ? liquidity_1.Pool.toJSON(message.pool) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryLiquidityPoolResponse);
        message.pool =
            object.pool !== undefined && object.pool !== null
                ? liquidity_1.Pool.fromPartial(object.pool)
                : undefined;
        return message;
    },
};
const baseQueryLiquidityPoolByPoolCoinDenomRequest = {
    poolCoinDenom: "",
};
exports.QueryLiquidityPoolByPoolCoinDenomRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.poolCoinDenom !== "") {
            writer.uint32(10).string(message.poolCoinDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryLiquidityPoolByPoolCoinDenomRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolCoinDenom = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryLiquidityPoolByPoolCoinDenomRequest);
        message.poolCoinDenom =
            object.poolCoinDenom !== undefined && object.poolCoinDenom !== null
                ? String(object.poolCoinDenom)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.poolCoinDenom !== undefined &&
            (obj.poolCoinDenom = message.poolCoinDenom);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseQueryLiquidityPoolByPoolCoinDenomRequest);
        message.poolCoinDenom = (_a = object.poolCoinDenom) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
const baseQueryLiquidityPoolByReserveAccRequest = { reserveAcc: "" };
exports.QueryLiquidityPoolByReserveAccRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.reserveAcc !== "") {
            writer.uint32(10).string(message.reserveAcc);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryLiquidityPoolByReserveAccRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.reserveAcc = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryLiquidityPoolByReserveAccRequest);
        message.reserveAcc =
            object.reserveAcc !== undefined && object.reserveAcc !== null
                ? String(object.reserveAcc)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.reserveAcc !== undefined && (obj.reserveAcc = message.reserveAcc);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseQueryLiquidityPoolByReserveAccRequest);
        message.reserveAcc = (_a = object.reserveAcc) !== null && _a !== void 0 ? _a : "";
        return message;
    },
};
const baseQueryLiquidityPoolBatchRequest = { poolId: long_1.default.UZERO };
exports.QueryLiquidityPoolBatchRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryLiquidityPoolBatchRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryLiquidityPoolBatchRequest);
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromString(object.poolId)
                : long_1.default.UZERO;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryLiquidityPoolBatchRequest);
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId;
        }
        else {
            message.poolId = long_1.default.UZERO;
        }
        return message;
    },
};
const baseQueryLiquidityPoolBatchResponse = {};
exports.QueryLiquidityPoolBatchResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.batch !== undefined) {
            liquidity_1.PoolBatch.encode(message.batch, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryLiquidityPoolBatchResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.batch = liquidity_1.PoolBatch.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryLiquidityPoolBatchResponse);
        message.batch =
            object.batch !== undefined && object.batch !== null
                ? liquidity_1.PoolBatch.fromJSON(object.batch)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.batch !== undefined &&
            (obj.batch = message.batch ? liquidity_1.PoolBatch.toJSON(message.batch) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryLiquidityPoolBatchResponse);
        message.batch =
            object.batch !== undefined && object.batch !== null
                ? liquidity_1.PoolBatch.fromPartial(object.batch)
                : undefined;
        return message;
    },
};
const baseQueryLiquidityPoolsRequest = {};
exports.QueryLiquidityPoolsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryLiquidityPoolsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryLiquidityPoolsRequest);
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryLiquidityPoolsRequest);
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
const baseQueryLiquidityPoolsResponse = {};
exports.QueryLiquidityPoolsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.pools) {
            liquidity_1.Pool.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryLiquidityPoolsResponse);
        message.pools = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pools.push(liquidity_1.Pool.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a;
        const message = Object.assign({}, baseQueryLiquidityPoolsResponse);
        message.pools = ((_a = object.pools) !== null && _a !== void 0 ? _a : []).map((e) => liquidity_1.Pool.fromJSON(e));
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.pools) {
            obj.pools = message.pools.map((e) => (e ? liquidity_1.Pool.toJSON(e) : undefined));
        }
        else {
            obj.pools = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseQueryLiquidityPoolsResponse);
        message.pools = ((_a = object.pools) !== null && _a !== void 0 ? _a : []).map((e) => liquidity_1.Pool.fromPartial(e));
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
const baseQueryParamsRequest = {};
exports.QueryParamsRequest = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryParamsRequest);
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
    fromJSON(_) {
        const message = Object.assign({}, baseQueryParamsRequest);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseQueryParamsRequest);
        return message;
    },
};
const baseQueryParamsResponse = {};
exports.QueryParamsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            liquidity_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryParamsResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = liquidity_1.Params.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryParamsResponse);
        message.params =
            object.params !== undefined && object.params !== null
                ? liquidity_1.Params.fromJSON(object.params)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? liquidity_1.Params.toJSON(message.params) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryParamsResponse);
        message.params =
            object.params !== undefined && object.params !== null
                ? liquidity_1.Params.fromPartial(object.params)
                : undefined;
        return message;
    },
};
const baseQueryPoolBatchSwapMsgsRequest = { poolId: long_1.default.UZERO };
exports.QueryPoolBatchSwapMsgsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryPoolBatchSwapMsgsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryPoolBatchSwapMsgsRequest);
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromString(object.poolId)
                : long_1.default.UZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryPoolBatchSwapMsgsRequest);
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId;
        }
        else {
            message.poolId = long_1.default.UZERO;
        }
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
const baseQueryPoolBatchSwapMsgRequest = {
    poolId: long_1.default.UZERO,
    msgIndex: long_1.default.UZERO,
};
exports.QueryPoolBatchSwapMsgRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.msgIndex.isZero()) {
            writer.uint32(16).uint64(message.msgIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryPoolBatchSwapMsgRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.msgIndex = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryPoolBatchSwapMsgRequest);
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromString(object.poolId)
                : long_1.default.UZERO;
        message.msgIndex =
            object.msgIndex !== undefined && object.msgIndex !== null
                ? long_1.default.fromString(object.msgIndex)
                : long_1.default.UZERO;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.msgIndex !== undefined &&
            (obj.msgIndex = (message.msgIndex || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryPoolBatchSwapMsgRequest);
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId;
        }
        else {
            message.poolId = long_1.default.UZERO;
        }
        if (object.msgIndex !== undefined && object.msgIndex !== null) {
            message.msgIndex = object.msgIndex;
        }
        else {
            message.msgIndex = long_1.default.UZERO;
        }
        return message;
    },
};
const baseQueryPoolBatchSwapMsgsResponse = {};
exports.QueryPoolBatchSwapMsgsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.swaps) {
            liquidity_1.SwapMsgState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryPoolBatchSwapMsgsResponse);
        message.swaps = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.swaps.push(liquidity_1.SwapMsgState.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a;
        const message = Object.assign({}, baseQueryPoolBatchSwapMsgsResponse);
        message.swaps = ((_a = object.swaps) !== null && _a !== void 0 ? _a : []).map((e) => liquidity_1.SwapMsgState.fromJSON(e));
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.swaps) {
            obj.swaps = message.swaps.map((e) => e ? liquidity_1.SwapMsgState.toJSON(e) : undefined);
        }
        else {
            obj.swaps = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseQueryPoolBatchSwapMsgsResponse);
        message.swaps = ((_a = object.swaps) !== null && _a !== void 0 ? _a : []).map((e) => liquidity_1.SwapMsgState.fromPartial(e));
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
const baseQueryPoolBatchSwapMsgResponse = {};
exports.QueryPoolBatchSwapMsgResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.swap !== undefined) {
            liquidity_1.SwapMsgState.encode(message.swap, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryPoolBatchSwapMsgResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.swap = liquidity_1.SwapMsgState.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryPoolBatchSwapMsgResponse);
        message.swap =
            object.swap !== undefined && object.swap !== null
                ? liquidity_1.SwapMsgState.fromJSON(object.swap)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.swap !== undefined &&
            (obj.swap = message.swap ? liquidity_1.SwapMsgState.toJSON(message.swap) : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryPoolBatchSwapMsgResponse);
        message.swap =
            object.swap !== undefined && object.swap !== null
                ? liquidity_1.SwapMsgState.fromPartial(object.swap)
                : undefined;
        return message;
    },
};
const baseQueryPoolBatchDepositMsgsRequest = { poolId: long_1.default.UZERO };
exports.QueryPoolBatchDepositMsgsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryPoolBatchDepositMsgsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryPoolBatchDepositMsgsRequest);
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromString(object.poolId)
                : long_1.default.UZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryPoolBatchDepositMsgsRequest);
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId;
        }
        else {
            message.poolId = long_1.default.UZERO;
        }
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
const baseQueryPoolBatchDepositMsgRequest = {
    poolId: long_1.default.UZERO,
    msgIndex: long_1.default.UZERO,
};
exports.QueryPoolBatchDepositMsgRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.msgIndex.isZero()) {
            writer.uint32(16).uint64(message.msgIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryPoolBatchDepositMsgRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.msgIndex = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryPoolBatchDepositMsgRequest);
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromString(object.poolId)
                : long_1.default.UZERO;
        message.msgIndex =
            object.msgIndex !== undefined && object.msgIndex !== null
                ? long_1.default.fromString(object.msgIndex)
                : long_1.default.UZERO;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.msgIndex !== undefined &&
            (obj.msgIndex = (message.msgIndex || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryPoolBatchDepositMsgRequest);
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId;
        }
        else {
            message.poolId = long_1.default.UZERO;
        }
        if (object.msgIndex !== undefined && object.msgIndex !== null) {
            message.msgIndex = object.msgIndex;
        }
        else {
            message.msgIndex = long_1.default.UZERO;
        }
        return message;
    },
};
const baseQueryPoolBatchDepositMsgsResponse = {};
exports.QueryPoolBatchDepositMsgsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.deposits) {
            liquidity_1.DepositMsgState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryPoolBatchDepositMsgsResponse);
        message.deposits = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deposits.push(liquidity_1.DepositMsgState.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a;
        const message = Object.assign({}, baseQueryPoolBatchDepositMsgsResponse);
        message.deposits = ((_a = object.deposits) !== null && _a !== void 0 ? _a : []).map((e) => liquidity_1.DepositMsgState.fromJSON(e));
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.deposits) {
            obj.deposits = message.deposits.map((e) => e ? liquidity_1.DepositMsgState.toJSON(e) : undefined);
        }
        else {
            obj.deposits = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseQueryPoolBatchDepositMsgsResponse);
        message.deposits = ((_a = object.deposits) !== null && _a !== void 0 ? _a : []).map((e) => liquidity_1.DepositMsgState.fromPartial(e));
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
const baseQueryPoolBatchDepositMsgResponse = {};
exports.QueryPoolBatchDepositMsgResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.deposit !== undefined) {
            liquidity_1.DepositMsgState.encode(message.deposit, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryPoolBatchDepositMsgResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.deposit = liquidity_1.DepositMsgState.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryPoolBatchDepositMsgResponse);
        message.deposit =
            object.deposit !== undefined && object.deposit !== null
                ? liquidity_1.DepositMsgState.fromJSON(object.deposit)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.deposit !== undefined &&
            (obj.deposit = message.deposit
                ? liquidity_1.DepositMsgState.toJSON(message.deposit)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryPoolBatchDepositMsgResponse);
        message.deposit =
            object.deposit !== undefined && object.deposit !== null
                ? liquidity_1.DepositMsgState.fromPartial(object.deposit)
                : undefined;
        return message;
    },
};
const baseQueryPoolBatchWithdrawMsgsRequest = { poolId: long_1.default.UZERO };
exports.QueryPoolBatchWithdrawMsgsRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.pagination !== undefined) {
            pagination_1.PageRequest.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryPoolBatchWithdrawMsgsRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.pagination = pagination_1.PageRequest.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryPoolBatchWithdrawMsgsRequest);
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromString(object.poolId)
                : long_1.default.UZERO;
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromJSON(object.pagination)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageRequest.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryPoolBatchWithdrawMsgsRequest);
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId;
        }
        else {
            message.poolId = long_1.default.UZERO;
        }
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageRequest.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
const baseQueryPoolBatchWithdrawMsgRequest = {
    poolId: long_1.default.UZERO,
    msgIndex: long_1.default.UZERO,
};
exports.QueryPoolBatchWithdrawMsgRequest = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.msgIndex.isZero()) {
            writer.uint32(16).uint64(message.msgIndex);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryPoolBatchWithdrawMsgRequest);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.msgIndex = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryPoolBatchWithdrawMsgRequest);
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromString(object.poolId)
                : long_1.default.UZERO;
        message.msgIndex =
            object.msgIndex !== undefined && object.msgIndex !== null
                ? long_1.default.fromString(object.msgIndex)
                : long_1.default.UZERO;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.msgIndex !== undefined &&
            (obj.msgIndex = (message.msgIndex || long_1.default.UZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryPoolBatchWithdrawMsgRequest);
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId;
        }
        else {
            message.poolId = long_1.default.UZERO;
        }
        if (object.msgIndex !== undefined && object.msgIndex !== null) {
            message.msgIndex = object.msgIndex;
        }
        else {
            message.msgIndex = long_1.default.UZERO;
        }
        return message;
    },
};
const baseQueryPoolBatchWithdrawMsgsResponse = {};
exports.QueryPoolBatchWithdrawMsgsResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.withdraws) {
            liquidity_1.WithdrawMsgState.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.pagination !== undefined) {
            pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryPoolBatchWithdrawMsgsResponse);
        message.withdraws = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.withdraws.push(liquidity_1.WithdrawMsgState.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.pagination = pagination_1.PageResponse.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a;
        const message = Object.assign({}, baseQueryPoolBatchWithdrawMsgsResponse);
        message.withdraws = ((_a = object.withdraws) !== null && _a !== void 0 ? _a : []).map((e) => liquidity_1.WithdrawMsgState.fromJSON(e));
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromJSON(object.pagination)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.withdraws) {
            obj.withdraws = message.withdraws.map((e) => e ? liquidity_1.WithdrawMsgState.toJSON(e) : undefined);
        }
        else {
            obj.withdraws = [];
        }
        message.pagination !== undefined &&
            (obj.pagination = message.pagination
                ? pagination_1.PageResponse.toJSON(message.pagination)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseQueryPoolBatchWithdrawMsgsResponse);
        message.withdraws = ((_a = object.withdraws) !== null && _a !== void 0 ? _a : []).map((e) => liquidity_1.WithdrawMsgState.fromPartial(e));
        message.pagination =
            object.pagination !== undefined && object.pagination !== null
                ? pagination_1.PageResponse.fromPartial(object.pagination)
                : undefined;
        return message;
    },
};
const baseQueryPoolBatchWithdrawMsgResponse = {};
exports.QueryPoolBatchWithdrawMsgResponse = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.withdraw !== undefined) {
            liquidity_1.WithdrawMsgState.encode(message.withdraw, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseQueryPoolBatchWithdrawMsgResponse);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.withdraw = liquidity_1.WithdrawMsgState.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseQueryPoolBatchWithdrawMsgResponse);
        message.withdraw =
            object.withdraw !== undefined && object.withdraw !== null
                ? liquidity_1.WithdrawMsgState.fromJSON(object.withdraw)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.withdraw !== undefined &&
            (obj.withdraw = message.withdraw
                ? liquidity_1.WithdrawMsgState.toJSON(message.withdraw)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseQueryPoolBatchWithdrawMsgResponse);
        message.withdraw =
            object.withdraw !== undefined && object.withdraw !== null
                ? liquidity_1.WithdrawMsgState.fromPartial(object.withdraw)
                : undefined;
        return message;
    },
};
class QueryClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.LiquidityPools = this.LiquidityPools.bind(this);
        this.LiquidityPool = this.LiquidityPool.bind(this);
        this.LiquidityPoolByPoolCoinDenom =
            this.LiquidityPoolByPoolCoinDenom.bind(this);
        this.LiquidityPoolByReserveAcc = this.LiquidityPoolByReserveAcc.bind(this);
        this.LiquidityPoolBatch = this.LiquidityPoolBatch.bind(this);
        this.PoolBatchSwapMsgs = this.PoolBatchSwapMsgs.bind(this);
        this.PoolBatchSwapMsg = this.PoolBatchSwapMsg.bind(this);
        this.PoolBatchDepositMsgs = this.PoolBatchDepositMsgs.bind(this);
        this.PoolBatchDepositMsg = this.PoolBatchDepositMsg.bind(this);
        this.PoolBatchWithdrawMsgs = this.PoolBatchWithdrawMsgs.bind(this);
        this.PoolBatchWithdrawMsg = this.PoolBatchWithdrawMsg.bind(this);
        this.Params = this.Params.bind(this);
    }
    LiquidityPools(request) {
        const data = exports.QueryLiquidityPoolsRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Query", "LiquidityPools", data);
        return promise.then((data) => exports.QueryLiquidityPoolsResponse.decode(new minimal_1.default.Reader(data)));
    }
    LiquidityPool(request) {
        const data = exports.QueryLiquidityPoolRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Query", "LiquidityPool", data);
        return promise.then((data) => exports.QueryLiquidityPoolResponse.decode(new minimal_1.default.Reader(data)));
    }
    LiquidityPoolByPoolCoinDenom(request) {
        const data = exports.QueryLiquidityPoolByPoolCoinDenomRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Query", "LiquidityPoolByPoolCoinDenom", data);
        return promise.then((data) => exports.QueryLiquidityPoolResponse.decode(new minimal_1.default.Reader(data)));
    }
    LiquidityPoolByReserveAcc(request) {
        const data = exports.QueryLiquidityPoolByReserveAccRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Query", "LiquidityPoolByReserveAcc", data);
        return promise.then((data) => exports.QueryLiquidityPoolResponse.decode(new minimal_1.default.Reader(data)));
    }
    LiquidityPoolBatch(request) {
        const data = exports.QueryLiquidityPoolBatchRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Query", "LiquidityPoolBatch", data);
        return promise.then((data) => exports.QueryLiquidityPoolBatchResponse.decode(new minimal_1.default.Reader(data)));
    }
    PoolBatchSwapMsgs(request) {
        const data = exports.QueryPoolBatchSwapMsgsRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Query", "PoolBatchSwapMsgs", data);
        return promise.then((data) => exports.QueryPoolBatchSwapMsgsResponse.decode(new minimal_1.default.Reader(data)));
    }
    PoolBatchSwapMsg(request) {
        const data = exports.QueryPoolBatchSwapMsgRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Query", "PoolBatchSwapMsg", data);
        return promise.then((data) => exports.QueryPoolBatchSwapMsgResponse.decode(new minimal_1.default.Reader(data)));
    }
    PoolBatchDepositMsgs(request) {
        const data = exports.QueryPoolBatchDepositMsgsRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Query", "PoolBatchDepositMsgs", data);
        return promise.then((data) => exports.QueryPoolBatchDepositMsgsResponse.decode(new minimal_1.default.Reader(data)));
    }
    PoolBatchDepositMsg(request) {
        const data = exports.QueryPoolBatchDepositMsgRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Query", "PoolBatchDepositMsg", data);
        return promise.then((data) => exports.QueryPoolBatchDepositMsgResponse.decode(new minimal_1.default.Reader(data)));
    }
    PoolBatchWithdrawMsgs(request) {
        const data = exports.QueryPoolBatchWithdrawMsgsRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Query", "PoolBatchWithdrawMsgs", data);
        return promise.then((data) => exports.QueryPoolBatchWithdrawMsgsResponse.decode(new minimal_1.default.Reader(data)));
    }
    PoolBatchWithdrawMsg(request) {
        const data = exports.QueryPoolBatchWithdrawMsgRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Query", "PoolBatchWithdrawMsg", data);
        return promise.then((data) => exports.QueryPoolBatchWithdrawMsgResponse.decode(new minimal_1.default.Reader(data)));
    }
    Params(request) {
        const data = exports.QueryParamsRequest.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Query", "Params", data);
        return promise.then((data) => exports.QueryParamsResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.QueryClientImpl = QueryClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=query.js.map