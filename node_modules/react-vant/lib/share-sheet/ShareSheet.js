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

var _utils = require("../utils");

var _popup = _interopRequireDefault(require("../popup"));

var _ConfigProviderContext = _interopRequireDefault(require("../config-provider/ConfigProviderContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const PRESET_ICONS = ['qq', 'link', 'weibo', 'wechat', 'poster', 'qrcode', 'weapp-qrcode', 'wechat-moments'];

function getIconURL(icon) {
  if (PRESET_ICONS.includes(icon)) {
    return `https://img.yzcdn.cn/vant/share-sheet-${icon}.png`;
  }

  return icon;
}

const [bem] = (0, _utils.createNamespace)('share-sheet');

const ShareSheet = props => {
  const {
    locale
  } = (0, _react().useContext)(_ConfigProviderContext.default);

  const onCancel = () => {
    var _a;

    (_a = props.onCancel) === null || _a === void 0 ? void 0 : _a.call(props);
  };

  const onSelect = (option, index) => {
    var _a;

    (_a = props.onSelect) === null || _a === void 0 ? void 0 : _a.call(props, option, index);
  };

  const renderHeader = () => {
    const {
      title,
      description
    } = props;

    if (title || description) {
      return (0, _jsxRuntime().jsxs)("div", Object.assign({
        className: (0, _clsx().default)(bem('header'))
      }, {
        children: [title && (0, _jsxRuntime().jsx)("div", Object.assign({
          className: (0, _clsx().default)(bem('title'))
        }, {
          children: title
        })), description && (0, _jsxRuntime().jsx)("div", Object.assign({
          className: (0, _clsx().default)(bem('description'))
        }, {
          children: description
        }))]
      }));
    }

    return null;
  };

  const renderOption = (option, index) => {
    const {
      name,
      icon,
      className,
      description
    } = option;
    return (0, _jsxRuntime().jsxs)("div", Object.assign({
      role: 'button',
      tabIndex: 0,
      className: (0, _clsx().default)([bem('option'), className]),
      onClick: () => onSelect(option, index)
    }, {
      children: [typeof icon === 'string' ? (0, _jsxRuntime().jsx)("img", {
        alt: 'share sheet icon',
        src: getIconURL(icon),
        className: (0, _clsx().default)(bem('icon'))
      }) : icon, name && (0, _jsxRuntime().jsx)("span", Object.assign({
        className: (0, _clsx().default)(bem('name'))
      }, {
        children: name
      })), description && (0, _jsxRuntime().jsx)("span", Object.assign({
        className: (0, _clsx().default)(bem('option-description'))
      }, {
        children: description
      }))]
    }), index);
  };

  const renderOptions = (options, border, key) => (0, _jsxRuntime().jsx)("div", Object.assign({
    className: (0, _clsx().default)(bem('options', {
      border
    }))
  }, {
    children: options.map(renderOption)
  }), key);

  const renderRows = () => {
    const {
      options
    } = props;

    if (Array.isArray(options[0])) {
      return options.map((item, index) => renderOptions(item, index !== 0, index));
    }

    return renderOptions(options);
  };

  const renderCancelButton = () => {
    const {
      cancelText = locale.cancel
    } = props;

    if (cancelText) {
      return (0, _jsxRuntime().jsx)("button", Object.assign({
        type: 'button',
        className: (0, _clsx().default)(bem('cancel')),
        onClick: onCancel
      }, {
        children: cancelText
      }));
    }

    return null;
  };

  return (0, _jsxRuntime().jsxs)(_popup.default, Object.assign({
    round: true,
    className: (0, _clsx().default)(bem()),
    position: 'bottom',
    onClose: onCancel
  }, (0, _utils.pick)(props, ['closeOnPopstate', 'safeAreaInsetBottom', 'visible', 'overlay', 'duration', 'lockScroll', 'overlayStyle', 'overlayClass', 'closeOnClickOverlay']), {
    children: [renderHeader(), renderRows(), renderCancelButton()]
  }));
};

ShareSheet.defaultProps = {
  options: [],
  closeOnPopstate: true,
  safeAreaInsetBottom: true,
  closeOnClickOverlay: true
};
var _default = ShareSheet;
exports.default = _default;