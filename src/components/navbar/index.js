import React, { useEffect, useState } from "react";
import "./style.css";
import { HashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-dark.svg"
import menuIcon from "../../assets/menu-icons.svg"

export default function Navbar() {


  const [isMenu, setIsMenu] = useState(false);

  const handleClick = () => {
    if (isMenu) {
      setIsMenu(false)
    }
    else {
      setIsMenu(true)
    }
  }


  return (
    <>
      <div>
        <Link to="/" className="open-menu-icons bg-blend-difference transition-all fixed top-10 left-[5%] h-14 z-[999]  rounded-full p-1 ">
          <img className="h-full" src={logo} alt="logo" />
        </Link>
        <button onClick={handleClick} className="open-menu-icons group transition-all fixed top-10 right-[5%] h-8 z-[999] rounded-full">

          <img className="h-full" src={menuIcon} alt="logo" />

        </button>
      </div>

      <nav className={`${isMenu ? "translate-y-0" : "delay-200 translate-y-full"}  h-screen duration-1000  transition-all ease-in-out w-full bg-transparent fixed inset-0  z-[99]  items-center`}>
        <div className={`${isMenu ? "translate-y-0 delay-300" : "translate-y-full delay-500"} transition-all ease-in-out duration-500 absolute h-screen w-screen bg-gray-300 -z-10 inset-0`} />

        <div className={`${isMenu ? "translate-y-0 delay-500" : "translate-y-full delay-300"} transition-all ease-in-out duration-500 flex items-center  bg-blue h-full w-full`} >
          <div className="flex items-center w-full 2xl:max-w-screen-lg max-w-screen-md mx-auto flex-1 gap-10">

            <ul className="grid gap-5 w-6/12" onClick={() => setIsMenu(false)}>
              {["About", "Tooling", "Work", "Contact"].map(
                (item, ind) => (
                  <li
                    key={ind}
                    className="text-white cursor-pointer max-w-sm mx-2 xl:text-3xl text-4xl hover:text-slate-800 transition-all  duration-200 rounded-xl px-4 py-2"
                  >
                    <HashLink to={`/#${item}`}>
                      {item}
                    </HashLink>
                  </li>
                )
              )}
              <li
                className="text-white cursor-pointer max-w-sm mx-2 xl:text-3xl text-4xl hover:text-slate-800 transition-all  duration-200 rounded-xl px-4 py-2"
              >
                Resume
              </li>
            </ul>


            <div className={`logo-text max-w-sm flex-1 md:block hidden`} alt="logo">
              <img className="w-full h-full object-cover" src="/favicon.svg" alt="logo" />
            </div>

          </div>
        </div>
      </nav>
    </>
  );
}
