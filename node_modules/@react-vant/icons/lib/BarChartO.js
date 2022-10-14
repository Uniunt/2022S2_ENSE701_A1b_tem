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
  d: "M166.556 430.334v416.668h111.111V430.334H166.556zm0-55.555h111.111c30.683 0 55.556 24.873 55.556 55.555v416.668c0 30.683-24.873 55.556-55.556 55.556H166.556c-30.683 0-55.556-24.873-55.556-55.556V430.334c0-30.682 24.873-55.555 55.556-55.555zm277.778-55.556v527.78h111.112v-527.78H444.334zm0-55.556h111.112c30.682 0 55.555 24.873 55.555 55.556v527.78c0 30.682-24.873 55.555-55.555 55.555H444.334c-30.682 0-55.555-24.873-55.555-55.556v-527.78c0-30.682 24.873-55.555 55.555-55.555zm277.779-111.111v694.446h111.111V152.556H722.113zm0-55.556h111.111c30.683 0 55.556 24.873 55.556 55.556v694.446c0 30.683-24.873 55.556-55.556 55.556H722.113c-30.683 0-55.556-24.873-55.556-55.556V152.556c0-30.683 24.873-55.556 55.556-55.556z",
  fillRule: "nonzero"
}));

const SvgBarChartO = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgBarChartO"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgBarChartO;
exports.default = _default;