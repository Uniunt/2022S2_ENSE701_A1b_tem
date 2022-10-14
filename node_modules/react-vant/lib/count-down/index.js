"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "CountDown", {
  enumerable: true,
  get: function () {
    return _CountDown.default;
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

var _CountDown = _interopRequireDefault(require("./CountDown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _default = _CountDown.default;
exports.default = _default;