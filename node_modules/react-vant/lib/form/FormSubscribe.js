"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Watcher = exports.FormSubscribe = void 0;

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

function _rcFieldForm() {
  const data = require("rc-field-form");

  _rcFieldForm = function () {
    return data;
  };

  return data;
}

var _hooks = require("../hooks");

var _useIsomorphicLayoutEffect = require("../hooks/use-isomorphic-layout-effect");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

//  移植自antd mobile: https://github.com/ant-design/ant-design-mobile/blob/master/src/components/form/form-subscribe.tsx
const FormSubscribe = props => {
  const update = (0, _hooks.useUpdate)();
  const form = (0, _react().useContext)(_rcFieldForm().FieldContext);
  return (0, _jsxRuntime().jsxs)(_jsxRuntime().Fragment, {
    children: [props.children(form.getFieldsValue(props.to), form), props.to.map(namePath => (0, _jsxRuntime().jsx)(Watcher, {
      form: form,
      namePath: namePath,
      onChange: update
    }, namePath.toString()))]
  });
};

exports.FormSubscribe = FormSubscribe;
const Watcher = (0, _react().memo)(props => {
  const value = (0, _rcFieldForm().useWatch)(props.namePath, props.form);
  (0, _useIsomorphicLayoutEffect.useIsomorphicUpdateLayoutEffect)(() => {
    props.onChange();
  }, [value]);
  return null;
});
exports.Watcher = Watcher;