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
      <div className="container flex justify-between py-2 ">
        <h3 className={`logo-text w-14`} alt="logo">
          <svg
            className="w-full"
            viewBox="0 0 80 93"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_d_3_19)">
              <path
                d="M7 3L27.5 11.5L50.0833 69.0571L43.8195 83H38.0139L7 3ZM45.1944 35.8L55.7361 12.1429H73C73 12.1429 73 12.1429 70.0972 18.5429C61.7454 38.1238 56.0926 53.1333 54.0556 58.3143L52.9861 55.6857L45.1944 35.8Z"
                fill="#31344B"
              />
              <path
                d="M7 3L27.5 11.5L50.0833 69.0571L43.8195 83H38.0139L7 3ZM45.1944 35.8L55.7361 12.1429H73C73 12.1429 73 12.1429 70.0972 18.5429C61.7454 38.1238 56.0926 53.1333 54.0556 58.3143L52.9861 55.6857L45.1944 35.8Z"
                stroke="#31344B"
                stroke-width="3"
              />
            </g>
            <defs>
              <filter
                id="filter0_d_3_19"
                x="0.333012"
                y="0.27034"
                width="78.9944"
                height="92.2297"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="4" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_3_19"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_3_19"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
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
