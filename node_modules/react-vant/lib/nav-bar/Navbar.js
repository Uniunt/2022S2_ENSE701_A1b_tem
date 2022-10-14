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

var _constant = require("../utils/constant");

var _useHeight = _interopRequireDefault(require("../hooks/use-height"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const [bem] = (0, _utils.createNamespace)('nav-bar');

const NavBar = props => {
  const navBarRef = (0, _react().useRef)(null);
  const navBarHeight = (0, _useHeight.default)(navBarRef);

  const onClickLeft = event => {
    if (props.onClickLeft) props.onClickLeft(event);
  };

  const onClickRight = event => {
    if (props.onClickRight) props.onClickRight(event);
  };

  const renderLeft = () => {
    if (typeof props.leftText !== 'string' && (0, _react().isValidElement)(props.leftText)) {
      return props.leftText;
    }

    return [props.leftArrow && _react().default.cloneElement(props.leftArrow, {
      key: 'arroe',
      className: (0, _clsx().default)(bem('arrow'))
    }), props.leftText && (0, _jsxRuntime().jsx)("span", Object.assign({
      className: (0, _clsx().default)(bem('text'))
    }, {
      children: props.leftText
    }), 'text')];
  };

  const renderRight = () => {
    if (typeof props.rightText !== 'string' && (0, _react().isValidElement)(props.rightText)) {
      return props.rightText;
    }

    return (0, _jsxRuntime().jsx)("span", Object.assign({
      className: (0, _clsx().default)(bem('text'))
    }, {
      children: props.rightText
    }));
  };

  const renderNavBar = () => {
    const {
      title,
      fixed,
      border,
      zIndex
    } = props;
    const style = Object.assign({
      zIndex: zIndex !== undefined ? +zIndex : undefined
    }, props.style);
    const hasLeft = props.leftArrow || props.leftText;
    const hasRight = props.rightText;
    return (0, _jsxRuntime().jsx)("div", Object.assign({
      ref: navBarRef,
      style: style,
      className: (0, _clsx().default)(bem({
        fixed,
        'safe-area-inset-top': props.safeAreaInsetTop
      }), {
        [_constant.BORDER_BOTTOM]: border
      }, props.className)
    }, {
      children: (0, _jsxRuntime().jsxs)("div", Object.assign({
        className: (0, _clsx().default)(bem('content'))
      }, {
        children: [hasLeft && (0, _jsxRuntime().jsx)("div", Object.assign({
          className: (0, _clsx().default)(bem('left')),
          onClick: onClickLeft
        }, {
          children: renderLeft()
        })), (0, _jsxRuntime().jsx)("div", Object.assign({
          className: (0, _clsx().default)(bem('title'), 'rv-ellipsis')
        }, {
          children: title
        })), hasRight && (0, _jsxRuntime().jsx)("div", Object.assign({
          className: (0, _clsx().default)(bem('right')),
          onClick: onClickRight
        }, {
          children: renderRight()
        }))]
      }))
    }));
  };

  const renderPlaceholder = () => {
    if (props.fixed && props.placeholder) {
      return (0, _jsxRuntime().jsx)("div", {
        className: (0, _clsx().default)(bem('placeholder')),
        style: {
          height: navBarHeight ? `${navBarHeight}px` : undefined
        }
      });
    }

    return null;
  };

  return (0, _jsxRuntime().jsxs)(_jsxRuntime().Fragment, {
    children: [renderPlaceholder(), renderNavBar()]
  });
};

NavBar.defaultProps = {
  border: true,
  leftArrow: (0, _jsxRuntime().jsx)(_icons().ArrowLeft, {})
};
var _default = NavBar;
exports.default = _default;