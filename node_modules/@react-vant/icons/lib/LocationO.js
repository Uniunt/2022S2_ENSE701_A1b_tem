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
  d: "M500.335 55C684.431 55 833.67 200.948 833.67 380.983c0 164.257-97.838 346.605-293.515 547.044-.331.34-.667.674-1.007 1.005-21.988 21.399-57.16 20.921-78.559-1.067C264.863 726.848 167 544.52 167 380.983 167 200.948 316.24 55 500.335 55zm0 55.556c-153.687 0-277.78 121.355-277.78 270.427 0 146.484 91.26 316.508 277.846 508.235 186.503-191.041 277.713-361.035 277.713-508.235 0-149.072-124.092-270.427-277.779-270.427zm0 444.447c-76.707 0-138.89-62.183-138.89-138.89s62.183-138.89 138.89-138.89 138.89 62.183 138.89 138.89-62.183 138.89-138.89 138.89zm0-55.556c46.024 0 83.334-37.31 83.334-83.334s-37.31-83.334-83.334-83.334-83.334 37.31-83.334 83.334 37.31 83.334 83.334 83.334z",
  fillRule: "nonzero"
})));

const SvgLocationO = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgLocationO"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgLocationO;
exports.default = _default;