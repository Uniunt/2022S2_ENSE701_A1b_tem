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
  d: "M222.222 111.111h444.445c30.682 0 55.555 24.873 55.555 55.556v666.666c0 30.683-24.873 55.556-55.555 55.556H222.222c-30.682 0-55.555-24.873-55.555-55.556V166.667c0-30.683 24.873-55.556 55.555-55.556zm583.334 0c15.34 0 27.777 12.437 27.777 27.778V861.11c0 15.341-12.436 27.778-27.777 27.778-15.342 0-27.778-12.437-27.778-27.778V138.89c0-15.341 12.436-27.778 27.778-27.778zm-500 166.667c-15.342 0-27.778 12.436-27.778 27.778 0 15.34 12.436 27.777 27.778 27.777h277.777c15.342 0 27.778-12.436 27.778-27.777 0-15.342-12.436-27.778-27.778-27.778H305.556zm0 111.11c-15.342 0-27.778 12.437-27.778 27.779 0 15.34 12.436 27.777 27.778 27.777h277.777c15.342 0 27.778-12.436 27.778-27.777 0-15.342-12.436-27.778-27.778-27.778H305.556zm0 111.112c-15.342 0-27.778 12.437-27.778 27.778s12.436 27.778 27.778 27.778h166.666c15.341 0 27.778-12.437 27.778-27.778S487.563 500 472.222 500H305.556z",
  fillRule: "evenodd"
}));

const SvgColumn = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgColumn"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgColumn;
exports.default = _default;