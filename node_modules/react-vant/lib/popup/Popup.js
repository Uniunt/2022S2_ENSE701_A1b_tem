"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sharedPopupProps = exports.default = void 0;

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

function _reactTransitionGroup() {
  const data = require("react-transition-group");

  _reactTransitionGroup = function () {
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

var _overlay = _interopRequireDefault(require("../overlay"));

var _useEventListener = _interopRequireDefault(require("../hooks/use-event-listener"));

var _utils = require("../utils");

var _interceptor = require("../utils/interceptor");

var _renderToContainer = require("../utils/dom/renderToContainer");

var _PopupContext = _interopRequireDefault(require("./PopupContext"));

var _useLockScroll = require("../hooks/use-lock-scroll");

var _hooks = require("../hooks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable no-plusplus */
const sharedPopupProps = ['round', 'zIndex', 'closeable', 'overlay', 'overlayClass', 'overlayStyle', 'destroyOnClose', 'forceRender', 'lockScroll', 'duration', 'transition', 'closeOnClickOverlay', 'closeOnPopstate', 'onClickOverlay', 'safeAreaInsetBottom', 'onOpen', 'onClose', 'onOpened', 'onClosed', 'beforeClose'];
exports.sharedPopupProps = sharedPopupProps;
let globalZIndex = 2000;
const [bem] = (0, _utils.createNamespace)('popup');
const Popup = (0, _react().forwardRef)((props, ref) => {
  var _a;

  const {
    round,
    closeable,
    title,
    description,
    children,
    duration,
    closeIcon,
    position
  } = props;
  const opened = (0, _react().useRef)(false);
  const zIndex = (0, _react().useRef)((_a = props.zIndex) !== null && _a !== void 0 ? _a : globalZIndex);
  const popupRef = (0, _react().useRef)();
  const [visible, setVisible] = (0, _react().useState)(props.visible);
  const [animatedVisible, setAnimatedVisible] = (0, _react().useState)(visible);
  const style = (0, _react().useMemo)(() => {
    const initStyle = Object.assign({
      zIndex: zIndex.current
    }, props.style);

    if ((0, _utils.isDef)(props.duration)) {
      const key = props.position === 'center' ? 'animationDuration' : 'transitionDuration';
      initStyle[key] = `${props.duration}ms`;
    }

    return initStyle; // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [zIndex.current, props.position, props.style, props.duration]);

  const open = () => {
    var _a;

    if (props.zIndex !== undefined) {
      zIndex.current = +props.zIndex;
    } else {
      zIndex.current = globalZIndex++;
    }

    opened.current = true;
    (_a = props.onOpen) === null || _a === void 0 ? void 0 : _a.call(props);
  };

  const close = () => {
    (0, _interceptor.callInterceptor)({
      interceptor: props.beforeClose,
      args: ['close'],
      done: () => {
        var _a;

        opened.current = false;
        (_a = props.onClose) === null || _a === void 0 ? void 0 : _a.call(props);
      }
    });
  };

  const onClickOverlay = event => {
    var _a;

    (_a = props.onClickOverlay) === null || _a === void 0 ? void 0 : _a.call(props, event);

    if (props.closeOnClickOverlay) {
      close();
    }
  };

  const renderOverlay = () => {
    if (props.overlay) {
      return (0, _jsxRuntime().jsx)(_overlay.default, {
        visible: visible,
        className: props.overlayClass,
        customStyle: props.overlayStyle,
        zIndex: zIndex.current,
        duration: duration,
        onClick: onClickOverlay
      });
    }

    return null;
  };

  const onClickCloseIcon = e => {
    if (props.onClickCloseIcon) {
      props.onClickCloseIcon(e);
    }

    close();
  };

  const renderCloseIcon = () => {
    if (closeable) {
      const {
        closeIconPosition
      } = props;

      if (closeIcon) {
        return (0, _jsxRuntime().jsx)("div", Object.assign({
          className: (0, _clsx().default)(bem('close-icon', closeIconPosition)),
          onClick: onClickCloseIcon
        }, {
          children: closeIcon
        }));
      }

      return null;
    }

    return null;
  };

  const renderTitle = () => {
    if (title) {
      return (0, _jsxRuntime().jsx)("div", Object.assign({
        className: (0, _clsx().default)(bem('title'))
      }, {
        children: title
      }));
    }

    return null;
  };

  const renderDescription = () => {
    if (description) {
      return (0, _jsxRuntime().jsx)("div", Object.assign({
        className: (0, _clsx().default)(bem('description'))
      }, {
        children: description
      }));
    }

    return null;
  };

  const renderPopup = () => {
    const {
      safeAreaInsetBottom
    } = props;
    return (0, _utils.withStopPropagation)(props.stopPropagation, (0, _jsxRuntime().jsxs)("div", Object.assign({
      ref: popupRef,
      style: Object.assign(Object.assign({}, style), {
        display: !visible && !animatedVisible ? 'none' : undefined
      }),
      className: (0, _clsx().default)(bem({
        round,
        [position]: position
      }), {
        'rv-safe-area-bottom': safeAreaInsetBottom
      }, props.className),
      onClick: props.onClick
    }, {
      children: [renderTitle(), renderDescription(), children, renderCloseIcon()]
    })));
  };

  const renderTransition = () => {
    const {
      transition,
      destroyOnClose,
      forceRender
    } = props;
    const name = position === 'center' ? 'rv-fade' : `rv-popup-slide-${position}`;
    return (0, _jsxRuntime().jsx)(_reactTransitionGroup().CSSTransition, Object.assign({
      in: visible,

      /**
       * https://github.com/reactjs/react-transition-group/pull/559
       */
      nodeRef: popupRef,
      timeout: duration,
      classNames: transition || name,
      mountOnEnter: !forceRender,
      unmountOnExit: destroyOnClose,
      onEnter: open,
      onEntered: props.onOpened,
      onExited: () => {
        var _a;

        setAnimatedVisible(false);
        (_a = props.onClosed) === null || _a === void 0 ? void 0 : _a.call(props);
      }
    }, {
      children: renderPopup()
    }));
  };

  (0, _useEventListener.default)('popstate', () => {
    if (props.closeOnPopstate) {
      close();
    }
  });
  (0, _hooks.useIsomorphicLayoutEffect)(() => {
    if (visible) {
      setAnimatedVisible(true);
    }
  }, [visible]);
  (0, _hooks.useIsomorphicLayoutEffect)(() => {
    setVisible(props.visible);
  }, [props.visible]);
  (0, _useLockScroll.useLockScroll)(popupRef, visible && props.lockScroll);
  (0, _react().useImperativeHandle)(ref, () => ({
    popupRef
  }));
  return (0, _renderToContainer.renderToContainer)(props.teleport, (0, _jsxRuntime().jsxs)(_PopupContext.default.Provider, Object.assign({
    value: {
      visible
    }
  }, {
    children: [renderOverlay(), renderTransition()]
  })));
});
Popup.defaultProps = {
  duration: 300,
  overlay: true,
  lockScroll: true,
  position: 'center',
  closeIcon: (0, _jsxRuntime().jsx)(_icons().Cross, {}),
  closeIconPosition: 'top-right',
  closeOnClickOverlay: true,
  stopPropagation: ['click'],
  teleport: () => document.body
};
var _default = Popup;
exports.default = _default;