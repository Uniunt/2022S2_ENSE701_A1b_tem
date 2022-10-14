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
  d: "M500 888.889c214.777 0 388.889-174.112 388.889-388.889 0-214.777-174.112-388.889-388.889-388.889-214.777 0-388.889 174.112-388.889 388.889 0 214.777 174.112 388.889 388.889 388.889zm0 55.555C254.54 944.444 55.556 745.46 55.556 500S254.54 55.556 500 55.556 944.444 254.54 944.444 500 745.46 944.444 500 944.444z",
  fillRule: "nonzero"
}), React.createElement("path", {
  d: "M500.002 333.333c187.471 0 277.776 158.9 277.776 166.667 0 7.776-87.892 166.667-277.776 166.667-189.887 0-277.78-158.89-277.78-166.667 0-7.768 90.305-166.667 277.78-166.667zm0 55.556c-67.851 0-125.167 24.714-172.386 66.478-16.227 14.352-30.182 29.878-41.188 44.895 10.763 14.894 24.442 30.27 40.418 44.494 46.805 41.67 104.243 66.355 173.156 66.355 68.912 0 126.349-24.685 173.152-66.355 15.977-14.224 29.655-29.6 40.418-44.494-11.006-15.017-24.96-30.543-41.187-44.895-47.219-41.764-104.533-66.478-172.383-66.478zM500 444.444c30.682 0 55.556 24.874 55.556 55.556S530.682 555.556 500 555.556 444.444 530.682 444.444 500s24.874-55.556 55.556-55.556z"
})));

const SvgBrowsingHistoryO = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgBrowsingHistoryO"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgBrowsingHistoryO;
exports.default = _default;