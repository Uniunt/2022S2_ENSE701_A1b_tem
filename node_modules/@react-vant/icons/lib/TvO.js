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
  d: "M166.667 111.111h666.666c30.723 0 55.556 24.833 55.556 55.556v500c0 30.722-24.833 55.555-55.556 55.555H527.778v111.111h166.666c15.342 0 27.778 12.437 27.778 27.778s-12.436 27.778-27.778 27.778H305.556c-15.342 0-27.778-12.437-27.778-27.778s12.436-27.778 27.778-27.778h166.666v-111.11H166.667c-30.723 0-55.556-24.834-55.556-55.556v-500c0-30.723 24.833-55.556 55.556-55.556zm0 555.556h666.666v-500H166.667v500zm450.31-242.323l-187.888 93.944c-13.721 6.86-30.407 1.299-37.268-12.423a27.778 27.778 0 01-2.932-12.422V305.556c0-15.342 12.436-27.778 27.778-27.778 4.312 0 8.565 1.004 12.422 2.932l187.887 93.944c13.722 6.86 19.284 23.546 12.423 37.268a27.778 27.778 0 01-12.423 12.422z",
  fillRule: "evenodd"
}));

const SvgTvO = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgTvO"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgTvO;
exports.default = _default;