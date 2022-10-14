"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _tslib() {
  const data = require("tslib");

  _tslib = function () {
    return data;
  };

  return data;
}

function _jsxRuntime() {
  const data = require("react/jsx-runtime");

  _jsxRuntime = function () {
    return data;
  };

  return data;
}

function _react() {
  const data = _interopRequireWildcard(require("react"));

  _react = function () {
    return data;
  };

  return data;
}

function _clsx() {
  const data = _interopRequireDefault(require("clsx"));

  _clsx = function () {
    return data;
  };

  return data;
}

var _utils = require("../utils");

var _constant = require("../utils/constant");

var _badge = _interopRequireDefault(require("../badge"));

var _devLog = require("../utils/dev-log");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const [bem] = (0, _utils.createNamespace)('grid-item');

const GridItem = _a => {
  var {
    children,
    className,
    style
  } = _a,
      props = (0, _tslib().__rest)(_a, ["children", "className", "style"]);
  const {
    index,
    parent
  } = props;

  if (!parent) {
    if (process.env.NODE_ENV !== 'production') {
      (0, _devLog.devWarning)('GridItem', ' <GridItem> must be a child component of <Grid>.');
    }
  }

  const rootStyle = (0, _react().useMemo)(() => {
    const {
      square,
      gutter,
      columnNum
    } = parent;
    const percent = `${100 / +columnNum}%`;
    const internalStyle = Object.assign(Object.assign({}, style), {
      flexBasis: percent
    });

    if (square) {
      internalStyle.paddingTop = percent;
    } else if (gutter) {
      const gutterValue = (0, _utils.addUnit)(gutter);
      internalStyle.paddingRight = gutterValue;

      if (index >= columnNum) {
        internalStyle.marginTop = gutterValue;
      }
    }

    return internalStyle;
  }, [parent.style, parent.gutter, parent.columnNum]);
  const contentStyle = (0, _react().useMemo)(() => {
    const {
      square,
      gutter
    } = parent;

    if (square && gutter) {
      const gutterValue = (0, _utils.addUnit)(gutter);
      return Object.assign(Object.assign({}, props.contentStyle), {
        right: gutterValue,
        bottom: gutterValue,
        height: 'auto'
      });
    }

    return props.contentStyle;
  }, [parent.gutter, parent.columnNum, props.contentStyle]);

  const renderIcon = () => {
    if (props.icon) {
      return (0, _jsxRuntime().jsx)(_badge.default, Object.assign({}, props.badge, {
        children: _react().default.cloneElement(props.icon, {
          className: (0, _clsx().default)(bem('icon')),
          color: props.iconColor,
          fontSize: parent.iconSize
        })
      }));
    }

    return null;
  };

  const renderText = () => {
    if (_react().default.isValidElement(props.text)) {
      return props.text;
    }

    if (props.text) {
      return (0, _jsxRuntime().jsx)("span", Object.assign({
        className: (0, _clsx().default)(bem('text'))
      }, {
        children: props.text
      }));
    }

    return null;
  };

  const renderContent = () => {
    if (children) {
      return children;
    }

    return (0, _jsxRuntime().jsxs)(_jsxRuntime().Fragment, {
      children: [renderIcon(), renderText()]
    });
  };

  const {
    center,
    border,
    square,
    gutter,
    reverse,
    direction
  } = parent;
  const classes = (0, _clsx().default)(props.contentClassName, bem('content', [direction, {
    center,
    square,
    reverse,
    clickable: !!props.onClick,
    surround: border && gutter
  }]), {
    [_constant.BORDER]: border
  });
  return (0, _jsxRuntime().jsx)("div", Object.assign({
    className: (0, _clsx().default)(className, bem({
      square
    })),
    style: rootStyle
  }, {
    children: (0, _jsxRuntime().jsx)("div", Object.assign({
      role: props.onClick ? 'button' : undefined,
      className: classes,
      style: contentStyle,
      onClick: props.onClick
    }, {
      children: renderContent()
    }))
  }));
};

GridItem.defaultProps = {
  index: 0,
  parent: {}
};
var _default = GridItem;
exports.default = _default;