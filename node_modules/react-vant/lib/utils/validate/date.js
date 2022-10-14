"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDate = isDate;

function _react() {
  const data = _interopRequireDefault(require("react"));

  _react = function () {
    return data;
  };

  return data;
}

var _number = require("./number");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function isDate(val) {
  return Object.prototype.toString.call(val) === '[object Date]' && !(0, _number.isNaN)(val.getTime());
}