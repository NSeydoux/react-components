"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = Name;

var _react = _interopRequireDefault(require("react"));

var _Value = _interopRequireDefault(require("./Value"));

var _util = require("../util");

/** Displays the name of a Solid LDflex subject. */
function Name({
  src,
  children = null
}) {
  return /*#__PURE__*/_react.default.createElement(_Value.default, {
    src: src && `${(0, _util.srcToLDflex)(src)}.name`
  }, children);
}