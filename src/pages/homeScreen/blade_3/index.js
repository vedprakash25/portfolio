import React from "react";
import "./style.css";

export default function Blade_3() {
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
    <div className="container blade-padding">
      <div className="">
        <h4 className="heading text-5xl text-blue-200 text-center">
          Tooling
        </h4>
        <p className="paragraph mt-2 text-center px-4">
          Et aliqua qui enim proident duis laboris do sint dolor ullamco aute
          dolore.
        </p>
      </div>
      <div className="flex items-center overflow-hidden relative mt-8">
        <div className="grid gap-3 grid-cols-4 flex-wrap w-full mt-4 p-4">
          {icons.map((item, ind) => {
            return (
              <div
                className="h-20 shadow-soft rounded-lg grid place-content-center font-light text-xl"
                key={ind}
              >
                {item.title}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
