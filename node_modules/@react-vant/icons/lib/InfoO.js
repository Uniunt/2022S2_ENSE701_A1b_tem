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
  transform: "translate(55 55)",
  fillRule: "evenodd"
}, React.createElement("path", {
  d: "M445 833.889c214.777 0 388.889-174.112 388.889-388.889 0-214.777-174.112-388.889-388.889-388.889C230.223 56.111 56.111 230.223 56.111 445c0 214.777 174.112 388.889 388.889 388.889zm0 55.555C199.54 889.444.556 690.46.556 445S199.54.556 445 .556 889.444 199.54 889.444 445 690.46 889.444 445 889.444z",
  fillRule: "nonzero"
}), React.createElement("path", {
  d: "M472.778 639.444h27.778c15.34 0 27.777 12.437 27.777 27.778S515.897 695 500.556 695H389.444c-15.34 0-27.777-12.437-27.777-27.778s12.436-27.778 27.777-27.778h27.778v-250h-13.889c-15.34 0-27.777-12.436-27.777-27.777 0-15.342 12.436-27.778 27.777-27.778H445c15.341 0 27.778 12.436 27.778 27.778v277.777z"
}), React.createElement("circle", {
  cx: 445,
  cy: 236.667,
  r: 41.667
})));

const SvgInfoO = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgInfoO"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgInfoO;
exports.default = _default;