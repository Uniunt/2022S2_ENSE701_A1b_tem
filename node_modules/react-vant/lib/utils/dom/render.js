"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.render = render;
exports.unmount = unmount;

function _react() {
  const data = _interopRequireDefault(require("react"));

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

function ReactDOM() {
  const data = _interopRequireWildcard(require("react-dom"));

  ReactDOM = function () {
    return data;
  };

  return data;
}

var _version = require("./version");

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Let compiler not to search module usage
const fullClone = Object.assign({}, ReactDOM());
const {
  render: reactRender,
  unmountComponentAtNode
} = fullClone;
let createRoot;

try {
  if (_version.reactDomVersion >= 18 && fullClone.createRoot) {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    createRoot = fullClone.createRoot;
  }
} catch (e) {// Do nothing;
}

function toggleWarning(skip) {
  const {
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
  } = fullClone;

  if (__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED && typeof __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === 'object') {
    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.usingClientEntryPoint = skip;
  }
}

const MARK = '__react_vant_root__';

function legacyRender(node, container) {
  reactRender(node, container);
}

function concurrentRender(node, container) {
  toggleWarning(true);
  const root = container[MARK] || createRoot(container);
  toggleWarning(false);
  root.render(node);
  container[MARK] = root;
}

function render(node, container) {
  if (createRoot) {
    concurrentRender(node, container);
    return;
  }

  legacyRender(node, container);
} // ========================== Unmount =========================


function legacyUnmount(container) {
  return unmountComponentAtNode(container);
}

function concurrentUnmount(container) {
  return (0, _tslib().__awaiter)(this, void 0, void 0, function* () {
    // Delay to unmount to avoid React 18 sync warning
    return Promise.resolve().then(() => {
      var _a;

      (_a = container[MARK]) === null || _a === void 0 ? void 0 : _a.unmount();
      delete container[MARK];
    });
  });
}

function unmount(container) {
  if (createRoot) {
    return concurrentUnmount(container);
  }

  return legacyUnmount(container);
}