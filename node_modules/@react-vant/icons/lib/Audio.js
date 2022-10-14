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
  d: "M111.111 500c0-214.777 174.112-388.889 388.889-388.889 214.777 0 388.889 174.112 388.889 388.889v277.778c0 30.682-24.873 55.555-55.556 55.555h-55.555c-30.683 0-55.556-24.873-55.556-55.555V555.556c0-30.683 24.873-55.556 55.556-55.556h55.555c0-184.095-149.238-333.333-333.333-333.333-184.095 0-333.333 149.238-333.333 333.333h55.555c30.683 0 55.556 24.873 55.556 55.556v222.222c0 30.682-24.873 55.555-55.556 55.555h-55.555c-30.683 0-55.556-24.873-55.556-55.555V500z",
  fillRule: "evenodd"
}));

const SvgAudio = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgAudio"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgAudio;
exports.default = _default;