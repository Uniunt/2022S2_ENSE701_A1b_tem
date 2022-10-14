"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Tabbar = void 0;
Object.defineProperty(exports, "TabbarItem", {
  enumerable: true,
  get: function () {
    return _TabbarItem.default;
  }
});

function _react() {
  const data = _interopRequireDefault(require("react"));

  _react = function () {
    return data;
  };

  return data;
}

require("./style/index.css");

var _Tabbar2 = _interopRequireDefault(require("./Tabbar"));

var _TabbarItem = _interopRequireDefault(require("./TabbarItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Tabbar = Object.assign(_Tabbar2.default, {
  Item: _TabbarItem.default
});
exports.Tabbar = Tabbar;