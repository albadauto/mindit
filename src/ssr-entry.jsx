import React from "react";
import { renderToString } from "react-dom/server";
import Root from "./Root.jsx";

export function renderApp(path = "/") {
  return renderToString(<Root path={path} />);
}
