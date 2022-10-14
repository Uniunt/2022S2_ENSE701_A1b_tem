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

var _utils = require("../utils");

var _ConfigProviderContext = _interopRequireWildcard(require("./ConfigProviderContext"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function mapThemeVarsToCSSVars(themeVars, prefix) {
  const cssVars = {};
  Object.keys(themeVars).forEach(key => {
    if (key.toString().startsWith(`--${prefix}-`)) {
      cssVars[key] = themeVars[key];
    } else {
      cssVars[`--${prefix}-${(0, _utils.kebabCase)(key)}`] = themeVars[key];
    }
  });
  return cssVars;
}

const ConfigProvider = _a => {
  var {
    className,
    style,
    themeVars,
    tag = 'div',
    children
  } = _a,
      props = (0, _tslib().__rest)(_a, ["className", "style", "themeVars", "tag", "children"]);
  const TagElement = tag;
  const varStyle = (0, _react().useMemo)(() => {
    if (themeVars) {
      return Object.assign(Object.assign({}, style), mapThemeVarsToCSSVars(themeVars, 'rv'));
    }

    return style;
  }, [style, themeVars]);
  return (0, _jsxRuntime().jsx)(_ConfigProviderContext.default.Provider, Object.assign({
    value: Object.assign(Object.assign({}, _ConfigProviderContext.INITIAL_STATE), props)
  }, {
    children: (0, _jsxRuntime().jsx)(TagElement, Object.assign({
      className: className,
      style: varStyle
    }, {
      children: children
    }))
  }));
};

ConfigProvider.defaultProps = {
  themeVars: {}
};
var _default = ConfigProvider;
exports.default = _default;