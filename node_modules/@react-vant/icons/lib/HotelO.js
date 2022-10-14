"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _IconBase = _interopRequireDefault(require("./IconBase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const SvgIcon = props => React.createElement("svg", Object.assign({
  width: "1em",
  height: "1em",
  viewBox: "0 0 1024 1024",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "currentColor"
}, props), React.createElement("path", {
  d: "M166.556 388.779v444.445h166.667V388.78H166.556zm0-55.556h166.667c30.682 0 55.556 24.873 55.556 55.556v444.445c0 30.683-24.874 55.556-55.556 55.556H166.556c-30.683 0-55.556-24.873-55.556-55.556V388.78c0-30.683 24.873-55.556 55.556-55.556zM611 277.667c15.342 0 27.778 12.437 27.778 27.778v55.556c0 15.341-12.436 27.778-27.778 27.778-15.34 0-27.777-12.437-27.777-27.778v-55.556c0-15.341 12.436-27.778 27.777-27.778zm0 222.223c15.342 0 27.778 12.437 27.778 27.778v55.556c0 15.34-12.436 27.777-27.778 27.777-15.34 0-27.777-12.436-27.777-27.777v-55.556c0-15.341 12.436-27.778 27.777-27.778zm111.112-111.111c15.341 0 27.778 12.436 27.778 27.777v55.556c0 15.341-12.437 27.778-27.778 27.778s-27.778-12.437-27.778-27.778v-55.556c0-15.34 12.437-27.777 27.778-27.777zm0 222.222c15.341 0 27.778 12.437 27.778 27.778v55.556c0 15.341-12.437 27.778-27.778 27.778s-27.778-12.437-27.778-27.778v-55.556c0-15.341 12.437-27.778 27.778-27.778zM499.89 166.556v666.668h333.334V166.556H499.89zm0-55.556h333.334c30.683 0 55.556 24.873 55.556 55.556v666.668c0 30.683-24.873 55.556-55.556 55.556H499.89c-30.683 0-55.556-24.873-55.556-55.556V166.556c0-30.683 24.873-55.556 55.556-55.556z",
  fillRule: "nonzero"
}));

const SvgHotelO = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgHotelO"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgHotelO;
exports.default = _default;