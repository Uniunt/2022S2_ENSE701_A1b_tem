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
  d: "M166 140.971C166 110.06 191.32 85 221.693 85h555.28c30.76 0 55.694 24.94 55.694 55.971v721.391c0 30.912-25.32 55.971-55.693 55.971H221.693c-30.758 0-55.693-24.94-55.693-55.971v-721.39zm138.889 55.14c-15.341 0-27.778 12.437-27.778 27.778v277.778c0 15.34 12.437 27.777 27.778 27.777h388.889c15.341 0 27.778-12.436 27.778-27.777V223.889c0-15.341-12.437-27.778-27.778-27.778h-388.89zm0 444.445c-15.341 0-27.778 12.436-27.778 27.777 0 15.342 12.437 27.778 27.778 27.778h388.889c15.341 0 27.778-12.436 27.778-27.778 0-15.34-12.437-27.777-27.778-27.777h-388.89zm0 111.11c-15.341 0-27.778 12.437-27.778 27.778 0 15.342 12.437 27.778 27.778 27.778H527.11c15.341 0 27.778-12.436 27.778-27.778 0-15.34-12.437-27.777-27.778-27.777H304.89z",
  fillRule: "evenodd"
}));

const SvgGraphic = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgGraphic"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgGraphic;
exports.default = _default;