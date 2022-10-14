"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = useClickAway;

function _react() {
  const data = _interopRequireWildcard(require("react"));

  _react = function () {
    return data;
  };

  return data;
}

var _getTargetElement = require("../utils/dom/getTargetElement");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// 鼠标点击事件，click 不会监听右键
const defaultEvent = 'click';

function useClickAway(target, onClickAway, eventName = defaultEvent) {
  const onClickAwayRef = (0, _react().useRef)(onClickAway);
  onClickAwayRef.current = onClickAway;
  (0, _react().useEffect)(() => {
    const handler = event => {
      const targets = Array.isArray(target) ? target : [target];

      if (targets.some(targetItem => {
        const targetElement = (0, _getTargetElement.getTargetElement)(targetItem);
        return !targetElement || (targetElement === null || targetElement === void 0 ? void 0 : targetElement.contains(event.target));
      })) {
        return;
      }

      onClickAwayRef.current(event);
    };

    document.addEventListener(eventName, handler);
    return () => {
      document.removeEventListener(eventName, handler);
    };
  }, [target, eventName]);
}