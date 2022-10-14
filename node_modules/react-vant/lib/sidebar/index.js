"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sidebar = void 0;
Object.defineProperty(exports, "SidebarItem", {
  enumerable: true,
  get: function () {
    return _SidebarItem.default;
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

var _Sidebar2 = _interopRequireDefault(require("./Sidebar"));

var _SidebarItem = _interopRequireDefault(require("./SidebarItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Sidebar = Object.assign(_Sidebar2.default, {
  Item: _SidebarItem.default
});
exports.Sidebar = Sidebar;