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
  d: "M500.006 277.778c184.055 0 333.333 149.222 333.333 333.333 0 184.056-149.278 333.333-333.333 333.333-184.112 0-333.334-149.277-333.334-333.333 0-184.111 149.222-333.333 333.334-333.333zm39.277 215.5c-21.722-21.722-56.889-21.722-78.555 0l-78.556 78.555c-21.722 21.723-21.722 56.834 0 78.556l78.556 78.555c21.666 21.723 56.833 21.723 78.555 0l78.556-78.555c21.722-21.722 21.722-56.833 0-78.556zM666.667 55.56c30.722 0 55.555 24.833 55.555 55.556v111.11l-43.666 43.667c-37.778-19.61-79.278-32.944-123-39.277v-115.5H444.444v115.5c-43.722 6.333-85.222 19.666-123 39.277l-43.666-43.666V111.117c0-30.723 24.833-55.556 55.555-55.556z",
  fillRule: "evenodd"
}));

const SvgMedal = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgMedal"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgMedal;
exports.default = _default;