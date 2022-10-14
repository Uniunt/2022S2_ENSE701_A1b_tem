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

function _icons() {
  const data = require("@react-vant/icons");

  _icons = function () {
    return data;
  };

  return data;
}

var _image = _interopRequireDefault(require("../../image"));

var _utils = require("../utils");

var _utils2 = require("../../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const [bem] = (0, _utils2.createNamespace)('sku-row');

const SkuRowItem = props => {
  var _a, _b;

  const classPrefix = props.largeImageMode ? 'image-item' : 'item';
  const imgUrl = (0, _react().useMemo)(() => {
    const url = props.skuValue.imgUrl || props.skuValue.img_url;
    return props.largeImageMode ? url || 'https://img01.yzcdn.cn/upload_files/2020/06/24/FmKWDg0bN9rMcTp9ne8MXiQWGtLn.png' : url;
  }, [props.skuValue]);
  const choosable = (0, _react().useMemo)(() => {
    if (!props.disableSoldoutSku) {
      return true;
    }

    return (0, _utils.isSkuChoosable)(props.skuList, props.selectedSku, {
      key: props.skuKeyStr,
      valueId: props.skuValue.id
    });
  }, [JSON.stringify(props.skuList), JSON.stringify(props.selectedSku), props.skuKeyStr]);

  const imageRender = () => {
    if (imgUrl) {
      return (0, _jsxRuntime().jsx)(_image.default, {
        fit: 'cover',
        src: imgUrl,
        lazyload: props.lazyload,
        className: (0, _clsx().default)(bem(`${classPrefix}-img`))
      });
    }

    return null;
  };

  const onSelect = () => {
    if (choosable) {
      props.onSkuSelected(Object.assign(Object.assign({}, props.skuValue), {
        skuKeyStr: props.skuKeyStr
      }));
    }
  };

  const onPreviewImg = event => {
    event.stopPropagation();
    const {
      skuValue,
      skuKeyStr
    } = props;
    props.onSkuPreviewImage(Object.assign(Object.assign({}, skuValue), {
      ks: skuKeyStr,
      imgUrl: skuValue.imgUrl || skuValue.img_url
    }));
  };

  const choosed = props.skuValue.id === props.selectedSku[props.skuKeyStr];
  return (0, _jsxRuntime().jsxs)("span", Object.assign({
    className: (0, _clsx().default)(bem(classPrefix, {
      active: choosed,
      disabled: !choosable
    })),
    onClick: onSelect
  }, {
    children: [imageRender(), (0, _jsxRuntime().jsx)("div", Object.assign({
      className: (0, _clsx().default)(bem(`${classPrefix}-name`))
    }, {
      children: props.largeImageMode ? (0, _jsxRuntime().jsx)("span", Object.assign({
        className: (0, _clsx().default)('rv-multi-ellipsis--l2')
      }, {
        children: (_a = props.skuValue) === null || _a === void 0 ? void 0 : _a.name
      })) : (_b = props.skuValue) === null || _b === void 0 ? void 0 : _b.name
    })), props.largeImageMode && (props.previewIcon || (0, _jsxRuntime().jsx)(_icons().ExpandO, {
      className: (0, _clsx().default)(bem(`${classPrefix}-img-icon`)),
      onClick: onPreviewImg
    }))]
  }));
};

var _default = SkuRowItem;
exports.default = _default;