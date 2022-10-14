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

const Checker = props => {
  const iconRef = (0, _react().useRef)(null);

  const getParentProp = name => {
    if (props.parent && props.bindGroup) {
      return props.parent.props[name];
    }

    return null;
  };

  const disabled = (0, _react().useMemo)(() => getParentProp('disabled') || props.disabled, [props.parent, props.disabled]);
  const direction = (0, _react().useMemo)(() => getParentProp('direction') || null, [props.parent]);
  const iconStyle = (0, _react().useMemo)(() => {
    const checkedColor = props.checkedColor || getParentProp('checkedColor');

    if (checkedColor && props.checked && !disabled) {
      return {
        borderColor: checkedColor,
        backgroundColor: checkedColor
      };
    }

    return {};
  }, [props.checkedColor, props.checked, disabled]);

  const onClick = event => {
    const {
      target
    } = event;
    const icon = iconRef.current;
    const iconClicked = icon === target || (icon === null || icon === void 0 ? void 0 : icon.contains(target));

    if (!disabled && (iconClicked || !props.labelDisabled)) {
      if (props.onToggle) {
        props.onToggle();
      }
    }

    if (props.onClick) {
      props.onClick(event);
    }
  };

  const renderIcon = () => {
    const {
      bem,
      shape,
      checked
    } = props;
    const iconSize = props.iconSize || getParentProp('iconSize');
    return (0, _jsxRuntime().jsx)("div", Object.assign({
      ref: iconRef,
      className: (0, _clsx().default)(bem('icon', [shape, {
        disabled,
        checked
      }])),
      style: {
        fontSize: (0, _utils.addUnit)(iconSize)
      }
    }, {
      children: props.iconRender ? props.iconRender({
        checked,
        disabled
      }) : (0, _jsxRuntime().jsx)(_icons().Success, {
        style: iconStyle
      })
    }));
  };

  const renderLabel = () => {
    if (props.children) {
      return (0, _jsxRuntime().jsx)("span", Object.assign({
        className: props.bem('label', [props.labelPosition, {
          disabled
        }])
      }, {
        children: props.children
      }));
    }

    return null;
  };

  return (0, _jsxRuntime().jsxs)("div", Object.assign({
    role: props.role,
    className: (0, _clsx().default)(props.bem([{
      disabled,
      'label-disabled': props.labelDisabled
    }, direction]), props.className),
    style: props.style,
    tabIndex: disabled ? -1 : 0,
    "aria-checked": props.checked,
    onClick: onClick
  }, {
    children: [props.labelPosition === 'left' && renderLabel(), renderIcon(), props.labelPosition !== 'left' && renderLabel()]
  }));
};

Checker.defaultProps = {
  shape: 'round',
  bindGroup: true
};
var _default = Checker;
exports.default = _default;