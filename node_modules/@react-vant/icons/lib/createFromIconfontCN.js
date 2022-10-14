"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var React = _interopRequireWildcard(require("react"));

var _IconBase = _interopRequireDefault(require("./IconBase"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function (nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

const cache = [];

const createFromIconfontCN = scriptUrl => {
  const passUrl = Array.isArray(scriptUrl) ? scriptUrl : [scriptUrl];
  const urls = passUrl.filter(u => !cache.includes(u));

  if (typeof document !== 'undefined' && typeof window !== 'undefined' && typeof document.createElement === 'function' && typeof scriptUrl === 'string' && urls.length) {
    urls.forEach(u => {
      const script = document.createElement('script');
      script.setAttribute('src', u);
      script.setAttribute('data-namespace', u);
      cache.push(u);
      document.body.appendChild(script);
    });
  }

  return React.forwardRef((props, ref) => {
    const {
      name
    } = props;
    let content;

    if (name) {
      content = React.createElement("svg", {
        width: "1em",
        height: "1em",
        fill: "currentColor"
      }, React.createElement("use", {
        xlinkHref: `#${name}`
      }));
    }

    return React.createElement(_IconBase.default, Object.assign({}, props, {
      ref: ref
    }), content);
  });
};

var _default = createFromIconfontCN;
exports.default = _default;