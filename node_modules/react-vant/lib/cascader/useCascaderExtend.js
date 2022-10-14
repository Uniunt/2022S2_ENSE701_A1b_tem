"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useCascaderExtend = useCascaderExtend;

function _react() {
  const data = _interopRequireWildcard(require("react"));

  _react = function () {
    return data;
  };

  return data;
}

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function useCascaderExtend(options, keys, value) {
  const {
    childrenKey,
    valueKey
  } = keys;
  const depth = (0, _react().useMemo)(() => {
    let depth = 0;

    function traverse(options, currentDepth) {
      if (currentDepth > depth) depth = currentDepth;
      const nextDepth = currentDepth + 1;
      options.forEach(option => {
        if (option[childrenKey]) {
          traverse(option[childrenKey], nextDepth);
        }
      });
    }

    traverse(options, 1);
    return depth;
  }, [options, childrenKey]);
  const tabs = (0, _react().useMemo)(() => {
    var _a;

    if (!value || !value.length) {
      return (_a = [options]) !== null && _a !== void 0 ? _a : [];
    }

    return value.reduce((a, v, i) => {
      if (!v) return a;
      const next = a[i].find(option => option[valueKey] === value[i]);
      if (next && next[childrenKey]) a.push(next[childrenKey]);
      return a;
    }, [options]);
  }, [value, childrenKey, valueKey, options]);
  const items = (0, _react().useMemo)(() => {
    return value.map((val, i) => {
      var _a;

      const item = (_a = tabs[i].find(tab => tab[valueKey] === val)) !== null && _a !== void 0 ? _a : undefined;
      return item;
    });
  }, [value, valueKey, tabs]);
  return {
    tabs,
    items,
    depth
  };
}