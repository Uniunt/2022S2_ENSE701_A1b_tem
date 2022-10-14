"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Slides = void 0;

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

function _react2() {
  const data = require("@use-gesture/react");

  _react2 = function () {
    return data;
  };

  return data;
}

function _web() {
  const data = require("@react-spring/web");

  _web = function () {
    return data;
  };

  return data;
}

var _slide = require("./slide");

var _bound = require("../utils/bound");

var _utils = require("../utils");

function _clsx() {
  const data = _interopRequireDefault(require("clsx"));

  _clsx = function () {
    return data;
  };

  return data;
}

var _hooks = require("../hooks");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const [bem] = (0, _utils.createNamespace)('image-preview');
const Slides = (0, _react().forwardRef)((props, ref) => {
  const slideWidth = window.innerWidth + (0, _utils.unitToPx)(16);
  const [{
    x
  }, api] = (0, _web().useSpring)(() => ({
    x: props.defaultIndex * slideWidth,
    config: {
      tension: 250,
      clamp: true
    }
  }));
  const count = props.images.length;
  (0, _hooks.useUpdateEffect)(() => {
    swipeTo(props.defaultIndex, true);
  }, [props.defaultIndex]);

  function swipeTo(index, immediate = false) {
    var _a;

    const i = (0, _bound.bound)(index, 0, count - 1);
    (_a = props.onIndexChange) === null || _a === void 0 ? void 0 : _a.call(props, i);
    api.start({
      x: i * slideWidth,
      immediate
    });
  }

  (0, _react().useImperativeHandle)(ref, () => ({
    swipeTo
  }));
  const dragLockRef = (0, _react().useRef)(false);
  const bind = (0, _react2().useDrag)(state => {
    if (dragLockRef.current) return;
    const [offsetX] = state.offset;

    if (state.last) {
      const minIndex = Math.floor(offsetX / slideWidth);
      const maxIndex = minIndex + 1;
      const velocityOffset = Math.min(state.velocity[0] * 2000, slideWidth) * state.direction[0];
      swipeTo((0, _bound.bound)(Math.round((offsetX + velocityOffset) / slideWidth), minIndex, maxIndex));
    } else {
      api.start({
        x: offsetX,
        immediate: true
      });
    }
  }, {
    transform: ([x, y]) => [-x, y],
    from: () => [x.get(), 0],
    bounds: () => {
      return {
        left: 0,
        right: (count - 1) * slideWidth
      };
    },
    rubberband: true,
    axis: 'x',
    pointer: {
      touch: true
    }
  });
  return (0, _jsxRuntime().jsx)("div", Object.assign({
    className: (0, _clsx().default)(bem('slides'))
  }, bind(), {
    children: (0, _jsxRuntime().jsx)(_web().animated.div, Object.assign({
      className: (0, _clsx().default)(bem('slides-inner')),
      style: {
        x: x.to(x => -x)
      }
    }, {
      children: props.images.map((image, idx) => (0, _jsxRuntime().jsx)(_slide.Slide, {
        image: image,
        onTap: props.onTap,
        maxZoom: props.maxZoom,
        onZoomChange: zoom => {
          if (zoom !== 1) {
            const index = Math.round(x.get() / slideWidth);
            api.start({
              x: index * slideWidth
            });
          }
        },
        dragLockRef: dragLockRef
      }, `${image}${idx}`))
    }))
  }));
});
exports.Slides = Slides;