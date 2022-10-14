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
  d: "M684.878 119.138l117.884 117.885c10.851 10.851 10.851 28.444 0 39.295l-98.237 98.237-157.18-157.18 98.238-98.237c10.85-10.85 28.444-10.85 39.295 0zm-19.648 58.943l-39.295 39.295 78.59 78.59 39.295-39.295-78.59-78.59zm195.984 655.348c15.346 0 27.786 12.44 27.786 27.785C889 876.56 876.56 889 861.214 889H138.786C123.44 889 111 876.56 111 861.214c0-15.345 12.44-27.785 27.786-27.785h722.428zM508.05 256.67l157.18 157.18L350.87 728.21l-155.605 31.12c-15.047 3.01-29.686-6.748-32.695-21.796a27.786 27.786 0 010-10.899l31.12-155.605 314.36-314.36zm0 78.59L244.883 598.426l-19.647 98.238 98.237-19.648L586.64 413.85l-78.59-78.59z"
})));

const SvgEdit = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgEdit"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgEdit;
exports.default = _default;