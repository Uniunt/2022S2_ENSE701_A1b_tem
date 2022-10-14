"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useIsomorphicUpdateLayoutEffect = exports.useIsomorphicLayoutEffect = exports.default = void 0;

function _react() {
  const data = _interopRequireDefault(require("react"));

  _react = function () {
    return data;
  };

  return data;
}

var _utils = require("../utils");

var _createUpdateEffect = require("./create-update-effect");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const useIsomorphicLayoutEffect = _utils.inBrowser ? _react().default.useLayoutEffect : _react().default.useEffect;
exports.useIsomorphicLayoutEffect = useIsomorphicLayoutEffect;
const useIsomorphicUpdateLayoutEffect = (0, _createUpdateEffect.createUpdateEffect)(useIsomorphicLayoutEffect);
exports.useIsomorphicUpdateLayoutEffect = useIsomorphicUpdateLayoutEffect;
var _default = useIsomorphicLayoutEffect;
exports.default = _default;