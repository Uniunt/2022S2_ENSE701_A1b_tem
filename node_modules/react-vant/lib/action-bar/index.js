"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ActionBar = void 0;

function _react() {
  const data = _interopRequireDefault(require("react"));

  _react = function () {
    return data;
  };

  return data;
}

require("./style/index.css");

var _ActionBar2 = _interopRequireDefault(require("./ActionBar"));

var _ActionBarIcon = _interopRequireDefault(require("./ActionBarIcon"));

var _ActionBarButton = _interopRequireDefault(require("./ActionBarButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const ActionBar = Object.assign(_ActionBar2.default, {
  Icon: _ActionBarIcon.default,
  Button: _ActionBarButton.default
});
exports.ActionBar = ActionBar;
var _default = ActionBar;
exports.default = _default;