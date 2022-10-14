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
  d: "M180.556 416.667c38.353 0 69.444 31.091 69.444 69.444s-31.091 69.445-69.444 69.445c-38.354 0-69.445-31.092-69.445-69.445 0-38.353 31.091-69.444 69.445-69.444zm319.444 0c38.353 0 69.444 31.091 69.444 69.444s-31.09 69.445-69.444 69.445c-38.353 0-69.444-31.092-69.444-69.445 0-38.353 31.09-69.444 69.444-69.444zm319.444 0c38.354 0 69.445 31.091 69.445 69.444s-31.091 69.445-69.445 69.445c-38.353 0-69.444-31.092-69.444-69.445 0-38.353 31.091-69.444 69.444-69.444z",
  fillRule: "evenodd"
}));

const SvgEllipsis = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgEllipsis"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgEllipsis;
exports.default = _default;