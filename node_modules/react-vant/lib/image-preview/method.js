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

function _tslib() {
  const data = require("tslib");

  _tslib = function () {
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

function _icons() {
  const data = require("@react-vant/icons");

  _icons = function () {
    return data;
  };

  return data;
}

var _utils = require("../utils");

var _ImagePreview = _interopRequireDefault(require("./ImagePreview"));

var _getContainer = require("../utils/dom/getContainer");

var _render = require("../utils/dom/render");

var _canUseDom = _interopRequireDefault(require("../utils/dom/canUseDom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const defaultConfig = {
  images: [],
  className: '',
  showIndex: true,
  closeable: false,
  closeIcon: (0, _jsxRuntime().jsx)(_icons().Clear, {}),
  startPosition: 0,
  swipeDuration: 300,
  closeOnPopstate: true,
  closeIconPosition: 'top-right'
}; // 可返回用于销毁此弹窗的方法

const open = props => {
  if (!(0, _canUseDom.default)()) return null;
  const {
    onClose = _utils.noop,
    beforeClose
  } = props,
        restProps = (0, _tslib().__rest)(props, ["onClose", "beforeClose"]);
  const userContainer = (0, _getContainer.resolveContainer)(props.teleport);
  const container = document.createElement('div');
  userContainer.appendChild(container);
  let destroy = _utils.noop;

  const TempDialog = () => {
    const [visible, setVisible] = (0, _react().useState)(false);
    (0, _react().useEffect)(() => {
      setVisible(true);
    }, []);

    destroy = p => {
      setVisible(false);
      if (onClose) onClose(p);
    };

    const _afterClose = p => (0, _tslib().__awaiter)(void 0, void 0, void 0, function* () {
      if ((yield beforeClose === null || beforeClose === void 0 ? void 0 : beforeClose(0)) !== false) {
        destroy(p);
        const unmountResult = (0, _render.unmount)(container);

        if (unmountResult && container.parentNode) {
          container.parentNode.removeChild(container);
        }

        return true;
      }

      return false;
    });

    return (0, _jsxRuntime().jsx)(_ImagePreview.default, Object.assign({}, defaultConfig, restProps, {
      visible: visible,
      teleport: () => container,
      onClose: destroy,
      beforeClose: _afterClose
    }));
  };

  (0, _render.render)((0, _jsxRuntime().jsx)(TempDialog, {}), container);
  return destroy;
};

const ImagePreview = Object.assign(_ImagePreview.default, {
  open
});
var _default = ImagePreview;
exports.default = _default;