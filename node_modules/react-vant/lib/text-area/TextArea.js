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

const [bem] = (0, _utils.createNamespace)('textarea');
const TextArea = (0, _react().forwardRef)((props, ref) => {
  const [hasFocus, setHasFocus] = (0, _react().useState)(false);
  const nativeTextAreaRef = (0, _react().useRef)();
  const compositionStartRef = (0, _react().useRef)(false);
  const [value, setValue] = (0, _hooks.usePropsValue)(props);
  const {
    className,
    style,
    name,
    rows,
    placeholder,
    disabled,
    readOnly,
    maxLength,
    showWordLimit,
    autoFocus
  } = props;

  const focus = () => {
    if (nativeTextAreaRef === null || nativeTextAreaRef === void 0 ? void 0 : nativeTextAreaRef.current) {
      nativeTextAreaRef.current.focus();
    }
  };

  const blur = () => {
    if (nativeTextAreaRef === null || nativeTextAreaRef === void 0 ? void 0 : nativeTextAreaRef.current) {
      nativeTextAreaRef.current.blur();
    }
  };

  (0, _react().useImperativeHandle)(ref, () => ({
    clear: () => {
      setValue('');
    },
    focus,
    blur,

    get nativeElement() {
      return nativeTextAreaRef.current;
    }

  }));

  const adjustSize = () => {
    const input = nativeTextAreaRef.current;
    if (!input) return;
    input.style.height = 'auto';
    let height = input.scrollHeight;

    if ((0, _utils.isObject)(props.autoSize)) {
      const {
        maxHeight,
        minHeight
      } = props.autoSize;

      if (maxHeight) {
        height = Math.min(height, maxHeight);
      }

      if (minHeight) {
        height = Math.max(height, minHeight);
      }
    }

    if (height) {
      input.style.height = `${height}px`;
    }
  };

  (0, _react().useEffect)(() => {
    adjustSize();
  }, [value]);

  const controlClass = _react().default.useMemo(() => {
    return bem('control', [{
      'min-height': !props.autoSize,
      clear: props.clearable
    }]);
  }, [props.autoSize]);

  const handleChange = e => {
    var _a;

    const inputValue = (_a = e === null || e === void 0 ? void 0 : e.currentTarget) === null || _a === void 0 ? void 0 : _a.value;
    let finalValue = inputValue;

    if ((0, _utils.isDef)(maxLength) && finalValue.length > +maxLength) {
      finalValue = finalValue.slice(0, maxLength);
    }

    setValue(finalValue);
  };

  const handleFocus = e => {
    var _a;

    setHasFocus(true);
    (_a = props.onFocus) === null || _a === void 0 ? void 0 : _a.call(props, e); // readOnly not work in legacy mobile safari

    if (readOnly) {
      blur();
    }
  };

  const handleBulr = e => {
    var _a;

    setHasFocus(false);
    (_a = props.onBlur) === null || _a === void 0 ? void 0 : _a.call(props, e);
    (0, _utils.resetScroll)();
  };

  const renderWordLimit = () => {
    if (showWordLimit) {
      const currentCount = (value ? `${value}` : '').length;
      return (0, _jsxRuntime().jsx)("div", Object.assign({
        className: (0, _clsx().default)(bem('word-limit'))
      }, {
        children: typeof showWordLimit === 'function' ? showWordLimit({
          currentCount,
          maxLength
        }) : (0, _jsxRuntime().jsxs)(_jsxRuntime().Fragment, {
          children: [(0, _jsxRuntime().jsx)("span", Object.assign({
            className: (0, _clsx().default)(bem('word-num'))
          }, {
            children: currentCount
          })), maxLength ? `/${maxLength}` : false]
        })
      }));
    }

    return null;
  };

  const handleClear = e => {
    var _a;

    setValue('');
    (_a = props.onClear) === null || _a === void 0 ? void 0 : _a.call(props, e);
  };

  const showClear = (0, _react().useMemo)(() => {
    if (props.clearable && !readOnly) {
      const hasValue = value !== '';
      const trigger = props.clearTrigger === 'always' || props.clearTrigger === 'focus' && hasFocus;
      return hasValue && trigger;
    }

    return false;
  }, [value, props.clearTrigger, hasFocus]);
  return (0, _jsxRuntime().jsxs)("div", Object.assign({
    className: (0, _clsx().default)(bem(), className),
    style: style
  }, {
    children: [(0, _jsxRuntime().jsx)("textarea", {
      ref: nativeTextAreaRef,
      name: name,
      rows: rows,
      className: (0, _clsx().default)(controlClass),
      value: value,
      disabled: disabled,
      autoFocus: autoFocus,
      readOnly: readOnly,
      placeholder: placeholder || '',
      onBlur: handleBulr,
      onFocus: handleFocus,
      onChange: handleChange,
      onKeyPress: props.onKeyPress,
      onKeyDown: props.onKeyDown,
      onKeyUp: props.onKeyUp,
      autoComplete: props.autoComplete,
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
    }), showClear && _react().default.cloneElement(props.clearIcon, {
      className: (0, _clsx().default)(bem('clear')),
      onTouchStart: handleClear
    }), renderWordLimit()]
  }));
});
TextArea.defaultProps = {
  rows: 2,
  clearIcon: (0, _jsxRuntime().jsx)(_icons().Clear, {}),
  clearTrigger: 'focus',
  defaultValue: ''
};
var _default = TextArea;
exports.default = _default;