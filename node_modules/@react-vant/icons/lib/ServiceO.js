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
  d: "M500 55.556c212.63 0 385.403 170.646 388.837 382.457l.052 6.431v277.778c0 30.683-24.873 55.556-55.556 55.556h-55.555c-30.683 0-55.556-24.873-55.556-55.556V500c0-30.682 24.873-55.556 55.556-55.556h55.555c0-182.254-146.268-330.345-327.82-333.288L500 111.11l-5.512.045C314.75 114.07 169.596 259.243 166.71 438.987l-.043 5.457h55.555c30.376 0 55.058 24.379 55.548 54.637l.008.919v222.222c0 30.376-24.378 55.058-54.637 55.548l-.919.008h-110.11a1 1 0 01-1-1V444.444c0-214.777 174.11-388.888 388.888-388.888zM833.333 500h-55.555v222.222h55.555V500zm-611.11 0h-55.556v222.222h55.555V500z"
}), React.createElement("path", {
  d: "M833.333 452.274c0-15.341 12.437-27.777 27.778-27.777 15.342 0 27.778 12.436 27.778 27.778v316.407c-.822 113.295-54.114 176.047-153.867 176.047H528.01c-15.34 0-27.777-12.436-27.777-27.778 0-15.34 12.436-27.777 27.777-27.777h207.013c66.931 0 97.698-36.229 98.31-120.693l.001-316.207z"
})));

const SvgServiceO = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgServiceO"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgServiceO;
exports.default = _default;