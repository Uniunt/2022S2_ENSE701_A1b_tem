"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.DateTimePicker = void 0;

function _react() {
  const data = _interopRequireWildcard(require("react"));

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

var _DatePicker = _interopRequireDefault(require("./DatePicker"));

var _TimePicker = _interopRequireDefault(require("./TimePicker"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const [bem] = (0, _utils.createNamespace)('datetime-picker');
const DateTimePicker = (0, _react().forwardRef)((props, ref) => {
  const isTimePicker = props.type === 'time';
  if (isTimePicker) return (0, _jsxRuntime().jsx)(_TimePicker.default, Object.assign({
    ref: ref,
    className: (0, _clsx().default)(bem())
  }, props));
  return (0, _jsxRuntime().jsx)(_DatePicker.default, Object.assign({
    ref: ref,
    className: (0, _clsx().default)(bem())
  }, props));
});
exports.DateTimePicker = DateTimePicker;
var _default = DateTimePicker;
exports.default = _default;