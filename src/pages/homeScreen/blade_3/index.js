import React from "react";
import "./style.css";

export default function Blade_3() {
  const icons = [
    {
      image: "",
      title: "VS",
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
    <div className="container flex ">
      <div className="flex-1 flex items-center overflow-hidden relative">
        <div className="icons-wrapper absolute flex ">
          {icons.map((item, ind) => {
            return (
              <span className="text-2xl h-32 w-32" key={ind}>
                {item.title}
                {ind}
              </span>
            );
          })}
        </div>
      </div>
      <div className="w-96 p-5">
        <h4 className="text-4xl text-blue-300 font-medium">Tooling</h4>
        <p className="paragraph ">
          While working on different categories of the project, I found these
          interesting and amazing tools
        </p>
      </div>
    </div>
  );
}
