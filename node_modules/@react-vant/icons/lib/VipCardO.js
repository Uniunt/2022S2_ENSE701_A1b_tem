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
  d: "M888.889 166.667c30.667 0 55.555 24.889 55.555 55.555v555.556c0 30.722-24.888 55.555-55.555 55.555H111.11c-30.667 0-55.555-24.833-55.555-55.555V222.222c0-30.666 24.888-55.555 55.555-55.555zm0 166.666H111.11v444.445H888.89V333.333zm0-111.11H111.11v55.555H888.89v-55.556zM239.833 428.666h42.334l65.333 194h1l65.333-194h42.334l-84.667 238h-47l-84.667-238zm241.334 0h39v238h-39v-238zm85.666 0H665.5c57.333 0 86.333 24.333 86.333 73 0 49-29 73.666-87 73.666h-59v91.334h-39v-238zm39 33.333v80H662.5c17.333 0 30-3.333 38-9.333 8-6.334 12-16.667 12-31 0-14.334-4.333-24.334-12.333-30.334C692.167 465 679.5 462 662.5 462h-56.667z",
  fillRule: "evenodd"
}));

const SvgVipCardO = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgVipCardO"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgVipCardO;
exports.default = _default;