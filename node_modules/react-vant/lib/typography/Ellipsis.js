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

var _hooks = require("../hooks");

var _useResizeEffect = require("../hooks/use-resize-effect");

var _event = require("../utils/dom/event");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const Ellipsis = props => {
  const rootRef = (0, _react().useRef)(null);
  const [ellipsised, setEllipsised] = (0, _react().useState)({});
  const [expanded, setExpanded] = (0, _react().useState)(false);
  const [exceeded, setExceeded] = (0, _react().useState)(false);
  const suffixStr = (0, _react().useMemo)(() => {
    if (props.suffixText) return props.suffixText;

    if (props.suffixCount > 0) {
      return props.children.slice(-props.suffixCount).trim();
    }

    return '';
  }, [props.suffixCount, props.suffixText]);

  function calcEllipsised() {
    const root = rootRef.current;
    if (!root) return;
    const originStyle = window.getComputedStyle(root);
    const container = document.createElement('div');
    const styleNames = Array.prototype.slice.apply(originStyle);
    styleNames.forEach(name => {
      container.style.setProperty(name, originStyle.getPropertyValue(name));
    });
    container.style.position = 'fixed';
    container.style.left = '999999px';
    container.style.top = '999999px';
    container.style.zIndex = '-1000';
    container.style.height = 'auto';
    container.style.minHeight = 'auto';
    container.style.maxHeight = 'auto';
    container.style.textOverflow = 'clip';
    container.style.whiteSpace = 'normal';
    container.style.webkitLineClamp = 'unset';
    container.style.display = 'block';
    const lineHeight = pxToNumber(originStyle.lineHeight);
    const maxHeight = Math.floor(lineHeight * (props.rows + 0.5) + pxToNumber(originStyle.paddingTop) + pxToNumber(originStyle.paddingBottom));
    container.innerHTML = props.children;
    document.body.appendChild(container);

    if (container.offsetHeight <= maxHeight) {
      setExceeded(false);
    } else {
      setExceeded(true);
      const end = props.children.length;
      const actionText = expanded ? props.collapseText : props.expandText; // eslint-disable-next-line no-inner-declarations

      function check(left, right) {
        if (right - left <= 1) {
          return {
            leading: props.children.slice(0, left) + props.symbol
          };
        }

        const middle = Math.round((left + right) / 2);
        container.innerHTML = props.children.slice(0, middle) + props.symbol + suffixStr + actionText;

        if (container.offsetHeight <= maxHeight) {
          return check(middle, right);
        }

        return check(left, middle);
      }

      const ellipsised = check(0, end);
      setEllipsised(ellipsised);
    }

    document.body.removeChild(container);
  }

  (0, _useResizeEffect.useResizeEffect)(calcEllipsised, rootRef);
  (0, _hooks.useIsomorphicLayoutEffect)(() => {
    calcEllipsised();
  }, [props.children, props.rows, suffixStr, props.expandText, props.collapseText]);

  const onExpandClick = isExpend => {
    var _a;

    (_a = props.onExpend) === null || _a === void 0 ? void 0 : _a.call(props, isExpend);
    setExpanded(isExpend);
  };

  const expandActionElement = exceeded && props.expandText ? (0, _event.withStopPropagation)(props.stopPropagationForActionButtons, (0, _jsxRuntime().jsx)("a", Object.assign({
    onClick: () => {
      onExpandClick(true);
    }
  }, {
    children: props.expandText
  }))) : null;
  const collapseActionElement = exceeded && props.expandText ? (0, _event.withStopPropagation)(props.stopPropagationForActionButtons, (0, _jsxRuntime().jsx)("a", Object.assign({
    onClick: () => {
      onExpandClick(false);
    }
  }, {
    children: props.collapseText
  }))) : null;

  const renderContent = () => {
    if (!exceeded) {
      return props.children;
    }

    if (expanded) {
      return (0, _jsxRuntime().jsxs)(_jsxRuntime().Fragment, {
        children: [props.children, collapseActionElement]
      });
    } else {
      return (0, _jsxRuntime().jsxs)(_jsxRuntime().Fragment, {
        children: [ellipsised.leading, suffixStr, expandActionElement]
      });
    }
  };

  return (0, _jsxRuntime().jsx)("div", Object.assign({
    ref: rootRef,
    className: (0, _clsx().default)('rv-typography__ellipsis', props.className),
    style: props.style
  }, {
    children: renderContent()
  }));
};

function pxToNumber(value) {
  if (!value) return 0;
  const match = value.match(/^\d*(\.\d*)?/);
  return match ? Number(match[0]) : 0;
}

Ellipsis.defaultProps = {
  rows: 1,
  expandText: '',
  collapseText: '',
  suffixText: '',
  symbol: '...',
  stopPropagationForActionButtons: []
};
var _default = Ellipsis;
exports.default = _default;