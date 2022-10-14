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

var _button = _interopRequireDefault(require("../button"));

var _ActionBarContext = _interopRequireDefault(require("./ActionBarContext"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const [bem] = (0, _utils.createNamespace)('action-bar-button');

const ActionBarButton = props => {
  const {
    type,
    icon,
    text,
    color,
    loading,
    disabled,
    index
  } = props;
  const {
    parent
  } = (0, _react().useContext)(_ActionBarContext.default);
  const isFirst = (0, _react().useMemo)(() => {
    if (parent) {
      const prev = parent.children[index - 1];
      return !(prev && 'isButton' in prev.type);
    }

    return false;
  }, [index, parent]);
  const isLast = (0, _react().useMemo)(() => {
    if (parent) {
      const next = parent.children[index + 1];
      return !(next && 'isButton' in next.type);
    }

    return false;
  }, [index, parent]);
  return (0, _jsxRuntime().jsx)(_button.default, Object.assign({
    className: (0, _clsx().default)(props.className, bem([type, {
      last: isLast,
      first: isFirst
    }])),
    style: props.style,
    size: 'large',
    type: type,
    icon: icon,
    color: color,
    loading: loading,
    disabled: disabled,
    onClick: props.onClick
  }, {
    children: props.children ? props.children : text
  }));
};

const ActionBarButtonNameSpace = Object.assign(ActionBarButton, {
  isButton: true
});
var _default = ActionBarButtonNameSpace;
exports.default = _default;