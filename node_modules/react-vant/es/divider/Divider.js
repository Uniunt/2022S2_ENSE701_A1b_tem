import { __rest } from "tslib";
import { jsx as _jsx } from "react/jsx-runtime";
import cls from 'clsx';
import { createNamespace } from '../utils';
const [bem] = createNamespace('divider');

const Divider = _a => {
  var {
    children,
    className,
    hairline,
    dashed,
    type,
    contentPosition
  } = _a,
      props = __rest(_a, ["children", "className", "hairline", "dashed", "type", "contentPosition"]);

  return _jsx("div", Object.assign({
    role: 'separator',
    className: cls(className, bem({
      dashed,
      hairline,
      'vertical': type === 'vertical',
      [`content-${contentPosition}`]: !!children
    }))
  }, props, {
    children: children
  }));
};

Divider.defaultProps = {
  hairline: true,
  type: 'horizontal',
  contentPosition: 'center'
};
export default Divider;