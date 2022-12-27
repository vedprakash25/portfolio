import React from "react";
import Hero from "./heroSection";
import Services from "./servicesSection";
import Tooling from "./toolingSection";
import Projects from "./projectsSection";
import LogoEffect from "./logoEffect";

export default function HomeScreen() {
 

  return (
    <>
      <div className="bg-primary mix-blend-difference">      
        <Hero />
        <LogoEffect/>
        <Services />
        <Tooling />
        <Projects />
      </div>
    </>
  );
}
