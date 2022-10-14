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
  fillRule: "nonzero"
}, React.createElement("path", {
  d: "M500 666.667c153.412 0 277.778-124.366 277.778-277.778 0-153.413-124.366-277.778-277.778-277.778-153.412 0-277.778 124.365-277.778 277.778 0 153.412 124.366 277.778 277.778 277.778zm0 55.555c-184.095 0-333.333-149.238-333.333-333.333 0-184.095 149.238-333.333 333.333-333.333 184.095 0 333.333 149.238 333.333 333.333 0 184.095-149.238 333.333-333.333 333.333z"
}), React.createElement("path", {
  d: "M500 458.333c38.353 0 69.444-31.091 69.444-69.444s-31.09-69.445-69.444-69.445c-38.353 0-69.444 31.092-69.444 69.445 0 38.353 31.09 69.444 69.444 69.444zm0 55.556c-69.036 0-125-55.965-125-125 0-69.036 55.964-125 125-125s125 55.964 125 125c0 69.035-55.964 125-125 125zM388.889 860.577L500 813.511l111.111 47.066V702.358c-36.5 13.446-73.458 20.274-110.733 20.274-37.456 0-74.664-6.894-111.49-20.467v158.412zM333.333 611.45c55.922 37.084 111.603 55.626 167.045 55.626 55.441 0 110.87-18.542 166.289-55.626v291.06c0 15.342-12.437 27.779-27.778 27.779-3.723 0-7.407-.749-10.835-2.2L500 873.844l-128.054 54.243c-14.126 5.984-30.429-.617-36.413-14.743a27.778 27.778 0 01-2.2-10.834V611.45z"
})));

const SvgAwardO = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgAwardO"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgAwardO;
exports.default = _default;