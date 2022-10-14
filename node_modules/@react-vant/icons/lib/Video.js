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
  d: "M888.889 277.778H111.11V166.667c0-30.683 24.873-55.556 55.556-55.556h666.666c30.683 0 55.556 24.873 55.556 55.556v111.11zm0 55.555v500c0 30.683-24.873 55.556-55.556 55.556H166.667c-30.683 0-55.556-24.873-55.556-55.556v-500H888.89zM277.778 166.667l55.9 111.11h55.555l-55.9-111.11h-55.555zm166.666 0l55.9 111.11H555.9L500 166.668h-55.556zm166.667 0l55.9 111.11h55.555l-55.9-111.11h-55.555zm5.865 441.512a27.778 27.778 0 0012.423-12.423c6.86-13.722 1.299-30.407-12.423-37.268L429.09 464.545a27.778 27.778 0 00-12.422-2.933c-15.342 0-27.778 12.437-27.778 27.778v187.887c0 4.312 1.004 8.565 2.932 12.422 6.861 13.722 23.547 19.284 37.268 12.423l187.887-93.943z",
  fillRule: "nonzero"
}));

const SvgVideo = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgVideo"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgVideo;
exports.default = _default;