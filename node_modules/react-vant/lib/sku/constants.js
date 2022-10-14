"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.UNSELECTED_SKU_VALUE_ID = exports.LIMIT_TYPE = void 0;

function _react() {
  const data = _interopRequireDefault(require("react"));

  _react = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const LIMIT_TYPE = {
  QUOTA_LIMIT: 0,
  STOCK_LIMIT: 1
};
exports.LIMIT_TYPE = LIMIT_TYPE;
const UNSELECTED_SKU_VALUE_ID = '';
exports.UNSELECTED_SKU_VALUE_ID = UNSELECTED_SKU_VALUE_ID;
var _default = {
  LIMIT_TYPE,
  UNSELECTED_SKU_VALUE_ID
};
exports.default = _default;