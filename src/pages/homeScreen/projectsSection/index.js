import React from "react";
import { Link } from "react-router-dom";
import placeholder from "../../../assets/placeholder.jpg";

export default function Projects() {
  const projectCards = [
    {
      title: "Project",
      des1: "Lorem ipsum lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
      des2: "",
      // img1: { placeholder },
      img2: { placeholder },
      href: "https://www.google.com",
    },
    {
      title: "Project",
      des1: "Lorem ipsum",
      des2: "",
      // img1: { placeholder },
      img2: { placeholder },
      route: "/about",
    },
    {
      title: "Project",
      des1: "Lorem ipsum",
      des2: "",
      // img1: { placeholder },
      img2: { placeholder },
      route: "/about",
    },
    {
      title: "Project",
      des1: "Lorem ipsum",
      des2: "",
      // img1: { placeholder },
      img2: { placeholder },
      route: "/about",
    },
  ];

  return (
    <div className="container blade-padding">
      <h2 className="text-center text-blue">A small selections <br/> of my work</h2>
      <div className="grid grid-cols-2 gap-6 mt-20">
        {projectCards.map((item, ind) => {
          const { title, des1, href, route } = item;


          return (
            <div className={`card shadow-soft rounded-lg p-4 `} key={ind}>
              <img
                alt="thumbnail for the project"
                className=" h-52 w-full object-cover object-center grayscale rounded-md"
                src={placeholder}
              />
              <div className="flex justify-between mt-4">
                <div>
                  <h4 className=" text-blue font-medium">{title}-{ind}</h4>
                  <h5 className="text-blue-200">{des1}</h5>
                </div>
                <div className="">
                  {href ? <a href={href} className="text-blue">View</a> : ""}
                  {route ? <Link to={route} className="text-blue">View</Link> : ""}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
