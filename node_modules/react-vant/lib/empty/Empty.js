"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _react() {
  const data = _interopRequireWildcard(require("react"));

  _react = function () {
    return data;
  };

  return data;
}

function _jsxRuntime() {
  const data = require("react/jsx-runtime");

  _jsxRuntime = function () {
    return data;
  };

  return data;
}

function _clsx() {
  const data = _interopRequireDefault(require("clsx"));

  _clsx = function () {
    return data;
  };

  return data;
}

var _utils = require("../utils");

var _Network = require("./Network");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const PRESET_IMAGES = ['error', 'search', 'default'];
const [bem] = (0, _utils.createNamespace)('empty');

const Empty = props => {
  const renderImage = () => {
    let {
      image
    } = props;

    if ((0, _react().isValidElement)(image)) {
      return image;
    }

    if (image === 'network') {
      return _Network.Network;
    }

    if (PRESET_IMAGES.includes(image)) {
      image = `https://img.yzcdn.cn/vant/empty-image-${image}.png`;
    }

    return (0, _jsxRuntime().jsx)("img", {
      src: image,
      alt: ''
    });
  };

  const renderDescription = () => {
    if (props.description) {
      return (0, _jsxRuntime().jsx)("div", Object.assign({
        className: (0, _clsx().default)(bem('description'))
      }, {
        children: props.description
      }));
    }

    return null;
  };

  const renderBottom = () => {
    if (props.children) {
      return (0, _jsxRuntime().jsx)("div", Object.assign({
        className: (0, _clsx().default)(bem('bottom'))
      }, {
        children: props.children
      }));
    }

    return null;
  };

  return (0, _jsxRuntime().jsxs)("div", Object.assign({
    className: (0, _clsx().default)(props.className, bem()),
    style: props.style
  }, {
    children: [(0, _jsxRuntime().jsx)("div", Object.assign({
      className: (0, _clsx().default)(bem('image')),
      style: (0, _utils.getSizeStyle)(props.imageSize)
    }, {
      children: renderImage()
    })), renderDescription(), renderBottom()]
  }));
};

Empty.defaultProps = {
  image: 'default'
};
var _default = Empty;
exports.default = _default;