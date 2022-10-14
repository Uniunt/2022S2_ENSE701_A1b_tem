"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "IndexAnchor", {
  enumerable: true,
  get: function () {
    return _IndexAnchor.default;
  }
});
exports.IndexBar = void 0;

function _react() {
  const data = _interopRequireDefault(require("react"));

  _react = function () {
    return data;
  };

  return data;
}

require("./style/index.css");

var _IndexBar2 = _interopRequireDefault(require("./IndexBar"));

var _IndexAnchor = _interopRequireDefault(require("./IndexAnchor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const IndexBar = Object.assign(_IndexBar2.default, {
  Anchor: _IndexAnchor.default
});
exports.IndexBar = IndexBar;