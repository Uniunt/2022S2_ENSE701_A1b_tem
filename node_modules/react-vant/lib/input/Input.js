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

function _icons() {
  const data = require("@react-vant/icons");

  _icons = function () {
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

const [bem] = (0, _utils.createNamespace)('input');
const Input = (0, _react().forwardRef)((props, ref) => {
  const inputRef = (0, _react().useRef)();
  const [inputFocus, setInputFocus] = (0, _react().useState)(false);
  const compositionStartRef = (0, _react().useRef)(false);
  const [value, setValue] = (0, _hooks.usePropsValue)(props);
  const {
    className,
    style,
    align,
    type,
    name,
    placeholder,
    disabled,
    readOnly,
    maxLength,
    autoFocus
  } = props;

  const focus = () => {
    if (inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) {
      inputRef.current.focus();
    }
  };

  const blur = () => {
    if (inputRef === null || inputRef === void 0 ? void 0 : inputRef.current) {
      inputRef.current.blur();
    }
  };

  (0, _react().useImperativeHandle)(ref, () => ({
    clear: () => {
      setValue('');
    },
    focus,
    blur,

    get nativeElement() {
      return inputRef.current;
    }

  }));
  const showClear = (0, _react().useMemo)(() => {
    if (props.clearable && !readOnly) {
      const hasValue = value !== '';
      const trigger = props.clearTrigger === 'always' || props.clearTrigger === 'focus' && inputFocus;
      return hasValue && trigger;
    }

    return false;
  }, [value, props.clearTrigger, inputFocus]);

  const handleChange = e => {
    var _a, _b;

    const inputValue = (_a = e === null || e === void 0 ? void 0 : e.currentTarget) === null || _a === void 0 ? void 0 : _a.value;
    let finalValue = inputValue;

    if ((0, _utils.isDef)(maxLength) && finalValue.length > +maxLength) {
      finalValue = finalValue.slice(0, maxLength);
      (_b = props.onOverlimit) === null || _b === void 0 ? void 0 : _b.call(props);
    }

    if (type === 'number' || type === 'digit') {
      const isNumber = type === 'number';
      finalValue = (0, _utils.formatNumber)(finalValue, isNumber, isNumber);
    }

    setValue(finalValue);
  };

  const handleFocus = e => {
    var _a;

    setInputFocus(true);
    (_a = props.onFocus) === null || _a === void 0 ? void 0 : _a.call(props, e); // readOnly not work in legacy mobile safari

    if (readOnly) {
      blur();
    }
  };

  const handleBulr = e => {
    var _a;

    setInputFocus(false);
    (_a = props.onBlur) === null || _a === void 0 ? void 0 : _a.call(props, e);
    (0, _utils.resetScroll)();
  };

  const handleKeyPress = e => {
    var _a;

    if (e.key === 'Enter' || +e.charCode === 13) {
      (0, _utils.preventDefault)(e); // trigger blur after click keyboard search button

      if (props.type === 'search') {
        blur();
      }
    }

    (_a = props.onKeyPress) === null || _a === void 0 ? void 0 : _a.call(props, e);
  };

  const renderInput = () => {
    let inputType = type;
    let inputMode; // type="number" is weired in iOS, and can't prevent dot in Android
    // so use inputmode to set keyboard in mordern browers

    if (type === 'number') {
      inputType = 'text';
      inputMode = 'decimal';
    }

    if (type === 'digit') {
      inputType = 'tel';
      inputMode = 'numeric';
    }

    return (0, _jsxRuntime().jsx)("input", {
      value: value,
      type: inputType,
      inputMode: inputMode,
      ref: inputRef,
      name: name,
      className: (0, _clsx().default)(bem('control')),
      disabled: disabled,
      autoFocus: autoFocus,
      readOnly: readOnly,
      placeholder: placeholder || '',
      onBlur: handleBulr,
      onFocus: handleFocus,
      onChange: handleChange,
      onKeyPress: handleKeyPress,
      autoCapitalize: props.autoCapitalize,
      autoCorrect: props.autoCorrect,
      onKeyDown: props.onKeyDown,
      onKeyUp: props.onKeyUp,
      onCompositionStart: e => {
        var _a;

        compositionStartRef.current = true;
        (_a = props.onCompositionStart) === null || _a === void 0 ? void 0 : _a.call(props, e);
      },
      onCompositionEnd: e => {
        var _a;

        compositionStartRef.current = false;
        (_a = props.onCompositionEnd) === null || _a === void 0 ? void 0 : _a.call(props, e);
      },
      onClick: props.onClick
    });
  };

  const handleClear = e => {
    var _a;

    setValue('');
    (_a = props.onClear) === null || _a === void 0 ? void 0 : _a.call(props, e);
  };

  return (0, _jsxRuntime().jsxs)("div", Object.assign({
    className: (0, _clsx().default)(bem([align]), className),
    style: style
  }, {
    children: [props.prefix && (0, _jsxRuntime().jsx)("div", Object.assign({
      className: (0, _clsx().default)(bem('prefix'))
    }, {
      children: props.prefix
    })), renderInput(), showClear && _react().default.cloneElement(props.clearIcon, {
      className: (0, _clsx().default)(bem('clear')),
      onTouchStart: handleClear
    }), props.suffix && (0, _jsxRuntime().jsx)("div", Object.assign({
      className: (0, _clsx().default)(bem('suffix'))
    }, {
      children: props.suffix
    }))]
  }));
});
Input.defaultProps = {
  clearIcon: (0, _jsxRuntime().jsx)(_icons().Clear, {}),
  clearTrigger: 'focus',
  defaultValue: ''
};
var _default = Input;
exports.default = _default;