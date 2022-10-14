"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.camelize = camelize;
exports.padZero = padZero;

function _react() {
  const data = _interopRequireDefault(require("react"));

  _react = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const camelizeRE = /-(\w)/g;

function camelize(str) {
  return str.replace(camelizeRE, (_, c) => c.toUpperCase());
}

function padZero(num, targetLength = 2) {
  let str = `${num}`;

  while (str.length < targetLength) {
    str = `0${str}`;
  }

  return str;
}