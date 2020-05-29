"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = LiveUpdate;

var _react = _interopRequireDefault(require("react"));

var _UpdateContext = _interopRequireDefault(require("../UpdateContext"));

var _useLatestUpdate = _interopRequireDefault(require("../hooks/useLatestUpdate"));

const {
  Provider
} = _UpdateContext.default;
/**
 * Component that creates an UpdateContext by subscribing
 * to updates of an array (or whitespace-separated string) of resources.
 *
 * Children or descendants that use UpdateContext as a context
 * will be rerendered if any of those resources are updated.
 */

function LiveUpdate({
  subscribe = '*',
  children = null
}) {
  const urls = typeof subscribe !== 'string' ? subscribe : /\S/.test(subscribe) ? subscribe.trim().split(/\s+/) : [];
  const latestUpdate = (0, _useLatestUpdate.default)(...urls);
  return /*#__PURE__*/_react.default.createElement(Provider, {
    value: latestUpdate
  }, children);
}