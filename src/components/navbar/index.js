import React, { useState } from "react";
import "./style.css";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.svg";
import resume from "../../assets/ved-prakash-cv.pdf";

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
    <>
      <div className="container mx-auto flex justify-between lg:py-2 py-2">
        <NavLink
          to="/"
          className="cursor-pointer lg:h-14 h-10 p-1 rounded-full bg-primary z-[999]"
        >
          <img className="h-full" src={Logo} alt="logo" />
        </NavLink>
        <button
          onClick={handleClick}
          className="open-menu-icons group transition-all lg:h-14 h-12 lg:p-4 p-3 bg-primary z-[999] rounded-full "
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
            <ul className="grid gap-5 w-6/12" onClick={() => setIsMenu(false)}>
              {["About", "Work", "Contact"].map((item, ind) => (
                <li
                  key={ind}
                  className="text-white cursor-pointer max-w-sm mx-2 2xl:text-4xl xl:text-3xl text-4xl hover:text-slate-800 transition-all  duration-200 rounded-xl px-4 py-2"
                >
                  <HashLink to={`/#${item}`}>{item}</HashLink>
                </li>
              ))}
              <li className="text-white cursor-pointer max-w-sm mx-2 2xl:text-4xl xl:text-3xl text-4xl hover:text-slate-800 transition-all  duration-200 rounded-xl px-4 py-2">
                <a href={resume} target="_blank">
                  Resume
                </a>
              </li>
            </ul>

            <div
              className={`logo-text max-w-sm flex-1 md:block hidden`}
              alt="logo"
            >
              <img
                className="w-full h-full object-cover"
                src="/favicon.svg"
                alt="logo"
              />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
