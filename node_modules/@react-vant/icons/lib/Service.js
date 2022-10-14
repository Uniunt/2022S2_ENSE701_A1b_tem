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
  d: "M222.222 444.444c30.683 0 55.556 24.874 55.556 55.556v222.222c0 30.683-24.873 55.556-55.556 55.556h-55.555c-30.683 0-55.556-24.873-55.556-55.556V444.444h111.111zm666.667 0v277.778c0 30.683-24.873 55.556-55.556 55.556h-55.555c-30.683 0-55.556-24.873-55.556-55.556V500c0-30.682 24.873-55.556 55.556-55.556h111.11zM861.11 638.89c15.342 0 27.778 12.437 27.778 27.778v102.015c-.822 113.295-54.114 176.047-153.867 176.047H528.01c-15.34 0-27.777-12.436-27.777-27.778 0-15.34 12.436-27.777 27.777-27.777h207.013c66.931 0 97.698-36.229 98.31-120.693l.001-101.815c0-15.34 12.437-27.777 27.778-27.777zM500 55.556c214.777 0 388.889 174.111 388.889 388.888h-55.556c0-184.094-149.238-333.333-333.333-333.333-184.095 0-333.333 149.239-333.333 333.333H111.11c0-214.777 174.112-388.888 388.889-388.888z",
  fillRule: "nonzero"
}));

const SvgService = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgService"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgService;
exports.default = _default;