"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.FormContext = exports.DEFAULT_FORM_CONTEXT = void 0;

function _react() {
  const data = _interopRequireDefault(require("react"));

  _react = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const DEFAULT_FORM_CONTEXT = {
  colon: false,
  showValidateMessage: true,
  border: true,
  labelAlign: 'left',
  controlAlign: 'left'
};
exports.DEFAULT_FORM_CONTEXT = DEFAULT_FORM_CONTEXT;

const FormContext = _react().default.createContext(DEFAULT_FORM_CONTEXT);

exports.FormContext = FormContext;