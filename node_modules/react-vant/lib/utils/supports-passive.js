"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supportsPassive = void 0;

function _react() {
  const data = _interopRequireDefault(require("react"));

  _react = function () {
    return data;
  };

  return data;
}

var _canUseDom = _interopRequireDefault(require("./dom/canUseDom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let supportsPassive = false;
exports.supportsPassive = supportsPassive;

if ((0, _canUseDom.default)()) {
  try {
    const opts = {};
    Object.defineProperty(opts, 'passive', {
      get() {
        exports.supportsPassive = supportsPassive = true;
      }

    });
    window.addEventListener('test-passive', null, opts); // eslint-disable-next-line no-empty
  } catch (e) {}
}