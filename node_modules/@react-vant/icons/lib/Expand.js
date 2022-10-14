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
  d: "M777.778 416.667c0 15.333-12.445 27.777-27.778 27.777-15.333 0-27.778-12.444-27.778-27.777v-99.611L594.833 444.444c-10.833 10.834-28.444 10.834-39.277 0-10.834-10.833-10.834-28.444 0-39.277l127.388-127.39h-99.61c-15.334 0-27.778-12.444-27.778-27.777s12.444-27.778 27.777-27.778H750c15.333 0 27.778 12.445 27.778 27.778v166.667zM444.444 594.833l-127.388 127.39h99.61c15.334 0 27.778 12.444 27.778 27.777S432 777.778 416.667 777.778H250c-15.333 0-27.778-12.445-27.778-27.778V583.333c0-15.333 12.445-27.777 27.778-27.777 15.333 0 27.778 12.444 27.778 27.777v99.611l127.389-127.388c10.833-10.834 28.444-10.834 39.277 0 10.834 10.833 10.834 28.444 0 39.277zm388.89-483.722H166.666c-30.723 0-55.556 24.833-55.556 55.556v666.666c0 30.723 24.833 55.556 55.556 55.556h666.666c30.723 0 55.556-24.833 55.556-55.556V166.667c0-30.723-24.833-55.556-55.556-55.556z",
  fillRule: "evenodd"
}));

const SvgExpand = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgExpand"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgExpand;
exports.default = _default;