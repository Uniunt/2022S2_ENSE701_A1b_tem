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

const [bem] = (0, _utils.createNamespace)('progress');

const Progress = props => {
  const background = (0, _react().useMemo)(() => props.inactive ? '#cacaca' : props.color, [props.inactive, props.color]);

  const renderPivot = () => {
    const {
      textColor,
      pivotText,
      pivotColor,
      percentage
    } = props;
    const text = pivotText !== null && pivotText !== void 0 ? pivotText : `${percentage}%`;

    if (props.showPivot && text) {
      const style = {
        color: textColor,
        left: `${+percentage}%`,
        transform: `translate(-${+percentage}%,-50%)`,
        background: pivotColor || background
      };
      return (0, _jsxRuntime().jsx)("span", Object.assign({
        style: style,
        className: (0, _clsx().default)(bem('pivot'))
      }, {
        children: text
      }));
    }

    return null;
  };

  const {
    trackColor,
    percentage,
    strokeWidth
  } = props;
  const rootStyle = Object.assign(Object.assign({}, props.style), {
    background: trackColor,
    height: (0, _utils.addUnit)(strokeWidth)
  });
  const portionStyle = {
    background,
    transform: `scaleX(${+percentage / 100})`
  };
  return (0, _jsxRuntime().jsxs)("div", Object.assign({
    className: (0, _clsx().default)(bem(), props.className),
    style: rootStyle
  }, {
    children: [(0, _jsxRuntime().jsx)("span", {
      className: (0, _clsx().default)(bem('portion')),
      style: portionStyle
    }), renderPivot()]
  }));
};

Progress.defaultProps = {
  showPivot: true,
  percentage: 0
};
var _default = Progress;
exports.default = _default;