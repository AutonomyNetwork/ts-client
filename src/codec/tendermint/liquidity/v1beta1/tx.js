"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MsgClientImpl = exports.MsgSwapWithinBatchResponse = exports.MsgSwapWithinBatch = exports.MsgWithdrawWithinBatchResponse = exports.MsgWithdrawWithinBatch = exports.MsgDepositWithinBatchResponse = exports.MsgDepositWithinBatch = exports.MsgCreatePoolResponse = exports.MsgCreatePool = exports.protobufPackage = void 0;
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const coin_1 = require("../../../cosmos_proto/coin");
exports.protobufPackage = "tendermint.liquidity.v1beta1";
const baseMsgCreatePool = { poolCreatorAddress: "", poolTypeId: 0 };
exports.MsgCreatePool = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.poolCreatorAddress !== "") {
            writer.uint32(10).string(message.poolCreatorAddress);
        }
        if (message.poolTypeId !== 0) {
            writer.uint32(16).uint32(message.poolTypeId);
        }
        for (const v of message.depositCoins) {
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCreatePool);
        message.depositCoins = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.poolCreatorAddress = reader.string();
                    break;
                case 2:
                    message.poolTypeId = reader.uint32();
                    break;
                case 4:
                    message.depositCoins.push(coin_1.Coin.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseMsgCreatePool);
        message.poolCreatorAddress =
            object.poolCreatorAddress !== undefined &&
                object.poolCreatorAddress !== null
                ? String(object.poolCreatorAddress)
                : "";
        message.poolTypeId =
            object.poolTypeId !== undefined && object.poolTypeId !== null
                ? Number(object.poolTypeId)
                : 0;
        message.depositCoins = ((_a = object.depositCoins) !== null && _a !== void 0 ? _a : []).map((e) => coin_1.Coin.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.poolCreatorAddress !== undefined &&
            (obj.poolCreatorAddress = message.poolCreatorAddress);
        message.poolTypeId !== undefined && (obj.poolTypeId = message.poolTypeId);
        if (message.depositCoins) {
            obj.depositCoins = message.depositCoins.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.depositCoins = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c;
        const message = Object.assign({}, baseMsgCreatePool);
        message.poolCreatorAddress = (_a = object.poolCreatorAddress) !== null && _a !== void 0 ? _a : "";
        message.poolTypeId = (_b = object.poolTypeId) !== null && _b !== void 0 ? _b : 0;
        message.depositCoins = ((_c = object.depositCoins) !== null && _c !== void 0 ? _c : []).map((e) => coin_1.Coin.fromPartial(e));
        return message;
    },
};
const baseMsgCreatePoolResponse = {};
exports.MsgCreatePoolResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgCreatePoolResponse);
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
        const message = Object.assign({}, baseMsgCreatePoolResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgCreatePoolResponse);
        return message;
    },
};
const baseMsgDepositWithinBatch = {
    depositorAddress: "",
    poolId: long_1.default.UZERO,
};
exports.MsgDepositWithinBatch = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.depositorAddress !== "") {
            writer.uint32(10).string(message.depositorAddress);
        }
        if (!message.poolId.isZero()) {
            writer.uint32(16).uint64(message.poolId);
        }
        for (const v of message.depositCoins) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgDepositWithinBatch);
        message.depositCoins = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.depositorAddress = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.depositCoins.push(coin_1.Coin.decode(reader, reader.uint32()));
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
        const message = Object.assign({}, baseMsgDepositWithinBatch);
        message.depositorAddress =
            object.depositorAddress !== undefined && object.depositorAddress !== null
                ? String(object.depositorAddress)
                : "";
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromString(object.poolId)
                : long_1.default.UZERO;
        message.depositCoins = ((_a = object.depositCoins) !== null && _a !== void 0 ? _a : []).map((e) => coin_1.Coin.fromJSON(e));
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.depositorAddress !== undefined &&
            (obj.depositorAddress = message.depositorAddress);
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        if (message.depositCoins) {
            obj.depositCoins = message.depositCoins.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.depositCoins = [];
        }
        return obj;
    },
    fromPartial(object) {
        var _a, _b;
        const message = Object.assign({}, baseMsgDepositWithinBatch);
        message.depositorAddress = (_a = object.depositorAddress) !== null && _a !== void 0 ? _a : "";
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId;
        }
        else {
            message.poolId = long_1.default.UZERO;
        }
        message.depositCoins = ((_b = object.depositCoins) !== null && _b !== void 0 ? _b : []).map((e) => coin_1.Coin.fromPartial(e));
        return message;
    },
};
const baseMsgDepositWithinBatchResponse = {};
exports.MsgDepositWithinBatchResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgDepositWithinBatchResponse);
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
        const message = Object.assign({}, baseMsgDepositWithinBatchResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgDepositWithinBatchResponse);
        return message;
    },
};
const baseMsgWithdrawWithinBatch = {
    withdrawerAddress: "",
    poolId: long_1.default.UZERO,
};
exports.MsgWithdrawWithinBatch = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.withdrawerAddress !== "") {
            writer.uint32(10).string(message.withdrawerAddress);
        }
        if (!message.poolId.isZero()) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.poolCoin !== undefined) {
            coin_1.Coin.encode(message.poolCoin, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgWithdrawWithinBatch);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.withdrawerAddress = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.poolCoin = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgWithdrawWithinBatch);
        message.withdrawerAddress =
            object.withdrawerAddress !== undefined &&
                object.withdrawerAddress !== null
                ? String(object.withdrawerAddress)
                : "";
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromString(object.poolId)
                : long_1.default.UZERO;
        message.poolCoin =
            object.poolCoin !== undefined && object.poolCoin !== null
                ? coin_1.Coin.fromJSON(object.poolCoin)
                : undefined;
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.withdrawerAddress !== undefined &&
            (obj.withdrawerAddress = message.withdrawerAddress);
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.poolCoin !== undefined &&
            (obj.poolCoin = message.poolCoin
                ? coin_1.Coin.toJSON(message.poolCoin)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        var _a;
        const message = Object.assign({}, baseMsgWithdrawWithinBatch);
        message.withdrawerAddress = (_a = object.withdrawerAddress) !== null && _a !== void 0 ? _a : "";
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId;
        }
        else {
            message.poolId = long_1.default.UZERO;
        }
        message.poolCoin =
            object.poolCoin !== undefined && object.poolCoin !== null
                ? coin_1.Coin.fromPartial(object.poolCoin)
                : undefined;
        return message;
    },
};
const baseMsgWithdrawWithinBatchResponse = {};
exports.MsgWithdrawWithinBatchResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgWithdrawWithinBatchResponse);
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
        const message = Object.assign({}, baseMsgWithdrawWithinBatchResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgWithdrawWithinBatchResponse);
        return message;
    },
};
const baseMsgSwapWithinBatch = {
    swapRequesterAddress: "",
    poolId: long_1.default.UZERO,
    swapTypeId: 0,
    demandCoinDenom: "",
    orderPrice: "",
};
exports.MsgSwapWithinBatch = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.swapRequesterAddress !== "") {
            writer.uint32(10).string(message.swapRequesterAddress);
        }
        if (!message.poolId.isZero()) {
            writer.uint32(16).uint64(message.poolId);
        }
        if (message.swapTypeId !== 0) {
            writer.uint32(24).uint32(message.swapTypeId);
        }
        if (message.offerCoin !== undefined) {
            coin_1.Coin.encode(message.offerCoin, writer.uint32(34).fork()).ldelim();
        }
        if (message.demandCoinDenom !== "") {
            writer.uint32(42).string(message.demandCoinDenom);
        }
        if (message.offerCoinFee !== undefined) {
            coin_1.Coin.encode(message.offerCoinFee, writer.uint32(50).fork()).ldelim();
        }
        if (message.orderPrice !== "") {
            writer.uint32(58).string(message.orderPrice);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgSwapWithinBatch);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.swapRequesterAddress = reader.string();
                    break;
                case 2:
                    message.poolId = reader.uint64();
                    break;
                case 3:
                    message.swapTypeId = reader.uint32();
                    break;
                case 4:
                    message.offerCoin = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 5:
                    message.demandCoinDenom = reader.string();
                    break;
                case 6:
                    message.offerCoinFee = coin_1.Coin.decode(reader, reader.uint32());
                    break;
                case 7:
                    message.orderPrice = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseMsgSwapWithinBatch);
        message.swapRequesterAddress =
            object.swapRequesterAddress !== undefined &&
                object.swapRequesterAddress !== null
                ? String(object.swapRequesterAddress)
                : "";
        message.poolId =
            object.poolId !== undefined && object.poolId !== null
                ? long_1.default.fromString(object.poolId)
                : long_1.default.UZERO;
        message.swapTypeId =
            object.swapTypeId !== undefined && object.swapTypeId !== null
                ? Number(object.swapTypeId)
                : 0;
        message.offerCoin =
            object.offerCoin !== undefined && object.offerCoin !== null
                ? coin_1.Coin.fromJSON(object.offerCoin)
                : undefined;
        message.demandCoinDenom =
            object.demandCoinDenom !== undefined && object.demandCoinDenom !== null
                ? String(object.demandCoinDenom)
                : "";
        message.offerCoinFee =
            object.offerCoinFee !== undefined && object.offerCoinFee !== null
                ? coin_1.Coin.fromJSON(object.offerCoinFee)
                : undefined;
        message.orderPrice =
            object.orderPrice !== undefined && object.orderPrice !== null
                ? String(object.orderPrice)
                : "";
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.swapRequesterAddress !== undefined &&
            (obj.swapRequesterAddress = message.swapRequesterAddress);
        message.poolId !== undefined &&
            (obj.poolId = (message.poolId || long_1.default.UZERO).toString());
        message.swapTypeId !== undefined && (obj.swapTypeId = message.swapTypeId);
        message.offerCoin !== undefined &&
            (obj.offerCoin = message.offerCoin
                ? coin_1.Coin.toJSON(message.offerCoin)
                : undefined);
        message.demandCoinDenom !== undefined &&
            (obj.demandCoinDenom = message.demandCoinDenom);
        message.offerCoinFee !== undefined &&
            (obj.offerCoinFee = message.offerCoinFee
                ? coin_1.Coin.toJSON(message.offerCoinFee)
                : undefined);
        message.orderPrice !== undefined && (obj.orderPrice = message.orderPrice);
        return obj;
    },
    fromPartial(object) {
        var _a, _b, _c, _d;
        const message = Object.assign({}, baseMsgSwapWithinBatch);
        message.swapRequesterAddress = (_a = object.swapRequesterAddress) !== null && _a !== void 0 ? _a : "";
        if (object.poolId !== undefined && object.poolId !== null) {
            message.poolId = object.poolId;
        }
        else {
            message.poolId = long_1.default.UZERO;
        }
        message.swapTypeId = (_b = object.swapTypeId) !== null && _b !== void 0 ? _b : 0;
        message.offerCoin =
            object.offerCoin !== undefined && object.offerCoin !== null
                ? coin_1.Coin.fromPartial(object.offerCoin)
                : undefined;
        message.demandCoinDenom = (_c = object.demandCoinDenom) !== null && _c !== void 0 ? _c : "";
        message.offerCoinFee =
            object.offerCoinFee !== undefined && object.offerCoinFee !== null
                ? coin_1.Coin.fromPartial(object.offerCoinFee)
                : undefined;
        message.orderPrice = (_d = object.orderPrice) !== null && _d !== void 0 ? _d : "";
        return message;
    },
};
const baseMsgSwapWithinBatchResponse = {};
exports.MsgSwapWithinBatchResponse = {
    encode(_, writer = minimal_1.default.Writer.create()) {
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseMsgSwapWithinBatchResponse);
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
        const message = Object.assign({}, baseMsgSwapWithinBatchResponse);
        return message;
    },
    toJSON(_) {
        const obj = {};
        return obj;
    },
    fromPartial(_) {
        const message = Object.assign({}, baseMsgSwapWithinBatchResponse);
        return message;
    },
};
class MsgClientImpl {
    constructor(rpc) {
        this.rpc = rpc;
        this.CreatePool = this.CreatePool.bind(this);
        this.DepositWithinBatch = this.DepositWithinBatch.bind(this);
        this.WithdrawWithinBatch = this.WithdrawWithinBatch.bind(this);
        this.Swap = this.Swap.bind(this);
    }
    CreatePool(request) {
        const data = exports.MsgCreatePool.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Msg", "CreatePool", data);
        return promise.then((data) => exports.MsgCreatePoolResponse.decode(new minimal_1.default.Reader(data)));
    }
    DepositWithinBatch(request) {
        const data = exports.MsgDepositWithinBatch.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Msg", "DepositWithinBatch", data);
        return promise.then((data) => exports.MsgDepositWithinBatchResponse.decode(new minimal_1.default.Reader(data)));
    }
    WithdrawWithinBatch(request) {
        const data = exports.MsgWithdrawWithinBatch.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Msg", "WithdrawWithinBatch", data);
        return promise.then((data) => exports.MsgWithdrawWithinBatchResponse.decode(new minimal_1.default.Reader(data)));
    }
    Swap(request) {
        const data = exports.MsgSwapWithinBatch.encode(request).finish();
        const promise = this.rpc.request("tendermint.liquidity.v1beta1.Msg", "Swap", data);
        return promise.then((data) => exports.MsgSwapWithinBatchResponse.decode(new minimal_1.default.Reader(data)));
    }
}
exports.MsgClientImpl = MsgClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
//# sourceMappingURL=tx.js.map