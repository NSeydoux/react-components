"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = evaluateExpressions;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _withWebId = _interopRequireDefault(require("./withWebId"));

var _ExpressionEvaluator = _interopRequireDefault(require("../ExpressionEvaluator"));

var _util = require("../util");

/**
 * Higher-order component that evaluates LDflex expressions in properties
 * and passes their results to the wrapped component.
 */
function evaluateExpressions(valueProps, listProps, Component) {
  // Shift the optional listProps parameter when not specified
  if (!Component) [Component, listProps] = [listProps, []];
  valueProps = valueProps ? [...valueProps] : [];
  listProps = listProps ? [...listProps] : []; // Create the initial state for all Component instances

  const initialState = {
    pending: true
  };

  for (const name of valueProps) initialState[name] = undefined;

  for (const name of listProps) initialState[name] = []; // Create a higher-order component that wraps the given Component


  class EvaluateExpressions extends _react.default.Component {
    constructor(...args) {
      super(...args);
      (0, _defineProperty2.default)(this, "state", initialState);
    }

    componentDidMount() {
      this.evaluator = new _ExpressionEvaluator.default();

      this.update = state => this.setState(state);

      this.evaluate(valueProps, listProps);
    }

    componentDidUpdate(prevProps) {
      // A property needs to be re-evaluated if it changed
      // or, if it is a string expression, when the user has changed
      // (which might influence the expression's evaluation).
      const newUser = this.props.webId !== prevProps.webId;

      const changed = name => this.props[name] !== prevProps[name] || newUser && typeof this.props[name] === 'string';

      this.evaluate(valueProps.filter(changed), listProps.filter(changed));
    }

    componentWillUnmount() {
      this.evaluator.destroy();
    }

    render() {
      return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, this.props, this.state));
    }

    evaluate(values, lists) {
      const {
        props,
        evaluator
      } = this;
      if (values.length > 0 || lists.length > 0) evaluator.evaluate((0, _util.pick)(props, values), (0, _util.pick)(props, lists), this.update);
    }

  }

  (0, _defineProperty2.default)(EvaluateExpressions, "displayName", `EvaluateExpressions(${(0, _util.getDisplayName)(Component)})`);
  return (0, _withWebId.default)(EvaluateExpressions);
}