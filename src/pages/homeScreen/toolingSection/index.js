import React from "react";
import "./style.css";
import HTML from "../../../assets/tech/HTML.svg"
import CSS from "../../../assets/tech/CSS.svg"
import JavaScript from "../../../assets/tech/JavaScript.svg"
import react from "../../../assets/tech/React.svg"
import Git from "../../../assets/tech/Git.svg"
import tailwind from "../../../assets/tech/tailwind.svg"
import DigitalOcean from "../../../assets/tech/DigitalOcean.svg"
import Figma from "../../../assets/tech/Figma.svg"
import Firebase from "../../../assets/tech/Firebase.svg"
import GitHub from "../../../assets/tech/GitHub.svg"
import material from "../../../assets/tech/material.svg"
import Golang from "../../../assets/tech/Golang.svg"
import Laravel from "../../../assets/tech/Laravel.svg"
import MongoDB from "../../../assets/tech/MongoDB.svg"
import Next from "../../../assets/tech/Next.svg"
import Node from "../../../assets/tech/Node.svg"
import TypeScript from "../../../assets/tech/TypeScript.svg"
import svgExport from "../../../assets/tech/svgexport-4.svg"
import vscode from "../../../assets/tech/vscode-alt.svg"


export default function Tooling() {
  const icons = [
    {
      image: HTML,
      title: "HTML 5",
    },
    {
      image: CSS,
      title: "CSS 3",
    },
    {
      image: JavaScript,
      title: "Javascript",
    },
    {
      image: react,
      title: "React",
    },
    {
      image: Git,
      title: "Git",
    },
    {
      image: tailwind,
      title: "Tailwind CSS",
    },
    {
      image: vscode,
      title: "VS Code",
    },
    {
      image: Figma,
      title: "Figma",
    },
    {
      image: GitHub,
      title: "Github",
    },
 
    {
      image: Firebase,
      title: "Firebase",
    },
    {
      image: DigitalOcean,
      title: "Digital Ocean",
    },
    // {
    //   image: Laravel,
    //   title: "Leetcode",
    // },
    // {
    //   image: MongoDB,
    //   title: "Leetcode",
    // },
    {
      image: Next,
      title: "Next",
    },
    {
      image: Node,
      title: "Node",
    },
    {
      image: TypeScript,
      title: "Typescript",
    },
    {
      image: material,
      title: "Material UI",
    },


  ];
  return (
    <div id="Tooling" className="container blade-padding-top-l">
      {/* <div>
        <h2 className="text-blue md:text-center">Tools</h2>
      </div> */}
      <div className="flex items-center overflow-hidden relative blade-padding-top-sm">
        <div className="grid lg:gap-5 gap-4 sm:grid-cols-5 lg:grid-cols-6 p-3 grid-cols-3 flex-wrap w-full ">
          {icons.map((item, ind) => {
            return (
              <div
                className="tools-car bg-blue h-24 rounded-lg grid place-content-center gap-3 font-light text-xl"
                key={ind}
              >
                <h6 className="text-white text-center text-sm transition duration-50">
                  {item.title}
                </h6>
                <img className="h-10 w-auto mx-auto" src={item.image} alt="" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
