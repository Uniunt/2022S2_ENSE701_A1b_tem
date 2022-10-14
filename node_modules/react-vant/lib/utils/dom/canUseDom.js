"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = canUseDom;

function _react() {
  const data = _interopRequireDefault(require("react"));

  _react = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function canUseDom() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
}