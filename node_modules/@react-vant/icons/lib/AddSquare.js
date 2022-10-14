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
  d: "M472.222 472.222H277.778C262.437 472.222 250 484.66 250 500s12.437 27.778 27.778 27.778h194.444v194.444C472.222 737.563 484.66 750 500 750s27.778-12.437 27.778-27.778V527.778h194.444C737.563 527.778 750 515.34 750 500s-12.437-27.778-27.778-27.778H527.778V277.778C527.778 262.437 515.34 250 500 250s-27.778 12.437-27.778 27.778v194.444zm-305.555-361.11h666.666c30.683 0 55.556 24.872 55.556 55.555v666.666c0 30.683-24.873 55.556-55.556 55.556H166.667c-30.683 0-55.556-24.873-55.556-55.556V166.667c0-30.683 24.873-55.556 55.556-55.556z",
  fillRule: "evenodd"
}));

const SvgAddSquare = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgAddSquare"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgAddSquare;
exports.default = _default;