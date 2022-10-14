"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useVisibilityChange;

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

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function useVisibilityChange(target, onChange) {
  const [state, setState] = (0, _react().useState)();
  (0, _react().useEffect)(() => {
    // compatibility: https://caniuse.com/#feat=intersectionobserver
    if (!_utils.inBrowser || !window.IntersectionObserver) {
      return null;
    }

    const observer = new IntersectionObserver(entries => {
      // visibility changed
      onChange === null || onChange === void 0 ? void 0 : onChange(entries[0].intersectionRatio > 0);

      for (const entry of entries) {
        setState(entry.isIntersecting);
      }
    }, {
      root: document.body
    });

    const observe = () => {
      if (target.current) {
        observer.observe(target.current);
      }
    };

    const unobserve = () => {
      if (target.current) {
        observer.unobserve(target.current);
      }
    };

    observe();
    return unobserve;
  }, [target.current]);
  return [state];
}