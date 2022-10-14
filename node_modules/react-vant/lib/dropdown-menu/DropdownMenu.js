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

var _useEventListener = _interopRequireDefault(require("../hooks/use-event-listener"));

var _useScrollParent = _interopRequireDefault(require("../hooks/use-scroll-parent"));

var _useRect = require("../hooks/use-rect");

var _useRefs = _interopRequireDefault(require("../hooks/use-refs"));

var _DropdownMenuContext = _interopRequireDefault(require("./DropdownMenuContext"));

var _hooks = require("../hooks");

var _useClickAway = _interopRequireDefault(require("../hooks/use-click-away"));

var _useMergedState = _interopRequireDefault(require("../hooks/use-merged-state"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const [bem] = (0, _utils.createNamespace)('dropdown-menu');
const DropdownMenu = (0, _react().forwardRef)((props, ref) => {
  const [innerValue = {}, setInnerValue] = (0, _useMergedState.default)({
    value: props.value,
    defaultValue: props.defaultValue
  });
  const [childrenRefs, setChildrenRefs] = (0, _useRefs.default)();
  const [showPopupIndex, setShowPopupIndex] = (0, _react().useState)(null);
  const showPopupIndexRef = (0, _react().useRef)();
  const root = (0, _react().useRef)();
  const barRef = (0, _react().useRef)();
  const offset = (0, _react().useRef)(0);
  const isToggleEvent = (0, _react().useRef)(false);
  const rect = (0, _react().useRef)({
    bottom: 0,
    top: 0
  });
  const innerEffect = (0, _react().useRef)(false);
  const opened = (0, _react().useMemo)(() => showPopupIndex !== null, [showPopupIndex]);

  const barStyle = () => {
    if (opened && (0, _utils.isDef)(props.zIndex)) {
      return {
        zIndex: +props.zIndex + 1
      };
    }

    return {};
  };

  const updateShowPopupIndex = current => {
    showPopupIndexRef.current = current;
    setShowPopupIndex(current);
  };

  const closeAll = () => {
    childrenRefs.forEach(item => {
      item.toggle(false);
    });
    updateShowPopupIndex(null);
  };

  const onClickAway = () => {
    if (props.closeOnClickOutside && !isToggleEvent.current) {
      closeAll();
    } else {
      isToggleEvent.current = false;
    }
  };

  const updateOffset = () => {
    if (barRef.current) {
      rect.current = (0, _useRect.getRect)(barRef.current);

      if (props.direction === 'down') {
        offset.current = rect.current.bottom;
      } else {
        offset.current = window.innerHeight - rect.current.top;
      }
    }
  };

  const onScroll = () => {
    if (opened) {
      updateOffset();
    }
  };

  const showItem = index => {
    const item = childrenRefs[index];
    isToggleEvent.current = true;
    updateOffset();
    updateShowPopupIndex(index);
    item.toggle(true);
  };

  const toggleItem = active => {
    childrenRefs.forEach((item, index) => {
      if (index === active) {
        if (active === showPopupIndexRef.current) {
          updateShowPopupIndex(null);
          item.toggle();
          return;
        }

        showItem(active);
      }
    });
  };

  const close = () => {
    updateShowPopupIndex(null);
  };

  const renderTitle = (item, index) => {
    const showPopup = showPopupIndex === index;
    const {
      titleClass
    } = item;
    const disabled = props.disabled || item.disabled;
    return (0, _jsxRuntime().jsx)("div", Object.assign({
      role: 'button',
      tabIndex: disabled ? -1 : 0,
      className: (0, _clsx().default)(bem('item', {
        disabled
      })),
      onClick: () => {
        if (!disabled) {
          toggleItem(index);
        }
      }
    }, {
      children: (0, _jsxRuntime().jsx)("span", Object.assign({
        className: (0, _clsx().default)(bem('title', {
          down: showPopup === (props.direction === 'down'),
          active: showPopup
        }), titleClass),
        style: {
          color: showPopup ? props.activeColor : ''
        }
      }, {
        children: (0, _jsxRuntime().jsx)("div", Object.assign({
          className: 'rv-ellipsis'
        }, {
          children: item.renderTitle(innerValue[item.name])
        }))
      }))
    }), index);
  };

  (0, _hooks.useUpdateEffect)(() => {
    if (innerEffect.current) {
      innerEffect.current = false;
      return;
    }

    if (!props.value) {
      setInnerValue(undefined);
      return;
    }

    setInnerValue(props.value);
  }, [props.value]);
  (0, _react().useEffect)(() => {
    if (barRef.current) {
      updateOffset();
    }
  }, [barRef.current]);

  const onInnerChange = v => {
    innerEffect.current = true;
    const newValue = Object.assign(Object.assign({}, innerValue), v);
    setInnerValue(newValue);
    if (props.onChange) props.onChange(newValue);
  };

  const scrollParent = (0, _useScrollParent.default)(root);
  (0, _useEventListener.default)('scroll', onScroll, {
    target: scrollParent
  });
  (0, _useClickAway.default)(root, onClickAway);
  (0, _react().useImperativeHandle)(ref, () => ({
    toggleItem,
    showItem,
    close: closeAll
  }));
  return (0, _jsxRuntime().jsx)(_DropdownMenuContext.default.Provider, Object.assign({
    value: {
      props,
      value: innerValue,
      onChange: onInnerChange,
      close
    }
  }, {
    children: (0, _jsxRuntime().jsxs)("div", Object.assign({
      ref: root,
      className: (0, _clsx().default)(bem(), props.className),
      style: Object.assign({}, props.style)
    }, {
      children: [(0, _jsxRuntime().jsx)("div", Object.assign({
        ref: barRef,
        style: barStyle(),
        className: (0, _clsx().default)(bem('bar', {
          opened
        }))
      }, {
        children: childrenRefs.map(renderTitle)
      })), _react().Children.toArray(props.children).filter(Boolean).map((child, index) => (0, _react().cloneElement)(child, {
        ref: setChildrenRefs(index),
        offset: offset.current,
        showPopup: showPopupIndex === index
      }))]
    }))
  }));
});
DropdownMenu.defaultProps = {
  duration: 200,
  overlay: true,
  closeOnClickOutside: true,
  closeOnClickOverlay: true,
  direction: 'down',
  defaultValue: {}
};
var _default = DropdownMenu;
exports.default = _default;