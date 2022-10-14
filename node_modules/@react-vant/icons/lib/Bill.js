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
  d: "M500.494 444.24l.213.213a28.29 28.29 0 00-.42-.007l.207-.206zm0-.987l-38.79-38.79c-10.849-10.848-28.436-10.848-39.284 0-10.848 10.848-10.848 28.436 0 39.283l28.475 28.476h-20.34c-15.34 0-27.777 12.437-27.777 27.778s12.436 27.778 27.778 27.778h41.666v27.778h-41.666c-15.342 0-27.778 12.436-27.778 27.777 0 15.342 12.436 27.778 27.778 27.778h41.666v27.778c0 15.341 12.437 27.778 27.778 27.778s27.778-12.437 27.778-27.778V611.11h41.666c15.342 0 27.778-12.436 27.778-27.778 0-15.34-12.436-27.777-27.778-27.777h-41.666v-27.778h41.666c15.342 0 27.778-12.437 27.778-27.778s-12.436-27.778-27.778-27.778h-19.352l28.475-28.476c10.848-10.847 10.848-28.435 0-39.283-10.847-10.848-28.435-10.848-39.283 0l-38.79 38.79zm27.275 28.262l.707.707h-.698c0-.236-.003-.472-.009-.707zM333.333 111.111v55.556c0 30.682 24.873 55.555 55.556 55.555H611.11c30.683 0 55.556-24.873 55.556-55.555V111.11h111.11c30.683 0 55.556 24.873 55.556 55.556v722.222c0 30.682-24.873 55.555-55.555 55.555H222.222c-30.682 0-55.555-24.873-55.555-55.555V166.667c0-30.683 24.873-55.556 55.555-55.556h111.111z"
}), React.createElement("path", {
  d: "M416.667 111.111h166.666c15.342 0 27.778 12.437 27.778 27.778s-12.436 27.778-27.778 27.778H416.667c-15.342 0-27.778-12.437-27.778-27.778s12.436-27.778 27.778-27.778z"
})));

const SvgBill = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgBill"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgBill;
exports.default = _default;