"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useLockScroll = useLockScroll;

function _react() {
  const data = _interopRequireWildcard(require("react"));

  _react = function () {
    return data;
  };

  return data;
}

var _useScrollParent = require("./use-scroll-parent");

var _supportsPassive = require("../utils/supports-passive");

var _useTouch = _interopRequireDefault(require("./use-touch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

let totalLockCount = 0;
const BODY_LOCK_CLASS = 'rv-overflow-hidden'; // 移植自vant：https://github.com/youzan/vant/blob/HEAD/src/composables/use-lock-scroll.ts

function useLockScroll(rootRef, shouldLock) {
  const touch = (0, _useTouch.default)();

  const onTouchMove = event => {
    touch.move(event);
    const direction = touch.deltaY.current > 0 ? '10' : '01';
    const el = (0, _useScrollParent.getScrollParent)(event.target, rootRef.current);
    if (!el) return;
    const {
      scrollHeight,
      offsetHeight,
      scrollTop
    } = el;
    let status = '11';

    if (scrollTop === 0) {
      status = offsetHeight >= scrollHeight ? '00' : '01';
    } else if (scrollTop + offsetHeight >= scrollHeight) {
      status = '10';
    }

    if (status !== '11' && touch.isVertical() && !(parseInt(status, 2) & parseInt(direction, 2))) {
      if (event.cancelable) {
        event.preventDefault();
      }
    }
  };

  const lock = () => {
    document.addEventListener('touchstart', touch.start);
    document.addEventListener('touchmove', onTouchMove, _supportsPassive.supportsPassive ? {
      passive: false
    } : false);

    if (!totalLockCount) {
      document.body.classList.add(BODY_LOCK_CLASS);
    }

    totalLockCount++;
  };

  const unlock = () => {
    if (totalLockCount) {
      document.removeEventListener('touchstart', touch.start);
      document.removeEventListener('touchmove', onTouchMove);
      totalLockCount--;

      if (!totalLockCount) {
        document.body.classList.remove(BODY_LOCK_CLASS);
      }
    }
  };

  (0, _react().useEffect)(() => {
    if (shouldLock) {
      lock();
      return () => {
        unlock();
      };
    } // eslint-disable-next-line react-hooks/exhaustive-deps

  }, [shouldLock]);
}