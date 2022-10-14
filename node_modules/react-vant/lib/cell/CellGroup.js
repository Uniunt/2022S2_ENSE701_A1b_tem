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

var _constant = require("../utils/constant");

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const [bem] = (0, _utils.createNamespace)('cell-group');

const CellGroup = props => {
  const {
    title,
    border,
    inset: insetP,
    card
  } = props;
  const inset = card || insetP;

  const renderGroup = () => (0, _jsxRuntime().jsx)("div", Object.assign({
    className: (0, _clsx().default)(bem({
      inset
    }), {
      [_constant.BORDER_TOP_BOTTOM]: !inset && border
    })
  }, {
    children: props.children
  }));

  const renderTitle = () => {
    if (title) return (0, _jsxRuntime().jsx)("div", Object.assign({
      className: (0, _clsx().default)(bem('title'))
    }, {
      children: title
    }));
    return null;
  };

  return (0, _jsxRuntime().jsxs)("div", Object.assign({
    className: props.className,
    style: props.style
  }, {
    children: [renderTitle(), renderGroup()]
  }));
};

CellGroup.defaultProps = {
  border: true
};
var _default = CellGroup;
exports.default = _default;