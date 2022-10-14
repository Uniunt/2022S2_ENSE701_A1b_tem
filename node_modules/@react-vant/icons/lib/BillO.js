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
  d: "M388.889 111.111v55.556H611.11V111.11H388.89zm388.889 55.556H666.667c0 30.682-24.873 55.555-55.556 55.555H388.89c-30.683 0-55.556-24.873-55.556-55.555h-111.11v722.222h555.555V166.667zm55.555 0v722.222c0 30.682-24.873 55.555-55.555 55.555H222.222c-30.682 0-55.555-24.873-55.555-55.555V166.667c0-30.683 24.873-55.556 55.555-55.556h111.111c0-30.682 24.873-55.555 55.556-55.555H611.11c30.683 0 55.556 24.873 55.556 55.555h111.11c30.683 0 55.556 24.873 55.556 55.556z",
  fillRule: "nonzero"
}), React.createElement("path", {
  d: "M500.494 443.253l38.79-38.79c10.848-10.848 28.436-10.848 39.283 0 10.848 10.848 10.848 28.436 0 39.283l-28.475 28.476h19.352c15.342 0 27.778 12.437 27.778 27.778s-12.436 27.778-27.778 27.778h-41.666v27.778h41.666c15.342 0 27.778 12.436 27.778 27.777 0 15.342-12.436 27.778-27.778 27.778h-41.666v27.778c0 15.341-12.437 27.778-27.778 27.778s-27.778-12.437-27.778-27.778V611.11h-41.666c-15.342 0-27.778-12.436-27.778-27.778 0-15.34 12.436-27.777 27.778-27.777h41.666v-27.778h-41.666c-15.342 0-27.778-12.437-27.778-27.778s12.436-27.778 27.778-27.778h20.34l-28.476-28.476c-10.848-10.847-10.848-28.435 0-39.283 10.848-10.848 28.435-10.848 39.283 0l38.79 38.79z"
})));

const SvgBillO = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgBillO"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgBillO;
exports.default = _default;