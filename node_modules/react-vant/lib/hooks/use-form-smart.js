"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useFormSmart;

function _react() {
  const data = _interopRequireWildcard(require("react"));

  _react = function () {
    return data;
  };

  return data;
}

var _utils = require("../utils");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function isEmpty(val) {
  if ((0, _utils.isObject)(val)) {
    return JSON.stringify(val) === '{}';
  }

  return true;
}

function useFormSmart(option = {}) {
  const {
    value,
    sync
  } = option;
  const ref = (0, _react().useRef)(null);
  const [once, setOnce] = (0, _react().useState)(false);
  const set = (0, _react().useCallback)(values => {
    var _a;

    (_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.setFieldsValue(values);
  }, []);
  const get = (0, _react().useCallback)(name => {
    var _a;

    return (_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.getFieldValue(name);
  }, []);
  const submit = (0, _react().useCallback)(() => {
    var _a;

    (_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.submit();
  }, []);
  const clear = (0, _react().useCallback)(() => {
    var _a;

    (_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.resetFields();
  }, []);
  const getAll = (0, _react().useCallback)(() => {
    var _a;

    return (_a = ref === null || ref === void 0 ? void 0 : ref.current) === null || _a === void 0 ? void 0 : _a.getFieldsValue();
  }, []);
  (0, _react().useEffect)(() => {
    if (!isEmpty(value)) {
      if (sync) {
        set(value);
      } else if (!once) {
        set(value);
        setOnce(true);
      }
    }
  }, [value]);
  const methods = {
    set,
    get,
    submit,
    clear,
    getAll
  };
  return [ref, methods];
}