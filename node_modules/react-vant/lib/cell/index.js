"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cell = void 0;
Object.defineProperty(exports, "CellGroup", {
  enumerable: true,
  get: function () {
    return _CellGroup.default;
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

var _CellGroup = _interopRequireDefault(require("./CellGroup"));

var _Cell2 = _interopRequireDefault(require("./Cell"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Cell = Object.assign(_Cell2.default, {
  Group: _CellGroup.default
});
exports.Cell = Cell;
var _default = Cell;
exports.default = _default;