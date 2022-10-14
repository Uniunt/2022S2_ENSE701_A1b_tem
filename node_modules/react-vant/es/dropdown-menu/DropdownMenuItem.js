import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef, useImperativeHandle, useContext } from 'react';
import { Success } from '@react-vant/icons';
import clsx from 'clsx';
import Cell from '../cell';
import { useSetState } from '../hooks';
import Popup from '../popup';
import { createNamespace, getZIndexStyle, pick } from '../utils';
import { renderToContainer } from '../utils/dom/renderToContainer';
import DropdownMenuContext from './DropdownMenuContext';
const inheritPropsKey = ['overlay', 'overlayClass', 'overlayStyle', 'disabled', 'placeholder', 'onOpen', 'onClosed', 'onOpened', 'teleport', 'closeOnClickOverlay'];

function inheritProps(parentProps, props) {
  return Object.assign(Object.assign({}, parentProps), props);
}

const [bem] = createNamespace('dropdown-item');
const DropdownMenuItem = forwardRef((props, ref) => {
  var _a;

  const [state, setState] = useSetState({
    transition: true,
    showWrapper: false
  });
  const parent = useContext(DropdownMenuContext);
  const currentValue = (_a = parent.value) === null || _a === void 0 ? void 0 : _a[props.name];

  const onClosed = () => {
    var _a, _b;

    setState({
      showWrapper: false
    });
    (_b = (_a = props.onClosed) !== null && _a !== void 0 ? _a : parent.props.onClosed) === null || _b === void 0 ? void 0 : _b();
  };

  const onClickWrapper = event => {
    // prevent being identified as clicking outside and closed when using teleport
    if (props.teleport) {
      event.stopPropagation();
    }
  };

  const onClose = () => {
    var _a, _b;

    parent.close();
    (_b = (_a = props.onClose) !== null && _a !== void 0 ? _a : parent.props.onClose) === null || _b === void 0 ? void 0 : _b();
  };

  const toggle = (show = !props.showPopup, options = {}) => {
    if (show === props.showPopup) {
      return;
    }

    const newState = {};
    newState.transition = !options.immediate;

    if (show) {
      newState.showWrapper = true;
    } else {
      onClose();
    }

    setState(newState);
  };

  const renderTitle = itemValue => {
    if (props.title) {
      return props.title;
    }

    const match = props.options.find(option => option.value === itemValue);
    return match ? match.text : props.placeholder;
  };

  const renderOption = option => {
    const {
      activeColor
    } = parent.props;
    const active = option.value === currentValue;

    const onClick = () => {
      if (option.value !== currentValue) {
        parent.onChange({
          [props.name]: option.value
        });
      }

      onClose();
    };

    return _jsx(Cell, Object.assign({
      clickable: true,
      icon: option.icon,
      title: option.text,
      className: clsx(bem('option', {
        active
      })),
      style: {
        color: active ? activeColor : ''
      },
      onClick: onClick
    }, {
      children: active && _jsx(Success, {
        className: clsx(bem('icon')),
        color: activeColor
      })
    }), option.value);
  };

  const renderContent = () => {
    var _a;

    const {
      offset
    } = props;
    const {
      zIndex,
      overlayStyle,
      duration,
      direction
    } = parent.props;
    const style = getZIndexStyle(zIndex);

    if (direction === 'down') {
      style.top = `${offset}px`;
    } else {
      style.bottom = `${offset}px`;
    }

    const attrs = pick(inheritProps(parent.props, props), inheritPropsKey);
    return _jsx("div", Object.assign({
      style: Object.assign(Object.assign({}, style), {
        display: state.showWrapper ? 'block' : 'none'
      }),
      className: clsx(bem([direction])),
      onClick: onClickWrapper
    }, {
      children: _jsxs(Popup, Object.assign({}, attrs, {
        teleport: null,
        visible: props.showPopup,
        className: clsx(bem('content')),
        position: direction === 'down' ? 'top' : 'bottom',
        duration: state.transition ? +duration : 0,
        overlayStyle: Object.assign({
          position: 'absolute'
        }, overlayStyle),
        onClose: onClose,
        onClosed: onClosed
      }, {
        children: [(_a = props.options) === null || _a === void 0 ? void 0 : _a.map(renderOption), props.children]
      }))
    }));
  };

  useImperativeHandle(ref, () => ({
    toggle,
    renderTitle,
    state,
    titleClass: props.titleClass,
    disabled: props.disabled,
    name: props.name,
    options: props.options
  }));
  if (props.teleport) return renderToContainer(props.teleport, renderContent());
  return renderContent();
});
DropdownMenuItem.defaultProps = {
  placeholder: '请选择',
  options: []
};
export default DropdownMenuItem;