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
  d: "M833.333 777.778V611.11H166.667v166.667H111.11c-30.682 0-55.555-24.873-55.555-55.556V388.89c0-30.683 24.873-55.556 55.555-55.556H888.89c30.682 0 55.555 24.873 55.555 55.556v333.333c0 30.683-24.873 55.556-55.555 55.556h-55.556zM222.223 111.11h555.555c30.682 0 55.555 24.873 55.555 55.556v111.11H166.667v-111.11c0-30.683 24.873-55.556 55.555-55.556zM819.443 500c23.012 0 41.667-18.655 41.667-41.667s-18.655-41.666-41.667-41.666c-23.011 0-41.666 18.654-41.666 41.666 0 23.012 18.655 41.667 41.666 41.667zM222.222 666.667h555.556v166.666c0 30.683-24.873 55.556-55.556 55.556H277.778c-30.683 0-55.556-24.873-55.556-55.556V666.667z",
  fillRule: "evenodd"
}));

const SvgPrinter = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgPrinter"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgPrinter;
exports.default = _default;