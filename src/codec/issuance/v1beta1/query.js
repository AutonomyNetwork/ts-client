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
const token_1 = require('../../issuance/v1beta1/token');
const pagination_1 = require('../../cosmos/base/query/v1beta1/pagination');
exports.protobufPackage = 'issuance.v1beta1';
const baseQueryGetTokenRequest = { id: long_1.default.UZERO };
exports.QueryGetTokenRequest = {
  encode(message, writer = minimal_1.default.Writer.create()) {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.assign({}, baseQueryGetTokenRequest);
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
    const message = Object.assign({}, baseQueryGetTokenRequest);
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
    const message = Object.assign({}, baseQueryGetTokenRequest);
    if (object.id !== undefined && object.id !== null) {
      message.id = object.id;
    } else {
      message.id = long_1.default.UZERO;
    }
    return message;
  },
};
const baseQueryGetTokenResponse = {};
exports.QueryGetTokenResponse = {
  encode(message, writer = minimal_1.default.Writer.create()) {
    if (message.Token !== undefined) {
      token_1.Token.encode(message.Token, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.assign({}, baseQueryGetTokenResponse);
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Token = token_1.Token.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },
  fromJSON(object) {
    const message = Object.assign({}, baseQueryGetTokenResponse);
    if (object.Token !== undefined && object.Token !== null) {
      message.Token = token_1.Token.fromJSON(object.Token);
    } else {
      message.Token = undefined;
    }
    return message;
  },
  toJSON(message) {
    const obj = {};
    message.Token !== undefined && (obj.Token = message.Token ? token_1.Token.toJSON(message.Token) : undefined);
    return obj;
  },
  fromPartial(object) {
    const message = Object.assign({}, baseQueryGetTokenResponse);
    if (object.Token !== undefined && object.Token !== null) {
      message.Token = token_1.Token.fromPartial(object.Token);
    } else {
      message.Token = undefined;
    }
    return message;
  },
};
const baseQueryAllTokenRequest = {};
exports.QueryAllTokenRequest = {
  encode(message, writer = minimal_1.default.Writer.create()) {
    if (message.pagination !== undefined) {
      pagination_1.PageRequest.encode(message.pagination, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.assign({}, baseQueryAllTokenRequest);
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
    const message = Object.assign({}, baseQueryAllTokenRequest);
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = pagination_1.PageRequest.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  toJSON(message) {
    const obj = {};
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? pagination_1.PageRequest.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object) {
    const message = Object.assign({}, baseQueryAllTokenRequest);
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = pagination_1.PageRequest.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};
const baseQueryAllTokenResponse = {};
exports.QueryAllTokenResponse = {
  encode(message, writer = minimal_1.default.Writer.create()) {
    for (const v of message.Token) {
      token_1.Token.encode(v, writer.uint32(10).fork()).ldelim();
    }
    if (message.pagination !== undefined) {
      pagination_1.PageResponse.encode(message.pagination, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  decode(input, length) {
    const reader = input instanceof minimal_1.default.Reader ? input : new minimal_1.default.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = Object.assign({}, baseQueryAllTokenResponse);
    message.Token = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.Token.push(token_1.Token.decode(reader, reader.uint32()));
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
    const message = Object.assign({}, baseQueryAllTokenResponse);
    message.Token = [];
    if (object.Token !== undefined && object.Token !== null) {
      for (const e of object.Token) {
        message.Token.push(token_1.Token.fromJSON(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = pagination_1.PageResponse.fromJSON(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
  toJSON(message) {
    const obj = {};
    if (message.Token) {
      obj.Token = message.Token.map((e) => (e ? token_1.Token.toJSON(e) : undefined));
    } else {
      obj.Token = [];
    }
    message.pagination !== undefined &&
      (obj.pagination = message.pagination ? pagination_1.PageResponse.toJSON(message.pagination) : undefined);
    return obj;
  },
  fromPartial(object) {
    const message = Object.assign({}, baseQueryAllTokenResponse);
    message.Token = [];
    if (object.Token !== undefined && object.Token !== null) {
      for (const e of object.Token) {
        message.Token.push(token_1.Token.fromPartial(e));
      }
    }
    if (object.pagination !== undefined && object.pagination !== null) {
      message.pagination = pagination_1.PageResponse.fromPartial(object.pagination);
    } else {
      message.pagination = undefined;
    }
    return message;
  },
};
class QueryClientImpl {
  constructor(rpc) {
    this.rpc = rpc;
    this.Token = this.Token.bind(this);
    this.TokenAll = this.TokenAll.bind(this);
  }
  Token(request) {
    const data = exports.QueryGetTokenRequest.encode(request).finish();
    const promise = this.rpc.request('issuance.v1beta1.Query', 'Token', data);
    return promise.then((data) => exports.QueryGetTokenResponse.decode(new minimal_1.default.Reader(data)));
  }
  TokenAll(request) {
    const data = exports.QueryAllTokenRequest.encode(request).finish();
    const promise = this.rpc.request('issuance.v1beta1.Query', 'TokenAll', data);
    return promise.then((data) => exports.QueryAllTokenResponse.decode(new minimal_1.default.Reader(data)));
  }
}
exports.QueryClientImpl = QueryClientImpl;
if (minimal_1.default.util.Long !== long_1.default) {
  minimal_1.default.util.Long = long_1.default;
  minimal_1.default.configure();
}
