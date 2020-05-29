"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = useWebId;

var _react = require("react");

var _solidAuthClient = _interopRequireDefault(require("solid-auth-client"));

// Keep track of the WebID and the state setters tracking it
let webId = undefined;
const subscribers = new Set();

const getWebId = (_, id) => id;
/**
 * Returns the WebID (string) of the active user,
 * `null` if there is no user,
 * or `undefined` if the user state is pending.
 */


function useWebId(reducer = getWebId) {
  const [result, updateWebId] = (0, _react.useReducer)(reducer, webId, reducer);
  (0, _react.useDebugValue)(webId);
  (0, _react.useEffect)(() => {
    updateWebId(webId);
    subscribers.add(updateWebId);
    return () => subscribers.delete(updateWebId);
  }, []);
  return result;
} // Inform subscribers when the WebID changes


_solidAuthClient.default.trackSession(session => {
  webId = session ? session.webId : null;

  for (const subscriber of subscribers) subscriber(webId);
});