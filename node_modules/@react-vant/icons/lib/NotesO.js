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
  d: "M833.333 833.333v-611.11h-111.11V250c0 15.341-12.437 27.778-27.779 27.778-15.34 0-27.777-12.437-27.777-27.778v-27.778H333.333V250c0 15.341-12.436 27.778-27.777 27.778-15.342 0-27.778-12.437-27.778-27.778v-27.778H166.667v611.111h666.666zm-111.11-666.666h111.11c30.723 0 55.556 24.833 55.556 55.555v611.111c0 30.723-24.833 55.556-55.556 55.556H166.667c-30.723 0-55.556-24.833-55.556-55.556v-611.11c0-30.723 24.833-55.556 55.556-55.556h111.11v-27.778c0-15.341 12.437-27.778 27.779-27.778 15.34 0 27.777 12.437 27.777 27.778v27.778h333.334v-27.778c0-15.341 12.436-27.778 27.777-27.778 15.342 0 27.778 12.437 27.778 27.778v27.778zM305.555 611.11c-15.342 0-27.778-12.436-27.778-27.778 0-15.34 12.436-27.777 27.778-27.777h388.888c15.342 0 27.778 12.436 27.778 27.777 0 15.342-12.436 27.778-27.778 27.778H305.556zm0-111.111c-15.342 0-27.778-12.437-27.778-27.778s12.436-27.778 27.778-27.778h388.888c15.342 0 27.778 12.437 27.778 27.778S709.786 500 694.444 500H305.556zm0 222.222c-15.342 0-27.778-12.436-27.778-27.778 0-15.34 12.436-27.777 27.778-27.777h166.666c15.341 0 27.778 12.436 27.778 27.777 0 15.342-12.437 27.778-27.778 27.778H305.556z",
  fillRule: "evenodd"
}));

const SvgNotesO = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgNotesO"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgNotesO;
exports.default = _default;