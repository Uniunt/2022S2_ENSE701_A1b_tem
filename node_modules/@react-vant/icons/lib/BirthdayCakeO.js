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
}, props), React.createElement("g", {
  fillRule: "evenodd"
}, React.createElement("path", {
  d: "M166.667 555.556v277.777h666.666V555.556H166.667zm0-55.556h666.666c30.683 0 55.556 24.873 55.556 55.556v277.777c0 30.683-24.873 55.556-55.556 55.556H166.667c-30.683 0-55.556-24.873-55.556-55.556V555.556c0-30.683 24.873-55.556 55.556-55.556z",
  fillRule: "nonzero"
}), React.createElement("path", {
  d: "M277.778 388.889V500h444.444V388.889H277.778zm0-55.556h444.444c30.683 0 55.556 24.873 55.556 55.556V500c0 30.682-24.873 55.556-55.556 55.556H277.778c-30.683 0-55.556-24.874-55.556-55.556V388.889c0-30.683 24.873-55.556 55.556-55.556z",
  fillRule: "nonzero"
}), React.createElement("path", {
  d: "M500 222.222c15.341 0 27.778 12.437 27.778 27.778v111.111c0 15.341-12.437 27.778-27.778 27.778s-27.778-12.437-27.778-27.778V250c0-15.341 12.437-27.778 27.778-27.778zm29.111-89.797c0 30.176-15.225 54.648-34 54.648s-34-24.472-34-54.648c0-30.176 15.225-54.647 34-54.647s34 24.471 34 54.647zM250 666.667h500c15.341 0 27.778 12.436 27.778 27.777 0 15.342-12.437 27.778-27.778 27.778H250c-15.341 0-27.778-12.436-27.778-27.778 0-15.34 12.437-27.777 27.778-27.777z"
})));

const SvgBirthdayCakeO = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgBirthdayCakeO"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgBirthdayCakeO;
exports.default = _default;