import React, { useEffect } from "react";
import "./style.css";
// import gsap from "gsap";

export default function NavbarDRAFT() {
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
    <nav className="nav bg-black bg-opacity-80 backdrop-blur-3xl fixed top-0 left-0 right-0 z-[99]">
      <div className=" flex justify-between py-2 ">
      <ul className="flex items-center">
          {["about me", "work", "skills",].map(
            (item, ind) => (
              <li
                key={ind}
                className="text-white mx-2 hover:text-slate-800 transition-all hover:border-b-4 duration-200 rounded-xl px-4"
              >
                {item}
              </li>
            )
          )}
        </ul>


        {/* <div className={`logo-text w-14`} alt="logo">
         <img src="/favicon.svg" alt="logo"/>
        </div> */}
        
       
        <ul className="flex items-center">
          {[ "resume", "blogs", "contact"].map(
            (item, ind) => (
              <li
                key={ind}
                className="text-white mx-2 hover:text-slate-800 transition-all hover:border-b-4 duration-200 rounded-xl px-4"
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
