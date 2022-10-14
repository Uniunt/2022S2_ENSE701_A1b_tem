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

var _ConfigProviderContext = _interopRequireDefault(require("../config-provider/ConfigProviderContext"));

var _button = _interopRequireDefault(require("../button"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const [bem] = (0, _utils.createNamespace)('submit-bar');

const SubmitBar = props => {
  const {
    locale
  } = (0, _react().useContext)(_ConfigProviderContext.default);

  const renderText = () => {
    const {
      price,
      label,
      currency,
      textAlign,
      suffixLabel,
      decimalLength
    } = props;

    if (typeof +price === 'number') {
      const pricePair = (+price / 100).toFixed(+decimalLength).split('.');
      const decimal = decimalLength ? `.${pricePair[1]}` : '';
      return (0, _jsxRuntime().jsxs)("div", Object.assign({
        className: (0, _clsx().default)(bem('text')),
        style: {
          textAlign
        }
      }, {
        children: [(0, _jsxRuntime().jsx)("span", {
          children: label || locale.vanSubmitBar.label
        }), (0, _jsxRuntime().jsxs)("span", Object.assign({
          className: (0, _clsx().default)(bem('price'))
        }, {
          children: [currency, (0, _jsxRuntime().jsx)("span", Object.assign({
            className: (0, _clsx().default)(bem('price-integer'))
          }, {
            children: pricePair[0]
          })), decimal]
        })), suffixLabel && (0, _jsxRuntime().jsx)("span", Object.assign({
          className: (0, _clsx().default)(bem('suffix-label'))
        }, {
          children: suffixLabel
        }))]
      }));
    }

    return null;
  };

  const renderTip = () => {
    const {
      tip,
      tipIcon
    } = props;

    if (tip) {
      return (0, _jsxRuntime().jsxs)("div", Object.assign({
        className: (0, _clsx().default)(bem('tip'))
      }, {
        children: [tipIcon && _react().default.cloneElement(tipIcon, {
          className: (0, _clsx().default)(bem('tip-icon'))
        }), tip && (0, _jsxRuntime().jsx)("span", Object.assign({
          className: (0, _clsx().default)(bem('tip-text'))
        }, {
          children: tip
        }))]
      }));
    }

    return null;
  };

  const onClickButton = () => props === null || props === void 0 ? void 0 : props.onSubmit();

  const renderButton = () => {
    if (props.button) {
      return props.button;
    }

    return (0, _jsxRuntime().jsx)(_button.default, {
      round: true,
      type: props.buttonType,
      text: props.buttonText,
      className: (0, _clsx().default)(bem('button', props.buttonType)),
      color: props.buttonColor,
      loading: props.loading,
      disabled: props.disabled,
      onClick: onClickButton
    });
  };

  return (0, _jsxRuntime().jsxs)("div", Object.assign({
    className: (0, _clsx().default)(props.className, bem(), {
      'rv-safe-area-bottom': props.safeAreaInsetBottom
    }),
    style: props.style
  }, {
    children: [props.top, renderTip(), (0, _jsxRuntime().jsxs)("div", Object.assign({
      className: (0, _clsx().default)(bem('bar'))
    }, {
      children: [props.children, renderText(), renderButton()]
    }))]
  }));
}; // defaultProps defined if need


SubmitBar.defaultProps = {
  buttonType: 'danger',
  decimalLength: 2,
  currency: '¥',
  safeAreaInsetBottom: true
};
var _default = SubmitBar;
exports.default = _default;