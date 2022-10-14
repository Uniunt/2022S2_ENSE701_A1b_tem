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
  d: "M407.368 765.883l92.751 98.897 333.22-353.217c76.417-81.004 74.567-208.092-4.178-286.836-77.465-77.465-203.06-77.465-280.524 0l-49.045 49.045-49.034-49.034c-77.416-77.416-202.932-77.416-280.347 0-78.63 78.63-80.383 205.562-3.955 286.334l241.112 254.81zm82.473-580.429l9.75 9.75 9.763-9.761c99.16-99.16 259.93-99.16 359.09 0 99.996 99.995 102.346 261.379 5.305 364.243L540.53 902.903a55.555 55.555 0 01-2.407 2.4c-22.38 20.99-57.538 19.862-78.527-2.519l-92.581-98.717-241.112-254.811c-97.106-102.624-94.88-263.899 5.024-363.802 99.111-99.111 259.803-99.111 358.914 0z",
  fillRule: "nonzero"
}));

const SvgLikeO = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgLikeO"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgLikeO;
exports.default = _default;