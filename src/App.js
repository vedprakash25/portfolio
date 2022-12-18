import React from "react";
import { BrowserRouter, useRoutes } from "react-router-dom";
import Routes from "./routes";

const RenderRoutes = () => {
  let routeTree = useRoutes(Routes());
  return routeTree;
};

export default function App() {
  return (
    <BrowserRouter>
      <RenderRoutes />
    </BrowserRouter>
  );
}
