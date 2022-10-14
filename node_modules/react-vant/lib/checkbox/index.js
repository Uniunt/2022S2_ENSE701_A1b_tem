"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = void 0;
Object.defineProperty(exports, "CheckboxGroup", {
  enumerable: true,
  get: function () {
    return _CheckboxGroup.default;
  }
});
exports.default = void 0;

function _react() {
  const data = _interopRequireDefault(require("react"));

  _react = function () {
    return data;
  };

  return data;
}

require("./style/index.css");

var _CheckboxGroup = _interopRequireDefault(require("./CheckboxGroup"));

var _Checkbox2 = _interopRequireDefault(require("./Checkbox"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Checkbox = Object.assign(_Checkbox2.default, {
  Group: _CheckboxGroup.default
});
exports.Checkbox = Checkbox;
var _default = Checkbox;
exports.default = _default;