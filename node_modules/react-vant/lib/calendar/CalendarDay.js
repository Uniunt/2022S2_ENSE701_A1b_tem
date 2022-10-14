"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _react() {
  const data = _interopRequireWildcard(require("react"));

  _react = function () {
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

const [bem] = (0, _utils.createNamespace)('calendar');

const CalenderDay = props => {
  const style = (0, _react().useMemo)(() => {
    const {
      item,
      index,
      color,
      offset,
      rowHeight
    } = props;
    const iternalStyle = {
      height: rowHeight
    };

    if (item.type === 'placeholder') {
      iternalStyle.width = '100%';
      return iternalStyle;
    }

    if (index === 0) {
      iternalStyle.marginLeft = `${100 * offset / 7}%`;
    }

    if (color) {
      switch (item.type) {
        case 'end':
        case 'start':
        case 'start-end':
        case 'multiple-middle':
        case 'multiple-selected':
          iternalStyle.background = color;
          break;

        case 'middle':
          iternalStyle.color = color;
          break;

        default:
          break;
      }
    }

    return iternalStyle;
  }, [props.item, props.index, props.color, props.offset, props.rowHeight]);

  const onClick = () => {
    var _a;

    if (props.item.type !== 'disabled') {
      (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, props.item);
    }
  };

  const renderTopInfo = () => {
    const {
      topInfo
    } = props.item;

    if (topInfo || props.topInfoRender) {
      return (0, _jsxRuntime().jsx)("div", Object.assign({
        className: (0, _clsx().default)(bem('top-info'))
      }, {
        children: props.topInfoRender ? props.topInfoRender(props.item) : topInfo
      }));
    }

    return null;
  };

  const renderBottomInfo = () => {
    const {
      bottomInfo
    } = props.item;

    if (bottomInfo || props.bottomInfoRender) {
      return (0, _jsxRuntime().jsx)("div", Object.assign({
        className: (0, _clsx().default)(bem('bottom-info'))
      }, {
        children: props.bottomInfoRender ? props.bottomInfoRender(props.item) : bottomInfo
      }));
    }

    return null;
  };

  const renderContent = () => {
    const {
      item,
      color,
      rowHeight
    } = props;
    const {
      type,
      text
    } = item;
    const Nodes = (0, _jsxRuntime().jsxs)(_jsxRuntime().Fragment, {
      children: [renderTopInfo(), text, renderBottomInfo()]
    });

    if (type === 'selected') {
      return (0, _jsxRuntime().jsx)("div", Object.assign({
        className: (0, _clsx().default)(bem('selected-day')),
        style: {
          width: rowHeight,
          height: rowHeight,
          background: color
        }
      }, {
        children: Nodes
      }));
    }

    return Nodes;
  };

  const {
    type,
    className
  } = props.item;

  if (type === 'placeholder') {
    return (0, _jsxRuntime().jsx)("div", {
      className: (0, _clsx().default)(bem('day')),
      style: style
    });
  }

  return (0, _jsxRuntime().jsx)("div", Object.assign({
    role: 'gridcell',
    style: style,
    className: (0, _clsx().default)(bem('day', type), className),
    tabIndex: type === 'disabled' ? undefined : -1,
    onClick: onClick
  }, {
    children: renderContent()
  }));
};

CalenderDay.defaultProps = {
  offset: 0
};
var _default = CalenderDay;
exports.default = _default;