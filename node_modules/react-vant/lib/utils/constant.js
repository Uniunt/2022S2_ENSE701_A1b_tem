"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.WHITE = exports.SHADOW = exports.RED = exports.GREEN = exports.GRAY_DARK = exports.GRAY = exports.COMPONENT_TYPE_KEY = exports.BORDER_UNSET_TOP_BOTTOM = exports.BORDER_TOP_BOTTOM = exports.BORDER_TOP = exports.BORDER_SURROUND = exports.BORDER_RIGHT = exports.BORDER_LEFT = exports.BORDER_BOTTOM = exports.BORDER = exports.BLUE = void 0;

function _react() {
  const data = _interopRequireDefault(require("react"));

  _react = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// color
const RED = '#ff603f';
exports.RED = RED;
const BLUE = '#2879ff';
exports.BLUE = BLUE;
const GREEN = '#00c853';
exports.GREEN = GREEN;
const WHITE = '#fff';
exports.WHITE = WHITE;
const GRAY = '#c9c9c9';
exports.GRAY = GRAY;
const GRAY_DARK = '#969799'; // border

exports.GRAY_DARK = GRAY_DARK;
const BORDER = 'rv-hairline';
exports.BORDER = BORDER;
const BORDER_TOP = `${BORDER}--top`;
exports.BORDER_TOP = BORDER_TOP;
const BORDER_LEFT = `${BORDER}--left`;
exports.BORDER_LEFT = BORDER_LEFT;
const BORDER_RIGHT = `${BORDER}--right`;
exports.BORDER_RIGHT = BORDER_RIGHT;
const BORDER_BOTTOM = `${BORDER}--bottom`;
exports.BORDER_BOTTOM = BORDER_BOTTOM;
const BORDER_SURROUND = `${BORDER}--surround`;
exports.BORDER_SURROUND = BORDER_SURROUND;
const BORDER_TOP_BOTTOM = `${BORDER}--top-bottom`;
exports.BORDER_TOP_BOTTOM = BORDER_TOP_BOTTOM;
const BORDER_UNSET_TOP_BOTTOM = `${BORDER}-unset--top-bottom`; // shadow

exports.BORDER_UNSET_TOP_BOTTOM = BORDER_UNSET_TOP_BOTTOM;
const SHADOW = 'rv-shadow'; // component type key

exports.SHADOW = SHADOW;
const COMPONENT_TYPE_KEY = '__REACT_VANT_COMPONENT';
exports.COMPONENT_TYPE_KEY = COMPONENT_TYPE_KEY;