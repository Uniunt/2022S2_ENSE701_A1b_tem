"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.callInterceptor = callInterceptor;

function _react() {
  const data = _interopRequireDefault(require("react"));

  _react = function () {
    return data;
  };

  return data;
}

var _ = require(".");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable @typescript-eslint/ban-types */

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
function callInterceptor(options) {
  const {
    interceptor,
    args,
    done,
    canceled
  } = options;

  if (interceptor) {
    // eslint-disable-next-line prefer-spread
    const returnVal = interceptor.apply(null, args || []);

    if ((0, _.isPromise)(returnVal)) {
      returnVal.then(value => {
        if (value) {
          done();
        } else if (canceled) {
          canceled();
        }
      }).catch(_.noop);
    } else if (returnVal) {
      done();
    } else if (canceled) {
      canceled();
    }
  } else {
    done();
  }
}