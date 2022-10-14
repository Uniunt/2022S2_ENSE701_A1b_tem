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
  d: "M500.445 56c245.46 0 444.445 198.985 444.445 444.445 0 245.46-198.985 444.445-444.445 444.445C254.985 944.89 56 745.905 56 500.445 56 254.985 254.985 56 500.445 56zm266.059 282.106c-5.706-5.318-15.835-5.814-22.457-1.049l-.308.227-294.172 222.751c-5.386 4.079-15.236 4.61-21.148 1.159l-.313-.189-111.327-69.351c-6.867-4.278-16.54-2.83-21.866 3.144l-.24.275-12.861 15.134c-5.423 6.38-4.52 15.259 1.484 21.081l.265.252 137.63 128.264c10.007 9.327 25.908 9.816 35.757.95l.306-.28 315.733-294.249c6.523-6.078 7.056-15.241 1.012-21.13l-.249-.236-7.246-6.753z"
})));

const SvgChecked = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgChecked"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgChecked;
exports.default = _default;