import { __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import cls from 'clsx';
import { Checked } from '@react-vant/icons';
import { createNamespace } from '../utils';
const [bem] = createNamespace('steps');

const Steps = _a => {
  var {
    children,
    className,
    style
  } = _a,
      props = __rest(_a, ["children", "className", "style"]);

  return _jsx("div", Object.assign({
    className: cls(className, bem([props.direction])),
    style: style
  }, {
    children: _jsx("div", Object.assign({
      className: cls(bem('items'))
    }, {
      children: React.Children.toArray(children).filter(Boolean).map((child, index) => React.cloneElement(child, {
        index,
        parent: props
      }))
    }))
  }));
};

Steps.defaultProps = {
  active: 0,
  direction: 'horizontal',
  activeIcon: _jsx(Checked, {})
};
export default Steps;