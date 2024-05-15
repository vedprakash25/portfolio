import React from "react";
// import { LogoEffect } from "../../components";
import Intoduction from "./introSection";
import Services from "./servicesSection";
import Tooling from "./toolingSection";
import Projects from "./projectsSection";
// import Teaser from "./teaserSection";

export default function HomeScreen() {
  return (
    <>
      <div className="bg-white mix-blend-difference">
        {/* <Teaser /> */}
        <Intoduction />
        {/* <LogoEffect/> */}
        <Services />
        <Tooling />
        <Projects />
      </div>
    </>
  );
}
