"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _react() {
  const data = _interopRequireDefault(require("react"));

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

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const [bem] = (0, _utils.createNamespace)('divider');

const Divider = _a => {
  var {
    children,
    className,
    hairline,
    dashed,
    type,
    contentPosition
  } = _a,
      props = (0, _tslib().__rest)(_a, ["children", "className", "hairline", "dashed", "type", "contentPosition"]);
  return (0, _jsxRuntime().jsx)("div", Object.assign({
    role: 'separator',
    className: (0, _clsx().default)(className, bem({
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
var _default = Divider;
exports.default = _default;