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
  d: "M513.511 136.339c18.5-11.111 42.056 2.222 42.056 23.833V839.84c0 21.611-23.556 34.944-42.056 23.833L290.956 730.117c-8.612-5.167-18.5-7.89-28.612-7.89H111.122c-30.722 0-55.555-24.833-55.555-55.555V333.34c0-30.722 24.833-55.556 55.555-55.556h151.222c10.112 0 20-2.722 28.612-7.944zm253.361 29.733c10.834-10.833 28.445-10.833 39.278 0 89.167 89.222 138.278 207.834 138.278 333.945 0 126.055-49.111 244.666-138.278 333.889a27.725 27.725 0 01-19.667 8.166c-7.055 0-14.166-2.722-19.61-8.166-10.834-10.834-10.834-28.39 0-39.278 78.666-78.722 122-183.334 122-294.611 0-111.278-43.334-215.945-122-294.667-10.834-10.833-10.834-28.444 0-39.278zm-117.889 117.89c10.834-10.834 28.445-10.834 39.278 0 57.722 57.666 89.5 134.388 89.5 216.055 0 81.61-31.778 158.333-89.5 216a27.725 27.725 0 01-19.667 8.166c-7.055 0-14.166-2.722-19.61-8.166-10.834-10.834-10.834-28.39 0-39.278 47.277-47.167 73.222-109.945 73.222-176.722 0-66.778-25.945-129.556-73.223-176.778-10.833-10.833-10.833-28.445 0-39.278z",
  fillRule: "evenodd"
}));

const SvgVolume = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgVolume"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgVolume;
exports.default = _default;