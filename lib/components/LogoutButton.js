"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = LogoutButton;

var _react = _interopRequireDefault(require("react"));

var _solidAuthClient = _interopRequireDefault(require("solid-auth-client"));

/** Button that lets the user log out with Solid. */
function LogoutButton({
  children = 'Log out',
  className = 'solid auth logout'
}) {
  return /*#__PURE__*/_react.default.createElement("button", {
    className: className,
    onClick: () => _solidAuthClient.default.logout()
  }, children);
}