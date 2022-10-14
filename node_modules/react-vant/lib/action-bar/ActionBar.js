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

var _ActionBarContext = _interopRequireDefault(require("./ActionBarContext"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const [bem] = (0, _utils.createNamespace)('action-bar');

const ActionBar = props => {
  const children = (0, _react().useMemo)(() => _react().default.Children.toArray(props.children), [props.children]);
  return (0, _jsxRuntime().jsx)(_ActionBarContext.default.Provider, Object.assign({
    value: {
      parent: {
        children
      }
    }
  }, {
    children: (0, _jsxRuntime().jsx)("div", Object.assign({
      className: (0, _clsx().default)(props.className, bem(), {
        'rv-safe-area-bottom': props.safeAreaInsetBottom
      }),
      style: props.style
    }, {
      children: _react().default.Children.toArray(props.children).filter(Boolean).map((child, index) => _react().default.cloneElement(child, {
        index
      }))
    }))
  }));
};

ActionBar.defaultProps = {
  safeAreaInsetBottom: true
};
var _default = ActionBar;
exports.default = _default;