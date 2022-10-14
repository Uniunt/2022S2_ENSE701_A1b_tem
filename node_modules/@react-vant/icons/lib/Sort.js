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
  d: "M444.002 160.354l.332 6.313v666.669c0 30.682-24.873 55.555-55.555 55.555-28.491 0-51.973-21.446-55.182-49.076l-.374-6.48V300.78L205.84 428.174c-20.027 20.027-51.54 21.567-73.334 4.621l-5.234-4.621c-20.027-20.027-21.568-51.54-4.622-73.334l4.622-5.234 222.223-222.223c33.476-33.476 89.683-12.253 94.507 32.971zm167-49.354c28.49 0 51.972 21.447 55.181 49.077l.374 6.479v532.557L793.94 571.718c20.027-20.027 51.54-21.568 73.334-4.622l5.234 4.622c20.027 20.027 21.568 51.54 4.622 73.333l-4.622 5.234-222.223 222.223c-33.476 33.477-89.683 12.254-94.507-32.97l-.332-6.314V166.556C555.446 135.873 580.319 111 611 111z",
  fillRule: "nonzero"
}));

const SvgSort = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgSort"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgSort;
exports.default = _default;