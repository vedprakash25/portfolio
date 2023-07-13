import React, { useEffect, useState } from "react";
import "./style.css";
// import gsap from "gsap";

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

  const [isMenu, setIsMenu] = useState(false);

  const handleClick = () => {
    if (isMenu) {
      setIsMenu(false);
    } else setIsMenu(true);
  };

  return (
    <>
      <button
        onClick={handleClick}
        className="open-menu-icons group hover:bg-primary hover:outline-2 outline-blue transition-all fixed md:top-10 top-5 right-[5%] h-14 z-[999]  rounded-full p-4 bg-blue"
      >
        <svg
          className="h-full stroke-primary transition-all group-hover:stroke-blue fill-none"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1,2 L23,2 L23,9 L1,9 L1,2 Z M4,12 L5,12 L5,13 L4,13 L4,12 Z M4,5 L5,5 L5,6 L4,6 L4,5 Z M4,19 L5,19 L5,20 L4,20 L4,19 Z M1,16 L23,16 L23,23 L1,23 L1,16 Z M1,9 L23,9 L23,16 L1,16 L1,9 Z"></path>
        </svg>
      </button>

      <nav
        className={`${
          isMenu ? "flex" : "hidden"
        } h-screen w-full bg-blue fixed top-0 left-0 right-0 z-[99]  items-center`}
      >
        <div className="flex items-center w-full 2xl:max-w-screen-xl max-w-screen-lg mx-auto flex-1">
          <ul className="grid gap-5 flex-1 max-w-sm">
            {["about me", "work", "skills", "resume", "blogs", "contact"].map(
              (item, ind) => (
                <li
                  key={ind}
                  className="text-white mx-2 text-5xl hover:text-slate-800 transition-all hover:border-b-4 duration-200 rounded-xl px-4 py-2"
                >
                  {item}
                </li>
              )
            )}
          </ul>

          <div className={`logo-text max-w-sm d flex-1`} alt="logo">
            <img
              className="w-full h-full object-cover"
              src="/favicon.svg"
              alt="logo"
            />
          </div>
        </div>
      </nav>
    </>
  );
}
