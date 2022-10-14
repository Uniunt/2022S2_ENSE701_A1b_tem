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
  d: "M500 55.556c245.444 0 444.444 199 444.444 444.444 0 245.444-199 444.444-444.444 444.444-245.444 0-444.444-199-444.444-444.444 0-245.444 199-444.444 444.444-444.444zm27.778 57V250c0 15.333-12.5 27.778-27.778 27.778-15.278 0-27.778-12.445-27.778-27.778V112.556C280 126.222 126.222 279.944 112.5 472.222H250c15.278 0 27.778 12.5 27.778 27.778 0 15.333-12.5 27.778-27.778 27.778H112.5C126.222 720.056 280 873.833 472.222 887.5V750c0-15.278 12.5-27.778 27.778-27.778 15.278 0 27.778 12.5 27.778 27.778v137.5C720 873.833 873.778 720.056 887.5 527.778H750c-15.278 0-27.778-12.445-27.778-27.778 0-15.278 12.5-27.778 27.778-27.778h137.5c-13.722-192.278-167.5-346-359.722-359.666zM500 444.466c30.667 0 55.556 24.834 55.556 55.556 0 30.722-24.89 55.556-55.556 55.556-30.667 0-55.556-24.834-55.556-55.556 0-30.722 24.89-55.555 55.556-55.555z",
  fillRule: "evenodd"
}));

const SvgAim = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgAim"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgAim;
exports.default = _default;