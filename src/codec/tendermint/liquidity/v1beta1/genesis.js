"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenesisState = exports.PoolRecord = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const liquidity_1 = require("../../../tendermint/liquidity/v1beta1/liquidity");
exports.protobufPackage = "tendermint.liquidity.v1beta1";
const basePoolRecord = {};
exports.PoolRecord = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.pool !== undefined) {
            liquidity_1.Pool.encode(message.pool, writer.uint32(10).fork()).ldelim();
        }
        if (message.poolMetadata !== undefined) {
            liquidity_1.PoolMetadata.encode(message.poolMetadata, writer.uint32(18).fork()).ldelim();
        }
        if (message.poolBatch !== undefined) {
            liquidity_1.PoolBatch.encode(message.poolBatch, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.depositMsgStates) {
            liquidity_1.DepositMsgState.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.withdrawMsgStates) {
            liquidity_1.WithdrawMsgState.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.swapMsgStates) {
            liquidity_1.SwapMsgState.encode(v, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePoolRecord);
        message.depositMsgStates = [];
        message.withdrawMsgStates = [];
        message.swapMsgStates = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.pool = liquidity_1.Pool.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.poolMetadata = liquidity_1.PoolMetadata.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.poolBatch = liquidity_1.PoolBatch.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.depositMsgStates.push(liquidity_1.DepositMsgState.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.withdrawMsgStates.push(liquidity_1.WithdrawMsgState.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.swapMsgStates.push(liquidity_1.SwapMsgState.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b, _c;
        const message = Object.assign({}, basePoolRecord);
        message.pool =
            object.pool !== undefined && object.pool !== null
                ? liquidity_1.Pool.fromJSON(object.pool)
                : undefined;
        message.poolMetadata =
            object.poolMetadata !== undefined && object.poolMetadata !== null
                ? liquidity_1.PoolMetadata.fromJSON(object.poolMetadata)
                : undefined;
        message.poolBatch =
            object.poolBatch !== undefined && object.poolBatch !== null
                ? liquidity_1.PoolBatch.fromJSON(object.poolBatch)
                : undefined;
        message.depositMsgStates = ((_a = object.depositMsgStates) !== null && _a !== void 0 ? _a : []).map((e) => liquidity_1.DepositMsgState.fromJSON(e));
        message.withdrawMsgStates = ((_b = object.withdrawMsgStates) !== null && _b !== void 0 ? _b : []).map((e) => liquidity_1.WithdrawMsgState.fromJSON(e));
        message.swapMsgStates = ((_c = object.swapMsgStates) !== null && _c !== void 0 ? _c : []).map((e) => liquidity_1.SwapMsgState.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.pool !== undefined &&
            (obj.pool = message.pool ? liquidity_1.Pool.toJSON(message.pool) : undefined);
        message.poolMetadata !== undefined &&
            (obj.poolMetadata = message.poolMetadata
                ? liquidity_1.PoolMetadata.toJSON(message.poolMetadata)
                : undefined);
        message.poolBatch !== undefined &&
            (obj.poolBatch = message.poolBatch
                ? liquidity_1.PoolBatch.toJSON(message.poolBatch)
                : undefined);
        if (message.depositMsgStates) {
            obj.depositMsgStates = message.depositMsgStates.map((e) => e ? liquidity_1.DepositMsgState.toJSON(e) : undefined);
        }
        else {
            obj.depositMsgStates = [];
        }
        if (message.withdrawMsgStates) {
            obj.withdrawMsgStates = message.withdrawMsgStates.map((e) => e ? liquidity_1.WithdrawMsgState.toJSON(e) : undefined);
        }
        else {
            obj.withdrawMsgStates = [];
        }
        if (message.swapMsgStates) {
            obj.swapMsgStates = message.swapMsgStates.map((e) => e ? liquidity_1.SwapMsgState.toJSON(e) : undefined);
        }
        else {
            obj.swapMsgStates = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, basePoolRecord);
        message.pool =
            object.pool !== undefined && object.pool !== null
                ? liquidity_1.Pool.fromPartial(object.pool)
                : undefined;
        message.poolMetadata =
            object.poolMetadata !== undefined && object.poolMetadata !== null
                ? liquidity_1.PoolMetadata.fromPartial(object.poolMetadata)
                : undefined;
        message.poolBatch =
            object.poolBatch !== undefined && object.poolBatch !== null
                ? liquidity_1.PoolBatch.fromPartial(object.poolBatch)
                : undefined;
        message.depositMsgStates = ((_a = object.depositMsgStates) !== null && _a !== void 0 ? _a : []).map((e) => liquidity_1.DepositMsgState.fromPartial(e));
        message.withdrawMsgStates = ((_b = object.withdrawMsgStates) !== null && _b !== void 0 ? _b : []).map((e) => liquidity_1.WithdrawMsgState.fromPartial(e));
        message.swapMsgStates = ((_c = object.swapMsgStates) !== null && _c !== void 0 ? _c : []).map((e) => liquidity_1.SwapMsgState.fromPartial(e));
        return message;
    },
};
const baseGenesisState = {};
exports.GenesisState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.params !== undefined) {
            liquidity_1.Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.poolRecords) {
            exports.PoolRecord.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseGenesisState);
        message.poolRecords = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.params = liquidity_1.Params.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.poolRecords.push(exports.PoolRecord.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseGenesisState);
        message.params =
            object.params !== undefined && object.params !== null
                ? liquidity_1.Params.fromJSON(object.params)
                : undefined;
        message.poolRecords = ((_a = object.poolRecords) !== null && _a !== void 0 ? _a : []).map((e) => exports.PoolRecord.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.params !== undefined &&
            (obj.params = message.params ? liquidity_1.Params.toJSON(message.params) : undefined);
        if (message.poolRecords) {
            obj.poolRecords = message.poolRecords.map((e) => e ? exports.PoolRecord.toJSON(e) : undefined);
        }
        else {
            obj.poolRecords = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseGenesisState);
        message.params =
            object.params !== undefined && object.params !== null
                ? liquidity_1.Params.fromPartial(object.params)
                : undefined;
        message.poolRecords = ((_a = object.poolRecords) !== null && _a !== void 0 ? _a : []).map((e) => exports.PoolRecord.fromPartial(e));
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=genesis.js.map