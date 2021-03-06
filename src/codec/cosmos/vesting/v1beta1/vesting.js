"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
const auth_1 = require("../../../cosmos/auth/v1beta1/auth");
const coin_1 = require("../../../cosmos/base/v1beta1/coin");
exports.protobufPackage = "cosmos.vesting.v1beta1";
const baseBaseVestingAccount = { endTime: long_1.default.ZERO };
exports.BaseVestingAccount = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.baseAccount !== undefined) {
            auth_1.BaseAccount.encode(message.baseAccount, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.originalVesting) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        for (const v of message.delegatedFree) {
            coin_1.Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.delegatedVesting) {
            coin_1.Coin.encode(v, writer.uint32(34).fork()).ldelim();
        }
        if (!message.endTime.isZero()) {
            writer.uint32(40).int64(message.endTime);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBaseVestingAccount);
        message.originalVesting = [];
        message.delegatedFree = [];
        message.delegatedVesting = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseAccount = auth_1.BaseAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.originalVesting.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 3:
                    message.delegatedFree.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.delegatedVesting.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.endTime = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseBaseVestingAccount);
        message.originalVesting = [];
        message.delegatedFree = [];
        message.delegatedVesting = [];
        if (object.baseAccount !== undefined && object.baseAccount !== null) {
            message.baseAccount = auth_1.BaseAccount.fromJSON(object.baseAccount);
        }
        else {
            message.baseAccount = undefined;
        }
        if (object.originalVesting !== undefined &&
            object.originalVesting !== null) {
            for (const e of object.originalVesting) {
                message.originalVesting.push(coin_1.Coin.fromJSON(e));
            }
        }
        if (object.delegatedFree !== undefined && object.delegatedFree !== null) {
            for (const e of object.delegatedFree) {
                message.delegatedFree.push(coin_1.Coin.fromJSON(e));
            }
        }
        if (object.delegatedVesting !== undefined &&
            object.delegatedVesting !== null) {
            for (const e of object.delegatedVesting) {
                message.delegatedVesting.push(coin_1.Coin.fromJSON(e));
            }
        }
        if (object.endTime !== undefined && object.endTime !== null) {
            message.endTime = long_1.default.fromString(object.endTime);
        }
        else {
            message.endTime = long_1.default.ZERO;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.baseAccount !== undefined &&
            (obj.baseAccount = message.baseAccount
                ? auth_1.BaseAccount.toJSON(message.baseAccount)
                : undefined);
        if (message.originalVesting) {
            obj.originalVesting = message.originalVesting.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.originalVesting = [];
        }
        if (message.delegatedFree) {
            obj.delegatedFree = message.delegatedFree.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.delegatedFree = [];
        }
        if (message.delegatedVesting) {
            obj.delegatedVesting = message.delegatedVesting.map((e) => e ? coin_1.Coin.toJSON(e) : undefined);
        }
        else {
            obj.delegatedVesting = [];
        }
        message.endTime !== undefined &&
            (obj.endTime = (message.endTime || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseBaseVestingAccount);
        message.originalVesting = [];
        message.delegatedFree = [];
        message.delegatedVesting = [];
        if (object.baseAccount !== undefined && object.baseAccount !== null) {
            message.baseAccount = auth_1.BaseAccount.fromPartial(object.baseAccount);
        }
        else {
            message.baseAccount = undefined;
        }
        if (object.originalVesting !== undefined &&
            object.originalVesting !== null) {
            for (const e of object.originalVesting) {
                message.originalVesting.push(coin_1.Coin.fromPartial(e));
            }
        }
        if (object.delegatedFree !== undefined && object.delegatedFree !== null) {
            for (const e of object.delegatedFree) {
                message.delegatedFree.push(coin_1.Coin.fromPartial(e));
            }
        }
        if (object.delegatedVesting !== undefined &&
            object.delegatedVesting !== null) {
            for (const e of object.delegatedVesting) {
                message.delegatedVesting.push(coin_1.Coin.fromPartial(e));
            }
        }
        if (object.endTime !== undefined && object.endTime !== null) {
            message.endTime = object.endTime;
        }
        else {
            message.endTime = long_1.default.ZERO;
        }
        return message;
    },
};
const baseContinuousVestingAccount = { startTime: long_1.default.ZERO };
exports.ContinuousVestingAccount = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.baseVestingAccount !== undefined) {
            exports.BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
        }
        if (!message.startTime.isZero()) {
            writer.uint32(16).int64(message.startTime);
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseContinuousVestingAccount);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseVestingAccount = exports.BaseVestingAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.startTime = reader.int64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseContinuousVestingAccount);
        if (object.baseVestingAccount !== undefined &&
            object.baseVestingAccount !== null) {
            message.baseVestingAccount = exports.BaseVestingAccount.fromJSON(object.baseVestingAccount);
        }
        else {
            message.baseVestingAccount = undefined;
        }
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = long_1.default.fromString(object.startTime);
        }
        else {
            message.startTime = long_1.default.ZERO;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.baseVestingAccount !== undefined &&
            (obj.baseVestingAccount = message.baseVestingAccount
                ? exports.BaseVestingAccount.toJSON(message.baseVestingAccount)
                : undefined);
        message.startTime !== undefined &&
            (obj.startTime = (message.startTime || long_1.default.ZERO).toString());
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseContinuousVestingAccount);
        if (object.baseVestingAccount !== undefined &&
            object.baseVestingAccount !== null) {
            message.baseVestingAccount = exports.BaseVestingAccount.fromPartial(object.baseVestingAccount);
        }
        else {
            message.baseVestingAccount = undefined;
        }
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = object.startTime;
        }
        else {
            message.startTime = long_1.default.ZERO;
        }
        return message;
    },
};
const baseDelayedVestingAccount = {};
exports.DelayedVestingAccount = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.baseVestingAccount !== undefined) {
            exports.BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseDelayedVestingAccount);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseVestingAccount = exports.BaseVestingAccount.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseDelayedVestingAccount);
        if (object.baseVestingAccount !== undefined &&
            object.baseVestingAccount !== null) {
            message.baseVestingAccount = exports.BaseVestingAccount.fromJSON(object.baseVestingAccount);
        }
        else {
            message.baseVestingAccount = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.baseVestingAccount !== undefined &&
            (obj.baseVestingAccount = message.baseVestingAccount
                ? exports.BaseVestingAccount.toJSON(message.baseVestingAccount)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseDelayedVestingAccount);
        if (object.baseVestingAccount !== undefined &&
            object.baseVestingAccount !== null) {
            message.baseVestingAccount = exports.BaseVestingAccount.fromPartial(object.baseVestingAccount);
        }
        else {
            message.baseVestingAccount = undefined;
        }
        return message;
    },
};
const basePeriod = { length: long_1.default.ZERO };
exports.Period = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.length.isZero()) {
            writer.uint32(8).int64(message.length);
        }
        for (const v of message.amount) {
            coin_1.Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePeriod);
        message.amount = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.length = reader.int64();
                    break;
                case 2:
                    message.amount.push(coin_1.Coin.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePeriod);
        message.amount = [];
        if (object.length !== undefined && object.length !== null) {
            message.length = long_1.default.fromString(object.length);
        }
        else {
            message.length = long_1.default.ZERO;
        }
        if (object.amount !== undefined && object.amount !== null) {
            for (const e of object.amount) {
                message.amount.push(coin_1.Coin.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.length !== undefined &&
            (obj.length = (message.length || long_1.default.ZERO).toString());
        if (message.amount) {
            obj.amount = message.amount.map((e) => (e ? coin_1.Coin.toJSON(e) : undefined));
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, basePeriod);
        message.amount = [];
        if (object.length !== undefined && object.length !== null) {
            message.length = object.length;
        }
        else {
            message.length = long_1.default.ZERO;
        }
        if (object.amount !== undefined && object.amount !== null) {
            for (const e of object.amount) {
                message.amount.push(coin_1.Coin.fromPartial(e));
            }
        }
        return message;
    },
};
const basePeriodicVestingAccount = { startTime: long_1.default.ZERO };
exports.PeriodicVestingAccount = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.baseVestingAccount !== undefined) {
            exports.BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
        }
        if (!message.startTime.isZero()) {
            writer.uint32(16).int64(message.startTime);
        }
        for (const v of message.vestingPeriods) {
            exports.Period.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePeriodicVestingAccount);
        message.vestingPeriods = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseVestingAccount = exports.BaseVestingAccount.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.startTime = reader.int64();
                    break;
                case 3:
                    message.vestingPeriods.push(exports.Period.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePeriodicVestingAccount);
        message.vestingPeriods = [];
        if (object.baseVestingAccount !== undefined &&
            object.baseVestingAccount !== null) {
            message.baseVestingAccount = exports.BaseVestingAccount.fromJSON(object.baseVestingAccount);
        }
        else {
            message.baseVestingAccount = undefined;
        }
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = long_1.default.fromString(object.startTime);
        }
        else {
            message.startTime = long_1.default.ZERO;
        }
        if (object.vestingPeriods !== undefined && object.vestingPeriods !== null) {
            for (const e of object.vestingPeriods) {
                message.vestingPeriods.push(exports.Period.fromJSON(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.baseVestingAccount !== undefined &&
            (obj.baseVestingAccount = message.baseVestingAccount
                ? exports.BaseVestingAccount.toJSON(message.baseVestingAccount)
                : undefined);
        message.startTime !== undefined &&
            (obj.startTime = (message.startTime || long_1.default.ZERO).toString());
        if (message.vestingPeriods) {
            obj.vestingPeriods = message.vestingPeriods.map((e) => e ? exports.Period.toJSON(e) : undefined);
        }
        else {
            obj.vestingPeriods = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, basePeriodicVestingAccount);
        message.vestingPeriods = [];
        if (object.baseVestingAccount !== undefined &&
            object.baseVestingAccount !== null) {
            message.baseVestingAccount = exports.BaseVestingAccount.fromPartial(object.baseVestingAccount);
        }
        else {
            message.baseVestingAccount = undefined;
        }
        if (object.startTime !== undefined && object.startTime !== null) {
            message.startTime = object.startTime;
        }
        else {
            message.startTime = long_1.default.ZERO;
        }
        if (object.vestingPeriods !== undefined && object.vestingPeriods !== null) {
            for (const e of object.vestingPeriods) {
                message.vestingPeriods.push(exports.Period.fromPartial(e));
            }
        }
        return message;
    },
};
const basePermanentLockedAccount = {};
exports.PermanentLockedAccount = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (message.baseVestingAccount !== undefined) {
            exports.BaseVestingAccount.encode(message.baseVestingAccount, writer.uint32(10).fork()).ldelim();
        }
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, basePermanentLockedAccount);
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.baseVestingAccount = exports.BaseVestingAccount.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, basePermanentLockedAccount);
        if (object.baseVestingAccount !== undefined &&
            object.baseVestingAccount !== null) {
            message.baseVestingAccount = exports.BaseVestingAccount.fromJSON(object.baseVestingAccount);
        }
        else {
            message.baseVestingAccount = undefined;
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.baseVestingAccount !== undefined &&
            (obj.baseVestingAccount = message.baseVestingAccount
                ? exports.BaseVestingAccount.toJSON(message.baseVestingAccount)
                : undefined);
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, basePermanentLockedAccount);
        if (object.baseVestingAccount !== undefined &&
            object.baseVestingAccount !== null) {
            message.baseVestingAccount = exports.BaseVestingAccount.fromPartial(object.baseVestingAccount);
        }
        else {
            message.baseVestingAccount = undefined;
        }
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
