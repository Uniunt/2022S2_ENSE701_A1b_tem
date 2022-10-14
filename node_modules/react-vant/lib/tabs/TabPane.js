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

var _TabsContext = _interopRequireDefault(require("./TabsContext"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const [bem] = (0, _utils.createNamespace)('tab');
const TabPane = (0, _react().forwardRef)((props, ref) => {
  const parent = (0, _react().useContext)(_TabsContext.default);
  const {
    animated,
    swipeable,
    scrollspy,
    lazyRender,
    lazyRenderPlaceholder
  } = parent.props;
  const {
    index
  } = props;
  const name = (0, _react().useMemo)(() => {
    var _a;

    return (_a = props.name) !== null && _a !== void 0 ? _a : index;
  }, [index, props.name]);
  const active = (0, _react().useMemo)(() => name === parent.currentName, [name, parent.currentName]);
  const [inited, setInited] = (0, _react().useState)(() => active);

  const init = () => {
    setInited(true);
  };

  const isActive = (0, _react().useMemo)(() => {
    if (active && !inited) {
      init();
    }

    return active;
  }, [active, inited]);
  const show = scrollspy || isActive;
  const shouldRender = inited || scrollspy || !lazyRender;
  const Content = shouldRender ? props.children : lazyRenderPlaceholder;

  if (animated || swipeable) {
    return (0, _jsxRuntime().jsx)("div", Object.assign({
      ref: ref,
      role: 'tabpanel',
      className: (0, _clsx().default)(bem('pane'))
    }, {
      children: Content
    }));
  }

  return (0, _jsxRuntime().jsx)("div", Object.assign({
    ref: ref,
    style: {
      display: show ? 'block' : 'none'
    },
    role: 'tabpanel',
    className: (0, _clsx().default)(bem('pane'))
  }, {
    children: Content
  }));
});
var _default = TabPane;
exports.default = _default;