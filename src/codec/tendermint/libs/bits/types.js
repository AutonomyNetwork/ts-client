"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable */
const long_1 = __importDefault(require("long"));
const minimal_1 = __importDefault(require("protobufjs/minimal"));
exports.protobufPackage = "tendermint.libs.bits";
const baseBitArray = { bits: long_1.default.ZERO, elems: long_1.default.UZERO };
exports.BitArray = {
    encode(message, writer = minimal_1.default.Writer.create()) {
        if (!message.bits.isZero()) {
            writer.uint32(8).int64(message.bits);
        }
        writer.uint32(18).fork();
        for (const v of message.elems) {
            writer.uint64(v);
        }
        writer.ldelim();
        return writer;
    },
    decode(input, length) {
        const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
        let end = length === undefined ? reader.len : reader.pos + length;
        const message = Object.assign({}, baseBitArray);
        message.elems = [];
        while (reader.pos < end) {
            const tag = reader.uint32();
            switch (tag >>> 3) {
                case 1:
                    message.bits = reader.int64();
                    break;
                case 2:
                    if ((tag & 7) === 2) {
                        const end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2) {
                            message.elems.push(reader.uint64());
                        }
                    }
                    else {
                        message.elems.push(reader.uint64());
                    }
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
            }
        }
        return message;
    },
    fromJSON(object) {
        const message = Object.assign({}, baseBitArray);
        message.elems = [];
        if (object.bits !== undefined && object.bits !== null) {
            message.bits = long_1.default.fromString(object.bits);
        }
        else {
            message.bits = long_1.default.ZERO;
        }
        if (object.elems !== undefined && object.elems !== null) {
            for (const e of object.elems) {
                message.elems.push(long_1.default.fromString(e));
            }
        }
        return message;
    },
    toJSON(message) {
        const obj = {};
        message.bits !== undefined &&
            (obj.bits = (message.bits || long_1.default.ZERO).toString());
        if (message.elems) {
            obj.elems = message.elems.map((e) => (e || long_1.default.UZERO).toString());
        }
        else {
            obj.elems = [];
        }
        return obj;
    },
    fromPartial(object) {
        const message = Object.assign({}, baseBitArray);
        message.elems = [];
        if (object.bits !== undefined && object.bits !== null) {
            message.bits = object.bits;
        }
        else {
            message.bits = long_1.default.ZERO;
        }
        if (object.elems !== undefined && object.elems !== null) {
            for (const e of object.elems) {
                message.elems.push(e);
            }
        }
        return message;
    },
};
if (minimal_1.default.util.Long !== long_1.default) {
    minimal_1.default.util.Long = long_1.default;
    minimal_1.default.configure();
}
