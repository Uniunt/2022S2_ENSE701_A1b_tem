"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Input = void 0;

function _react() {
  const data = _interopRequireDefault(require("react"));

  _react = function () {
    return data;
  };

  return data;
}

var _Input2 = _interopRequireDefault(require("./Input"));

var _textArea = _interopRequireDefault(require("../text-area"));

require("./style/index.css");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Input = Object.assign(_Input2.default, {
  TextArea: _textArea.default
});
exports.Input = Input;
var _default = Input;
exports.default = _default;