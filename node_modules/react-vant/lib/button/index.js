"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Button = void 0;

function _react() {
  const data = _interopRequireDefault(require("react"));

  _react = function () {
    return data;
  };

  return data;
}

require("./style/index.css");

var _Button2 = _interopRequireDefault(require("./Button"));

var _ButtonGroup = _interopRequireDefault(require("./ButtonGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Button = Object.assign(_Button2.default, {
  Group: _ButtonGroup.default
});
exports.Button = Button;
var _default = Button;
exports.default = _default;