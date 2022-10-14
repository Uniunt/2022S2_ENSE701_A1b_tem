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

var _utils = require("../utils");

var _cell = _interopRequireDefault(require("../cell"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function formatValue(coupons, chosenCoupon, currency, locale) {
  const coupon = coupons[+chosenCoupon];

  if (coupon) {
    let value = 0;

    if ((0, _utils.isDef)(coupon.value)) {
      ;
      ({
        value
      } = coupon);
    } else if ((0, _utils.isDef)(coupon.denominations)) {
      value = coupon.denominations;
    }

    return `-${currency} ${(value / 100).toFixed(2)}`;
  }

  return coupons.length === 0 ? locale.noCoupon : locale.vanCouponCell.count(coupons.length);
}

const [bem] = (0, _utils.createNamespace)('coupon-cell');

const CouponCell = props => {
  const {
    locale
  } = (0, _react().useContext)(_ConfigProviderContext.default);
  const selected = props.coupons[+props.chosenCoupon];
  const value = formatValue(props.coupons, props.chosenCoupon, props.currency, locale);
  return (0, _jsxRuntime().jsx)(_cell.default, {
    style: props.style,
    className: (0, _clsx().default)(bem(), props.className),
    value: value,
    title: props.title || locale.vanCouponCell.title,
    border: props.border,
    isLink: props.editable,
    valueClass: (0, _clsx().default)(bem('value', {
      selected
    })),
    onClick: props.onClick
  });
}; // defaultProps defined if need


CouponCell.defaultProps = {
  border: true,
  editable: true,
  coupons: [],
  currency: '¥',
  chosenCoupon: -1
};
var _default = CouponCell;
exports.default = _default;