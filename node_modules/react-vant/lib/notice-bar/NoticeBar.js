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

var _useRect = require("../hooks/use-rect");

var _useEventListener = _interopRequireDefault(require("../hooks/use-event-listener"));

var _utils = require("../utils");

var _raf = require("../utils/raf");

var _hooks = require("../hooks");

var _PopupContext = _interopRequireDefault(require("../popup/PopupContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const [bem] = (0, _utils.createNamespace)('notice-bar');
const NoticeBar = (0, _react().forwardRef)((props, ref) => {
  const {
    text,
    color,
    background,
    wrapable,
    scrollable,
    speed,
    delay = 1
  } = props;
  const popupContext = (0, _react().useContext)(_PopupContext.default);
  const [state, setState] = (0, _hooks.useSetState)({
    show: true,
    offset: 0,
    duration: 0
  });
  const wrapRef = (0, _react().useRef)();
  const contentRef = (0, _react().useRef)();
  const wrapWidth = (0, _react().useRef)(0);
  const contentWidth = (0, _react().useRef)(0);
  const startTimer = (0, _react().useRef)(null);

  const renderLeftIcon = () => {
    if (props.leftIcon) {
      return _react().default.cloneElement(props.leftIcon, {
        className: (0, _clsx().default)(bem('left-icon'))
      });
    }

    return null;
  };

  const getRightIcon = () => {
    if (props.mode === 'closeable') {
      return (0, _jsxRuntime().jsx)(_icons().Cross, {});
    }

    if (props.mode === 'link') {
      return (0, _jsxRuntime().jsx)(_icons().Arrow, {});
    }

    return null;
  };

  const onClickRightIcon = event => {
    if (props.mode === 'closeable') {
      setState({
        show: false
      });

      if (props.onClose) {
        props.onClose(event);
      }
    }
  }; //  右侧图标


  const renderRightIcon = () => {
    if (props.rightIcon) {
      return props.rightIcon;
    }

    const finalRightIcon = props.rightIcon || getRightIcon();

    if (finalRightIcon) {
      return _react().default.cloneElement(finalRightIcon, {
        className: (0, _clsx().default)(bem('right-icon')),
        onClick: onClickRightIcon
      });
    }

    return null;
  }; //  动画结束


  const onTransitionEnd = () => {
    setState({
      offset: wrapWidth.current,
      duration: 0
    });
    (0, _raf.raf)(() => {
      // use double raf to ensure animation can start
      (0, _raf.doubleRaf)(() => {
        setState({
          offset: -contentWidth.current,
          duration: (contentWidth.current + wrapWidth.current) / speed
        });

        if (props.onReplay) {
          props.onReplay();
        }
      });
    });
  }; //  文字部分


  const renderMarquee = () => {
    const ellipsis = scrollable === false && !props.wrapable;
    const style = {
      transform: state.offset ? `translateX(${state.offset}px)` : '',
      transitionDuration: `${state.duration}s`
    };
    return (0, _jsxRuntime().jsx)("div", Object.assign({
      className: (0, _clsx().default)(bem('wrap')),
      ref: wrapRef
    }, {
      children: (0, _jsxRuntime().jsx)("div", Object.assign({
        className: (0, _clsx().default)(bem('content'), {
          'rv-ellipsis': ellipsis
        }),
        ref: contentRef,
        style: style,
        onTransitionEnd: onTransitionEnd
      }, {
        children: props.children || text
      }))
    }));
  };

  const reset = () => {
    const ms = (0, _utils.isDef)(delay) ? +delay * 1000 : 0;
    wrapWidth.current = 0;
    contentWidth.current = 0;
    setState({
      offset: 0,
      duration: 0
    });
    clearTimeout(startTimer.current);
    startTimer.current = setTimeout(() => {
      if (!wrapRef.current || !contentRef.current || scrollable === false) {
        return;
      }

      const wrapRefWidth = (0, _useRect.getRect)(wrapRef.current).width;
      const contentRefWidth = (0, _useRect.getRect)(contentRef.current).width;

      if (scrollable || contentRefWidth > wrapRefWidth) {
        (0, _raf.doubleRaf)(() => {
          wrapWidth.current = wrapRefWidth;
          contentWidth.current = contentRefWidth;
          setState({
            offset: -contentWidth.current,
            duration: contentWidth.current / speed
          });
        });
      }
    }, ms);
  }; // fix cache issues with forwards and back history in safari
  // see: https://guwii.com/cache-issues-with-forwards-and-back-history-in-safari/


  (0, _useEventListener.default)('pageshow', reset);
  (0, _react().useEffect)(() => {
    reset();
  }, [text, scrollable]);
  (0, _hooks.useUpdateEffect)(() => {
    reset();
  }, [popupContext.visible]);
  (0, _react().useImperativeHandle)(ref, () => ({
    reset
  }));
  return state.show && (0, _jsxRuntime().jsxs)("div", Object.assign({
    role: 'alert',
    className: (0, _clsx().default)(bem({
      wrapable
    }), props.className),
    style: Object.assign({
      color,
      background
    }, props.style),
    onClick: props.onClick
  }, {
    children: [renderLeftIcon(), renderMarquee(), renderRightIcon()]
  }));
});
NoticeBar.defaultProps = {
  delay: 1,
  speed: 60,
  onClick: _utils.noop,
  onClose: _utils.noop
};
var _default = NoticeBar;
exports.default = _default;