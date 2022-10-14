import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect, forwardRef, useImperativeHandle, useRef, useState, useMemo } from 'react';
import { Clear } from '@react-vant/icons';
import clsx from 'clsx';
import { createNamespace, isDef, isObject, resetScroll } from '../utils';
import { usePropsValue } from '../hooks';
const [bem] = createNamespace('textarea');
const TextArea = forwardRef((props, ref) => {
  const [hasFocus, setHasFocus] = useState(false);
  const nativeTextAreaRef = useRef();
  const compositionStartRef = useRef(false);
  const [value, setValue] = usePropsValue(props);
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

  useImperativeHandle(ref, () => ({
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

    if (isObject(props.autoSize)) {
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

  useEffect(() => {
    adjustSize();
  }, [value]);
  const controlClass = React.useMemo(() => {
    return bem('control', [{
      'min-height': !props.autoSize,
      clear: props.clearable
    }]);
  }, [props.autoSize]);

  const handleChange = e => {
    var _a;

    const inputValue = (_a = e === null || e === void 0 ? void 0 : e.currentTarget) === null || _a === void 0 ? void 0 : _a.value;
    let finalValue = inputValue;

    if (isDef(maxLength) && finalValue.length > +maxLength) {
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
    resetScroll();
  };

  const renderWordLimit = () => {
    if (showWordLimit) {
      const currentCount = (value ? `${value}` : '').length;
      return _jsx("div", Object.assign({
        className: clsx(bem('word-limit'))
      }, {
        children: typeof showWordLimit === 'function' ? showWordLimit({
          currentCount,
          maxLength
        }) : _jsxs(_Fragment, {
          children: [_jsx("span", Object.assign({
            className: clsx(bem('word-num'))
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

  const showClear = useMemo(() => {
    if (props.clearable && !readOnly) {
      const hasValue = value !== '';
      const trigger = props.clearTrigger === 'always' || props.clearTrigger === 'focus' && hasFocus;
      return hasValue && trigger;
    }

    return false;
  }, [value, props.clearTrigger, hasFocus]);
  return _jsxs("div", Object.assign({
    className: clsx(bem(), className),
    style: style
  }, {
    children: [_jsx("textarea", {
      ref: nativeTextAreaRef,
      name: name,
      rows: rows,
      className: clsx(controlClass),
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
    }), showClear && React.cloneElement(props.clearIcon, {
      className: clsx(bem('clear')),
      onTouchStart: handleClear
    }), renderWordLimit()]
  }));
});
TextArea.defaultProps = {
  rows: 2,
  clearIcon: _jsx(Clear, {}),
  clearTrigger: 'focus',
  defaultValue: ''
};
export default TextArea;