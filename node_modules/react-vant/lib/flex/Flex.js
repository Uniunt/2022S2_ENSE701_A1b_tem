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

function _clsx() {
  const data = _interopRequireDefault(require("clsx"));

  _clsx = function () {
    return data;
  };

  return data;
}

var _FlexContext = _interopRequireDefault(require("./FlexContext"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable @typescript-eslint/no-non-null-assertion */
const [bem] = (0, _utils.createNamespace)('flexbox');

const Flex = props => {
  const {
    direction,
    wrap,
    justify,
    align,
    gutter,
    style,
    className,
    children
  } = props,
        rest = (0, _tslib().__rest)(props, ["direction", "wrap", "justify", "align", "gutter", "style", "className", "children"]);
  const getGutter = (0, _react().useMemo)(() => Array.isArray(gutter) ? gutter : [gutter, 0], [gutter]);
  const rowStyle = Object.assign(Object.assign(Object.assign({}, getGutter[0] > 0 ? {
    marginLeft: getGutter[0] / -2,
    marginRight: getGutter[0] / -2
  } : {}), getGutter[1] > 0 ? {
    marginTop: getGutter[1] / -2,
    marginBottom: getGutter[1] / 2
  } : {}), style);
  const wrapCls = (0, _clsx().default)(className, bem([direction, wrap, justify ? `justify-${justify}` : false, align ? `align-${align}` : false]));
  return (0, _jsxRuntime().jsx)(_FlexContext.default.Provider, Object.assign({
    value: {
      gutter: getGutter
    }
  }, {
    children: (0, _jsxRuntime().jsx)("div", Object.assign({
      className: wrapCls,
      style: rowStyle
    }, rest, {
      children: children
    }))
  }));
};

Flex.defaultProps = {
  gutter: 0
};
var _default = Flex;
exports.default = _default;