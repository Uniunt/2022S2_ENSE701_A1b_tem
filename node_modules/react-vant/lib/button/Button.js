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

var _loading = _interopRequireDefault(require("../loading"));

var _constant = require("../utils/constant");

var _ButtonContext = _interopRequireDefault(require("./ButtonContext"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const [bem] = (0, _utils.createNamespace)('button');

const Button = props => {
  const {
    color,
    loading,
    className,
    hairline,
    loadingText
  } = props;
  const {
    parent
  } = (0, _react().useContext)(_ButtonContext.default);

  const size = _react().default.useMemo(() => props.size || (parent === null || parent === void 0 ? void 0 : parent.size) || 'normal', [parent === null || parent === void 0 ? void 0 : parent.size, props.size]);

  const type = _react().default.useMemo(() => props.type || (parent === null || parent === void 0 ? void 0 : parent.type) || 'default', [parent === null || parent === void 0 ? void 0 : parent.type, props.type]);

  const plain = _react().default.useMemo(() => {
    var _a;

    return (_a = props.plain) !== null && _a !== void 0 ? _a : parent === null || parent === void 0 ? void 0 : parent.plain;
  }, [parent === null || parent === void 0 ? void 0 : parent.plain, props.plain]);

  const block = _react().default.useMemo(() => {
    var _a;

    return (_a = props.block) !== null && _a !== void 0 ? _a : parent === null || parent === void 0 ? void 0 : parent.block;
  }, [parent === null || parent === void 0 ? void 0 : parent.block, props.block]);

  const iconPosition = _react().default.useMemo(() => props.iconPosition || (parent === null || parent === void 0 ? void 0 : parent.iconPosition) || 'left', [parent === null || parent === void 0 ? void 0 : parent.iconPosition, props.iconPosition]);

  const disabled = _react().default.useMemo(() => {
    var _a;

    return (_a = props.disabled) !== null && _a !== void 0 ? _a : parent === null || parent === void 0 ? void 0 : parent.disabled;
  }, [parent === null || parent === void 0 ? void 0 : parent.disabled, props.disabled]);

  const nativeType = _react().default.useMemo(() => props.nativeType || (parent === null || parent === void 0 ? void 0 : parent.nativeType) || 'button', [parent === null || parent === void 0 ? void 0 : parent.nativeType, props.nativeType]);

  const tag = _react().default.useMemo(() => props.tag || (parent === null || parent === void 0 ? void 0 : parent.tag) || 'button', [parent === null || parent === void 0 ? void 0 : parent.tag, props.tag]);

  const TagElement = tag;
  const classes = (0, _clsx().default)(className, bem([type, size, {
    plain,
    loading,
    disabled,
    hairline,
    block,
    round: props.round,
    square: props.square
  }]), {
    [_constant.BORDER_SURROUND]: hairline
  }, props.shadow && `${_constant.SHADOW}--${+props.shadow}`);
  const style = Object.assign({}, props.style);

  if (color) {
    style.color = plain ? color : _constant.WHITE;

    if (!plain) {
      // Use background instead of backgroundColor to make linear-gradient work
      style.background = color;
    } // hide border when color is linear-gradient


    if (color.indexOf('gradient') !== -1) {
      style.border = 0;
    } else {
      style.borderColor = color;
    }
  }

  const onClick = event => {
    if (!loading && !disabled && props.onClick) {
      props.onClick(event);
    }
  };

  const renderLoadingIcon = () => {
    if (loading) {
      const {
        loadingSize = '20px',
        loadingType
      } = props;
      return (0, _jsxRuntime().jsx)(_loading.default, {
        className: (0, _clsx().default)(bem('loading')),
        size: loadingSize,
        type: loadingType,
        color: type === 'default' ? undefined : ''
      });
    }

    return null;
  };

  const renderIcon = () => {
    if (props.loading) {
      return renderLoadingIcon();
    }

    if (props.icon) {
      return _react().default.cloneElement(props.icon, {
        className: (0, _clsx().default)(bem('icon'))
      });
    }

    return null;
  };

  const renderText = () => {
    let text;

    if (loading) {
      text = loadingText;
    } else {
      text = props.children || props.text;
    }

    if (text) {
      return (0, _jsxRuntime().jsx)("span", Object.assign({
        className: (0, _clsx().default)(bem('text'))
      }, {
        children: text
      }), 'text');
    }

    return null;
  };

  const renderContent = () => (0, _jsxRuntime().jsxs)("div", Object.assign({
    className: (0, _clsx().default)(bem('content'))
  }, {
    children: [iconPosition === 'left' && renderIcon(), renderText(), iconPosition === 'right' && renderIcon()]
  }));

  return (0, _jsxRuntime().jsx)(TagElement, Object.assign({
    disabled: disabled,
    className: classes,
    style: style,
    type: nativeType,
    onClick: onClick
  }, {
    children: renderContent()
  }));
};

var _default = Button;
exports.default = _default;