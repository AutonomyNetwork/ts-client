'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
/* eslint-disable */
const long_1 = __importDefault(require('long'));
const minimal_1 = __importDefault(require('protobufjs/minimal'));
exports.protobufPackage = 'issuance.v1beta1';
const baseToken = {
  creator: '',
  id: long_1.default.UZERO,
  denom: '',
  displayName: '',
  initialSupply: long_1.default.UZERO,
  holders: long_1.default.UZERO,
};
exports.Token = {
  encode(message, writer = minimal_1.default.Writer.create()) {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    if (message.denom !== '') {
      writer.uint32(26).string(message.denom);
    }
    if (message.displayName !== '') {
      writer.uint32(34).string(message.displayName);
    }
    if (!message.initialSupply.isZero()) {
      writer.uint32(40).uint64(message.initialSupply);
    }
    if (!message.holders.isZero()) {
      writer.uint32(48).uint64(message.holders);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.assign({}, baseToken);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.id = reader.uint64();
          break;
        case 3:
          message.denom = reader.string();
          break;
        case 4:
          message.displayName = reader.string();
          break;
        case 5:
          message.initialSupply = reader.uint64();
          break;
        case 6:
          message.holders = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    const message = Object.assign({}, baseToken);
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = '';
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = long_1.default.fromString(object.id);
    } else {
      message.id = long_1.default.UZERO;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = '';
    }
    if (object.displayName !== undefined && object.displayName !== null) {
      message.displayName = String(object.displayName);
    } else {
      message.displayName = '';
    }
    if (object.initialSupply !== undefined && object.initialSupply !== null) {
      message.initialSupply = long_1.default.fromString(object.initialSupply);
    } else {
      message.initialSupply = long_1.default.UZERO;
    }
    if (object.holders !== undefined && object.holders !== null) {
      message.holders = long_1.default.fromString(object.holders);
    } else {
      message.holders = long_1.default.UZERO;
    }
    return message;
  },
  toJSON(message) {
    const obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.id !== undefined && (obj.id = (message.id || long_1.default.UZERO).toString());
    message.denom !== undefined && (obj.denom = message.denom);
    message.displayName !== undefined && (obj.displayName = message.displayName);
    message.initialSupply !== undefined &&
      (obj.initialSupply = (message.initialSupply || long_1.default.UZERO).toString());
    message.holders !== undefined && (obj.holders = (message.holders || long_1.default.UZERO).toString());
    return obj;
  },
  fromPartial(object) {
    const message = Object.assign({}, baseToken);
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = '';
    }
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = long_1.default.UZERO;
    }
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = '';
    }
    if (object.displayName !== undefined && object.displayName !== null) {
      message.displayName = object.displayName;
    } else {
      message.displayName = '';
    }
    if (object.initialSupply !== undefined && object.initialSupply !== null) {
      message.initialSupply = object.initialSupply;
    } else {
      message.initialSupply = long_1.default.UZERO;
    }
    if (object.holders !== undefined && object.holders !== null) {
      message.holders = object.holders;
    } else {
      message.holders = long_1.default.UZERO;
    }
    return message;
  },
};
const baseTokenDenoms = { denoms: '' };
exports.TokenDenoms = {
  encode(message, writer = minimal_1.default.Writer.create()) {
    for (const v of message.denoms) {
      writer.uint32(10).string(v);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.assign({}, baseTokenDenoms);
    message.denoms = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denoms.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    const message = Object.assign({}, baseTokenDenoms);
    message.denoms = [];
    if (object.denoms !== undefined && object.denoms !== null) {
      for (const e of object.denoms) {
        message.denoms.push(String(e));
      }
    }
    return message;
  },
  toJSON(message) {
    const obj = {};
    if (message.denoms) {
      obj.denoms = message.denoms.map((e) => e);
    } else {
      obj.denoms = [];
    }
    return obj;
  },
  fromPartial(object) {
    const message = Object.assign({}, baseTokenDenoms);
    message.denoms = [];
    if (object.denoms !== undefined && object.denoms !== null) {
      for (const e of object.denoms) {
        message.denoms.push(e);
      }
    }
    return message;
  },
};
if (minimal_1.default.util.Long !== long_1.default) {
  minimal_1.default.util.Long = long_1.default;
  minimal_1.default.configure();
}
