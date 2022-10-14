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

var _picker = _interopRequireDefault(require("../picker"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const INHERIT_PROPS = ['title', 'visible', 'popup', 'value', 'defaultValue', 'loading', 'readOnly', 'itemHeight', 'swipeDuration', 'visibleItemCount', 'cancelButtonText', 'confirmButtonText', 'toolbar', 'columnsTop', 'columnsBottom', 'optionRender', 'placeholder', 'onChange', 'onCancel', 'onConfirm', 'children'];

function parseVanAreaList(data, columnsNum) {
  const {
    province_list = {},
    city_list = {},
    county_list = {}
  } = data;
  const provinces = Object.entries(province_list).map(([value, text]) => ({
    value,
    text
  }));
  const citys = Object.entries(city_list).map(([value, text]) => ({
    value,
    text
  }));
  const countrys = Object.entries(county_list).map(([value, text]) => ({
    value,
    text
  }));

  if (columnsNum > 2) {
    citys.forEach(city => {
      var _a;

      const value = (_a = city.value) === null || _a === void 0 ? void 0 : _a.slice(0, 4);
      const children = countrys.filter(country => {
        var _a;

        return ((_a = country.value) === null || _a === void 0 ? void 0 : _a.slice(0, 4)) === value;
      });
      city.children = children;
    });
  }

  if (columnsNum > 1) {
    provinces.forEach(province => {
      var _a;

      const provinceCode = (_a = province.value) === null || _a === void 0 ? void 0 : _a.slice(0, 2);
      const children = citys.filter(city => {
        var _a;

        return ((_a = city.value) === null || _a === void 0 ? void 0 : _a.slice(0, 2)) === provinceCode;
      });
      province.children = children;
    });
  }

  return provinces;
}

const [bem] = (0, _utils.createNamespace)('area');
const Area = (0, _react().forwardRef)((props, ref) => {
  const columns = (0, _react().useMemo)(() => {
    var _a;

    return (_a = props.columns) !== null && _a !== void 0 ? _a : parseVanAreaList(props.areaList, +props.columnsNum);
  }, [props.columnsNum, props.areaList, props.columns]);
  return (0, _jsxRuntime().jsx)(_picker.default, Object.assign({
    ref: ref,
    style: props.style,
    className: (0, _clsx().default)(bem(), props.className),
    columns: columns
  }, (0, _utils.pick)(props, INHERIT_PROPS)));
});
Area.defaultProps = {
  areaList: {},
  columnsNum: 3
};
var _default = Area;
exports.default = _default;