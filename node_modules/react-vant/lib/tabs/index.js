"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Tabs = void 0;

function _react() {
  const data = _interopRequireDefault(require("react"));

  _react = function () {
    return data;
  };

  return data;
}

require("./style/index.css");

var _Tabs2 = _interopRequireDefault(require("./Tabs"));

var _TabPane = _interopRequireDefault(require("./TabPane"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Tabs = Object.assign(_Tabs2.default, {
  TabPane: _TabPane.default
});
exports.Tabs = Tabs;
var _default = Tabs;
exports.default = _default;