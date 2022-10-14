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
  const data = _interopRequireDefault(require("react"));

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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const [bem] = (0, _utils.createNamespace)('grid');

const Grid = _a => {
  var {
    children,
    className,
    style
  } = _a,
      props = (0, _tslib().__rest)(_a, ["children", "className", "style"]);
  return (0, _jsxRuntime().jsx)("div", Object.assign({
    style: Object.assign({
      paddingLeft: (0, _utils.addUnit)(props.gutter)
    }, style),
    className: (0, _clsx().default)(className, bem(), {
      [_constant.BORDER_TOP]: props.border && !props.gutter
    })
  }, {
    children: _react().default.Children.toArray(children).filter(Boolean).map((child, index) => _react().default.cloneElement(child, {
      index,
      parent: props
    }))
  }));
};

Grid.defaultProps = {
  center: true,
  border: true,
  columnNum: 4
};
var _default = Grid;
exports.default = _default;