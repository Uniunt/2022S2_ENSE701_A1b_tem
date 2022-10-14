import { __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import cls from 'clsx';
import Popup from '../popup';
import { createNamespace } from '../utils';
const [bem] = createNamespace('notify');

const Notify = _a => {
  var {
    children
  } = _a,
      props = __rest(_a, ["children"]);

  const style = {
    color: props.color,
    background: props.background
  };
  return _jsx(Popup, Object.assign({
    visible: props.visible,
    style: style,
    overlay: false,
    position: 'top',
    lockScroll: props.lockScroll,
    onClick: props.onClick,
    onClose: props.onClose,
    onClosed: props.onClosed,
    teleport: props.teleport
  }, {
    children: _jsx("div", Object.assign({
      className: cls(bem([props.type]), props.className)
    }, {
      children: children || props.message
    }))
  }));
};

Notify.defaultProps = {
  type: 'danger',
  duration: 3000,
  color: 'white',
  lockScroll: false
};
export default Notify;