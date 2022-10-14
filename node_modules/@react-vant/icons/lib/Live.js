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
  d: "M428.173 294.05h140.863L716.06 147.025c10.848-10.848 28.436-10.848 39.284 0 10.848 10.848 10.848 28.436 0 39.284l-107.741 107.74h185.73c30.683 0 55.556 24.874 55.556 55.556V794.05c0 30.682-24.873 55.555-55.556 55.555H166.667c-30.683 0-55.556-24.873-55.556-55.555V349.605c0-30.682 24.873-55.555 55.556-55.555h182.938l-107.74-107.741c-10.849-10.848-10.849-28.436 0-39.284 10.847-10.848 28.435-10.848 39.283 0L428.173 294.05zm146.59 303.168a27.778 27.778 0 004.339-4.338c9.584-11.98 7.641-29.46-4.338-39.043l-112.967-90.374a27.778 27.778 0 00-17.353-6.087c-15.34 0-27.777 12.437-27.777 27.778v180.747a27.778 27.778 0 006.087 17.353c9.583 11.98 27.064 13.921 39.043 4.338l112.967-90.374z",
  fillRule: "evenodd"
}));

const SvgLive = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgLive"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgLive;
exports.default = _default;