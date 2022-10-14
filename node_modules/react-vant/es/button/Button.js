import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useContext } from 'react';
import clsx from 'clsx';
import Loading from '../loading';
import { BORDER_SURROUND, SHADOW, WHITE } from '../utils/constant';
import ButtonContext from './ButtonContext';
import { createNamespace } from '../utils';
const [bem] = createNamespace('button');

const Button = props => {
  const {
    color,
    loading,
    className,
    hairline,
    loadingText
  } = props;
  const {
    parent
  } = useContext(ButtonContext);
  const size = React.useMemo(() => props.size || (parent === null || parent === void 0 ? void 0 : parent.size) || 'normal', [parent === null || parent === void 0 ? void 0 : parent.size, props.size]);
  const type = React.useMemo(() => props.type || (parent === null || parent === void 0 ? void 0 : parent.type) || 'default', [parent === null || parent === void 0 ? void 0 : parent.type, props.type]);
  const plain = React.useMemo(() => {
    var _a;

    return (_a = props.plain) !== null && _a !== void 0 ? _a : parent === null || parent === void 0 ? void 0 : parent.plain;
  }, [parent === null || parent === void 0 ? void 0 : parent.plain, props.plain]);
  const block = React.useMemo(() => {
    var _a;

    return (_a = props.block) !== null && _a !== void 0 ? _a : parent === null || parent === void 0 ? void 0 : parent.block;
  }, [parent === null || parent === void 0 ? void 0 : parent.block, props.block]);
  const iconPosition = React.useMemo(() => props.iconPosition || (parent === null || parent === void 0 ? void 0 : parent.iconPosition) || 'left', [parent === null || parent === void 0 ? void 0 : parent.iconPosition, props.iconPosition]);
  const disabled = React.useMemo(() => {
    var _a;

    return (_a = props.disabled) !== null && _a !== void 0 ? _a : parent === null || parent === void 0 ? void 0 : parent.disabled;
  }, [parent === null || parent === void 0 ? void 0 : parent.disabled, props.disabled]);
  const nativeType = React.useMemo(() => props.nativeType || (parent === null || parent === void 0 ? void 0 : parent.nativeType) || 'button', [parent === null || parent === void 0 ? void 0 : parent.nativeType, props.nativeType]);
  const tag = React.useMemo(() => props.tag || (parent === null || parent === void 0 ? void 0 : parent.tag) || 'button', [parent === null || parent === void 0 ? void 0 : parent.tag, props.tag]);
  const TagElement = tag;
  const classes = clsx(className, bem([type, size, {
    plain,
    loading,
    disabled,
    hairline,
    block,
    round: props.round,
    square: props.square
  }]), {
    [BORDER_SURROUND]: hairline
  }, props.shadow && `${SHADOW}--${+props.shadow}`);
  const style = Object.assign({}, props.style);

  if (color) {
    style.color = plain ? color : WHITE;

    if (!plain) {
      // Use background instead of backgroundColor to make linear-gradient work
      style.background = color;
    } // hide border when color is linear-gradient


    if (color.indexOf('gradient') !== -1) {
      style.border = 0;
    } else {
      style.borderColor = color;
    }
  }

  const onClick = event => {
    if (!loading && !disabled && props.onClick) {
      props.onClick(event);
    }
  };

  const renderLoadingIcon = () => {
    if (loading) {
      const {
        loadingSize = '20px',
        loadingType
      } = props;
      return _jsx(Loading, {
        className: clsx(bem('loading')),
        size: loadingSize,
        type: loadingType,
        color: type === 'default' ? undefined : ''
      });
    }

    return null;
  };

  const renderIcon = () => {
    if (props.loading) {
      return renderLoadingIcon();
    }

    if (props.icon) {
      return React.cloneElement(props.icon, {
        className: clsx(bem('icon'))
      });
    }

    return null;
  };

  const renderText = () => {
    let text;

    if (loading) {
      text = loadingText;
    } else {
      text = props.children || props.text;
    }

    if (text) {
      return _jsx("span", Object.assign({
        className: clsx(bem('text'))
      }, {
        children: text
      }), 'text');
    }

    return null;
  };

  const renderContent = () => _jsxs("div", Object.assign({
    className: clsx(bem('content'))
  }, {
    children: [iconPosition === 'left' && renderIcon(), renderText(), iconPosition === 'right' && renderIcon()]
  }));

  return _jsx(TagElement, Object.assign({
    disabled: disabled,
    className: classes,
    style: style,
    type: nativeType,
    onClick: onClick
  }, {
    children: renderContent()
  }));
};

export default Button;