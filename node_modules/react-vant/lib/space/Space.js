"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const formatGap = gap => typeof gap === 'number' ? `${gap}px` : gap;

const [bem] = (0, _utils.createNamespace)('space');

const Space = props => {
  const {
    wrap,
    block,
    direction,
    align,
    justify
  } = props;

  const style = _react().default.useMemo(() => {
    if (props.gap) {
      if (Array.isArray(props.gap)) {
        const [gapV, gapH] = props.gap;
        return Object.assign(Object.assign({}, props.style), {
          '--gap': `${formatGap(gapV)} ${formatGap(gapH)}`
        });
      }

      return Object.assign(Object.assign({}, props.style), {
        '--gap': formatGap(props.gap)
      });
    }

    return props.style;
  }, [props.style, props.gap]);

  const childList = (0, _react().useMemo)(() => _react().default.Children.map(props.children, c => c).filter(c => c !== null && c !== undefined), [props.children]);
  return (0, _jsxRuntime().jsx)("div", Object.assign({
    className: (0, _clsx().default)(props.className, bem({
      wrap,
      block,
      [`${direction}`]: !!direction,
      [`align-${align}`]: !!align,
      [`justify-${justify}`]: !!justify
    })),
    style: style,
    onClick: props.onClick
  }, {
    children: childList.map((child, idx) => {
      return (0, _jsxRuntime().jsxs)(_react().default.Fragment, {
        children: [(0, _jsxRuntime().jsx)("div", Object.assign({
          className: (0, _clsx().default)(bem('item'))
        }, {
          children: child
        })), !!props.divider && idx !== childList.length - 1 && (0, _jsxRuntime().jsx)("div", Object.assign({
          className: (0, _clsx().default)(bem('item-divider'))
        }, {
          children: props.divider
        }))]
      }, idx);
    })
  }));
};

Space.defaultProps = {
  direction: 'horizontal'
};
var _default = Space;
exports.default = _default;