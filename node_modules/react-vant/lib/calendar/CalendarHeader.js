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

var _ConfigProviderContext = _interopRequireDefault(require("../config-provider/ConfigProviderContext"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const [bem] = (0, _utils.createNamespace)('calendar');

const CalenderHeader = props => {
  const {
    locale
  } = (0, _react().useContext)(_ConfigProviderContext.default);

  const renderTitle = () => {
    if (props.showTitle) {
      const text = props.title || locale.vanCalendar.title;
      return (0, _jsxRuntime().jsx)("div", Object.assign({
        className: (0, _clsx().default)(bem('header-title'))
      }, {
        children: text
      }));
    }

    return null;
  };

  const onClickSubtitle = event => {
    var _a;

    (_a = props.onClickSubtitle) === null || _a === void 0 ? void 0 : _a.call(props, event);
  };

  const renderSubtitle = () => {
    if (props.showSubtitle) {
      return (0, _jsxRuntime().jsx)("div", Object.assign({
        className: (0, _clsx().default)(bem('header-subtitle')),
        onClick: onClickSubtitle
      }, {
        children: props.subtitle
      }));
    }

    return null;
  };

  const renderWeekDays = () => {
    const {
      weekdays: customWeekdays,
      firstDayOfWeek
    } = props;
    const defaultWeekdays = locale.vanCalendar.weekdays;
    const weekdays = customWeekdays ? defaultWeekdays.map((wk, i) => customWeekdays[i] || wk) : defaultWeekdays;
    const renderWeekDaysContent = [...weekdays.slice(firstDayOfWeek, 7), ...weekdays.slice(0, firstDayOfWeek)];
    return (0, _jsxRuntime().jsx)("div", Object.assign({
      className: (0, _clsx().default)(bem('weekdays'))
    }, {
      children: renderWeekDaysContent.map((text, i) => // eslint-disable-next-line react/no-array-index-key
      (0, _jsxRuntime().jsx)("span", Object.assign({
        className: (0, _clsx().default)(bem('weekday'))
      }, {
        children: text
      }), i))
    }));
  };

  return (0, _jsxRuntime().jsxs)("div", Object.assign({
    className: (0, _clsx().default)(bem('header'))
  }, {
    children: [renderTitle(), renderSubtitle(), renderWeekDays()]
  }));
};

var _default = CalenderHeader;
exports.default = _default;