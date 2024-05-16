import React, { useEffect } from "react";
import "./style.css";
// import gsap from "gsap";

export default function NavbarDRAFT() {
  return (
    <nav className="nav bg-black bg-opacity-80 backdrop-blur-3xl fixed top-0 left-0 right-0 z-[99]">
      <div className=" flex justify-between py-2 ">
        <ul className="flex items-center">
          {["about me", "work", "skills"].map((item, ind) => (
            <li
              key={ind}
              className="text-white mx-2 hover:text-slate-800 transition-all hover:border-b-4 duration-200 rounded-xl px-4"
            >
              {item}
            </li>
          ))}
        </ul>

        <ul className="flex items-center">
          {["resume", "blogs", "contact"].map((item, ind) => (
            <li
              key={ind}
              className="text-white mx-2 hover:text-slate-800 transition-all hover:border-b-4 duration-200 rounded-xl px-4"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
