"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Form = void 0;

function _react() {
  const data = _interopRequireDefault(require("react"));

  _react = function () {
    return data;
  };

  return data;
}

require("./style/index.css");

function _rcFieldForm() {
  const data = require("rc-field-form");

  _rcFieldForm = function () {
    return data;
  };

  return data;
}

var _FormSubscribe = require("./FormSubscribe");

var _Form2 = _interopRequireDefault(require("./Form"));

var _FormItem = _interopRequireDefault(require("./FormItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const Form = Object.assign(_Form2.default, {
  Item: _FormItem.default,
  useForm: _rcFieldForm().useForm,
  List: _rcFieldForm().List,
  Subscribe: _FormSubscribe.FormSubscribe,
  useWatch: _rcFieldForm().useWatch
});
exports.Form = Form;