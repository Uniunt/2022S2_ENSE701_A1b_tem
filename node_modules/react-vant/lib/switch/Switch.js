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

var _useMergedState = _interopRequireDefault(require("../hooks/use-merged-state"));

var _loading = _interopRequireDefault(require("../loading"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const [bem] = (0, _utils.createNamespace)('switch');

const Swtich = props => {
  const {
    loading,
    disabled,
    size,
    activeColor,
    inactiveColor
  } = props;
  const [checked, setChecked] = (0, _useMergedState.default)({
    value: props.checked,
    defaultValue: props.defaultChecked
  });
  const isChecked = (0, _react().useMemo)(() => checked === props.activeValue, [checked, props.activeValue]);
  const style = Object.assign({
    fontSize: (0, _utils.addUnit)(size),
    backgroundColor: isChecked ? activeColor : inactiveColor
  }, props.style);

  const onClick = e => {
    var _a, _b;

    if (!props.disabled) {
      (_a = props.onClick) === null || _a === void 0 ? void 0 : _a.call(props, e);
    }

    if (!props.disabled && !props.loading) {
      const newValue = isChecked ? props.inactiveValue : props.activeValue;
      setChecked(newValue);
      (_b = props.onChange) === null || _b === void 0 ? void 0 : _b.call(props, newValue);
    }
  };

  const renderLoading = () => {
    if (props.loading) {
      const color = isChecked ? props.activeColor : props.inactiveColor;
      return (0, _jsxRuntime().jsx)(_loading.default, {
        className: (0, _clsx().default)(bem('loading')),
        color: color
      });
    }

    return null;
  };

  return (0, _jsxRuntime().jsx)("div", Object.assign({
    role: 'switch',
    tabIndex: 0,
    className: (0, _clsx().default)(props.className, bem({
      on: isChecked,
      loading,
      disabled
    })),
    style: style,
    "aria-checked": isChecked,
    onClick: onClick
  }, {
    children: (0, _jsxRuntime().jsx)("div", Object.assign({
      className: (0, _clsx().default)(bem('node'))
    }, {
      children: renderLoading()
    }))
  }));
};

Swtich.defaultProps = {
  activeValue: true,
  inactiveValue: false
};
var _default = Swtich;
exports.default = _default;