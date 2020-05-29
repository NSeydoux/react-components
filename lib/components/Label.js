"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = Label;

var _react = _interopRequireDefault(require("react"));

var _Value = _interopRequireDefault(require("./Value"));

var _util = require("../util");

/** Displays the label of a Solid LDflex subject. */
function Label({
  src,
  children = null
}) {
  return /*#__PURE__*/_react.default.createElement(_Value.default, {
    src: src && `${(0, _util.srcToLDflex)(src)}.label`
  }, children);
}