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
  d: "M574.975 74.022L741.64 185.133c16.493 10.995 16.493 35.23 0 46.225L574.975 342.47c-18.46 12.307-43.186-.926-43.186-23.112V218.86c-142.994-13.088-282.443 70.705-333.864 211.984C136.71 599.032 223.428 785 391.615 846.215c168.187 61.215 354.155-25.503 415.37-193.69a326.704 326.704 0 0014.287-52.363c.189-1.023.401-2.037.636-3.04a32.49 32.49 0 011.763-7.498c6.122-16.82 24.718-25.491 41.537-19.37 16.819 6.122 25.49 24.719 19.37 41.537-3.458 21.173-9.134 42.15-16.687 62.902-73.458 201.824-296.62 305.886-498.444 232.428C167.622 833.663 63.56 610.5 137.019 408.677c61.002-167.602 225.242-267.785 394.77-254.873v-56.67c0-22.185 24.726-35.419 43.186-23.112z",
  fillRule: "nonzero"
}));

const SvgReplay = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgReplay"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgReplay;
exports.default = _default;