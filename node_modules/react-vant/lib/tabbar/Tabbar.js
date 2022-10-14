"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _jsxRuntime() {
  const data = require("react/jsx-runtime");

  _jsxRuntime = function () {
    return data;
  };

  return data;
}

function _react() {
  const data = _interopRequireWildcard(require("react"));

  _react = function () {
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

var _utils = require("../utils");

var _constant = require("../utils/constant");

var _useHeight = _interopRequireDefault(require("../hooks/use-height"));

var _TabbarContext = _interopRequireDefault(require("./TabbarContext"));

var _useMergedState = _interopRequireDefault(require("../hooks/use-merged-state"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const [bem] = (0, _utils.createNamespace)('tabbar');

const Tabbar = props => {
  const [current, setCurrent] = (0, _useMergedState.default)({
    value: props.value,
    defaultValue: props.defaultValue
  });
  const root = (0, _react().useRef)();
  const height = (0, _useHeight.default)(root);

  const renderPlaceholder = renderContent => {
    return (0, _jsxRuntime().jsx)("div", Object.assign({
      className: (0, _clsx().default)(bem('placeholder')),
      style: {
        height
      }
    }, {
      children: renderContent()
    }));
  }; // enable safe-area-inset-bottom by default when fixed


  const enableSafeArea = () => {
    var _a;

    return (_a = props.safeAreaInsetBottom) !== null && _a !== void 0 ? _a : props.fixed;
  };

  const setActive = active => {
    var _a;

    if (active !== props.value) {
      (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, active);
      setCurrent(active);
    }
  };

  const renderTabbar = () => {
    const {
      fixed,
      zIndex,
      border
    } = props;
    return (0, _jsxRuntime().jsx)(_TabbarContext.default.Provider, Object.assign({
      value: {
        parent: Object.assign(Object.assign({}, props), {
          value: current
        })
      }
    }, {
      children: (0, _jsxRuntime().jsx)("div", Object.assign({
        ref: root,
        style: Object.assign(Object.assign({}, props.style), (0, _utils.getZIndexStyle)(zIndex)),
        className: (0, _clsx().default)(props.className, bem({
          fixed
        }), {
          [_constant.BORDER_TOP_BOTTOM]: border,
          'rv-safe-area-bottom': enableSafeArea()
        })
      }, {
        children: _react().default.Children.toArray(props.children).filter(Boolean).map((child, index) => _react().default.cloneElement(child, {
          setActive,
          index
        }))
      }))
    }));
  };

  if (props.fixed && props.placeholder) {
    return renderPlaceholder(renderTabbar);
  }

  return renderTabbar();
};

Tabbar.defaultProps = {
  fixed: true,
  border: true,
  defaultValue: 0
};
var _default = Tabbar;
exports.default = _default;