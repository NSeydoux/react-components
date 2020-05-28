import React from 'react';
import auth from 'solid-auth-client';
/** Button that lets the user log out with Solid. */

export default function LogoutButton({
  children = 'Log out',
  className = 'solid auth logout'
}) {
  return /*#__PURE__*/React.createElement("button", {
    className: className,
    onClick: () => auth.logout()
  }, children);
}