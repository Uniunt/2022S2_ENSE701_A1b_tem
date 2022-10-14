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
  d: "M778.114 56c30.683 0 55.556 24.873 55.556 55.556v777.781c0 30.683-24.873 55.556-55.556 55.556H222.556c-30.683 0-55.556-24.873-55.556-55.556V111.557C167 80.873 191.873 56 222.556 56h555.558zm0 55.556H222.556v777.781h555.558V111.557zM528.113 667.114c15.341 0 27.778 12.437 27.778 27.778s-12.437 27.778-27.778 27.778H361.445c-15.34 0-27.777-12.437-27.777-27.778s12.436-27.778 27.777-27.778h166.668zm111.112-166.667c15.34 0 27.778 12.436 27.778 27.778 0 15.34-12.437 27.778-27.778 27.778h-277.78c-15.34 0-27.777-12.437-27.777-27.778 0-15.342 12.436-27.778 27.777-27.778h277.78zm0-166.668c15.34 0 27.778 12.437 27.778 27.778s-12.437 27.778-27.778 27.778h-277.78c-15.34 0-27.777-12.437-27.777-27.778s12.436-27.778 27.777-27.778h277.78z",
  fillRule: "nonzero"
}));

const SvgOrdersO = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgOrdersO"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgOrdersO;
exports.default = _default;