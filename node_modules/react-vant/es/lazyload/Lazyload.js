import { Fragment as _Fragment, jsx as _jsx } from "react/jsx-runtime";
import { useRef } from 'react';
import cls from 'clsx';
import { useInViewport } from '../hooks';
import Skeleton from '../skeleton';
import { createNamespace } from '../utils';
const [bem] = createNamespace('lazyload');

const Lazyload = props => {
  const ref = useRef();
  const [inViewPort] = useInViewport(ref);
  const {
    height,
    placeholder,
    children,
    className,
    style
  } = props;
  return inViewPort ? _jsx(_Fragment, {
    children: children
  }) : _jsx("div", Object.assign({
    ref: ref,
    className: cls(bem(), className),
    style: Object.assign({
      height
    }, style)
  }, {
    children: placeholder
  }));
};

Lazyload.defaultProps = {
  placeholder: _jsx(Skeleton, {
    title: true
  })
};
export default Lazyload;