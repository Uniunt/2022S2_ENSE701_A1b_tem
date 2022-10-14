import { jsx as _jsx } from "react/jsx-runtime";
import { forwardRef } from 'react';
import clsx from 'clsx';
import LoadMore from './LoadMore';
const List = forwardRef((props, ref) => {
  return _jsx(LoadMore, Object.assign({
    ref: ref,
    className: clsx(props.className),
    style: props.style,
    onLoad: props.onLoad,
    threshold: props.offset,
    finished: props.finished,
    finishedText: props.finishedText,
    loadingText: props.loadingText,
    errorText: props.errorText
  }, {
    children: props.children
  }));
});
List.defaultProps = {
  offset: 300
};
export default List;