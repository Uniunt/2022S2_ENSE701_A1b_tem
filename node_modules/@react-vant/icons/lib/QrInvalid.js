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
  d: "M708.333 861.111c-23.012 0-41.666-18.655-41.666-41.667 0-23.011 18.654-41.666 41.666-41.666 23.012 0 41.667 18.655 41.667 41.666 0 23.012-18.655 41.667-41.667 41.667zm125-194.444h55.556l-55.556 55.555v-42.075l6.74 2.792-6.74-6.74v-9.532zm-277.777-32.544l55.555 55.556v199.21c-30.682 0-55.555-24.873-55.555-55.556v-199.21zM750 527.778v138.889h83.333v-138.89c30.683 0 55.556 24.874 55.556 55.556v138.89h-88.1L694.445 615.876v-32.544h-32.543l-55.37-55.37a56.305 56.305 0 014.58-.185H750zm-638.889-338.1l55.556 55.556v171.433h171.432l55.556 55.555H166.667c-30.683 0-55.556-24.873-55.556-55.555V189.679zm305.556-78.567c30.682 0 55.555 24.873 55.555 55.556v226.988l-55.555-55.556V166.667H245.234L189.68 111.11h226.988zm166.666 55.556v250h250v-250h-250zm0-55.556h250c30.683 0 55.556 24.873 55.556 55.556v250c0 30.682-24.873 55.555-55.556 55.555h-250c-30.682 0-55.555-24.873-55.555-55.555v-250c0-30.683 24.873-55.556 55.555-55.556zM166.667 583.333v250h250v-250h-250zm0-55.555h250c30.682 0 55.555 24.873 55.555 55.555v250c0 30.683-24.873 55.556-55.555 55.556h-250c-30.683 0-55.556-24.873-55.556-55.556v-250c0-30.682 24.873-55.555 55.556-55.555z",
  fillRule: "nonzero"
}));

const SvgQrInvalid = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgQrInvalid"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgQrInvalid;
exports.default = _default;