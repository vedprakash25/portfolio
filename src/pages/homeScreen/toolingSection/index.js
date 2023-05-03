import React from "react";
import "./style.css";

export default function Tooling() {
  const icons = [
    {
      image: "",
      title: "HTML 5",
    },
    {
      image: "",
      title: "CSS 3",
    },
    {
      image: "",
      title: "JS",
    },
    {
      image: "",
      title: "React",
    },
    {
      image: "",
      title: "Git",
    },
    {
      image: "",
      title: "Tailwind",
    },
    {
      image: "",
      title: "Material UI",
    },
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
    <div className="container blade-padding-top-lg">
      <div>
        <h2 className="text-blue text-center">Tooling</h2>
      </div>
      <div className="flex items-center overflow-hidden relative mt-20">
        <div className="grid gap-3 sm:grid-cols-4 p-4 grid-cols-2 flex-wrap w-full ">
          {icons.map((item, ind) => {
            return (
              <div
                className="tools-card h-20  rounded-lg grid place-content-center font-light text-xl"
                key={ind}
              >
                <h4 className="text-blue transition duration-50">
                  {item.title}
                </h4>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
