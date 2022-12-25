import React, { useEffect } from "react";
import "./style.css";
import gsap from "gsap";

export default function Navbar() {
  useEffect(() => {
    // gsap
    //   .timeline({
    //     scrollTrigger: {
    //       trigger: "nav",
    //       start: "10px 15%",
    //       end: "bottom",
    //       markers: true,
    //       pinType: "fixed",
    //       scrub: true,
    //       toggleActions: "reverse",
    //     },
    //   })
    //   .fromTo(
    //     "nav",
    //     {
    //       opacity: 0,
    //       y: -100,
    //       ease: "power2.in",
    //     },
    //     { opacity: 1, y: 0, duration: 1 }
    //   );
  }, []);

  return (
    <nav className="nav bg-primary sticky top-0 left-0 border-b-[1px] z-[99]">
      <div className="container flex justify-between py-4 ">
        <h3
          className={`logo-text rounded-sm  flex justify-center items-center font-extrabold text-4xl `}
          alt="logo"
        >
          VED
        </h3>
        <ul className="flex items-center">
          {["about me", "work", "skills", "resume", "blogs", "contact"].map(
            (item, ind) => (
              <li
                key={ind}
                className="text-black mx-2 hover:text-slate-800 transition-all hover:border-b-4 duration-200 rounded-xl px-4"
              >
                {item}
              </li>
            )
          )}
        </ul>
      </div>
    </nav>
  );
}
