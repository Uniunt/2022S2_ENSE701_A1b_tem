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

var _TabbarContext = _interopRequireDefault(require("./TabbarContext"));

var _badge = _interopRequireDefault(require("../badge"));

var _utils = require("../utils");

var _devLog = require("../utils/dev-log");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const [bem] = (0, _utils.createNamespace)('tabbar-item');

const TabbarItem = props => {
  const {
    setActive,
    index
  } = props;
  const {
    parent
  } = (0, _react().useContext)(_TabbarContext.default);
  const {
    activeColor,
    inactiveColor
  } = parent;

  if (!parent) {
    if (process.env.NODE_ENV !== 'production') {
      (0, _devLog.devWarning)('Tabbar.Item', '<TabbarItem> must be a child component of <Tabbar>.');
    }
  }

  const active = (0, _react().useMemo)(() => {
    return (props.name || index) === parent.value;
  }, [props.name, index, parent.value]);

  const onClick = event => {
    var _a, _b;

    setActive((_a = props.name) !== null && _a !== void 0 ? _a : index);
    (_b = props.onClick) === null || _b === void 0 ? void 0 : _b.call(props, event);
  };

  const renderIcon = () => {
    if (typeof props.icon === 'function') {
      return props.icon(active);
    }

    if (props.icon) {
      return props.icon;
    }

    return null;
  };

  const color = active ? activeColor : inactiveColor;
  return (0, _jsxRuntime().jsxs)("div", Object.assign({
    className: (0, _clsx().default)(props.className, bem({
      active
    })),
    style: Object.assign(Object.assign({}, props.style), {
      color
    }),
    onClick: onClick
  }, {
    children: [(0, _jsxRuntime().jsx)(_badge.default, Object.assign({}, props.badge, {
      className: (0, _clsx().default)(bem('icon'))
    }, {
      children: renderIcon()
    })), (0, _jsxRuntime().jsx)("div", Object.assign({
      className: (0, _clsx().default)(bem('text'))
    }, {
      children: typeof props.children === 'function' ? props.children(active) : props.children
    }))]
  }));
};

var _default = TabbarItem;
exports.default = _default;