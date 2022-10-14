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
  d: "M111.111 305.556v-138.89c0-30.682 24.873-55.555 55.556-55.555h138.889c15.34 0 27.777 12.437 27.777 27.778s-12.436 27.778-27.777 27.778h-138.89v138.889c0 15.34-12.436 27.777-27.777 27.777-15.341 0-27.778-12.436-27.778-27.777zm55.556 388.888v138.89h138.889c15.34 0 27.777 12.436 27.777 27.777 0 15.341-12.436 27.778-27.777 27.778h-138.89c-30.682 0-55.555-24.873-55.555-55.556V694.444c0-15.34 12.437-27.777 27.778-27.777s27.778 12.436 27.778 27.777zm666.666-388.888v-138.89H694.444c-15.34 0-27.777-12.436-27.777-27.777 0-15.341 12.436-27.778 27.777-27.778h138.89c30.682 0 55.555 24.873 55.555 55.556v138.889c0 15.34-12.437 27.777-27.778 27.777s-27.778-12.436-27.778-27.777zm55.556 388.888v138.89c0 30.682-24.873 55.555-55.556 55.555H694.444c-15.34 0-27.777-12.437-27.777-27.778s12.436-27.778 27.777-27.778h138.89V694.444c0-15.34 12.436-27.777 27.777-27.777 15.341 0 27.778 12.436 27.778 27.777zM138.889 472.222H861.11c15.341 0 27.778 12.437 27.778 27.778s-12.437 27.778-27.778 27.778H138.89c-15.341 0-27.778-12.437-27.778-27.778s12.437-27.778 27.778-27.778z"
})));

const SvgScan = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgScan"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgScan;
exports.default = _default;