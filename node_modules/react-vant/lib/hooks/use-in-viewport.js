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

var _getTargetElement = require("../utils/dom/getTargetElement");

var _useEffectWithTarget = _interopRequireDefault(require("./use-effect-with-target"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function useInViewport(target, options) {
  const [state, setState] = (0, _react().useState)();
  const [ratio, setRatio] = (0, _react().useState)();
  (0, _useEffectWithTarget.default)(() => {
    const el = (0, _getTargetElement.getTargetElement)(target);

    if (!el) {
      return;
    }

    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        setRatio(entry.intersectionRatio);
        setState(entry.isIntersecting);
      }
    }, Object.assign(Object.assign({}, options), {
      root: (0, _getTargetElement.getTargetElement)(options === null || options === void 0 ? void 0 : options.root)
    }));
    observer.observe(el);
    return () => {
      observer.disconnect();
    };
  }, [], target);
  return [state, ratio];
}

var _default = useInViewport;
exports.default = _default;