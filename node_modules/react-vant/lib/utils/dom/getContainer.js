"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.resolveContainer = resolveContainer;

function _react() {
  const data = _interopRequireDefault(require("react"));

  _react = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function resolveContainer(getContainer) {
  const container = typeof getContainer === 'function' ? getContainer() : getContainer;
  return container || document.body;
}