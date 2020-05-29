"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = List;

var _react = _interopRequireDefault(require("react"));

var _useLDflexList = _interopRequireDefault(require("../hooks/useLDflexList"));

/** Displays a list of items matching a Solid LDflex expression. */
function List({
  src,
  offset = 0,
  limit = Infinity,
  filter = () => true,
  container = items => /*#__PURE__*/_react.default.createElement("ul", null, items),
  children = (item, index) => /*#__PURE__*/_react.default.createElement("li", {
    key: index
  }, `${item}`)
}) {
  const items = (0, _useLDflexList.default)(src).filter(filter).slice(offset, +offset + +limit).map(children);
  return container ? container(items) : items;
}