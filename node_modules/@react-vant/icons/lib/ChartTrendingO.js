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
  d: "M727.86 151.64c-14.811 0-26.819-12.007-26.819-26.82 0-14.811 12.008-26.819 26.82-26.819h107.28c14.811 0 26.82 12.008 26.82 26.82V232.1c0 14.811-12.009 26.82-26.82 26.82-14.813 0-26.82-12.009-26.82-26.82v-80.46h-80.46zM191.465 580.759v268.199h107.28V580.758h-107.28zm0-53.64h107.28c29.624 0 53.639 24.016 53.639 53.64v268.199c0 29.624-24.015 53.64-53.64 53.64h-107.28c-29.624 0-53.639-24.016-53.639-53.64V580.758c0-29.624 24.015-53.64 53.64-53.64zm268.198-53.639v375.478h107.28V473.479h-107.28zm0-53.64h107.28c29.624 0 53.64 24.016 53.64 53.64v375.478c0 29.624-24.016 53.64-53.64 53.64h-107.28c-29.624 0-53.64-24.016-53.64-53.64V473.479c0-29.624 24.016-53.64 53.64-53.64zm268.199-53.64v482.758h107.28V366.2H727.86zm107.28-53.64c29.624 0 53.639 24.016 53.639 53.64v482.758c0 29.624-24.015 53.64-53.64 53.64H727.86c-29.624 0-53.639-24.016-53.639-53.64V366.2c0-29.625 24.015-53.64 53.64-53.64h107.28zm20.942-204.492c9.253 11.566 7.378 28.444-4.188 37.697l-279.48 223.584-163.132-52.881-257.774 152.936c-12.739 7.558-29.193 3.358-36.75-9.38-7.559-12.74-3.359-29.194 9.38-36.752l278.623-165.305 158.707 51.446 256.917-205.534c11.566-9.253 28.444-7.378 37.697 4.189z",
  fillRule: "nonzero"
}));

const SvgChartTrendingO = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgChartTrendingO"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgChartTrendingO;
exports.default = _default;