"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Lazyload", {
  enumerable: true,
  get: function () {
    return _Lazyload.default;
  }
});
exports.default = void 0;

function _react() {
  const data = _interopRequireDefault(require("react"));

  _react = function () {
    return data;
  };

  return data;
}

require("./style/index.css");

var _Lazyload = _interopRequireDefault(require("./Lazyload"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _Lazyload.default;
exports.default = _default;