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
  d: "M111.111 166.667v500H888.89v-500H111.11zm416.667 555.555v111.111h166.666c15.342 0 27.778 12.437 27.778 27.778s-12.436 27.778-27.778 27.778H305.556c-15.342 0-27.778-12.437-27.778-27.778s12.436-27.778 27.778-27.778h166.666v-111.11h-361.11c-30.683 0-55.556-24.874-55.556-55.556v-500c0-30.683 24.873-55.556 55.555-55.556H888.89c30.682 0 55.555 24.873 55.555 55.556v500c0 30.682-24.873 55.555-55.555 55.555H527.778zm-27.284-397.518l38.79-38.79c10.848-10.848 28.436-10.848 39.283 0 10.848 10.848 10.848 28.436 0 39.283l-28.475 28.476h19.352c15.342 0 27.778 12.437 27.778 27.778s-12.436 27.778-27.778 27.778h-41.666v27.777h41.666c15.342 0 27.778 12.437 27.778 27.778s-12.436 27.778-27.778 27.778h-41.666v27.778c0 15.341-12.437 27.778-27.778 27.778s-27.778-12.437-27.778-27.778v-27.778h-41.666c-15.342 0-27.778-12.437-27.778-27.778s12.436-27.778 27.778-27.778h41.666V409.23h-41.666c-15.342 0-27.778-12.437-27.778-27.778s12.436-27.778 27.778-27.778h20.34l-28.476-28.476c-10.848-10.847-10.848-28.435 0-39.283 10.848-10.848 28.435-10.848 39.283 0l38.79 38.79z",
  fillRule: "nonzero"
}));

const SvgCashierO = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgCashierO"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgCashierO;
exports.default = _default;