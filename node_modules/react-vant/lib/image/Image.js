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

var _hooks = require("../hooks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const [bem] = (0, _utils.createNamespace)('image');

const Image = props => {
  const [status, setStatus] = (0, _hooks.useSetState)({
    loading: true,
    error: false
  });
  const imgRef = (0, _react().useRef)(null);
  const {
    fit,
    errorIcon,
    loadingIcon,
    showError,
    showLoading,
    block
  } = props;
  const style = (0, _react().useMemo)(() => {
    const internalStyle = Object.assign({}, props.style);

    if ((0, _utils.isDef)(props.width)) {
      internalStyle.width = (0, _utils.addUnit)(props.width);
    }

    if ((0, _utils.isDef)(props.height)) {
      internalStyle.height = (0, _utils.addUnit)(props.height);
    }

    if ((0, _utils.isDef)(props.radius)) {
      internalStyle.overflow = 'hidden';
      internalStyle.borderRadius = (0, _utils.addUnit)(props.radius);
    }

    return internalStyle;
  }, [props.style]);
  (0, _react().useEffect)(() => {
    const payload = {
      error: false,
      loading: true
    };

    if (imgRef.current) {
      if (imgRef.current.complete) {
        payload.loading = false;
      } else {
        payload.loading = true;
      }
    }

    setStatus(payload);
  }, [props.src]);

  const onLoad = e => {
    var _a;

    setStatus({
      loading: false
    });
    (_a = props.onLoad) === null || _a === void 0 ? void 0 : _a.call(props, e);
  };

  const onError = e => {
    var _a;

    setStatus({
      error: true,
      loading: false
    });
    (_a = props.onLoad) === null || _a === void 0 ? void 0 : _a.call(props, e);
  };

  const renderLoadingIcon = () => {
    if (loadingIcon) return _react().default.cloneElement(loadingIcon, {
      className: (0, _clsx().default)(bem('loading-icon')),
      fontSize: props.iconSize
    });
    return null;
  };

  const renderErrorIcon = () => {
    if (errorIcon) {
      return _react().default.cloneElement(errorIcon, {
        className: (0, _clsx().default)(bem('error-icon')),
        fontSize: props.iconSize
      });
    }

    return null;
  };

  const renderPlaceholder = () => {
    if (status.loading && showLoading) {
      return (0, _jsxRuntime().jsx)("div", Object.assign({
        className: (0, _clsx().default)(bem('loading')),
        onClick: props.onClick
      }, {
        children: renderLoadingIcon()
      }));
    }

    if (status.error && showError) {
      return (0, _jsxRuntime().jsx)("div", Object.assign({
        className: (0, _clsx().default)(bem('error')),
        onClick: props.onClick
      }, {
        children: renderErrorIcon()
      }));
    }

    return null;
  };

  const renderImage = () => {
    if (status.error || !props.src) {
      return null;
    }

    const attrs = {
      className: (0, _clsx().default)(bem('img')),
      style: {
        objectFit: fit
      }
    };
    return (0, _jsxRuntime().jsx)("img", Object.assign({
      ref: imgRef,
      alt: props.alt || 'img',
      src: props.src,
      onLoad: onLoad,
      onError: onError
    }, attrs));
  };

  return (0, _jsxRuntime().jsxs)("div", Object.assign({
    className: (0, _clsx().default)(props.className, bem({
      block,
      round: props.round
    })),
    style: style,
    onClick: props.onClick
  }, {
    children: [renderImage(), renderPlaceholder(), props.children]
  }));
};

var _default = Image;
exports.default = _default;