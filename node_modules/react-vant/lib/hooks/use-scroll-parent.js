"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
exports.getScrollParent = getScrollParent;

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

/* eslint-disable no-param-reassign */
const overflowScrollReg = /scroll|auto/i;
const defaultRoot = _utils.inBrowser ? window : undefined;

function isElement(node) {
  const ELEMENT_NODE_TYPE = 1;
  return node.tagName !== 'HTML' && node.tagName !== 'BODY' && node.nodeType === ELEMENT_NODE_TYPE;
}

function getScrollParent(el, root = defaultRoot) {
  if (root === undefined) {
    root = window;
  }

  let node = el;

  while (node && node !== root && isElement(node)) {
    const {
      overflowY
    } = window.getComputedStyle(node);

    if (overflowScrollReg.test(overflowY)) {
      if (node.tagName !== 'BODY') {
        return node;
      }

      const htmlOverflowY = window.getComputedStyle(node.parentNode).overflowY;

      if (overflowScrollReg.test(htmlOverflowY)) {
        return node;
      }
    }

    node = node.parentNode;
  }

  return root;
}

function useScrollParent(el) {
  const [scrollParent, setScrollParent] = (0, _react().useState)();
  (0, _react().useEffect)(() => {
    if (el) {
      const element = (0, _getTargetElement.getTargetElement)(el);
      setScrollParent(getScrollParent(element));
    }
  }, []);
  return scrollParent;
}

var _default = useScrollParent;
exports.default = _default;