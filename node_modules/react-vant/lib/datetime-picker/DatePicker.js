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

var _date = require("../utils/validate/date");

var _utils2 = require("../utils");

var _hooks = require("../hooks");

var _useRefState = _interopRequireDefault(require("../hooks/use-ref-state"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const DatePicker = (0, _react().forwardRef)((props, ref) => {
  const {
    value,
    defaultValue,
    formatter,
    columnsOrder,
    type: datePickerType,
    filter,
    minDate,
    maxDate
  } = props,
        pickerProps = (0, _tslib().__rest)(props, ["value", "defaultValue", "formatter", "columnsOrder", "type", "filter", "minDate", "maxDate"]);

  const formatValue = date => {
    if (!(0, _date.isDate)(date)) {
      date = minDate;
    }

    date = Math.max(date, minDate.getTime());
    date = Math.min(date, maxDate.getTime());
    return new Date(date);
  };

  const [currentDate, setCurrentDate, currentDateRef] = (0, _useRefState.default)(() => formatValue(value || defaultValue));

  const getBoundary = (type, value) => {
    const boundary = props[`${type}Date`];
    const year = boundary.getFullYear();
    let month = 1;
    let date = 1;
    let hour = 0;
    let minute = 0;

    if (type === 'max') {
      month = 12;
      date = (0, _utils.getMonthEndDay)(value.getFullYear(), value.getMonth() + 1);
      hour = 23;
      minute = 59;
    }

    if (value.getFullYear() === year) {
      month = boundary.getMonth() + 1;

      if (value.getMonth() + 1 === month) {
        date = boundary.getDate();

        if (value.getDate() === date) {
          hour = boundary.getHours();

          if (value.getHours() === hour) {
            minute = boundary.getMinutes();
          }
        }
      }
    }

    return {
      [`${type}Year`]: year,
      [`${type}Month`]: month,
      [`${type}Date`]: date,
      [`${type}Hour`]: hour,
      [`${type}Minute`]: minute
    };
  };

  const originColumns = (0, _react().useMemo)(() => {
    const {
      maxYear,
      maxDate,
      maxMonth,
      maxHour,
      maxMinute
    } = getBoundary('max', currentDateRef.current);
    const {
      minYear,
      minDate,
      minMonth,
      minHour,
      minMinute
    } = getBoundary('min', currentDateRef.current);
    let result = [{
      type: 'year',
      range: [minYear, maxYear]
    }, {
      type: 'month',
      range: [minMonth, maxMonth]
    }, {
      type: 'day',
      range: [minDate, maxDate]
    }, {
      type: 'hour',
      range: [minHour, maxHour]
    }, {
      type: 'minute',
      range: [minMinute, maxMinute]
    }];

    switch (datePickerType) {
      case 'date':
        result = result.slice(0, 3);
        break;

      case 'year-month':
        result = result.slice(0, 2);
        break;

      case 'month-day':
        result = result.slice(1, 3);
        break;

      case 'datehour':
        result = result.slice(0, 4);
        break;

      default:
        break;
    }

    if (columnsOrder) {
      const columnsOrderArr = columnsOrder.concat(result.map(column => column.type));
      result.sort((a, b) => columnsOrderArr.indexOf(a.type) - columnsOrderArr.indexOf(b.type));
    }

    return result.map(({
      type,
      range: rangeArr
    }) => {
      // 根据范围获取每列的值
      let values = (0, _utils.times)(rangeArr[1] - rangeArr[0] + 1, index => {
        return (0, _utils2.padZero)(rangeArr[0] + index);
      });

      if (filter) {
        values = filter(type, values);
      }

      return {
        type,
        values
      };
    });
  }, [columnsOrder, currentDateRef.current, minDate, maxDate]);
  const columns = (0, _react().useMemo)(() => originColumns.map(column => column.values.map(value => formatter(column.type, value))), [originColumns, formatter]);
  const pickerValue = (0, _react().useMemo)(() => {
    const value = props.popup ? formatValue(props.value) : currentDateRef.current;
    const values = originColumns.map(column => {
      switch (column.type) {
        case 'year':
          return formatter('year', `${value.getFullYear()}`);

        case 'month':
          return formatter('month', (0, _utils2.padZero)(value.getMonth() + 1));

        case 'day':
          return formatter('day', (0, _utils2.padZero)(value.getDate()));

        case 'hour':
          return formatter('hour', (0, _utils2.padZero)(value.getHours()));

        case 'minute':
          return formatter('minute', (0, _utils2.padZero)(value.getMinutes()));

        default:
          // no default
          return '';
      }
    });
    return values;
  }, [props.value, currentDateRef.current, formatValue]);

  const updateInnerValue = indexes => {
    const {
      type
    } = props;

    const getValue = datetimePickerColumnType => {
      let index = 0;
      originColumns.forEach((column, columnIndex) => {
        if (datetimePickerColumnType === column.type) {
          index = columnIndex;
        }
      });
      const {
        values
      } = originColumns[index];
      return (0, _utils.getTrueValue)(values[indexes[index]]);
    };

    let year = null;
    let month = null;
    let day = null;

    if (type === 'month-day') {
      year = (currentDate || minDate).getFullYear();
      month = getValue('month');
      day = getValue('day');
    } else {
      year = getValue('year');
      month = getValue('month');
      day = type === 'year-month' ? 1 : getValue('day');
    }

    const maxDay = (0, _utils.getMonthEndDay)(year, month);
    day = day > maxDay ? maxDay : day;
    let hour = 0;
    let minute = 0;

    if (type === 'datehour') {
      hour = +getValue('hour');
    }

    if (type === 'datetime') {
      hour = +getValue('hour');
      minute = +getValue('minute');
    }

    return formatValue(new Date(year, month - 1, day, hour, minute));
  };

  const onChange = (val, values, indexes) => {
    var _a;

    const nextValue = updateInnerValue(indexes);
    setCurrentDate(nextValue);
    (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, nextValue);
  };

  const onConfirm = () => {
    var _a;

    (_a = props.onConfirm) === null || _a === void 0 ? void 0 : _a.call(props, currentDate);
  };

  (0, _hooks.useUpdateEffect)(() => {
    const nextValue = formatValue(value);

    if (nextValue && nextValue.valueOf() !== (currentDate === null || currentDate === void 0 ? void 0 : currentDate.valueOf())) {
      setCurrentDate(nextValue);
    }
  }, [value, filter, minDate, maxDate]);
  return (0, _jsxRuntime().jsx)(_picker.default, Object.assign({}, pickerProps, {
    value: pickerValue,
    ref: ref,
    columns: columns,
    onChange: onChange,
    onConfirm: onConfirm,
    onCancel: props.onCancel
  }, {
    children: (_, selectRows, actions) => {
      var _a;

      return (_a = props.children) === null || _a === void 0 ? void 0 : _a.call(props, value, selectRows, actions);
    }
  }));
});
const currentYear = new Date().getFullYear();
DatePicker.defaultProps = {
  type: 'datetime',
  placeholder: false,
  minDate: new Date(currentYear - 10, 0, 1),
  maxDate: new Date(currentYear + 10, 11, 31),
  formatter: (type, value) => value
};
var _default = DatePicker;
exports.default = _default;