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
  d: "M305.583 277.756c-46 0-83.333 37.333-83.333 83.333s37.333 83.333 83.333 83.333 83.334-37.333 83.334-83.333-37.334-83.333-83.334-83.333m348.306 49.91c-22.333-26.11-62.833-25.833-84.833.612L333.333 611.11l-71.777-71.833c-21.723-21.722-56.89-21.722-78.612 0l-71.833 71.833V222.222H888.89v379.611l-235-274.166zm235-161H111.11c-30.667 0-55.555 24.834-55.555 55.556v555.555c0 30.667 24.888 55.556 55.555 55.556H888.89c30.722 0 55.555-24.889 55.555-55.555V222.222c0-30.722-24.833-55.555-55.555-55.555z",
  fillRule: "evenodd"
}));

const SvgPhoto = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgPhoto"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgPhoto;
exports.default = _default;