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

function _icons() {
  const data = require("@react-vant/icons");

  _icons = function () {
    return data;
  };

  return data;
}

var _popup = _interopRequireDefault(require("../popup"));

var _loading = _interopRequireDefault(require("../loading"));

var _lockClick = require("./lock-click");

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const [bem] = (0, _utils.createNamespace)('toast');

const Toast = props => {
  let clickable = false;

  const toggleClickable = () => {
    const newValue = props.visible && props.forbidClick;

    if (clickable !== newValue) {
      clickable = newValue;
      (0, _lockClick.lockClick)(clickable);
    }

    if (!props.visible) {
      (0, _lockClick.lockClick)(false);
    }
  };

  const onClick = () => {
    if (props.closeOnClick) {
      props.onClose();
    }
  };

  (0, _react().useEffect)(() => {
    toggleClickable(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.visible, props.forbidClick]);

  const renderIcon = () => {
    const {
      icon,
      type,
      iconSize,
      loadingType
    } = props;
    const hasIcon = icon || type === 'success' || type === 'fail';

    if (hasIcon) {
      const buildInIcon = type === 'fail' ? (0, _jsxRuntime().jsx)(_icons().Cross, {}) : (0, _jsxRuntime().jsx)(_icons().Success, {});
      return _react().default.cloneElement(icon || buildInIcon, {
        className: (0, _clsx().default)(bem('icon')),
        fontSize: iconSize
      });
    }

    if (type === 'loading') {
      return (0, _jsxRuntime().jsx)(_loading.default, {
        className: (0, _clsx().default)(bem('loading')),
        type: loadingType
      });
    }

    return null;
  };

  const renderMessage = () => {
    const {
      message
    } = props;

    if ((0, _utils.isDef)(message) && message !== '') {
      return (0, _jsxRuntime().jsx)("div", Object.assign({
        className: (0, _clsx().default)(bem('info'))
      }, {
        children: message
      }));
    }

    return null;
  };

  return (0, _jsxRuntime().jsxs)(_popup.default, Object.assign({
    className: (0, _clsx().default)([bem([props.position, {
      [props.type]: !props.icon
    }]), props.className]),
    visible: props.visible,
    overlay: props.overlay,
    transition: props.transition,
    overlayClass: props.overlayClass,
    overlayStyle: props.overlayStyle,
    closeOnClickOverlay: props.closeOnClickOverlay,
    lockScroll: false,
    onClick: onClick,
    onClose: props.onClose,
    onClosed: props.onClosed,
    onOpened: props.onOpened,
    teleport: props.teleport
  }, {
    children: [renderIcon(), renderMessage()]
  }));
};

Toast.defaultProps = {
  type: 'info',
  duration: 2000,
  position: 'middle',
  transition: 'rv-fade',
  loadingType: 'circular',
  overlay: false
};
var _default = Toast;
exports.default = _default;