import { __rest } from "tslib";
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import cls from 'clsx';
import { addUnit, createNamespace, getSizeStyle } from '../utils';
const DEFAULT_ROW_WIDTH = '100%';
const DEFAULT_LAST_ROW_WIDTH = '60%';
const [bem] = createNamespace('skeleton');

const Skeleton = _a => {
  var {
    children,
    className,
    style
  } = _a,
      props = __rest(_a, ["children", "className", "style"]);

  const getRowWidth = index => {
    const {
      rowWidth
    } = props;

    if (rowWidth === DEFAULT_ROW_WIDTH && index === +props.row - 1 && index !== 0) {
      return DEFAULT_LAST_ROW_WIDTH;
    }

    if (Array.isArray(rowWidth)) {
      return rowWidth[index];
    }

    return rowWidth;
  };

  const getRowHeight = index => {
    const {
      rowHeight
    } = props;

    if (Array.isArray(rowHeight)) {
      return rowHeight[index];
    }

    return rowHeight;
  };

  const renderAvatar = () => {
    if (props.avatar) {
      return _jsx("div", {
        className: cls(bem('avatar', props.avatarShape)),
        style: getSizeStyle(props.avatarSize)
      });
    }

    return null;
  };

  const renderTitle = () => {
    if (props.title) {
      const width = addUnit(props.titleWidth);
      const height = addUnit(getRowHeight(0));
      return _jsx("div", {
        className: cls(bem('title')),
        style: {
          width,
          height
        }
      });
    }

    return null;
  };

  const renderRows = () => Array(props.row).fill('').map((_, i) => {
    const width = addUnit(getRowWidth(i));
    const height = addUnit(getRowHeight(i)); // eslint-disable-next-line react/no-array-index-key

    return _jsx("div", {
      className: cls(bem('row')),
      style: {
        width,
        height
      }
    }, i);
  });

  if (!props.loading) return _jsx(_Fragment, {
    children: children
  });
  return _jsxs("div", Object.assign({
    className: cls(className, bem({
      animate: props.animate,
      round: props.round
    })),
    style: style
  }, {
    children: [renderAvatar(), _jsxs("div", Object.assign({
      className: cls(bem('content'))
    }, {
      children: [renderTitle(), renderRows()]
    }))]
  }));
};

Skeleton.defaultProps = {
  loading: true,
  animate: true,
  round: true,
  row: 3,
  avatarShape: 'round',
  rowWidth: DEFAULT_ROW_WIDTH
};
export default Skeleton;