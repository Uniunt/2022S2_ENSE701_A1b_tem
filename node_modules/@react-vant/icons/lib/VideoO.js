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
  fillRule: "evenodd"
}, React.createElement("path", {
  d: "M166.667 166.667v666.666h666.666V166.667H166.667zm0-55.556h666.666c30.683 0 55.556 24.873 55.556 55.556v666.666c0 30.683-24.873 55.556-55.556 55.556H166.667c-30.683 0-55.556-24.873-55.556-55.556V166.667c0-30.683 24.873-55.556 55.556-55.556z",
  fillRule: "nonzero"
}), React.createElement("path", {
  d: "M166.667 277.778h666.666v55.555H166.667zM616.976 608.179L429.09 702.122c-13.721 6.86-30.407 1.3-37.268-12.423a27.778 27.778 0 01-2.932-12.422V489.39c0-15.341 12.436-27.778 27.778-27.778 4.312 0 8.565 1.004 12.422 2.933l187.887 93.943c13.722 6.86 19.284 23.546 12.423 37.268a27.778 27.778 0 01-12.423 12.423zm-61.42-24.846l-111.112-55.555v111.11l111.112-55.555zM277.778 166.667h55.555l55.9 111.11h-55.556zM444.444 166.667H500l55.9 111.11h-55.556zM611.111 166.667h55.556l55.9 111.11H667.01z"
})));

const SvgVideoO = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgVideoO"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgVideoO;
exports.default = _default;