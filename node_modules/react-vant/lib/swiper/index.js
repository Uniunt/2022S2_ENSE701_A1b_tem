"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Swiper = void 0;

function _react() {
  const data = _interopRequireDefault(require("react"));

  _react = function () {
    return data;
  };

  return data;
}

require("./style/index.css");

var _Swiper2 = _interopRequireDefault(require("./Swiper"));

var _SwiperItem = _interopRequireDefault(require("./SwiperItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Swiper = Object.assign(_Swiper2.default, {
  Item: _SwiperItem.default
});
exports.Swiper = Swiper;
var _default = Swiper;
exports.default = _default;