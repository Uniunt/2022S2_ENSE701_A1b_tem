import { jsx as _jsx } from "react/jsx-runtime";
import React, { useMemo } from 'react';
import clsx from 'clsx';
import ActionBarContext from './ActionBarContext';
import { createNamespace } from '../utils';
const [bem] = createNamespace('action-bar');

const ActionBar = props => {
  const children = useMemo(() => React.Children.toArray(props.children), [props.children]);
  return _jsx(ActionBarContext.Provider, Object.assign({
    value: {
      parent: {
        children
      }
    }
  }, {
    children: _jsx("div", Object.assign({
      className: clsx(props.className, bem(), {
        'rv-safe-area-bottom': props.safeAreaInsetBottom
      }),
      style: props.style
    }, {
      children: React.Children.toArray(props.children).filter(Boolean).map((child, index) => React.cloneElement(child, {
        index
      }))
    }))
  }));
};

ActionBar.defaultProps = {
  safeAreaInsetBottom: true
};
export default ActionBar;