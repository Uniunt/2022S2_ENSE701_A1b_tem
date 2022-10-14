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
  d: "M227.12 203.74c12.33 42.68 7.376 89.46-15.795 129.593-23.19 40.166-61.27 67.858-104.436 78.5-6.4 28.675-9.667 58.183-9.667 88.167s3.267 59.492 9.667 88.166c43.167 10.643 81.246 38.335 104.436 78.5 23.17 40.133 28.124 86.914 15.794 129.594 43.708 40.289 95.8 70.525 152.663 88.285 30.802-32.073 73.83-51.212 120.218-51.212 46.388 0 89.416 19.139 120.218 51.212 56.864-17.76 108.955-47.996 152.663-88.285-12.33-42.68-7.377-89.46 15.794-129.593 23.19-40.166 61.27-67.858 104.436-78.5 6.4-28.675 9.667-58.183 9.667-88.167s-3.267-59.492-9.667-88.166c-43.167-10.643-81.246-38.335-104.436-78.5-23.17-40.133-28.124-86.914-15.794-129.594-43.708-40.289-95.8-70.525-152.663-88.285-30.802 32.073-73.83 51.212-120.218 51.212-46.388 0-89.416-19.139-120.218-51.212-56.864 17.76-108.955 47.996-152.663 88.285zM598.114 52.192c94.33 20.573 177.807 70.193 240.589 139.017-20.969 33.701-23.15 77.57-1.916 114.347 21.255 36.814 60.396 56.864 100.11 55.51 13.923 43.822 21.435 90.5 21.435 138.934 0 48.433-7.512 95.112-21.436 138.935-39.713-1.355-78.854 18.695-100.11 55.51-21.232 36.776-19.052 80.645 1.917 114.346-62.782 68.824-146.26 118.444-240.59 139.017-18.687-35.058-55.614-58.92-98.114-58.92-42.5 0-79.427 23.862-98.115 58.92-94.33-20.573-177.807-70.193-240.589-139.017 20.969-33.701 23.15-77.57 1.916-114.347-21.255-36.814-60.396-56.864-100.11-55.51C49.18 595.113 41.668 548.435 41.668 500c0-48.433 7.512-95.112 21.436-138.935 39.713 1.355 78.854-18.695 100.11-55.51 21.232-36.776 19.052-80.645-1.917-114.346 62.782-68.824 146.26-118.444 240.59-139.017 18.687 35.058 55.614 58.92 98.114 58.92 42.5 0 79.427-23.862 98.115-58.92zM500 333.333c-92.047 0-166.667 74.62-166.667 166.667S407.953 666.667 500 666.667 666.667 592.047 666.667 500 592.047 333.333 500 333.333zm0 55.556c61.365 0 111.111 49.746 111.111 111.111S561.365 611.111 500 611.111 388.889 561.365 388.889 500 438.635 388.889 500 388.889z",
  fillRule: "nonzero"
}));

const SvgSettingO = React.forwardRef((props, ref) => {
  return React.createElement(_IconBase.default, Object.assign({
    name: "SvgSettingO"
  }, props, {
    ref: ref
  }), React.createElement(SvgIcon, null));
});
var _default = SvgSettingO;
exports.default = _default;