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

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const SpinIcon = ({
  bem
}) => (0, _jsxRuntime().jsx)(_jsxRuntime().Fragment, {
  children: Array(12).fill(null) // eslint-disable-next-line react/no-array-index-key
  .map((_, index) => (0, _jsxRuntime().jsx)("i", {
    className: (0, _clsx().default)(bem('line', String(index + 1)))
  }, index))
});

const CircularIcon = ({
  bem
}) => (0, _jsxRuntime().jsx)("svg", Object.assign({
  className: (0, _clsx().default)(bem('circular')),
  viewBox: '25 25 50 50'
}, {
  children: (0, _jsxRuntime().jsx)("circle", {
    cx: '50',
    cy: '50',
    r: '20',
    fill: 'none'
  })
}));

const BallIcon = ({
  bem
}) => (0, _jsxRuntime().jsxs)("div", Object.assign({
  className: (0, _clsx().default)(bem('ball'))
}, {
  children: [(0, _jsxRuntime().jsx)("div", {}), (0, _jsxRuntime().jsx)("div", {}), (0, _jsxRuntime().jsx)("div", {})]
}));

const Icon = bem => ({
  spinner: (0, _jsxRuntime().jsx)(SpinIcon, {
    bem: bem
  }),
  circular: (0, _jsxRuntime().jsx)(CircularIcon, {
    bem: bem
  }),
  ball: (0, _jsxRuntime().jsx)(BallIcon, {
    bem: bem
  })
});

const [bem] = (0, _utils.createNamespace)('loading');

const Loading = props => {
  const {
    className,
    type,
    vertical,
    color,
    size,
    textColor,
    children,
    textSize
  } = props;
  const spinnerStyle = (0, _react().useMemo)(() => Object.assign({
    color
  }, (0, _utils.getSizeStyle)(size)), [color, size]);

  const renderText = () => {
    if (children) {
      return (0, _jsxRuntime().jsx)("span", Object.assign({
        className: (0, _clsx().default)(bem('text')),
        style: {
          fontSize: (0, _utils.addUnit)(textSize),
          color: textColor !== null && textColor !== void 0 ? textColor : color
        }
      }, {
        children: children
      }));
    }

    return null;
  };

  return (0, _jsxRuntime().jsxs)("div", Object.assign({
    className: (0, _clsx().default)(className, bem([type, {
      vertical
    }])),
    style: props.style
  }, {
    children: [(0, _jsxRuntime().jsx)("span", Object.assign({
      className: (0, _clsx().default)(bem('spinner', type)),
      style: spinnerStyle
    }, {
      children: Icon(bem)[type]
    })), renderText()]
  }));
};

Loading.defaultProps = {
  type: 'circular'
};
var _default = Loading;
exports.default = _default;