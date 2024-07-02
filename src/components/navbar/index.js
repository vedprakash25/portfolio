import React, { useState } from "react";
import "./style.css";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import downloadIcon from "../../assets/download_icon.png";
import resume from "../../assets/Ved_Prakash_cv.pdf";

export default function Navbar() {
  const [isMenu, setIsMenu] = useState(false);

  const handleClick = () => {
    if (isMenu) {
      setIsMenu(false);
    } else {
      setIsMenu(true);
    }
  };

  return (
    <div className=" sm:fixed h-fit inset-0 z-[999]">
      <div className="max-w-screen-2xl w-10/12 mx-auto flex justify-between 2xl:py-4 lg:py-2 py-2">
        <div className="lg:h-16 h-10 lg:w-16 w-10 xl:pt-2 sm:mt-0 mt-1 rounded-full bg-primary z-[999] shadow-inner shadow-slate-300">
          <NavLink to="/" className="cursor-pointer mx-auto ">
            {/* <img className="h-full" src={Logo} alt="logo image" /> */}
            <svg
              className="h-full w-full md:p-2"
              viewBox="0 0 787 811"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.5 0L258.898 90L538 599L436.925 811L0.5 0Z"
                fill="#0c1030"
              />
              <path
                d="M563 546L459.51 359.605L585.717 90.6327H787L563 546Z"
                fill="#0c1030"
              />
            </svg>
          </NavLink>
        </div>
        <button
          onClick={handleClick}
          className="open-menu-icons group shadow-inner shadow-slate-300 transition-all lg:h-16 h-12 lg:p-4 p-3 bg-primary z-[999] rounded-full cursor-pointer"
        >
          <svg
            className="h-full stroke-blue  transition-all  fill-none"
            strokeLinejoin="round"
            strokeWidth={1}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1,2 L23,2 L23,9 L1,9 L1,2 Z M4,12 L5,12 L5,13 L4,13 L4,12 Z M4,5 L5,5 L5,6 L4,6 L4,5 Z M4,19 L5,19 L5,20 L4,20 L4,19 Z M1,16 L23,16 L23,23 L1,23 L1,16 Z M1,9 L23,9 L23,16 L1,16 L1,9 Z"></path>
          </svg>
        </button>
      </div>

      <nav
        className={`${isMenu ? "translate-y-0" : "delay-200 translate-y-full"
          } h-screen duration-1000  transition-all ease-in-out w-full bg-transparent fixed inset-0 z-[99]  items-center`}
      >
        <div
          className={`${isMenu ? "translate-y-0 delay-300" : "translate-y-full delay-500"
            } transition-all ease-in-out duration-500 absolute h-screen w-screen bg-gray-300 -z-10 inset-0`}
        />

        <div
          className={`${isMenu ? "translate-y-0 delay-500" : "translate-y-full delay-300"
            } transition-all ease-in-out duration-500 flex items-center  bg-blue h-full w-full `}
        >
          {/* <button
            onClick={handleClick}
            className="absolute bottom-10 left-0 right-0 mx-auto group transition-all w-fit lg:h-14 h-12 lg:p-4 p-3 bg-primary z-[999]  rounded-full "
          >
            <svg
              className="h-full stroke-blue  transition-all  fill-none"
              strokeLinejoin="round"
              strokeWidth={1}
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button> */}
          <div className="flex items-center w-full 2xl:max-w-screen-lg max-w-screen-md mx-auto flex-1 gap-10">
            <ul
              className="grid gap-5 md:w-6/12 md:mx-0 mx-auto md:text-left text-center"
              onClick={() => setIsMenu(false)}
            >
              {["about", "work", "contact"].map((item, ind) => (
                <li
                  key={ind}
                  className="text-white cursor-pointer max-w-sm mx-2 2xl:text-6xl xl:text-5xl text-4xl hover:text-slate-800 transition-all  duration-200 rounded-xl px-4 py-2"
                >
                  <HashLink to={`/#${item}`}>{item}</HashLink>
                </li>
              ))}
              <li className="text-white cursor-pointer max-w-sm mx-2 2xl:text-6xl xl:text-5xl text-4xl hover:text-slate-800 transition-all  duration-200 rounded-xl px-4 py-2">
                <a
                  href={resume}
                  rel="noreferrer"
                  target="_blank"
                  className="flex items-baseline gap-4"
                >
                  resume
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="2xl:h-10 xxl:h-10 h-8 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>
                </a>
              </li>
            </ul>

            <div
              className={`logo-text max-w-sm mx-auto flex-1 md:block hidden`}
              alt="logo"
            >
              {/* <img
                className="w-full h-full object-cover"
                src="/favicon.svg"
                alt="logo"
              /> */}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
