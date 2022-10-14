"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultPrefixCls = exports.defaultIconPrefixCls = exports.default = exports.INITIAL_STATE = void 0;

function _react() {
  const data = _interopRequireWildcard(require("react"));

  _react = function () {
    return data;
  };

  return data;
}

var _locale = require("../locale");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const defaultPrefixCls = 'rv';
exports.defaultPrefixCls = defaultPrefixCls;
const defaultIconPrefixCls = 'van-icon';
exports.defaultIconPrefixCls = defaultIconPrefixCls;
const INITIAL_STATE = {
  locale: _locale.zhCN
};
exports.INITIAL_STATE = INITIAL_STATE;
const ConfigProvider = (0, _react().createContext)(INITIAL_STATE);
var _default = ConfigProvider;
exports.default = _default;