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

var _badge = _interopRequireDefault(require("../badge"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const [bem] = (0, _utils.createNamespace)('tab');
const TabsTitle = (0, _react().forwardRef)((props, ref) => {
  const {
    type,
    color,
    isActive,
    activeColor,
    inactiveColor,
    disabled,
    className
  } = props;
  const customStyle = (0, _react().useMemo)(() => {
    const style = Object.assign({}, props.style);
    const isCard = type === 'card'; // card theme color

    if (color) {
      if (isCard) {
        style.borderColor = color;
      }

      if (!disabled) {
        if (isCard) {
          if (isActive) {
            style.backgroundColor = color;
          } else {
            style.color = color;
          }
        }

        if ((props.type === 'line' || props.type === 'jumbo') && isActive) {
          style.color = color;
        }
      }
    }

    const titleColor = isActive ? activeColor : inactiveColor;

    if (titleColor) {
      style.color = titleColor;
    }

    return style;
  }, [type, color, disabled, isActive, activeColor, inactiveColor]);

  const renderText = () => {
    const Title = (0, _jsxRuntime().jsx)("span", Object.assign({
      className: (0, _clsx().default)(bem('text', {
        ellipsis: !props.scrollable && props.type !== 'jumbo'
      })),
      style: {
        backgroundColor: props.type === 'capsule' && isActive && color
      }
    }, {
      children: (() => {
        if (typeof props.title === 'function') {
          return props.title(isActive);
        }

        return props.title;
      })()
    }));
    const Description = props.type === 'jumbo' && !!props.description ? (0, _jsxRuntime().jsx)("div", Object.assign({
      className: (0, _clsx().default)(bem('description')),
      style: {
        backgroundColor: isActive && color
      }
    }, {
      children: (() => {
        if (typeof props.description === 'function') {
          return props.description(isActive);
        }

        return props.description;
      })()
    })) : null;
    const measureContent = (0, _jsxRuntime().jsxs)(_jsxRuntime().Fragment, {
      children: [Title, Description]
    });

    if (props.badge) {
      const badgeProps = (0, _utils.isObject)(props.badge) ? props.badge : {
        content: props.badge
      };
      return (0, _jsxRuntime().jsx)(_badge.default, Object.assign({}, badgeProps, {
        children: measureContent
      }));
    }

    return measureContent;
  };

  return (0, _jsxRuntime().jsx)("div", Object.assign({
    ref: ref,
    className: (0, _clsx().default)([bem({
      active: props.isActive,
      disabled: props.disabled
    }), className]),
    style: customStyle,
    "aria-selected": props.isActive,
    onClick: props.onClick
  }, {
    children: renderText()
  }));
});
var _default = TabsTitle;
exports.default = _default;