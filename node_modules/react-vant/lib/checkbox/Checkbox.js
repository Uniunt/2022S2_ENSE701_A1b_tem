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

var _Checker = _interopRequireDefault(require("./Checker"));

var _CheckboxContext = _interopRequireDefault(require("./CheckboxContext"));

var _useMergedState = _interopRequireDefault(require("../hooks/use-merged-state"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const [bem] = (0, _utils.createNamespace)('checkbox');
const CheckBox = (0, _react().forwardRef)((props, ref) => {
  const _a = (0, _react().useContext)(_CheckboxContext.default),
        {
    parent
  } = _a,
        context = (0, _tslib().__rest)(_a, ["parent"]);

  const [checked, setChecked] = (0, _useMergedState.default)({
    value: props.checked,
    defaultValue: props.defaultChecked
  });

  const setParentValue = isChecked => {
    const {
      name
    } = props;
    const {
      max
    } = parent.props;
    const value = context.checked.slice();

    if (isChecked) {
      const overlimit = max && value.length >= max;

      if (!overlimit && value.indexOf(name) === -1) {
        value.push(name);

        if (props.bindGroup) {
          context.toggle(value);
        }
      }
    } else {
      const index = value.indexOf(name);

      if (index !== -1) {
        value.splice(index, 1);

        if (props.bindGroup) {
          context.toggle(value);
        }
      }
    }
  };

  const isChecked = (0, _react().useMemo)(() => {
    if (parent && props.bindGroup) {
      return context.checked.indexOf(props.name) !== -1;
    }

    return checked;
  }, [context.checked, checked]);

  const toggle = (newValue = !isChecked) => {
    var _a;

    if (parent && props.bindGroup) {
      setParentValue(newValue);
    } else {
      setChecked(newValue);
      (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, newValue);
    }
  };

  (0, _react().useImperativeHandle)(ref, () => ({
    toggle,
    checked: isChecked,
    props
  }));
  return (0, _jsxRuntime().jsx)(_Checker.default, Object.assign({}, props, {
    bem: bem,
    role: 'checkbox',
    parent: parent,
    checked: isChecked,
    className: props.className,
    bindGroup: props.bindGroup,
    onToggle: toggle
  }));
});
CheckBox.displayName = 'Checkbox';
CheckBox.defaultProps = {
  bindGroup: true
};
var _default = CheckBox;
exports.default = _default;