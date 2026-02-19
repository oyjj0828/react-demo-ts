import { createElement } from "react";
import type { RouteObject } from "react-router-dom";
import Home from "../pages/Home";
import RouteError from "../pages/RouteError";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: createElement(Home),
  },
  {
    path: "*",
    element: createElement(RouteError),
  },
];
