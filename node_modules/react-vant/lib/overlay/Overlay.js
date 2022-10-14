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

function _reactTransitionGroup() {
  const data = require("react-transition-group");

  _reactTransitionGroup = function () {
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

const [bem] = (0, _utils.createNamespace)('overlay');

const Overlay = props => {
  const nodeRef = (0, _react().useRef)(null);
  const {
    visible,
    duration
  } = props;

  const preventTouchMove = event => {
    if (!props.lockScroll) return;
    (0, _utils.preventDefault)(event, true);
  };

  const renderOverlay = () => {
    const style = Object.assign(Object.assign({
      zIndex: props.zIndex !== undefined ? +props.zIndex : undefined,
      touchAction: props.lockScroll && 'none'
    }, props.style), props.customStyle);

    if ((0, _utils.isDef)(duration)) {
      style.animationDuration = `${duration}ms`;
    }

    return (0, _utils.withStopPropagation)(props.stopPropagation, (0, _jsxRuntime().jsx)("div", Object.assign({
      ref: nodeRef,
      style: style,
      onClick: e => {
        var _a;

        if (e.target === e.currentTarget) {
          (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
        }
      },
      className: (0, _clsx().default)(bem(), props.className)
    }, {
      children: props.children
    })));
  };

  (0, _hooks.useEventListener)('touchmove', preventTouchMove, {
    target: nodeRef
  });
  return (0, _jsxRuntime().jsx)(_reactTransitionGroup().CSSTransition, Object.assign({
    nodeRef: nodeRef,
    mountOnEnter: true,
    unmountOnExit: true,
    in: visible,
    timeout: duration,
    classNames: 'rv-fade'
  }, {
    children: renderOverlay()
  }));
};

Overlay.defaultProps = {
  stopPropagation: ['click'],
  lockScroll: true,
  duration: 300
};
var _default = Overlay;
exports.default = _default;