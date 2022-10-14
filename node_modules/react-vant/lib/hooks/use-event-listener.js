"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supportsPassive = exports.default = void 0;

function _react() {
  const data = _interopRequireWildcard(require("react"));

  _react = function () {
    return data;
  };

  return data;
}

var _utils = require("../utils");

var _getTargetElement = require("../utils/dom/getTargetElement");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

/* eslint-disable react-hooks/rules-of-hooks */

/* eslint-disable @typescript-eslint/no-unused-vars */
// https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener#使用_passive_改善的滚屏性能
let supportsPassive = false;
exports.supportsPassive = supportsPassive;

if (_utils.inBrowser) {
  try {
    const opts = {};
    Object.defineProperty(opts, 'passive', {
      get() {
        exports.supportsPassive = supportsPassive = true;
      }

    });
    window.addEventListener('test-passive', null, opts); // eslint-disable-next-line no-empty
  } catch (e) {}
}

function useEventListener(type, listener, options = {}) {
  if (!_utils.inBrowser) {
    return;
  }

  const {
    target = window,
    passive = false,
    capture = false,
    depends = []
  } = options;
  let attached;

  const add = () => {
    const element = (0, _getTargetElement.getTargetElement)(target);

    if (element && !attached) {
      element.addEventListener(type, listener, supportsPassive ? {
        capture,
        passive
      } : capture);
      attached = true;
    }
  };

  const remove = () => {
    const element = (0, _getTargetElement.getTargetElement)(target);

    if (element && attached) {
      element.removeEventListener(type, listener, capture);
      attached = false;
    }
  }; // https://stackoverflow.com/questions/55265255/react-usestate-hook-event-handler-using-initial-state


  (0, _react().useEffect)(() => {
    add();
    return () => remove();
  }, [target, ...depends]);
}

var _default = useEventListener;
exports.default = _default;