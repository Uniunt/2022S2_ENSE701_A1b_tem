"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Collapse = void 0;
Object.defineProperty(exports, "CollapseItem", {
  enumerable: true,
  get: function () {
    return _CollapseItem.default;
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

var _Collapse2 = _interopRequireDefault(require("./Collapse"));

var _CollapseItem = _interopRequireDefault(require("./CollapseItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Collapse = Object.assign(_Collapse2.default, {
  Item: _CollapseItem.default
});
exports.Collapse = Collapse;
var _default = Collapse;
exports.default = _default;