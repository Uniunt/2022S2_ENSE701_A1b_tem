"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DropdownMenu = void 0;

function _react() {
  const data = _interopRequireDefault(require("react"));

  _react = function () {
    return data;
  };

  return data;
}

require("./style/index.css");

var _DropdownMenu2 = _interopRequireDefault(require("./DropdownMenu"));

var _DropdownMenuItem = _interopRequireDefault(require("./DropdownMenuItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DropdownMenu = Object.assign(_DropdownMenu2.default, {
  Item: _DropdownMenuItem.default
});
exports.DropdownMenu = DropdownMenu;
var _default = DropdownMenu;
exports.default = _default;