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
  d: "M888.889 166.667c30.667 0 55.555 24.833 55.555 55.555v555.556c0 30.722-24.888 55.555-55.555 55.555H111.11c-30.667 0-55.555-24.833-55.555-55.555V222.222c0-30.722 24.888-55.555 55.555-55.555zm0 166.666H111.11v444.445H888.89V333.333zm0-111.11H111.11v55.555H888.89v-55.556zM468.572 697.805c10.834 10.833 28.445 10.833 39.278 0l39.278-39.278c10.833-10.834 10.833-28.445 0-39.278-10.834-10.833-28.445-10.833-39.278 0l-39.278 39.278c-10.833 10.833-10.833 28.444 0 39.278m150.39 0l39.277-39.278c10.833-10.834 10.833-28.445 0-39.278-10.833-10.833-28.445-10.833-39.278 0l-39.278 39.278c-10.833 10.833-10.833 28.444 0 39.278 10.834 10.833 28.445 10.833 39.278 0m111.111 0l39.278-39.278c10.833-10.834 10.833-28.445 0-39.278-10.833-10.833-28.444-10.833-39.278 0l-39.278 39.278c-10.833 10.833-10.833 28.444 0 39.278 10.834 10.833 28.445 10.833 39.278 0",
  fillRule: "evenodd"
}));

const SvgDebitPay = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgDebitPay"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgDebitPay;
exports.default = _default;