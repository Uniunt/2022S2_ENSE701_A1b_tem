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

var _useMergedState = _interopRequireDefault(require("../hooks/use-merged-state"));

var _CheckboxContext = _interopRequireDefault(require("./CheckboxContext"));

var _utils = require("../utils");

var _useRefs = _interopRequireDefault(require("../hooks/use-refs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const [bem] = (0, _utils.createNamespace)('checkbox-group');
const CheckBoxGroup = (0, _react().forwardRef)((props, ref) => {
  const [childrenRefs, setChildrenRefs] = (0, _useRefs.default)();
  const [checked, setChecked] = (0, _useMergedState.default)({
    value: props.value,
    defaultValue: props.defaultValue
  });

  const toggleAll = (options = {}) => {
    if (typeof options === 'boolean') {
      options = {
        checked: options
      };
    }

    const {
      checked: isChecked,
      skipDisabled
    } = options;
    const checkedChildren = childrenRefs.filter(item => {
      if (!item.props.bindGroup) {
        return false;
      }

      if (item.props.disabled && skipDisabled) {
        return item.checked;
      }

      return isChecked !== null && isChecked !== void 0 ? isChecked : !item.checked;
    });
    const names = checkedChildren.map(item => item.props.name);
    setChecked(names);
    props.onChange(names);
  };

  const toggle = name => {
    var _a;

    setChecked(name);
    (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, name);
  };

  (0, _react().useImperativeHandle)(ref, () => ({
    toggleAll
  }));
  return (0, _jsxRuntime().jsx)(_CheckboxContext.default.Provider, Object.assign({
    value: {
      parent: {
        props
      },
      toggle,
      checked: checked || []
    }
  }, {
    children: (0, _jsxRuntime().jsx)("div", Object.assign({
      className: (0, _clsx().default)(props.className, bem([props.direction]))
    }, {
      children: _react().default.Children.toArray(props.children).filter(Boolean).map((child, index) => {
        var _a;

        if (((_a = child.type) === null || _a === void 0 ? void 0 : _a.displayName) !== 'Checkbox') return child;
        return _react().default.cloneElement(child, {
          ref: setChildrenRefs(index)
        });
      })
    }))
  }));
});
var _default = CheckBoxGroup;
exports.default = _default;