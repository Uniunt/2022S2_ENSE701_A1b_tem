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

var _useUnmount = _interopRequireDefault(require("./use-unmount"));

var _getTargetElement = require("../utils/dom/getTargetElement");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function depsAreSame(oldDeps, deps) {
  if (oldDeps === deps) return true;

  for (let i = 0; i < oldDeps.length; i++) {
    if (!Object.is(oldDeps[i], deps[i])) return false;
  }

  return true;
}

const createEffectWithTarget = useEffectType => {
  /**
   *
   * @param effect
   * @param deps
   * @param target target should compare ref.current vs ref.current, dom vs dom, ()=>dom vs ()=>dom
   */
  const useEffectWithTarget = (effect, deps, target) => {
    const hasInitRef = (0, _react().useRef)(false);
    const lastElementRef = (0, _react().useRef)([]);
    const lastDepsRef = (0, _react().useRef)([]);
    const unLoadRef = (0, _react().useRef)();
    useEffectType(() => {
      var _a;

      const targets = Array.isArray(target) ? target : [target];
      const els = targets.map(item => (0, _getTargetElement.getTargetElement)(item)); // init run

      if (!hasInitRef.current) {
        hasInitRef.current = true;
        lastElementRef.current = els;
        lastDepsRef.current = deps;
        unLoadRef.current = effect();
        return;
      }

      if (els.length !== lastElementRef.current.length || !depsAreSame(els, lastElementRef.current) || !depsAreSame(deps, lastDepsRef.current)) {
        (_a = unLoadRef.current) === null || _a === void 0 ? void 0 : _a.call(unLoadRef);
        lastElementRef.current = els;
        lastDepsRef.current = deps;
        unLoadRef.current = effect();
      }
    });
    (0, _useUnmount.default)(() => {
      var _a;

      (_a = unLoadRef.current) === null || _a === void 0 ? void 0 : _a.call(unLoadRef); // for react-refresh

      hasInitRef.current = false;
    });
  };

  return useEffectWithTarget;
};

const useEffectWithTarget = createEffectWithTarget(_react().useEffect);
var _default = useEffectWithTarget;
exports.default = _default;