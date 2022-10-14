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

var _constants = require("../constants");

var _stepper = _interopRequireDefault(require("../../stepper"));

var _utils = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const {
  QUOTA_LIMIT,
  STOCK_LIMIT
} = _constants.LIMIT_TYPE;
const [bem] = (0, _utils.createNamespace)('sku');

const SkuStepper = props => {
  const [limitType, setLimitType] = (0, _react().useState)(STOCK_LIMIT);
  const stepperLimit = (0, _react().useMemo)(() => {
    const quotaLimit = +props.quota - +props.quotaUsed;
    let limit;
    let currentLimitType; // 无限购时直接取库存，有限购时取限购数和库存数中小的那个

    if (+props.quota > 0 && quotaLimit <= props.stock) {
      // 修正负的limit
      limit = quotaLimit < 0 ? 0 : quotaLimit;
      currentLimitType = QUOTA_LIMIT;
    } else {
      limit = props.stock;
      currentLimitType = STOCK_LIMIT;
    }

    setLimitType(currentLimitType);
    return limit;
  }, [props.quota, props.quotaUsed, props.stock]);
  const stepperMinLimit = (0, _react().useMemo)(() => {
    return +props.startSaleNum < 1 ? 1 : +props.startSaleNum;
  }, [props.startSaleNum]);
  const quotaContent = (0, _react().useMemo)(() => {
    const {
      quotaText,
      hideQuotaText
    } = props.customStepperConfig;
    if (hideQuotaText) return '';
    let text = '';

    if (quotaText) {
      text = quotaText;
    } else {
      const textArr = [];

      if (+props.startSaleNum > 1) {
        textArr.push(`${props.startSaleNum}件起售`);
      }

      if (+props.quota > 0) {
        textArr.push(`限购${+props.quota}件`);
      }

      text = textArr.join(',');
    }

    return text;
  }, [JSON.stringify(props.customStepperConfig), props.startSaleNum, props.quota]);

  const checkState = (min, max) => {
    // 如果选择小于起售，则强制变为起售
    if (props.currentNum < min || min > max) {
      props.onChange(min);
    } else if (props.currentNum > max) {
      // 当前选择数量大于最大可选时，需要重置已选数量
      props.onChange(max);
    }

    props.onSkuStepperState({
      valid: min <= max,
      min,
      max,
      limitType,
      quota: props.quota,
      quotaUsed: props.quotaUsed,
      startSaleNum: props.startSaleNum
    });
  };

  const setCurrentNum = num => {
    props.onChange(num);
    checkState(stepperMinLimit, stepperLimit);
  };

  const onChange = currentValue => {
    const intValue = parseInt(currentValue, 10);
    const {
      handleStepperChange
    } = props.customStepperConfig;
    if (handleStepperChange) handleStepperChange(intValue);
    setCurrentNum(currentValue);
  };

  const onOverLimit = action => {
    props.onSkuOverLimit({
      action,
      limitType,
      quota: props.quota,
      quotaUsed: props.quotaUsed,
      startSaleNum: props.startSaleNum
    });
  };

  return (0, _jsxRuntime().jsxs)("div", Object.assign({
    className: (0, _clsx().default)(bem('stepper-stock'))
  }, {
    children: [(0, _jsxRuntime().jsx)("div", Object.assign({
      className: (0, _clsx().default)(bem('stepper-title'))
    }, {
      children: props.stepperTitle
    })), (0, _jsxRuntime().jsx)(_stepper.default, {
      min: stepperMinLimit,
      max: stepperLimit,
      className: (0, _clsx().default)(bem('stepper')),
      disableInput: props.disableStepperInput,
      value: props.currentNum,
      onChange: onChange,
      onOverlimit: onOverLimit
    }), !props.hideQuotaText && quotaContent && (0, _jsxRuntime().jsx)("span", Object.assign({
      className: (0, _clsx().default)(bem('stepper-quota'))
    }, {
      children: quotaContent
    }))]
  }));
};

SkuStepper.defaultProps = {
  quota: 0,
  quotaUsed: 0,
  startSaleNum: 1,
  customStepperConfig: {}
};
var _default = SkuStepper;
exports.default = _default;