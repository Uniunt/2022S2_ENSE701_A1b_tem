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
  d: "M638.633 333.333H360.856c-15.334 0-27.778-12.444-27.778-27.777 0-15.334 12.444-27.778 27.778-27.778h277.777c15.334 0 27.778 12.444 27.778 27.778 0 15.333-12.444 27.777-27.778 27.777m0 166.667H360.856c-15.334 0-27.778-12.444-27.778-27.778 0-15.333 12.444-27.778 27.778-27.778h277.777c15.334 0 27.778 12.445 27.778 27.778 0 15.334-12.444 27.778-27.778 27.778m138.89-444.444H221.966c-30.723 0-55.556 24.833-55.556 55.555v805.5c0 20.667 21.778 34.111 40.222 24.833l268.278-134.11c15.611-7.778 34.056-7.778 49.667 0l268.278 134.11c18.444 9.278 40.222-4.166 40.222-24.833v-805.5c0-30.722-24.834-55.555-55.556-55.555",
  fillRule: "evenodd"
}));

const SvgLabel = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgLabel"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgLabel;
exports.default = _default;