import React from "react";
import "./style.css";

export default function Blade_3() {
  const icons = [
    {
      image: "",
      title: "VS Code",
    },
    {
      image: "",
      title: "Figma",
    },
    {
      image: "",
      title: "Github",
    },
    {
      image: "",
      title: "Leetcode",
    },
    {
      image: "",
      title: "GitBucket",
    },
  ];
  return (
    <div className="container blade-padding">
      <div className="">
        <h4 className="text-4xl text-blue-300 font-medium">Tooling</h4>
        <p className="paragraph">
          Et aliqua qui enim proident duis laboris do sint dolor ullamco aute
          dolore.
        </p>
      </div>
      <div className="flex items-center overflow-hidden relative">
        <ul className=" ">
          {icons.map((item, ind) => {
            return (
              <li className="text-2xl" key={ind}>
                {item.title}
                {ind}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
