import { __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import cls from 'clsx';
import { addUnit, createNamespace } from '../utils';
import { BORDER_TOP } from '../utils/constant';
const [bem] = createNamespace('grid');

const Grid = _a => {
  var {
    children,
    className,
    style
  } = _a,
      props = __rest(_a, ["children", "className", "style"]);

  return _jsx("div", Object.assign({
    style: Object.assign({
      paddingLeft: addUnit(props.gutter)
    }, style),
    className: cls(className, bem(), {
      [BORDER_TOP]: props.border && !props.gutter
    })
  }, {
    children: React.Children.toArray(children).filter(Boolean).map((child, index) => React.cloneElement(child, {
      index,
      parent: props
    }))
  }));
};

Grid.defaultProps = {
  center: true,
  border: true,
  columnNum: 4
};
export default Grid;