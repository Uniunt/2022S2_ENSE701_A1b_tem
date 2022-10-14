"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.rubberband = rubberband;
exports.rubberbandIfOutOfBounds = rubberbandIfOutOfBounds;

function _react() {
  const data = _interopRequireDefault(require("react"));

  _react = function () {
    return data;
  };

  return data;
}

var _bound = require("./bound");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function rubberband(distance, dimension, constant) {
  return distance * dimension * constant / (dimension + constant * distance);
}

function rubberbandIfOutOfBounds(position, min, max, dimension, constant = 0.15) {
  if (constant === 0) return (0, _bound.bound)(position, min, max);
  if (position < min) return -rubberband(min - position, dimension, constant) + min;
  if (position > max) return +rubberband(position - max, dimension, constant) + max;
  return position;
}