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
  d: "M500 111.111c245.46 0 444.444 174.112 444.444 388.889 0 214.777-198.984 388.889-444.444 388.889-90.56 0-174.793-23.7-245.042-64.397l-142.484 46.015a27.778 27.778 0 01-19.069-.73c-14.195-5.816-20.988-22.04-15.172-36.235l49.555-120.943C82.112 651.497 55.556 578.462 55.556 500c0-214.777 198.984-388.889 444.444-388.889zm0 333.333c-30.682 0-55.556 24.874-55.556 55.556s24.874 55.556 55.556 55.556 55.556-24.874 55.556-55.556-24.874-55.556-55.556-55.556zm-222.222 0c-30.683 0-55.556 24.874-55.556 55.556s24.873 55.556 55.556 55.556c30.682 0 55.555-24.874 55.555-55.556s-24.873-55.556-55.555-55.556zm444.444 0c-30.682 0-55.555 24.874-55.555 55.556s24.873 55.556 55.555 55.556c30.683 0 55.556-24.874 55.556-55.556s-24.873-55.556-55.556-55.556z",
  fillRule: "nonzero"
}));

const SvgChat = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgChat"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgChat;
exports.default = _default;