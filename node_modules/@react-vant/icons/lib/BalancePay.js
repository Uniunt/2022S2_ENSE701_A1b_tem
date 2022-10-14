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
  d: "M752.278 111.111c12.278 0 23.5 8.222 26.778 20.611l37.5 139.834h22.555c27.5 0 49.778 22.277 49.778 49.777V832.89c0 27.5-22.278 49.778-49.778 49.778H160.89c-27.5 0-49.778-22.278-49.778-49.778V321.333c0-24.889 18.556-44.555 42.389-48.333l153.611-153.611c4.111-4.111 9.389-6.111 14.778-6.111 5.333 0 10.611 2 14.722 6.11.167.223.111.5.222.668.223.166.556.11.723.277l79.61 79.611 327.89-87.888c2.388-.612 4.833-.945 7.222-.945zm81.055 216H166.667v500h666.666v-500zM732.667 172.944l-368.111 98.612h394.5l-26.39-98.612zm-410.778-9.333l-84.611 84.5 133.389-35.667-48.778-48.833zm236.055 277.811a27.9 27.9 0 00-19.666 8.111L500 487.867l-38.278-38.334a27.9 27.9 0 00-19.666-8.11c-7.112 0-14.223 2.721-19.612 8.11-10.888 10.89-10.888 28.445 0 39.334l29.445 29.5h-21.333c-15.334 0-27.778 12.389-27.778 27.777 0 15.278 12.444 27.778 27.778 27.778h41.666V601.7h-41.666c-15.334 0-27.778 12.389-27.778 27.778 0 15.278 12.444 27.778 27.778 27.778h41.666v27.777c0 15.278 12.445 27.778 27.778 27.778 15.333 0 27.778-12.5 27.778-27.778v-27.777h41.666c15.334 0 27.778-12.5 27.778-27.778 0-15.39-12.444-27.778-27.778-27.778h-41.666v-27.778h41.666c15.334 0 27.778-12.5 27.778-27.778 0-15.388-12.444-27.777-27.778-27.777h-21.333l29.5-29.5c10.833-10.89 10.833-28.445 0-39.334a27.9 27.9 0 00-19.667-8.11",
  fillRule: "evenodd"
}));

const SvgBalancePay = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgBalancePay"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgBalancePay;
exports.default = _default;