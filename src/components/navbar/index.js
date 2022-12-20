import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-transparent sticky top-0 left-0 bg-opacity-40 border-b-[1px] ">
      <div className="container flex justify-between py-4 ">
        <h3
          className={`rounded-sm text-black flex justify-center items-center font-primary font-extrabold text-4xl`}
          alt="logo"
        >
          Dev
        </h3>
        <ul className="flex items-center">
          {["about me", "work", "skills", "resume", "blogs", "contact"].map(
            (item, ind) => (
              <li
                key={ind}
                className="text-black mx-2 hover:text-slate-800 transition-all hover:border-b-4 duration-200 rounded-xl  cursor-pointer px-4"
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
