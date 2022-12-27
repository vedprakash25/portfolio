import React, { useEffect, useRef } from "react";
import Blade_1 from "./blade_1";
import Blade_2 from "./blade_2";
import Blade_3 from "./blade_3";
import Blade_4 from "./blade_4";
import Blade_5 from "./blade_5";

export default function HomeScreen() {
 

  return (
    <>
      <div className="bg-primary mix-blend-difference">      
        <Blade_1 />
        <Blade_2 />
        <Blade_3 />
        <Blade_4 />
        <Blade_5 />
      </div>
    </>
  );
}
