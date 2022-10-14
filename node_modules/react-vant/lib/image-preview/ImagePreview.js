"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _jsxRuntime() {
  const data = require("react/jsx-runtime");

  _jsxRuntime = function () {
    return data;
  };

  return data;
}

function _react() {
  const data = _interopRequireWildcard(require("react"));

  _react = function () {
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

var _popup = _interopRequireDefault(require("../popup"));

var _slides = require("./slides");

var _SwiperPagIndicator = _interopRequireDefault(require("../swiper/SwiperPagIndicator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const [bem] = (0, _utils.createNamespace)('image-preview');

const ImagePreview = _react().default.forwardRef((props, ref) => {
  const slidesRef = (0, _react().useRef)(null);
  const [active, setActive] = (0, _react().useState)(() => props.startPosition);

  const currentImage = _react().default.useMemo(() => props.images[active], [active, props.images]);

  const onSwipeChange = idx => {
    var _a;

    if (active !== idx) {
      setActive(idx);
      (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, idx);
    }
  };

  const onClose = () => {
    var _a;

    (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props, {
      url: currentImage,
      index: active
    });
  };

  const renderContent = () => (0, _jsxRuntime().jsx)("div", Object.assign({
    className: (0, _clsx().default)(bem('content'))
  }, {
    children: props.images && (0, _jsxRuntime().jsx)(_slides.Slides, {
      ref: slidesRef,
      defaultIndex: props.startPosition,
      onIndexChange: onSwipeChange,
      images: props.images,
      onTap: () => {
        if (!props.closeOnlyClickCloseIcon) {
          onClose();
        }
      },
      maxZoom: props.maxZoom
    })
  }));

  const renderClose = () => {
    if (props.closeable) {
      return _react().default.cloneElement(props.closeIcon, {
        className: (0, _clsx().default)(bem('close-icon', props.closeIconPosition)),
        onClick: onClose
      });
    }

    return null;
  };

  const renderIndex = () => {
    if (props.showIndex) {
      return (0, _jsxRuntime().jsx)("div", Object.assign({
        className: (0, _clsx().default)(bem('index'))
      }, {
        children: props.indexRender ? props.indexRender({
          index: active,
          len: props.images.length
        }) : `${active + 1} / ${props.images.length}`
      }));
    }

    return null;
  };

  const renderIndicator = () => {
    if (props.showIndicators) {
      return (0, _jsxRuntime().jsx)("div", Object.assign({
        className: (0, _clsx().default)(bem('indicator'))
      }, {
        children: (0, _jsxRuntime().jsx)(_SwiperPagIndicator.default, {
          total: props.images.length,
          current: active
        })
      }));
    }

    return null;
  };

  _react().default.useImperativeHandle(ref, () => ({
    swipeTo: (index, immediate) => {
      var _a;

      setActive(index);
      (_a = slidesRef.current) === null || _a === void 0 ? void 0 : _a.swipeTo(index, immediate);
    }
  }));

  return (0, _jsxRuntime().jsxs)(_popup.default, Object.assign({
    className: (0, _clsx().default)(bem(), props.className),
    overlayClass: (0, _clsx().default)(bem('overlay'))
  }, (0, _utils.pick)(props, ['visible', 'overlayStyle', 'closeOnPopstate', 'onClosed', 'beforeClose', 'teleport']), {
    children: [renderClose(), renderContent(), renderIndex(), renderIndicator()]
  }));
});

ImagePreview.defaultProps = {
  overlay: true,
  showIndex: true,
  images: [],
  swipeDuration: 300,
  startPosition: 0,
  closeIconPosition: 'top-right',
  showIndicators: false,
  closeOnlyClickCloseIcon: false,
  maxZoom: 3
};
var _default = ImagePreview;
exports.default = _default;