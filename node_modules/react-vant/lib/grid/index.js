"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Grid = void 0;
Object.defineProperty(exports, "GridItem", {
  enumerable: true,
  get: function () {
    return _GridItem.default;
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

var _Grid = _interopRequireDefault(require("./Grid"));

var _GridItem = _interopRequireDefault(require("./GridItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const GridNamespace = Object.assign(_Grid.default, {
  Item: _GridItem.default
});
exports.Grid = GridNamespace;