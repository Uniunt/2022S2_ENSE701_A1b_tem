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

function _clsx() {
  const data = _interopRequireDefault(require("clsx"));

  _clsx = function () {
    return data;
  };

  return data;
}

var _cell = _interopRequireDefault(require("../cell"));

var _CollapseContext = _interopRequireDefault(require("./CollapseContext"));

var _useLazyRender = _interopRequireDefault(require("../hooks/use-lazy-render"));

var _raf = require("../utils/raf");

var _hooks = require("../hooks");

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const [bem] = (0, _utils.createNamespace)('collapse-item');
const CollapseItem = (0, _react().forwardRef)((_a, ref) => {
  var {
    className,
    style
  } = _a,
      props = (0, _tslib().__rest)(_a, ["className", "style"]);
  const {
    index
  } = props;
  const parent = (0, _react().useContext)(_CollapseContext.default);
  const wrapperRef = (0, _react().useRef)(null);
  const contentRef = (0, _react().useRef)(null);
  const name = (0, _react().useMemo)(() => {
    var _a;

    return (_a = props.name) !== null && _a !== void 0 ? _a : index;
  }, [index, props.name]);
  const expanded = (0, _react().useMemo)(() => {
    if (parent) {
      return parent.isExpanded(name);
    }

    return null;
  }, [parent, name]);
  const [show, setShow] = (0, _react().useState)(() => expanded);
  const lazyRender = (0, _useLazyRender.default)(show);

  const onTransitionEnd = () => {
    if (!expanded) {
      setShow(false);
    } else {
      wrapperRef.current.style.height = '';
    }
  };

  (0, _hooks.useUpdateEffect)(() => {
    if (expanded) {
      setShow(true);
    }

    (0, _raf.raf)(() => {
      if (!contentRef.current || !wrapperRef.current) {
        return;
      }

      const {
        offsetHeight
      } = contentRef.current;

      if (offsetHeight) {
        const contentHeight = `${offsetHeight}px`;
        wrapperRef.current.style.height = expanded ? 0 : contentHeight; // use double raf to ensure animation can start

        (0, _raf.doubleRaf)(() => {
          wrapperRef.current.style.height = expanded ? contentHeight : 0;
        });
      } else {
        onTransitionEnd();
      }
    });
  }, [expanded]);

  const toggle = (value = !expanded) => {
    parent.toggle(name, value);
  };

  const onClickTitle = () => {
    if (!props.disabled && !props.readOnly) {
      toggle();
    }
  };

  const renderTitle = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {
      border,
      disabled,
      children,
      readOnly
    } = props,
          others = (0, _tslib().__rest)(props, ["border", "disabled", "children", "readOnly"]);
    return (0, _jsxRuntime().jsx)(_cell.default, Object.assign({
      className: (0, _clsx().default)(bem('title', {
        disabled,
        expanded,
        borderless: !border
      })),
      "aria-expanded": String(expanded),
      onClick: onClickTitle
    }, others, {
      isLink: readOnly ? false : others.isLink,
      clickable: disabled || readOnly ? false : others.clickable
    }));
  };

  const renderContent = lazyRender(() => (0, _jsxRuntime().jsx)("div", Object.assign({
    ref: wrapperRef,
    className: (0, _clsx().default)(bem('wrapper')),
    onTransitionEnd: onTransitionEnd
  }, {
    children: (0, _jsxRuntime().jsx)("div", Object.assign({
      ref: contentRef,
      className: (0, _clsx().default)(bem('content'))
    }, {
      children: props.children
    }))
  })));
  (0, _react().useImperativeHandle)(ref, () => ({
    toggle
  }));
  return (0, _jsxRuntime().jsxs)("div", Object.assign({
    style: style,
    className: (0, _clsx().default)(className, bem({
      border: index && props.border
    }))
  }, {
    children: [renderTitle(), renderContent()]
  }));
});
CollapseItem.defaultProps = {
  isLink: true,
  border: true
};
var _default = CollapseItem;
exports.default = _default;