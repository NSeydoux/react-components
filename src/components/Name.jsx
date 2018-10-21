import React from 'react';
import Value from './Value';

/** Displays the name of a Solid LDflex subject. */
export default ({ src, children = null }) =>
  <Value src={src && `${src}.name`}>{children}</Value>;