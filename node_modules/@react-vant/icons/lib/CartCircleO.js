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
  transform: "translate(55 55)",
  fillRule: "nonzero"
}, React.createElement("path", {
  d: "M445 833.889c214.777 0 388.889-174.112 388.889-388.889 0-214.777-174.112-388.889-388.889-388.889C230.223 56.111 56.111 230.223 56.111 445c0 214.777 174.112 388.889 388.889 388.889zm0 55.555C199.54 889.444.556 690.46.556 445S199.54.556 445 .556 889.444 199.54 889.444 445 690.46 889.444 445 889.444z"
}), React.createElement("path", {
  d: "M223.131 222.79c30.679 0 55.55 24.866 55.556 55.544h413.767c15.34 0 27.777 12.436 27.777 27.777 0 2.889-.45 5.76-1.335 8.51l-53.64 166.667a27.778 27.778 0 01-26.443 19.268H278.687v55.747h360.875c15.342 0 27.778 12.437 27.778 27.778s-12.436 27.778-27.778 27.778H278.687c-30.683 0-55.556-24.873-55.556-55.556v-55.748h-.353v-222.21h-27.425c-15.34 0-27.777-12.437-27.777-27.778s12.436-27.778 27.777-27.778h27.778zm431.202 111.099H278.687v111.11l339.885.001 35.76-111.111z"
}), React.createElement("circle", {
  cx: 278.333,
  cy: 667.222,
  r: 27.778
}), React.createElement("circle", {
  cx: 611.667,
  cy: 667.222,
  r: 27.778
})));

const SvgCartCircleO = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgCartCircleO"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgCartCircleO;
exports.default = _default;