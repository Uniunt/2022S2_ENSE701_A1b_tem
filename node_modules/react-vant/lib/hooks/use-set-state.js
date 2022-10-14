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

var _utils = require("../utils");

var _useRefState = _interopRequireDefault(require("./use-ref-state"));

var _useUnmountedRef = _interopRequireDefault(require("./use-unmounted-ref"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const useSetState = (initialState = {}) => {
  const unmountedRef = (0, _useUnmountedRef.default)();
  const [state, setState, ref] = (0, _useRefState.default)(initialState);
  const setMergeState = (0, _react().useCallback)(patch => {
    if (unmountedRef.current) return;
    setState(prevState => Object.assign(Object.assign({}, prevState), (0, _utils.isFunction)(patch) ? patch(prevState) : patch));
  }, []);
  return [state, setMergeState, ref];
};

var _default = useSetState;
exports.default = _default;