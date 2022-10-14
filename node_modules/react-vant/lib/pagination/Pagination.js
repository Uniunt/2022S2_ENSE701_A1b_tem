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

function _clsx() {
  const data = _interopRequireDefault(require("clsx"));

  _clsx = function () {
    return data;
  };

  return data;
}

var _constant = require("../utils/constant");

var _ConfigProviderContext = _interopRequireDefault(require("../config-provider/ConfigProviderContext"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function makePage(number, text, active) {
  return {
    number,
    text,
    active
  };
}

const [bem] = (0, _utils.createNamespace)('pagination');

const Pagination = props => {
  const {
    locale
  } = (0, _react().useContext)(_ConfigProviderContext.default);
  const count = (0, _react().useMemo)(() => {
    const {
      pageCount,
      totalItems,
      itemsPerPage
    } = props;
    const innerCount = +pageCount || Math.ceil(+totalItems / +itemsPerPage);
    return Math.max(1, innerCount);
  }, [props.pageCount, props.totalItems, props.itemsPerPage]);
  const pages = (0, _react().useMemo)(() => {
    const items = [];
    const pageCount = count;
    const showPageSize = +props.showPageSize;
    const {
      value,
      forceEllipses
    } = props;

    if (props.mode !== 'multi') {
      return items;
    } // Default page limits


    let startPage = 1;
    let endPage = pageCount;
    const isMaxSized = showPageSize < pageCount; // recompute if showPageSize

    if (isMaxSized) {
      // Current page is displayed in the middle of the visible ones
      startPage = Math.max(value - Math.floor(showPageSize / 2), 1);
      endPage = startPage + showPageSize - 1; // Adjust if limit is exceeded

      if (endPage > pageCount) {
        endPage = pageCount;
        startPage = endPage - showPageSize + 1;
      }
    } // Add page number links
    // eslint-disable-next-line no-plusplus


    for (let number = startPage; number <= endPage; number++) {
      const page = makePage(number, number, number === value);
      items.push(page);
    } // Add links to move between page sets


    if (isMaxSized && showPageSize > 0 && forceEllipses) {
      if (startPage > 1) {
        const prevPages = makePage(startPage - 1, '...');
        items.unshift(prevPages);
      }

      if (endPage < pageCount) {
        const nextPages = makePage(endPage + 1, '...');
        items.push(nextPages);
      }
    }

    return items;
  }, [props.showPageSize, props.forceEllipses, props.value, count]);

  const select = (page, emitChange) => {
    var _a;

    page = Math.min(count, Math.max(1, page));

    if (props.value !== page) {
      // emit('update:modelValue', page);
      if (emitChange) {
        (_a = props.onChange) === null || _a === void 0 ? void 0 : _a.call(props, page);
      }
    }
  };

  (0, _react().useEffect)(() => {
    select(props.value);
  }, [props.value]);

  const renderDesc = () => {
    if (props.mode !== 'multi') {
      return (0, _jsxRuntime().jsx)("li", Object.assign({
        className: (0, _clsx().default)(bem('page-desc'))
      }, {
        children: props.pageDesc ? props.pageDesc : `${props.value}/${count}`
      }));
    }

    return null;
  };

  const simple = props.mode !== 'multi';

  const onSelect = value => () => select(value, true);

  const {
    value
  } = props;
  return (0, _jsxRuntime().jsxs)("ul", Object.assign({
    className: (0, _clsx().default)(bem({
      simple
    }))
  }, {
    children: [(0, _jsxRuntime().jsx)("li", Object.assign({
      className: (0, _clsx().default)(bem('item', {
        disabled: value === 1
      }), bem('prev'), _constant.BORDER),
      onClick: onSelect(value - 1)
    }, {
      children: props.prevText || locale.vanPagination.prev
    })), pages.map((page, index) => (0, _jsxRuntime().jsx)("li", Object.assign({
      className: (0, _clsx().default)(bem('item', {
        active: page.active
      }), bem('page'), _constant.BORDER),
      onClick: onSelect(page.number)
    }, {
      children: props.pageRender ? props.pageRender(page) : page.text
    }), index)), renderDesc(), (0, _jsxRuntime().jsx)("li", Object.assign({
      className: (0, _clsx().default)(bem('item', {
        disabled: value === count
      }), bem('next'), _constant.BORDER),
      onClick: onSelect(value + 1)
    }, {
      children: props.nextText || locale.vanPagination.next
    }))]
  }));
};

Pagination.defaultProps = {
  mode: 'multi',
  pageCount: 0,
  totalItems: 0,
  itemsPerPage: 10,
  showPageSize: 5
};
var _default = Pagination;
exports.default = _default;