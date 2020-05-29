"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

var _useWebId = _interopRequireDefault(require("../hooks/useWebId"));

var _util = require("../util");

/**
 * Higher-order component that passes the WebID of the logged-in user
 * to the webId property of the wrapped component.
 */
var _default = (0, _util.higherOrderComponent)('WithWebId', Component => props => /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, {
  webId: (0, _useWebId.default)()
})));

exports.default = _default;