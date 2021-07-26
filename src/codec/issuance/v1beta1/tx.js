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
const baseMsgIssueToken = {
  creator: '',
  denom: '',
  displayName: '',
  decimals: long_1.default.UZERO,
  initialSupply: long_1.default.UZERO,
};
exports.MsgIssueToken = {
  encode(message, writer = minimal_1.default.Writer.create()) {
    if (message.creator !== '') {
      writer.uint32(10).string(message.creator);
    }
    if (message.denom !== '') {
      writer.uint32(18).string(message.denom);
    }
    if (message.displayName !== '') {
      writer.uint32(26).string(message.displayName);
    }
    if (!message.decimals.isZero()) {
      writer.uint32(32).uint64(message.decimals);
    }
    if (!message.initialSupply.isZero()) {
      writer.uint32(40).uint64(message.initialSupply);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.assign({}, baseMsgIssueToken);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.creator = reader.string();
          break;
        case 2:
          message.denom = reader.string();
          break;
        case 3:
          message.displayName = reader.string();
          break;
        case 4:
          message.decimals = reader.uint64();
          break;
        case 5:
          message.initialSupply = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    const message = Object.assign({}, baseMsgIssueToken);
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = String(object.creator);
    } else {
      message.creator = '';
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
    if (object.decimals !== undefined && object.decimals !== null) {
      message.decimals = long_1.default.fromString(object.decimals);
    } else {
      message.decimals = long_1.default.UZERO;
    }
    if (object.initialSupply !== undefined && object.initialSupply !== null) {
      message.initialSupply = long_1.default.fromString(object.initialSupply);
    } else {
      message.initialSupply = long_1.default.UZERO;
    }
    return message;
  },
  toJSON(message) {
    const obj = {};
    message.creator !== undefined && (obj.creator = message.creator);
    message.denom !== undefined && (obj.denom = message.denom);
    message.displayName !== undefined && (obj.displayName = message.displayName);
    message.decimals !== undefined && (obj.decimals = (message.decimals || long_1.default.UZERO).toString());
    message.initialSupply !== undefined &&
      (obj.initialSupply = (message.initialSupply || long_1.default.UZERO).toString());
    return obj;
  },
  fromPartial(object) {
    const message = Object.assign({}, baseMsgIssueToken);
    if (object.creator !== undefined && object.creator !== null) {
      message.creator = object.creator;
    } else {
      message.creator = '';
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
    if (object.decimals !== undefined && object.decimals !== null) {
      message.decimals = object.decimals;
    } else {
      message.decimals = long_1.default.UZERO;
    }
    if (object.initialSupply !== undefined && object.initialSupply !== null) {
      message.initialSupply = object.initialSupply;
    } else {
      message.initialSupply = long_1.default.UZERO;
    }
    return message;
  },
};
const baseMsgIssueTokenResponse = { id: long_1.default.UZERO };
exports.MsgIssueTokenResponse = {
  encode(message, writer = minimal_1.default.Writer.create()) {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.assign({}, baseMsgIssueTokenResponse);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.id = reader.uint64();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    const message = Object.assign({}, baseMsgIssueTokenResponse);
    if (object.id !== undefined && object.id !== null) {
      message.id = long_1.default.fromString(object.id);
    } else {
      message.id = long_1.default.UZERO;
    }
    return message;
  },
  toJSON(message) {
    const obj = {};
    message.id !== undefined && (obj.id = (message.id || long_1.default.UZERO).toString());
    return obj;
  },
  fromPartial(object) {
    const message = Object.assign({}, baseMsgIssueTokenResponse);
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = long_1.default.UZERO;
    }
    return message;
  },
};
class MsgClientImpl {
  constructor(rpc) {
    this.rpc = rpc;
    this.IssueToken = this.IssueToken.bind(this);
  }
  IssueToken(request) {
    const data = exports.MsgIssueToken.encode(request).finish();
    const promise = this.rpc.request('issuance.v1beta1.Msg', 'IssueToken', data);
    return promise.then((data) => exports.MsgIssueTokenResponse.decode(new minimal_1.default.Reader(data)));
  }
}
exports.MsgClientImpl = MsgClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
  minimal_1.default.util.Long = long_1.default;
  minimal_1.default.configure();
}
