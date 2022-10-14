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
  d: "M497.455 222.233l-330.788 607.96h661.576l-330.788-607.96zm48.8-26.552l330.788 607.96c14.664 26.952 4.703 60.688-22.248 75.352a55.556 55.556 0 01-26.552 6.755H166.667c-30.683 0-55.556-24.873-55.556-55.555a55.556 55.556 0 016.756-26.552l330.788-607.96c14.664-26.951 48.4-36.912 75.351-22.248a55.556 55.556 0 0122.249 22.248z",
  fillRule: "nonzero"
}), React.createElement("path", {
  d: "M472.484 400.03c-.091-4.104 2.838-7.43 7.14-7.43h41.266c4.035 0 7.235 3.12 7.14 7.43l-5.877 262.918c-.092 4.103-3.577 7.43-7.343 7.43h-29.107c-3.963 0-7.246-3.12-7.342-7.43l-5.877-262.918zm27.773 353.68c-15.342 0-27.778-12.436-27.778-27.777 0-15.341 12.436-27.778 27.778-27.778 15.34 0 27.777 12.437 27.777 27.778s-12.436 27.778-27.777 27.778z"
})));

const SvgWarnO = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgWarnO"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgWarnO;
exports.default = _default;