"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateColumnsExtend = generateColumnsExtend;
exports.useColumnsExtend = useColumnsExtend;

function _react() {
  const data = _interopRequireWildcard(require("react"));

  _react = function () {
    return data;
  };

  return data;
}

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function useColumnsFn(options, keys) {
  const {
    textKey,
    valueKey,
    childrenKey
  } = keys;
  const dataType = (0, _react().useMemo)(() => {
    const firstColumn = options[0] || {};

    if (typeof firstColumn === 'object') {
      // 联级
      if (childrenKey in firstColumn) {
        return 'cascade';
      }

      return 'object';
    } // 单列


    return 'plain';
  }, [options, childrenKey]);
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
  if (dataType !== 'cascade') return options;
  return selected => {
    const columns = [];
    let currentOptions = options;
    let i = 0; // eslint-disable-next-line no-constant-condition

    while (true) {
      columns.push(currentOptions.map(option => {
        var _a;

        return {
          [textKey]: option[textKey],
          [valueKey]: (_a = option[valueKey]) !== null && _a !== void 0 ? _a : option[textKey]
        };
      }));
      const x = selected[i];
      const targetOptions = currentOptions.find(option => {
        var _a;

        return ((_a = option[valueKey]) !== null && _a !== void 0 ? _a : option[textKey]) === x;
      });
      if (!targetOptions || !targetOptions[childrenKey]) break;
      currentOptions = targetOptions[childrenKey];
      i++;
    }

    while (i < depth - 1) {
      columns.push([]);
      i++;
    }

    return columns;
  };
}

function withCache(generate) {
  let cache = null;
  return () => {
    if (cache === null) {
      cache = generate();
    }

    return cache;
  };
}

function generateColumnsExtend(rawColumns, keys, val) {
  const {
    textKey,
    valueKey
  } = keys;
  const columns = withCache(() => {
    let cls = typeof rawColumns === 'function' ? rawColumns(val) : rawColumns;
    if (!Array.isArray(cls[0])) cls = [cls];
    return cls.map(column => column.map(item => {
      if (typeof item === 'string') return {
        [textKey]: item,
        [valueKey]: item
      };
      if (!(valueKey in item)) item[valueKey] = item[textKey];
      return item;
    }));
  });
  const items = withCache(() => {
    return val.map((v, index) => {
      var _a;

      const column = columns()[index];
      if (!column) return null;
      return (_a = column.find(item => item[valueKey] === v)) !== null && _a !== void 0 ? _a : undefined;
    });
  });
  const indexes = withCache(() => {
    return val.map((v, index) => {
      var _a;

      const column = columns()[index];
      if (!column) return null;
      return (_a = column.findIndex(item => item[valueKey] === v)) !== null && _a !== void 0 ? _a : null;
    });
  });
  const result = {
    get columns() {
      return columns();
    },

    get items() {
      return items();
    },

    get indexes() {
      return indexes();
    }

  };
  return result;
}

function useColumnsExtend(columns, keys, value) {
  const formatColumns = useColumnsFn(columns, keys);
  return (0, _react().useMemo)(() => generateColumnsExtend(formatColumns, keys, value), [columns, keys, value]);
}