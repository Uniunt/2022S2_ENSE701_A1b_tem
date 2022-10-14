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
  d: "M500 56.056c91.91 0 175.12 36.431 235.353 95.335 60.228 58.9 97.48 140.268 97.48 230.146 0 164.16-97.82 346.382-293.371 546.692-.328.336-.66.668-.998.996-10.895 10.603-25.056 15.786-39.144 15.595-14.089-.192-28.104-5.758-38.707-16.653-195.6-200.987-293.446-383.189-293.446-546.63 0-89.878 37.252-171.247 97.48-230.146C324.88 92.487 408.09 56.056 500 56.056zm0 221.222c-30.82 0-58.723 12.492-78.921 32.69-20.198 20.198-32.69 48.1-32.69 78.92 0 30.821 12.492 58.724 32.69 78.922 20.198 20.198 48.1 32.69 78.921 32.69 30.82 0 58.723-12.492 78.921-32.69 20.198-20.198 32.69-48.1 32.69-78.921 0-30.82-12.492-58.723-32.69-78.921-20.198-20.198-48.1-32.69-78.921-32.69z",
  stroke: "#323233",
  fillRule: "evenodd"
}));

const SvgLocation = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgLocation"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgLocation;
exports.default = _default;