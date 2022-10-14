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
  d: "M373.247 606.702c-49.878 28.447-57.276-15.97-57.276-15.97l-62.51-149.228c-24.053-70.91 20.815-31.973 20.815-31.973s38.5 29.796 67.72 47.953c29.203 18.156 62.49 5.33 62.49 5.33l408.667-192.97c-75.398-95.976-199.947-158.733-340.952-158.733-230.118 0-416.645 167.01-416.645 373.04 0 118.505 61.764 223.98 157.97 292.342l-17.35 102.028s-8.457 29.786 20.855 15.97c19.973-9.419 70.893-43.174 101.205-63.717 47.65 16.987 99.566 26.42 153.988 26.42 230.1 0 416.665-167.01 416.665-373.043 0-59.676-15.721-116.034-43.568-166.059-130.203 80.142-433.047 266.389-472.074 288.61z",
  fillRule: "evenodd"
}));

const SvgWechatPay = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgWechatPay"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgWechatPay;
exports.default = _default;