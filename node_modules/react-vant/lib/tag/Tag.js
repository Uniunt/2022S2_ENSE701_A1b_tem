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

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const [bem] = (0, _utils.createNamespace)('tag');

const Tag = props => {
  const nodeRef = (0, _react().useRef)(null);

  const onClose = event => {
    event.stopPropagation();

    if (props.onClose) {
      props.onClose(event);
    }
  };

  const getStyle = (0, _react().useMemo)(() => {
    if (props.plain) {
      return {
        color: props.textColor || props.color,
        borderColor: props.color
      };
    }

    return {
      color: props.textColor,
      background: props.color
    };
  }, [props.textColor, props.color, props.plain]);

  const renderTag = () => {
    const {
      type,
      mark,
      plain,
      round,
      size,
      closeable
    } = props;
    const classes = {
      mark,
      plain,
      round
    };

    if (size) {
      classes[size] = size;
    }

    const CloseIcon = closeable && (0, _jsxRuntime().jsx)(_icons().Cross, {
      className: (0, _clsx().default)(bem('close')),
      onClick: onClose
    });
    return (0, _jsxRuntime().jsxs)("span", Object.assign({
      ref: nodeRef,
      style: Object.assign(Object.assign({}, getStyle), props.style),
      className: (0, _clsx().default)(props.className, bem([classes, type])),
      onClick: props.onClick
    }, {
      children: [props.children, CloseIcon]
    }));
  };

  return (0, _jsxRuntime().jsx)(_reactTransitionGroup().CSSTransition, Object.assign({
    nodeRef: nodeRef,
    classNames: 'rv-fade',
    in: props.show,
    timeout: 300,
    unmountOnExit: true
  }, {
    children: renderTag()
  }));
};

Tag.defaultProps = {
  show: true,
  type: 'default'
};
var _default = Tag;
exports.default = _default;