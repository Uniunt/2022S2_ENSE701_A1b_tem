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
  d: "M888.889 166.667c30.667 0 55.555 24.889 55.555 55.555v555.556c0 30.666-24.888 55.555-55.555 55.555H111.11c-30.667 0-55.555-24.889-55.555-55.555V222.222c0-30.666 24.888-55.555 55.555-55.555zm0 55.555H111.11v555.556H888.89V222.222zM333.044 537.04c23 0 41.667-18.667 41.667-41.667s-18.667-41.666-41.667-41.666-41.666 18.666-41.666 41.666c0 23 18.666 41.667 41.666 41.667m166.667 0c23 0 41.667-18.667 41.667-41.667s-18.667-41.666-41.667-41.666-41.667 18.666-41.667 41.666c0 23 18.667 41.667 41.667 41.667m166.667 0c23 0 41.666-18.667 41.666-41.667s-18.666-41.666-41.666-41.666c-23 0-41.667 18.666-41.667 41.666 0 23 18.667 41.667 41.667 41.667",
  fillRule: "evenodd"
}));

const SvgOtherPay = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgOtherPay"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgOtherPay;
exports.default = _default;