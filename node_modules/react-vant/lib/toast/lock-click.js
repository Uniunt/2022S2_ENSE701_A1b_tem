"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lockClick = lockClick;

function _react() {
  const data = _interopRequireDefault(require("react"));

  _react = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let lockCount = 0;

function lockClick(lock) {
  if (lock) {
    if (!lockCount) {
      document.body.classList.add('rv-toast--unclickable');
    }

    lockCount += 1;
  } else if (lockCount) {
    lockCount -= 1;

    if (!lockCount) {
      document.body.classList.remove('rv-toast--unclickable');
    }
  }
}