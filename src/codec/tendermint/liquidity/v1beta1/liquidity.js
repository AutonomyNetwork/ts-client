"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwapMsgState = exports.WithdrawMsgState = exports.DepositMsgState = exports.PoolBatch = exports.PoolMetadata = exports.Pool = exports.Params = exports.PoolType = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos_proto/coin");
const tx_1 = require("../../../tendermint/liquidity/v1beta1/tx");
exports.protobufPackage = "tendermint.liquidity.v1beta1";
const basePoolType = {
    id: 0,
    name: "",
    minReserveCoinNum: 0,
    maxReserveCoinNum: 0,
    description: "",
};
exports.PoolType = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.id !== 0) {
            writer.uint32(8).uint32(message.id);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        if (message.minReserveCoinNum !== 0) {
            writer.uint32(24).uint32(message.minReserveCoinNum);
        }
        if (message.maxReserveCoinNum !== 0) {
            writer.uint32(32).uint32(message.maxReserveCoinNum);
        }
        if (message.description !== "") {
            writer.uint32(42).string(message.description);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePoolType);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint32();
                    break;
                case 2:
                    message.name = reader.string();
                    break;
                case 3:
                    message.minReserveCoinNum = reader.uint32();
                    break;
                case 4:
                    message.maxReserveCoinNum = reader.uint32();
                    break;
                case 5:
                    message.description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePoolType);
        message.id =
            object.id !== undefined && object.id !== null ? Number(object.id) : 0;
        message.name =
            object.name !== undefined && object.name !== null
                ? String(object.name)
                : "";
        message.minReserveCoinNum =
            object.minReserveCoinNum !== undefined &&
                object.minReserveCoinNum !== null
                ? Number(object.minReserveCoinNum)
                : 0;
        message.maxReserveCoinNum =
            object.maxReserveCoinNum !== undefined &&
                object.maxReserveCoinNum !== null
                ? Number(object.maxReserveCoinNum)
                : 0;
        message.description =
            object.description !== undefined && object.description !== null
                ? String(object.description)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined && (obj.id = message.id);
        message.name !== undefined && (obj.name = message.name);
        message.minReserveCoinNum !== undefined &&
            (obj.minReserveCoinNum = message.minReserveCoinNum);
        message.maxReserveCoinNum !== undefined &&
            (obj.maxReserveCoinNum = message.maxReserveCoinNum);
        message.description !== undefined &&
            (obj.description = message.description);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e;
        const message = Object.assign({}, basePoolType);
        message.id = (_a = object.id) !== null && _a !== void 0 ? _a : 0;
        message.name = (_b = object.name) !== null && _b !== void 0 ? _b : "";
        message.minReserveCoinNum = (_c = object.minReserveCoinNum) !== null && _c !== void 0 ? _c : 0;
        message.maxReserveCoinNum = (_d = object.maxReserveCoinNum) !== null && _d !== void 0 ? _d : 0;
        message.description = (_e = object.description) !== null && _e !== void 0 ? _e : "";
        return message;
    },
};
const baseParams = {
    minInitDepositAmount: "",
    initPoolCoinMintAmount: "",
    maxReserveCoinAmount: "",
    swapFeeRate: "",
    withdrawFeeRate: "",
    maxOrderAmountRatio: "",
    unitBatchHeight: 0,
    circuitBreakerEnabled: false,
};
exports.Params = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        for (const v of message.poolTypes) {
            exports.PoolType.encode(v, writer.uint32(10).fork()).ldelim();
        }
        if (message.minInitDepositAmount !== "") {
            writer.uint32(18).string(message.minInitDepositAmount);
        }
        if (message.initPoolCoinMintAmount !== "") {
            writer.uint32(26).string(message.initPoolCoinMintAmount);
        }
        if (message.maxReserveCoinAmount !== "") {
            writer.uint32(34).string(message.maxReserveCoinAmount);
        }
        for (const v of message.poolCreationFee) {
            coin_1.Coin.encode(v, writer.uint32(42).fork()).ldelim();
        }
        if (message.swapFeeRate !== "") {
            writer.uint32(50).string(message.swapFeeRate);
        }
        if (message.withdrawFeeRate !== "") {
            writer.uint32(58).string(message.withdrawFeeRate);
        }
        if (message.maxOrderAmountRatio !== "") {
            writer.uint32(66).string(message.maxOrderAmountRatio);
        }
        if (message.unitBatchHeight !== 0) {
            writer.uint32(72).uint32(message.unitBatchHeight);
        }
        if (message.circuitBreakerEnabled === true) {
            writer.uint32(80).bool(message.circuitBreakerEnabled);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseParams);
        message.poolTypes = [];
        message.poolCreationFee = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolTypes.push(exports.PoolType.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.minInitDepositAmount = reader.string();
                    break;
                case 3:
                    message.initPoolCoinMintAmount = reader.string();
                    break;
                case 4:
                    message.maxReserveCoinAmount = reader.string();
                    break;
                case 5:
                    message.poolCreationFee.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.swapFeeRate = reader.string();
                    break;
                case 7:
                    message.withdrawFeeRate = reader.string();
                    break;
                case 8:
                    message.maxOrderAmountRatio = reader.string();
                    break;
                case 9:
                    message.unitBatchHeight = reader.uint32();
                    break;
                case 10:
                    message.circuitBreakerEnabled = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        var _a, _b;
        const message = Object.assign({}, baseParams);
        message.poolTypes = ((_a = object.poolTypes) !== null && _a !== void 0 ? _a : []).map((e) => exports.PoolType.fromJSON(e));
        message.minInitDepositAmount =
            object.minInitDepositAmount !== undefined &&
                object.minInitDepositAmount !== null
                ? String(object.minInitDepositAmount)
                : "";
        message.initPoolCoinMintAmount =
            object.initPoolCoinMintAmount !== undefined &&
                object.initPoolCoinMintAmount !== null
                ? String(object.initPoolCoinMintAmount)
                : "";
        message.maxReserveCoinAmount =
            object.maxReserveCoinAmount !== undefined &&
                object.maxReserveCoinAmount !== null
                ? String(object.maxReserveCoinAmount)
                : "";
        message.poolCreationFee = ((_b = object.poolCreationFee) !== null && _b !== void 0 ? _b : []).map((e) => coin_1.Coin.fromJSON(e));
        message.swapFeeRate =
            object.swapFeeRate !== undefined && object.swapFeeRate !== null
                ? String(object.swapFeeRate)
                : "";
        message.withdrawFeeRate =
            object.withdrawFeeRate !== undefined && object.withdrawFeeRate !== null
                ? String(object.withdrawFeeRate)
                : "";
        message.maxOrderAmountRatio =
            object.maxOrderAmountRatio !== undefined &&
                object.maxOrderAmountRatio !== null
                ? String(object.maxOrderAmountRatio)
                : "";
        message.unitBatchHeight =
            object.unitBatchHeight !== undefined && object.unitBatchHeight !== null
                ? Number(object.unitBatchHeight)
                : 0;
        message.circuitBreakerEnabled =
            object.circuitBreakerEnabled !== undefined &&
                object.circuitBreakerEnabled !== null
                ? Boolean(object.circuitBreakerEnabled)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        if (message.poolTypes) {
            obj.poolTypes = message.poolTypes.map((e) => e ? exports.PoolType.toJSON(e) : undefined);
        }
        else {
            obj.poolTypes = [];
        }
        message.minInitDepositAmount !== undefined &&
            (obj.minInitDepositAmount = message.minInitDepositAmount);
        message.initPoolCoinMintAmount !== undefined &&
            (obj.initPoolCoinMintAmount = message.initPoolCoinMintAmount);
        message.maxReserveCoinAmount !== undefined &&
            (obj.maxReserveCoinAmount = message.maxReserveCoinAmount);
        if (message.poolCreationFee) {
            obj.poolCreationFee = message.poolCreationFee.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.poolCreationFee = [];
        }
        message.swapFeeRate !== undefined &&
            (obj.swapFeeRate = message.swapFeeRate);
        message.withdrawFeeRate !== undefined &&
            (obj.withdrawFeeRate = message.withdrawFeeRate);
        message.maxOrderAmountRatio !== undefined &&
            (obj.maxOrderAmountRatio = message.maxOrderAmountRatio);
        message.unitBatchHeight !== undefined &&
            (obj.unitBatchHeight = message.unitBatchHeight);
        message.circuitBreakerEnabled !== undefined &&
            (obj.circuitBreakerEnabled = message.circuitBreakerEnabled);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
        const message = Object.assign({}, baseParams);
        message.poolTypes = ((_a = object.poolTypes) !== null && _a !== void 0 ? _a : []).map((e) => exports.PoolType.fromPartial(e));
        message.minInitDepositAmount = (_b = object.minInitDepositAmount) !== null && _b !== void 0 ? _b : "";
        message.initPoolCoinMintAmount = (_c = object.initPoolCoinMintAmount) !== null && _c !== void 0 ? _c : "";
        message.maxReserveCoinAmount = (_d = object.maxReserveCoinAmount) !== null && _d !== void 0 ? _d : "";
        message.poolCreationFee = ((_e = object.poolCreationFee) !== null && _e !== void 0 ? _e : []).map((e) => coin_1.Coin.fromPartial(e));
        message.swapFeeRate = (_f = object.swapFeeRate) !== null && _f !== void 0 ? _f : "";
        message.withdrawFeeRate = (_g = object.withdrawFeeRate) !== null && _g !== void 0 ? _g : "";
        message.maxOrderAmountRatio = (_h = object.maxOrderAmountRatio) !== null && _h !== void 0 ? _h : "";
        message.unitBatchHeight = (_j = object.unitBatchHeight) !== null && _j !== void 0 ? _j : 0;
        message.circuitBreakerEnabled = (_k = object.circuitBreakerEnabled) !== null && _k !== void 0 ? _k : false;
        return message;
    },
};
const basePool = {
    id: long_1.default.UZERO,
    typeId: 0,
    reserveCoinDenoms: "",
    reserveAccountAddress: "",
    poolCoinDenom: "",
};
exports.Pool = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.id.isZero()) {
            writer.uint32(8).uint64(message.id);
        }
        if (message.typeId !== 0) {
            writer.uint32(16).uint32(message.typeId);
        }
        for (const v of message.reserveCoinDenoms) {
            writer.uint32(26).string(v);
        }
        if (message.reserveAccountAddress !== "") {
            writer.uint32(34).string(message.reserveAccountAddress);
        }
        if (message.poolCoinDenom !== "") {
            writer.uint32(42).string(message.poolCoinDenom);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePool);
        message.reserveCoinDenoms = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.id = reader.uint64();
                    break;
                case 2:
                    message.typeId = reader.uint32();
                    break;
                case 3:
                    message.reserveCoinDenoms.push(reader.string());
                    break;
                case 4:
                    message.reserveAccountAddress = reader.string();
                    break;
                case 5:
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
        var _a;
        const message = Object.assign({}, basePool);
        message.id =
            object.id !== undefined && object.id !== null
                ? long_1.default.fromString(object.id)
                : long_1.default.UZERO;
        message.typeId =
            object.typeId !== undefined && object.typeId !== null
                ? Number(object.typeId)
                : 0;
        message.reserveCoinDenoms = ((_a = object.reserveCoinDenoms) !== null && _a !== void 0 ? _a : []).map((e) => String(e));
        message.reserveAccountAddress =
            object.reserveAccountAddress !== undefined &&
                object.reserveAccountAddress !== null
                ? String(object.reserveAccountAddress)
                : "";
        message.poolCoinDenom =
            object.poolCoinDenom !== undefined && object.poolCoinDenom !== null
                ? String(object.poolCoinDenom)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.id !== undefined &&
            (obj.id = (message.id || long_1.default.UZERO).toString());
        message.typeId !== undefined && (obj.typeId = message.typeId);
        if (message.reserveCoinDenoms) {
            obj.reserveCoinDenoms = message.reserveCoinDenoms.map((e) => e);
        }
        else {
            obj.reserveCoinDenoms = [];
        }
        message.reserveAccountAddress !== undefined &&
            (obj.reserveAccountAddress = message.reserveAccountAddress);
        message.poolCoinDenom !== undefined &&
            (obj.poolCoinDenom = message.poolCoinDenom);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, basePool);
        if (object.id !== undefined && object.id !== null) {
            message.id = object.id;
        }
        else {
            message.id = long_1.default.UZERO;
        }
        message.typeId = (_a = object.typeId) !== null && _a !== void 0 ? _a : 0;
        message.reserveCoinDenoms = ((_b = object.reserveCoinDenoms) !== null && _b !== void 0 ? _b : []).map((e) => e);
        message.reserveAccountAddress = (_c = object.reserveAccountAddress) !== null && _c !== void 0 ? _c : "";
        message.poolCoinDenom = (_d = object.poolCoinDenom) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
const basePoolMetadata = { poolId: long_1.default.UZERO };
exports.PoolMetadata = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (message.poolCoinTotalSupply !== undefined) {
            coin_1.Coin.encode(message.poolCoinTotalSupply, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.reserveCoins) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePoolMetadata);
        message.reserveCoins = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.poolCoinTotalSupply = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.reserveCoins.push(coin_1.Coin.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, basePoolMetadata);
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromString(object.poolId)
                : long_1.default.UZERO;
        message.poolCoinTotalSupply =
            object.poolCoinTotalSupply !== undefined &&
                object.poolCoinTotalSupply !== null
                ? coin_1.Coin.fromJSON(object.poolCoinTotalSupply)
                : undefined;
        message.reserveCoins = ((_a = object.reserveCoins) !== null && _a !== void 0 ? _a : []).map((e) => coin_1.Coin.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.poolCoinTotalSupply !== undefined &&
            (obj.poolCoinTotalSupply = message.poolCoinTotalSupply
                ? coin_1.Coin.toJSON(message.poolCoinTotalSupply)
                : undefined);
        if (message.reserveCoins) {
            obj.reserveCoins = message.reserveCoins.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.reserveCoins = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, basePoolMetadata);
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId;
        }
        else {
            message.poolId = long_1.default.UZERO;
        }
        message.poolCoinTotalSupply =
            object.poolCoinTotalSupply !== undefined &&
                object.poolCoinTotalSupply !== null
                ? coin_1.Coin.fromPartial(object.poolCoinTotalSupply)
                : undefined;
        message.reserveCoins = ((_a = object.reserveCoins) !== null && _a !== void 0 ? _a : []).map((e) => coin_1.Coin.fromPartial(e));
        return message;
    },
};
const basePoolBatch = {
    poolId: long_1.default.UZERO,
    index: long_1.default.UZERO,
    beginHeight: long_1.default.ZERO,
    depositMsgIndex: long_1.default.UZERO,
    withdrawMsgIndex: long_1.default.UZERO,
    swapMsgIndex: long_1.default.UZERO,
    executed: false,
};
exports.PoolBatch = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.poolId.isZero()) {
            writer.uint32(8).uint64(message.poolId);
        }
        if (!message.index.isZero()) {
            writer.uint32(16).uint64(message.index);
        }
        if (!message.beginHeight.isZero()) {
            writer.uint32(24).int64(message.beginHeight);
        }
        if (!message.depositMsgIndex.isZero()) {
            writer.uint32(32).uint64(message.depositMsgIndex);
        }
        if (!message.withdrawMsgIndex.isZero()) {
            writer.uint32(40).uint64(message.withdrawMsgIndex);
        }
        if (!message.swapMsgIndex.isZero()) {
            writer.uint32(48).uint64(message.swapMsgIndex);
        }
        if (message.executed === true) {
            writer.uint32(56).bool(message.executed);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePoolBatch);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolId = reader.uint64();
                    break;
                case 2:
                    message.index = reader.uint64();
                    break;
                case 3:
                    message.beginHeight = reader.int64();
                    break;
                case 4:
                    message.depositMsgIndex = reader.uint64();
                    break;
                case 5:
                    message.withdrawMsgIndex = reader.uint64();
                    break;
                case 6:
                    message.swapMsgIndex = reader.uint64();
                    break;
                case 7:
                    message.executed = reader.bool();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePoolBatch);
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromString(object.poolId)
                : long_1.default.UZERO;
        message.index =
            object.index !== undefined && object.index !== null
                ? long_1.default.fromString(object.index)
                : long_1.default.UZERO;
        message.beginHeight =
            object.beginHeight !== undefined && object.beginHeight !== null
                ? long_1.default.fromString(object.beginHeight)
                : long_1.default.ZERO;
        message.depositMsgIndex =
            object.depositMsgIndex !== undefined && object.depositMsgIndex !== null
                ? long_1.default.fromString(object.depositMsgIndex)
                : long_1.default.UZERO;
        message.withdrawMsgIndex =
            object.withdrawMsgIndex !== undefined && object.withdrawMsgIndex !== null
                ? long_1.default.fromString(object.withdrawMsgIndex)
                : long_1.default.UZERO;
        message.swapMsgIndex =
            object.swapMsgIndex !== undefined && object.swapMsgIndex !== null
                ? long_1.default.fromString(object.swapMsgIndex)
                : long_1.default.UZERO;
        message.executed =
            object.executed !== undefined && object.executed !== null
                ? Boolean(object.executed)
                : false;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.index !== undefined &&
            (obj.index = (message.index || long_1.default.UZERO).toString());
        message.beginHeight !== undefined &&
            (obj.beginHeight = (message.beginHeight || long_1.default.ZERO).toString());
        message.depositMsgIndex !== undefined &&
            (obj.depositMsgIndex = (message.depositMsgIndex || long_1.default.UZERO).toString());
        message.withdrawMsgIndex !== undefined &&
            (obj.withdrawMsgIndex = (message.withdrawMsgIndex || long_1.default.UZERO).toString());
        message.swapMsgIndex !== undefined &&
            (obj.swapMsgIndex = (message.swapMsgIndex || long_1.default.UZERO).toString());
        message.executed !== undefined && (obj.executed = message.executed);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, basePoolBatch);
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId;
        }
        else {
            message.poolId = long_1.default.UZERO;
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = object.index;
        }
        else {
            message.index = long_1.default.UZERO;
        }
        if (object.beginHeight !== undefined && object.beginHeight !== null) {
            message.beginHeight = object.beginHeight;
        }
        else {
            message.beginHeight = long_1.default.ZERO;
        }
        if (object.depositMsgIndex !== undefined &&
            object.depositMsgIndex !== null) {
            message.depositMsgIndex = object.depositMsgIndex;
        }
        else {
            message.depositMsgIndex = long_1.default.UZERO;
        }
        if (object.withdrawMsgIndex !== undefined &&
            object.withdrawMsgIndex !== null) {
            message.withdrawMsgIndex = object.withdrawMsgIndex;
        }
        else {
            message.withdrawMsgIndex = long_1.default.UZERO;
        }
        if (object.swapMsgIndex !== undefined && object.swapMsgIndex !== null) {
            message.swapMsgIndex = object.swapMsgIndex;
        }
        else {
            message.swapMsgIndex = long_1.default.UZERO;
        }
        message.executed = (_a = object.executed) !== null && _a !== void 0 ? _a : false;
        return message;
    },
};
const baseDepositMsgState = {
    msgHeight: long_1.default.ZERO,
    msgIndex: long_1.default.UZERO,
    executed: false,
    succeeded: false,
    toBeDeleted: false,
};
exports.DepositMsgState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.msgHeight.isZero()) {
            writer.uint32(8).int64(message.msgHeight);
        }
        if (!message.msgIndex.isZero()) {
            writer.uint32(16).uint64(message.msgIndex);
        }
        if (message.executed === true) {
            writer.uint32(24).bool(message.executed);
        }
        if (message.succeeded === true) {
            writer.uint32(32).bool(message.succeeded);
        }
        if (message.toBeDeleted === true) {
            writer.uint32(40).bool(message.toBeDeleted);
        }
        if (message.msg !== undefined) {
            tx_1.MsgDepositWithinBatch.encode(message.msg, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDepositMsgState);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msgHeight = reader.int64();
                    break;
                case 2:
                    message.msgIndex = reader.uint64();
                    break;
                case 3:
                    message.executed = reader.bool();
                    break;
                case 4:
                    message.succeeded = reader.bool();
                    break;
                case 5:
                    message.toBeDeleted = reader.bool();
                    break;
                case 6:
                    message.msg = tx_1.MsgDepositWithinBatch.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDepositMsgState);
        message.msgHeight =
            object.msgHeight !== undefined && object.msgHeight !== null
                ? long_1.default.fromString(object.msgHeight)
                : long_1.default.ZERO;
        message.msgIndex =
            object.msgIndex !== undefined && object.msgIndex !== null
                ? long_1.default.fromString(object.msgIndex)
                : long_1.default.UZERO;
        message.executed =
            object.executed !== undefined && object.executed !== null
                ? Boolean(object.executed)
                : false;
        message.succeeded =
            object.succeeded !== undefined && object.succeeded !== null
                ? Boolean(object.succeeded)
                : false;
        message.toBeDeleted =
            object.toBeDeleted !== undefined && object.toBeDeleted !== null
                ? Boolean(object.toBeDeleted)
                : false;
        message.msg =
            object.msg !== undefined && object.msg !== null
                ? tx_1.MsgDepositWithinBatch.fromJSON(object.msg)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.msgHeight !== undefined &&
            (obj.msgHeight = (message.msgHeight || long_1.default.ZERO).toString());
        message.msgIndex !== undefined &&
            (obj.msgIndex = (message.msgIndex || long_1.default.UZERO).toString());
        message.executed !== undefined && (obj.executed = message.executed);
        message.succeeded !== undefined && (obj.succeeded = message.succeeded);
        message.toBeDeleted !== undefined &&
            (obj.toBeDeleted = message.toBeDeleted);
        message.msg !== undefined &&
            (obj.msg = message.msg
                ? tx_1.MsgDepositWithinBatch.toJSON(message.msg)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseDepositMsgState);
        if (object.msgHeight !== undefined && object.msgHeight !== null) {
            message.msgHeight = object.msgHeight;
        }
        else {
            message.msgHeight = long_1.default.ZERO;
        }
        if (object.msgIndex !== undefined && object.msgIndex !== null) {
            message.msgIndex = object.msgIndex;
        }
        else {
            message.msgIndex = long_1.default.UZERO;
        }
        message.executed = (_a = object.executed) !== null && _a !== void 0 ? _a : false;
        message.succeeded = (_b = object.succeeded) !== null && _b !== void 0 ? _b : false;
        message.toBeDeleted = (_c = object.toBeDeleted) !== null && _c !== void 0 ? _c : false;
        message.msg =
            object.msg !== undefined && object.msg !== null
                ? tx_1.MsgDepositWithinBatch.fromPartial(object.msg)
                : undefined;
        return message;
    },
};
const baseWithdrawMsgState = {
    msgHeight: long_1.default.ZERO,
    msgIndex: long_1.default.UZERO,
    executed: false,
    succeeded: false,
    toBeDeleted: false,
};
exports.WithdrawMsgState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.msgHeight.isZero()) {
            writer.uint32(8).int64(message.msgHeight);
        }
        if (!message.msgIndex.isZero()) {
            writer.uint32(16).uint64(message.msgIndex);
        }
        if (message.executed === true) {
            writer.uint32(24).bool(message.executed);
        }
        if (message.succeeded === true) {
            writer.uint32(32).bool(message.succeeded);
        }
        if (message.toBeDeleted === true) {
            writer.uint32(40).bool(message.toBeDeleted);
        }
        if (message.msg !== undefined) {
            tx_1.MsgWithdrawWithinBatch.encode(message.msg, writer.uint32(50).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseWithdrawMsgState);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msgHeight = reader.int64();
                    break;
                case 2:
                    message.msgIndex = reader.uint64();
                    break;
                case 3:
                    message.executed = reader.bool();
                    break;
                case 4:
                    message.succeeded = reader.bool();
                    break;
                case 5:
                    message.toBeDeleted = reader.bool();
                    break;
                case 6:
                    message.msg = tx_1.MsgWithdrawWithinBatch.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseWithdrawMsgState);
        message.msgHeight =
            object.msgHeight !== undefined && object.msgHeight !== null
                ? long_1.default.fromString(object.msgHeight)
                : long_1.default.ZERO;
        message.msgIndex =
            object.msgIndex !== undefined && object.msgIndex !== null
                ? long_1.default.fromString(object.msgIndex)
                : long_1.default.UZERO;
        message.executed =
            object.executed !== undefined && object.executed !== null
                ? Boolean(object.executed)
                : false;
        message.succeeded =
            object.succeeded !== undefined && object.succeeded !== null
                ? Boolean(object.succeeded)
                : false;
        message.toBeDeleted =
            object.toBeDeleted !== undefined && object.toBeDeleted !== null
                ? Boolean(object.toBeDeleted)
                : false;
        message.msg =
            object.msg !== undefined && object.msg !== null
                ? tx_1.MsgWithdrawWithinBatch.fromJSON(object.msg)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.msgHeight !== undefined &&
            (obj.msgHeight = (message.msgHeight || long_1.default.ZERO).toString());
        message.msgIndex !== undefined &&
            (obj.msgIndex = (message.msgIndex || long_1.default.UZERO).toString());
        message.executed !== undefined && (obj.executed = message.executed);
        message.succeeded !== undefined && (obj.succeeded = message.succeeded);
        message.toBeDeleted !== undefined &&
            (obj.toBeDeleted = message.toBeDeleted);
        message.msg !== undefined &&
            (obj.msg = message.msg
                ? tx_1.MsgWithdrawWithinBatch.toJSON(message.msg)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseWithdrawMsgState);
        if (object.msgHeight !== undefined && object.msgHeight !== null) {
            message.msgHeight = object.msgHeight;
        }
        else {
            message.msgHeight = long_1.default.ZERO;
        }
        if (object.msgIndex !== undefined && object.msgIndex !== null) {
            message.msgIndex = object.msgIndex;
        }
        else {
            message.msgIndex = long_1.default.UZERO;
        }
        message.executed = (_a = object.executed) !== null && _a !== void 0 ? _a : false;
        message.succeeded = (_b = object.succeeded) !== null && _b !== void 0 ? _b : false;
        message.toBeDeleted = (_c = object.toBeDeleted) !== null && _c !== void 0 ? _c : false;
        message.msg =
            object.msg !== undefined && object.msg !== null
                ? tx_1.MsgWithdrawWithinBatch.fromPartial(object.msg)
                : undefined;
        return message;
    },
};
const baseSwapMsgState = {
    msgHeight: long_1.default.ZERO,
    msgIndex: long_1.default.UZERO,
    executed: false,
    succeeded: false,
    toBeDeleted: false,
    orderExpiryHeight: long_1.default.ZERO,
};
exports.SwapMsgState = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.msgHeight.isZero()) {
            writer.uint32(8).int64(message.msgHeight);
        }
        if (!message.msgIndex.isZero()) {
            writer.uint32(16).uint64(message.msgIndex);
        }
        if (message.executed === true) {
            writer.uint32(24).bool(message.executed);
        }
        if (message.succeeded === true) {
            writer.uint32(32).bool(message.succeeded);
        }
        if (message.toBeDeleted === true) {
            writer.uint32(40).bool(message.toBeDeleted);
        }
        if (!message.orderExpiryHeight.isZero()) {
            writer.uint32(48).int64(message.orderExpiryHeight);
        }
        if (message.exchangedOfferCoin !== undefined) {
            coin_1.Coin.encode(message.exchangedOfferCoin, writer.uint32(58).fork()).ldelim();
        }
        if (message.remainingOfferCoin !== undefined) {
            coin_1.Coin.encode(message.remainingOfferCoin, writer.uint32(66).fork()).ldelim();
        }
        if (message.reservedOfferCoinFee !== undefined) {
            coin_1.Coin.encode(message.reservedOfferCoinFee, writer.uint32(74).fork()).ldelim();
        }
        if (message.msg !== undefined) {
            tx_1.MsgSwapWithinBatch.encode(message.msg, writer.uint32(82).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseSwapMsgState);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.msgHeight = reader.int64();
                    break;
                case 2:
                    message.msgIndex = reader.uint64();
                    break;
                case 3:
                    message.executed = reader.bool();
                    break;
                case 4:
                    message.succeeded = reader.bool();
                    break;
                case 5:
                    message.toBeDeleted = reader.bool();
                    break;
                case 6:
                    message.orderExpiryHeight = reader.int64();
                    break;
                case 7:
                    message.exchangedOfferCoin = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 8:
                    message.remainingOfferCoin = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 9:
                    message.reservedOfferCoinFee = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 10:
                    message.msg = tx_1.MsgSwapWithinBatch.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseSwapMsgState);
        message.msgHeight =
            object.msgHeight !== undefined && object.msgHeight !== null
                ? long_1.default.fromString(object.msgHeight)
                : long_1.default.ZERO;
        message.msgIndex =
            object.msgIndex !== undefined && object.msgIndex !== null
                ? long_1.default.fromString(object.msgIndex)
                : long_1.default.UZERO;
        message.executed =
            object.executed !== undefined && object.executed !== null
                ? Boolean(object.executed)
                : false;
        message.succeeded =
            object.succeeded !== undefined && object.succeeded !== null
                ? Boolean(object.succeeded)
                : false;
        message.toBeDeleted =
            object.toBeDeleted !== undefined && object.toBeDeleted !== null
                ? Boolean(object.toBeDeleted)
                : false;
        message.orderExpiryHeight =
            object.orderExpiryHeight !== undefined &&
                object.orderExpiryHeight !== null
                ? long_1.default.fromString(object.orderExpiryHeight)
                : long_1.default.ZERO;
        message.exchangedOfferCoin =
            object.exchangedOfferCoin !== undefined &&
                object.exchangedOfferCoin !== null
                ? coin_1.Coin.fromJSON(object.exchangedOfferCoin)
                : undefined;
        message.remainingOfferCoin =
            object.remainingOfferCoin !== undefined &&
                object.remainingOfferCoin !== null
                ? coin_1.Coin.fromJSON(object.remainingOfferCoin)
                : undefined;
        message.reservedOfferCoinFee =
            object.reservedOfferCoinFee !== undefined &&
                object.reservedOfferCoinFee !== null
                ? coin_1.Coin.fromJSON(object.reservedOfferCoinFee)
                : undefined;
        message.msg =
            object.msg !== undefined && object.msg !== null
                ? tx_1.MsgSwapWithinBatch.fromJSON(object.msg)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.msgHeight !== undefined &&
            (obj.msgHeight = (message.msgHeight || long_1.default.ZERO).toString());
        message.msgIndex !== undefined &&
            (obj.msgIndex = (message.msgIndex || long_1.default.UZERO).toString());
        message.executed !== undefined && (obj.executed = message.executed);
        message.succeeded !== undefined && (obj.succeeded = message.succeeded);
        message.toBeDeleted !== undefined &&
            (obj.toBeDeleted = message.toBeDeleted);
        message.orderExpiryHeight !== undefined &&
            (obj.orderExpiryHeight = (message.orderExpiryHeight || long_1.default.ZERO).toString());
        message.exchangedOfferCoin !== undefined &&
            (obj.exchangedOfferCoin = message.exchangedOfferCoin
                ? coin_1.Coin.toJSON(message.exchangedOfferCoin)
                : undefined);
        message.remainingOfferCoin !== undefined &&
            (obj.remainingOfferCoin = message.remainingOfferCoin
                ? coin_1.Coin.toJSON(message.remainingOfferCoin)
                : undefined);
        message.reservedOfferCoinFee !== undefined &&
            (obj.reservedOfferCoinFee = message.reservedOfferCoinFee
                ? coin_1.Coin.toJSON(message.reservedOfferCoinFee)
                : undefined);
        message.msg !== undefined &&
            (obj.msg = message.msg
                ? tx_1.MsgSwapWithinBatch.toJSON(message.msg)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseSwapMsgState);
        if (object.msgHeight !== undefined && object.msgHeight !== null) {
            message.msgHeight = object.msgHeight;
        }
        else {
            message.msgHeight = long_1.default.ZERO;
        }
        if (object.msgIndex !== undefined && object.msgIndex !== null) {
            message.msgIndex = object.msgIndex;
        }
        else {
            message.msgIndex = long_1.default.UZERO;
        }
        message.executed = (_a = object.executed) !== null && _a !== void 0 ? _a : false;
        message.succeeded = (_b = object.succeeded) !== null && _b !== void 0 ? _b : false;
        message.toBeDeleted = (_c = object.toBeDeleted) !== null && _c !== void 0 ? _c : false;
        if (object.orderExpiryHeight !== undefined &&
            object.orderExpiryHeight !== null) {
            message.orderExpiryHeight = object.orderExpiryHeight;
        }
        else {
            message.orderExpiryHeight = long_1.default.ZERO;
        }
        message.exchangedOfferCoin =
            object.exchangedOfferCoin !== undefined &&
                object.exchangedOfferCoin !== null
                ? coin_1.Coin.fromPartial(object.exchangedOfferCoin)
                : undefined;
        message.remainingOfferCoin =
            object.remainingOfferCoin !== undefined &&
                object.remainingOfferCoin !== null
                ? coin_1.Coin.fromPartial(object.remainingOfferCoin)
                : undefined;
        message.reservedOfferCoinFee =
            object.reservedOfferCoinFee !== undefined &&
                object.reservedOfferCoinFee !== null
                ? coin_1.Coin.fromPartial(object.reservedOfferCoinFee)
                : undefined;
        message.msg =
            object.msg !== undefined && object.msg !== null
                ? tx_1.MsgSwapWithinBatch.fromPartial(object.msg)
                : undefined;
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=liquidity.js.map