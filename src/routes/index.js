import React from "react";
import { Outlet } from "react-router-dom";
import { AboutScreen, Error404Screen, HomeScreen } from "../pages";
import { Navbar, Footer } from "../components";

const ViewWithNavAndFooter = () => {
  return (
    <div className="bg-blue-000">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

const Routes = () => {
  return [
    {
      path: "/",
      element: <ViewWithNavAndFooter />,
      children: [
        { path: "", element: <HomeScreen /> },
        // { path: "about", element: <AboutScreen /> },
        // { path: "coming-soon", element: <ComingSoonScreen /> },
        // { path: "career", element: <CareerScreen /> },
      ],
    },
    {
      path: "*",
      element: <Error404Screen />,
    },
  ];
};

export default Routes;
