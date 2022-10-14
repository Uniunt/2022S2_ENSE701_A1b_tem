"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Steps = void 0;
Object.defineProperty(exports, "StepsItem", {
  enumerable: true,
  get: function () {
    return _StepsItem.default;
  }
});

function _react() {
  const data = _interopRequireDefault(require("react"));

  _react = function () {
    return data;
  };

  return data;
}

require("./style/index.css");

var _Steps2 = _interopRequireDefault(require("./Steps"));

var _StepsItem = _interopRequireDefault(require("./StepsItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Steps = Object.assign(_Steps2.default, {
  Item: _StepsItem.default
});
exports.Steps = Steps;