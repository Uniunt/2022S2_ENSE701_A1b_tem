"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Flex = void 0;

function _react() {
  const data = _interopRequireDefault(require("react"));

  _react = function () {
    return data;
  };

  return data;
}

require("./style/index.css");

var _Flex2 = _interopRequireDefault(require("./Flex"));

var _FlexItem = _interopRequireDefault(require("./FlexItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Flex = Object.assign(_Flex2.default, {
  Item: _FlexItem.default
});
exports.Flex = Flex;
var _default = Flex;
exports.default = _default;