import React from "react";
import checkPropTypes from "check-prop-types";

declare global {
  const React: typeof React;
  const APPLICATION: {};
}

declare module checkPropTypes;
