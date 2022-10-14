"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Image", {
  enumerable: true,
  get: function () {
    return _LazyImage.default;
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

var _LazyImage = _interopRequireDefault(require("./LazyImage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _LazyImage.default;
exports.default = _default;