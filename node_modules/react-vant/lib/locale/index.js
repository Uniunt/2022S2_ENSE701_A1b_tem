"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "enUS", {
  enumerable: true,
  get: function () {
    return _enUS.default;
  }
});
Object.defineProperty(exports, "frFR", {
  enumerable: true,
  get: function () {
    return _frFR.default;
  }
});
Object.defineProperty(exports, "jaJP", {
  enumerable: true,
  get: function () {
    return _jaJP.default;
  }
});
Object.defineProperty(exports, "mergeLocale", {
  enumerable: true,
  get: function () {
    return _zhCN.mergeLocale;
  }
});
Object.defineProperty(exports, "zhCN", {
  enumerable: true,
  get: function () {
    return _zhCN.default;
  }
});
Object.defineProperty(exports, "zhHK", {
  enumerable: true,
  get: function () {
    return _zhHK.default;
  }
});
Object.defineProperty(exports, "zhTW", {
  enumerable: true,
  get: function () {
    return _zhTW.default;
  }
});

function _react() {
  const data = _interopRequireDefault(require("react"));

  _react = function () {
    return data;
  };

  return data;
}

var _zhCN = _interopRequireWildcard(require("./lang/zh-CN"));

var _zhHK = _interopRequireDefault(require("./lang/zh-HK"));

var _zhTW = _interopRequireDefault(require("./lang/zh-TW"));

var _enUS = _interopRequireDefault(require("./lang/en-US"));

var _jaJP = _interopRequireDefault(require("./lang/ja-JP"));

var _frFR = _interopRequireDefault(require("./lang/fr-FR"));

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }