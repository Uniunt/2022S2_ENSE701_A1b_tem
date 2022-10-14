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
  d: "M825.755 697.333H305.222c-15.341 0-27.778 12.437-27.778 27.778s12.437 27.778 27.778 27.778h516.613l-85.328 85.328c-10.848 10.848-10.848 28.436 0 39.284 10.848 10.848 28.436 10.848 39.284 0l130.78-130.78c13.017-13.017 13.017-34.123 0-47.14l-133.001-133c-10.848-10.849-28.436-10.849-39.284 0-10.848 10.847-10.848 28.435 0 39.283l91.47 91.47zM173.578 252.889h520.533c15.341 0 27.778 12.436 27.778 27.778 0 15.34-12.437 27.777-27.778 27.777H177.498l85.329 85.329c10.847 10.848 10.847 28.436 0 39.284-10.848 10.847-28.436 10.847-39.284 0l-130.78-130.78c-13.017-13.018-13.017-34.123 0-47.14l133-133.001c10.848-10.848 28.436-10.848 39.284 0 10.848 10.848 10.848 28.436 0 39.284l-91.469 91.469z"
})));

const SvgExchange = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgExchange"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgExchange;
exports.default = _default;