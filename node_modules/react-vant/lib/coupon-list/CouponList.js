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

var _ConfigProviderContext = _interopRequireDefault(require("../config-provider/ConfigProviderContext"));

var _tabs = _interopRequireDefault(require("../tabs"));

var _hooks = require("../hooks");

var _button = _interopRequireDefault(require("../button"));

var _field = _interopRequireDefault(require("../field"));

var _Coupon = _interopRequireDefault(require("./Coupon"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const [bem] = (0, _utils.createNamespace)('coupon-list');

const CouponList = props => {
  var _a;

  const {
    locale
  } = (0, _react().useContext)(_ConfigProviderContext.default);
  const innerEffect = (0, _react().useRef)(false);
  const [state, updateState] = (0, _hooks.useSetState)({
    tab: 0,
    code: props.code
  });
  const buttonDisabled = (0, _react().useMemo)(() => !props.exchangeButtonLoading && (props.exchangeButtonDisabled || !state.code || state.code.length < props.exchangeMinLength), [props.exchangeButtonLoading, props.exchangeButtonDisabled, state.code, props.exchangeMinLength]);

  const innerChange = code => {
    updateState({
      code
    });
    innerEffect.current = true;
  };

  const onExchange = () => {
    if (props.onExchange) props.onExchange(state.code); // auto clear currentCode when not use v-model

    if (!props.code) {
      innerChange('');
    }
  };

  const renderEmpty = () => (0, _jsxRuntime().jsxs)("div", Object.assign({
    className: (0, _clsx().default)(bem('empty'))
  }, {
    children: [(0, _jsxRuntime().jsx)("img", {
      alt: 'empty',
      src: props.emptyImage
    }), (0, _jsxRuntime().jsx)("p", {
      children: locale.noCoupon
    })]
  }));

  const renderExchangeBar = () => {
    if (props.showExchangeBar) {
      return (0, _jsxRuntime().jsxs)("div", Object.assign({
        className: (0, _clsx().default)(bem('exchange-bar'))
      }, {
        children: [(0, _jsxRuntime().jsx)(_field.default, {
          value: state.code,
          onChange: innerChange,
          clearable: true,
          border: false,
          className: (0, _clsx().default)(bem('field')),
          placeholder: props.inputPlaceholder || locale.vanCouponList.placeholder,
          maxLength: 20
        }), (0, _jsxRuntime().jsx)(_button.default, {
          plain: true,
          type: 'primary',
          className: (0, _clsx().default)(bem('exchange')),
          text: props.exchangeButtonText || locale.vanCouponList.exchange,
          loading: props.exchangeButtonLoading,
          disabled: buttonDisabled,
          onClick: onExchange
        })]
      }));
    }

    return null;
  };

  const renderCouponTab = () => {
    const {
      coupons
    } = props;
    const count = props.showCount ? ` (${coupons.length})` : '';
    const title = (props.enabledTitle || locale.vanCouponList.enable) + count;
    return (0, _jsxRuntime().jsx)(_tabs.default.TabPane, Object.assign({
      title: title
    }, {
      children: (0, _jsxRuntime().jsxs)("div", Object.assign({
        className: (0, _clsx().default)(bem('list', {
          'with-bar': props.showExchangeBar,
          'with-bottom': props.showCloseButton
        }))
      }, {
        children: [coupons.map((coupon, index) => (0, _jsxRuntime().jsx)(_Coupon.default, {
          coupon: coupon,
          chosen: index === props.chosenCoupon,
          currency: props.currency,
          onClick: () => props.onChange(index)
        }, coupon.id)), !coupons.length && renderEmpty(), props.listFooter]
      }))
    }));
  };

  const renderDisabledTab = () => {
    const {
      disabledCoupons
    } = props;
    const count = props.showCount ? ` (${disabledCoupons.length})` : '';
    const title = (props.disabledTitle || locale.vanCouponList.disabled) + count;
    return (0, _jsxRuntime().jsx)(_tabs.default.TabPane, Object.assign({
      title: title
    }, {
      children: (0, _jsxRuntime().jsxs)("div", Object.assign({
        className: (0, _clsx().default)(bem('list', {
          'with-bar': props.showExchangeBar,
          'with-bottom': props.showCloseButton
        }))
      }, {
        children: [disabledCoupons.map(coupon => (0, _jsxRuntime().jsx)(_Coupon.default, {
          disabled: true,
          coupon: coupon,
          currency: props.currency
        }, coupon.id)), !disabledCoupons.length && renderEmpty(), props.disabledListFooter]
      }))
    }));
  };

  (0, _react().useEffect)(() => {
    if (innerEffect.current) {
      innerEffect.current = true;
      return;
    }

    updateState({
      code: props.code
    });
  }, [props.code]);
  return (0, _jsxRuntime().jsxs)("div", Object.assign({
    className: (0, _clsx().default)(bem(), props.className),
    style: props.style
  }, {
    children: [renderExchangeBar(), (0, _jsxRuntime().jsxs)(_tabs.default, Object.assign({
      active: state.tab,
      border: false
    }, props.tabsProps, {
      className: (0, _clsx().default)(bem('tab'), (_a = props.tabsProps) === null || _a === void 0 ? void 0 : _a.className)
    }, {
      children: [renderCouponTab(), renderDisabledTab()]
    })), (0, _jsxRuntime().jsx)("div", Object.assign({
      className: (0, _clsx().default)(bem('bottom'))
    }, {
      children: (0, _jsxRuntime().jsx)(_button.default, {
        "v-show": props.showCloseButton,
        round: true,
        block: true,
        type: 'primary',
        className: (0, _clsx().default)(bem('close')),
        text: props.closeButtonText || locale.vanCouponList.close,
        onClick: () => {
          var _a;

          return (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, -1);
        }
      })
    }))]
  }));
};

const EMPTY_IMAGE = 'https://img.yzcdn.cn/vant/coupon-empty.png'; // defaultProps defined if need

CouponList.defaultProps = {
  showCount: true,
  showExchangeBar: true,
  showCloseButton: true,
  code: '',
  exchangeMinLength: 1,
  chosenCoupon: -1,
  coupons: [],
  disabledCoupons: [],
  displayedCouponIndex: -1,
  currency: '¥',
  emptyImage: EMPTY_IMAGE
};
var _default = CouponList;
exports.default = _default;