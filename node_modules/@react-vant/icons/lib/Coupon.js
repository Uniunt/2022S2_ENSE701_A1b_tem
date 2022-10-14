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
  d: "M55.556 388.889V222.222c0-30.682 24.873-55.555 55.555-55.555H888.89c30.682 0 55.555 24.873 55.555 55.555V388.89c-61.365 0-111.11 49.746-111.11 111.111s49.745 111.111 111.11 111.111v166.667c0 30.682-24.873 55.555-55.555 55.555H111.11c-30.682 0-55.555-24.873-55.555-55.555V611.11c61.365 0 111.11-49.746 111.11-111.111s-49.745-111.111-111.11-111.111zm305.555 0c-15.341 0-27.778 12.436-27.778 27.778 0 15.34 12.437 27.777 27.778 27.777H638.89c15.341 0 27.778-12.436 27.778-27.777 0-15.342-12.437-27.778-27.778-27.778H361.11zm0 166.667c-15.341 0-27.778 12.436-27.778 27.777 0 15.342 12.437 27.778 27.778 27.778H638.89c15.341 0 27.778-12.436 27.778-27.778 0-15.34-12.437-27.777-27.778-27.777H361.11z",
  fillRule: "nonzero"
}));

const SvgCoupon = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgCoupon"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgCoupon;
exports.default = _default;