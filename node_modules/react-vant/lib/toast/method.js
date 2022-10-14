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

function _jsxRuntime() {
  const data = require("react/jsx-runtime");

  _jsxRuntime = function () {
    return data;
  };

  return data;
}

var _utils = require("../utils");

var _getContainer = require("../utils/dom/getContainer");

var _lockClick = require("./lock-click");

var _Toast = _interopRequireDefault(require("./Toast"));

var _render = require("../utils/dom/render");

var _canUseDom = _interopRequireDefault(require("../utils/dom/canUseDom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const defaultOptions = {
  message: '',
  className: '',
  type: 'info',
  position: 'middle',
  forbidClick: false,
  duration: 2000,
  teleport: () => document.body
};
const toastArray = [];
let allowMultiple = false;
let currentOptions = (0, _utils.extend)({}, defaultOptions); // default options of specific type

const defaultOptionsMap = new Map(); // 同步的销毁

function syncClear() {
  let fn = toastArray.pop();

  while (fn) {
    fn();
    fn = toastArray.pop();
  }
} // 针对 toast 还没弹出来就立刻销毁的情况，将销毁放到下一个 event loop 中，避免销毁失败。


function nextTickClear() {
  setTimeout(syncClear);
} // 可返回用于销毁此弹窗的方法


const ToastObj = p => {
  if (!(0, _canUseDom.default)()) return null;
  const props = parseOptions(p);
  const update = {
    config: () => {},
    clear: () => null
  };
  let timer = 0;
  const {
    onClose,
    teleport
  } = props;
  const container = document.createElement('div');
  const bodyContainer = (0, _getContainer.resolveContainer)(teleport);
  bodyContainer.appendChild(container);

  const TempToast = () => {
    const options = Object.assign({
      duration: 2000
    }, props);
    const [visible, setVisible] = (0, _react().useState)(false);
    const [state, setState] = (0, _react().useState)(Object.assign({}, options)); // clearDOM after animation

    const internalOnClosed = (0, _react().useCallback)(() => {
      if (state.forbidClick) {
        (0, _lockClick.lockClick)(false);
      }

      const unmountResult = (0, _render.unmount)(container);

      if (unmountResult && container.parentNode) {
        container.parentNode.removeChild(container);
      } // eslint-disable-next-line react-hooks/exhaustive-deps

    }, [container]); // close with animation

    const destroy = (0, _react().useCallback)(() => {
      setVisible(false);
      if (onClose) onClose();
    }, []);
    update.clear = internalOnClosed;
    update.config = (0, _react().useCallback)(nextState => {
      setState(prev => typeof nextState === 'function' ? Object.assign(Object.assign({}, prev), nextState(prev)) : Object.assign(Object.assign({}, prev), nextState));
    }, [setState]);
    (0, _react().useEffect)(() => {
      setVisible(true);
      if (!allowMultiple) syncClear();
      toastArray.push(internalOnClosed);

      if (state.duration !== 0 && 'duration' in state) {
        timer = window.setTimeout(destroy, +state.duration);
      }

      return () => {
        if (timer !== 0) {
          window.clearTimeout(timer);
        }
      }; // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (0, _jsxRuntime().jsx)(_Toast.default, Object.assign({}, state, {
      visible: visible,
      teleport: () => container,
      onClose: destroy,
      onClosed: internalOnClosed
    }));
  };

  (0, _render.render)((0, _jsxRuntime().jsx)(TempToast, {}), container);
  return update;
};

function parseOptions(message) {
  if ((0, _utils.isObject)(message)) {
    return message;
  }

  return {
    message
  };
}

const createMethod = type => options => ToastObj(Object.assign(Object.assign(Object.assign(Object.assign({}, currentOptions), defaultOptionsMap.get(type)), parseOptions(options)), {
  type
}));

['info', 'loading', 'success', 'fail'].forEach(method => {
  ToastObj[method] = createMethod(method);
});

ToastObj.allowMultiple = (value = true) => {
  allowMultiple = value;
};

ToastObj.clear = nextTickClear;

function setDefaultOptions(type, options) {
  if (typeof type === 'string') {
    defaultOptionsMap.set(type, options);
  } else {
    (0, _utils.extend)(currentOptions, type);
  }
}

ToastObj.setDefaultOptions = setDefaultOptions;

ToastObj.resetDefaultOptions = type => {
  if (typeof type === 'string') {
    defaultOptionsMap.delete(type);
  } else {
    currentOptions = (0, _utils.extend)({}, defaultOptions);
    defaultOptionsMap.clear();
  }
};

const Toast = ToastObj;
var _default = Toast;
exports.default = _default;