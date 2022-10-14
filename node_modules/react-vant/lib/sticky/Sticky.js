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

var _useScrollParent = _interopRequireDefault(require("../hooks/use-scroll-parent"));

var _useEventListener = _interopRequireDefault(require("../hooks/use-event-listener"));

var _utils = require("../utils");

var _hooks = require("../hooks");

var _useRect = require("../hooks/use-rect");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const [bem] = (0, _utils.createNamespace)('sticky');

const Sticky = props => {
  const [state, updateState] = (0, _hooks.useSetState)({
    fixed: false,
    width: 0,
    height: 0,
    transform: 0
  });
  const root = (0, _react().useRef)(null);
  const scrollParent = (0, _useScrollParent.default)(root);
  const offset = (0, _react().useMemo)(() => (0, _utils.unitToPx)(props.position === 'top' ? props.offsetTop : props.offsetBottom), [props.position, props.offsetTop, props.offsetBottom]);
  const rootStyle = (0, _react().useMemo)(() => {
    const {
      fixed,
      height,
      width
    } = state;

    if (fixed) {
      return {
        width: `${width}px`,
        height: `${height}px`
      };
    }

    return null;
  }, [state.fixed, state.height, state.width]);
  const stickyStyle = (0, _react().useMemo)(() => {
    if (!state.fixed) {
      return null;
    }

    const style = (0, _utils.extend)((0, _utils.getZIndexStyle)(props.zIndex), {
      width: `${state.width}px`,
      height: `${state.height}px`,
      [props.position]: `${offset}px`
    });

    if (state.transform) {
      style.transform = `translate3d(0, ${state.transform}px, 0)`;
    }

    return style;
  }, [props.position, state.fixed, offset, state.width, state.height, state.transform]);

  const emitScroll = (scrollTop, isFixed) => {
    if (props.onScroll) {
      props.onScroll({
        scrollTop,
        isFixed
      });
    }
  };

  const onScroll = () => {
    if (!root.current || (0, _utils.isHidden)(root.current)) {
      return;
    }

    const {
      container,
      position
    } = props;
    const rootRect = (0, _useRect.getRect)(root.current);
    const scrollTop = (0, _utils.getScrollTop)(window);
    const newState = {};
    newState.width = rootRect.width;
    newState.height = rootRect.height;

    if (position === 'top') {
      // The sticky component should be kept inside the container element
      if (container) {
        const containerRect = (0, _useRect.getRect)(container.current);
        const difference = containerRect.bottom - offset - newState.height;
        newState.fixed = offset > rootRect.top && containerRect.bottom > 0;
        newState.transform = difference < 0 ? difference : 0;
      } else {
        newState.fixed = offset > rootRect.top;
      }
    } else {
      const {
        clientHeight
      } = document.documentElement;

      if (container) {
        const containerRect = (0, _useRect.getRect)(container.current);
        const difference = clientHeight - containerRect.top - offset - newState.height;
        newState.fixed = clientHeight - offset < rootRect.bottom && clientHeight > containerRect.top;
        newState.transform = difference < 0 ? -difference : 0;
      } else {
        newState.fixed = clientHeight - offset < rootRect.bottom;
      }
    }

    updateState(newState);
    emitScroll(scrollTop, newState.fixed);
  };

  (0, _useEventListener.default)('scroll', onScroll, {
    target: scrollParent
  });
  (0, _hooks.useVisibilityChange)(root, onScroll);
  (0, _hooks.useUpdateEffect)(() => {
    var _a;

    (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, state.fixed);
  }, [state.fixed]);
  return (0, _jsxRuntime().jsx)("div", Object.assign({
    ref: root,
    style: rootStyle
  }, {
    children: (0, _jsxRuntime().jsx)("div", Object.assign({
      className: (0, _clsx().default)(bem({
        fixed: state.fixed
      })),
      style: stickyStyle
    }, {
      children: props.children
    }))
  }));
};

Sticky.defaultProps = {
  offsetTop: 0,
  offsetBottom: 0,
  position: 'top'
};
var _default = Sticky;
exports.default = _default;