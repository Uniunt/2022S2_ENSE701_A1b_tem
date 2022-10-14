"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _react() {
  const data = _interopRequireWildcard(require("react"));

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

var _picker = _interopRequireDefault(require("../picker"));

var _utils = require("./utils");

var _utils2 = require("../utils");

var _hooks = require("../hooks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const TimePicker = (0, _react().forwardRef)((props, ref) => {
  const {
    value,
    defaultValue,
    formatter,
    filter,
    minHour,
    maxHour,
    minMinute,
    maxMinute
  } = props,
        pickerProps = (0, _tslib().__rest)(props, ["value", "defaultValue", "formatter", "filter", "minHour", "maxHour", "minMinute", "maxMinute"]);

  const formatValue = str => {
    if (!str) {
      str = `${(0, _utils2.padZero)(minHour)}:${(0, _utils2.padZero)(minMinute)}`;
    }

    let [hour, minute] = str.split(':');
    hour = (0, _utils2.padZero)((0, _utils2.range)(hour, +minHour, +maxHour));
    minute = (0, _utils2.padZero)((0, _utils2.range)(minute, +minMinute, +maxMinute));
    return `${hour}:${minute}`;
  };

  const [currentDate, setCurrentDate] = (0, _react().useState)(() => formatValue(value === undefined ? defaultValue : value));
  const ranges = (0, _react().useMemo)(() => [{
    type: 'hour',
    range: [+minHour, +maxHour]
  }, {
    type: 'minute',
    range: [+minMinute, +maxMinute]
  }], [minHour, maxHour, minMinute, maxMinute]);
  const originColumns = (0, _react().useMemo)(() => ranges.map(({
    type,
    range: rangeArr
  }) => {
    let values = (0, _utils.times)(rangeArr[1] - rangeArr[0] + 1, index => (0, _utils2.padZero)(rangeArr[0] + index));

    if (filter) {
      values = filter(type, values);
    }

    return {
      type,
      values
    };
  }), [ranges]);
  const columns = (0, _react().useMemo)(() => originColumns.map(column => column.values.map(value => formatter(column.type, value))), [originColumns]);
  const pickerValue = (0, _react().useMemo)(() => {
    const pair = (props.popup ? formatValue(props.value) : currentDate).split(':');
    return [formatter('hour', pair[0]), formatter('minute', pair[1])];
  }, [props.value, currentDate, formatValue]);

  const onConfirm = () => {
    var _a;

    (_a = props.onConfirm) === null || _a === void 0 ? void 0 : _a.call(props, currentDate);
  };

  const onCancel = () => {
    var _a;

    (_a = props.onCancel) === null || _a === void 0 ? void 0 : _a.call(props);
  };

  const onChange = val => {
    var _a;

    const nextValue = formatValue(val.join(':'));
    setCurrentDate(nextValue);
    (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, nextValue);
  };

  (0, _hooks.useUpdateEffect)(() => {
    const nextValue = formatValue(currentDate);
    setCurrentDate(nextValue);
  }, [filter, minHour, maxHour, minMinute, maxMinute]);
  (0, _hooks.useUpdateEffect)(() => {
    const nextValue = formatValue(value);

    if (nextValue !== currentDate) {
      setCurrentDate(nextValue);
    }
  }, [value]);
  return (0, _jsxRuntime().jsx)(_picker.default, Object.assign({}, pickerProps, {
    ref: ref,
    columns: columns,
    value: pickerValue,
    onChange: onChange,
    onConfirm: onConfirm,
    onCancel: onCancel
  }, {
    children: (_, selectRows, actions) => {
      var _a;

      return (_a = props.children) === null || _a === void 0 ? void 0 : _a.call(props, value, selectRows, actions);
    }
  }));
});
TimePicker.defaultProps = {
  minHour: 0,
  maxHour: 23,
  minMinute: 0,
  maxMinute: 59,
  placeholder: false,
  defaultValue: '',
  formatter: (type, value) => value
};
var _default = TimePicker;
exports.default = _default;