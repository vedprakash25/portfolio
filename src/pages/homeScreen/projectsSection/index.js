import React from "react";
import { Link } from "react-router-dom";
import placeholder from "../../../assets/placeholder.jpg";

export default function Projects() {
  const projectCards = [
    {
      title: "Project1",
      des1: "Lorem ipsum lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem ",
      des2: "",
      // img1: { placeholder },
      img2: { placeholder },
      href: "https://www.google.com",
    },
    {
      title: "Project1",
      des1: "Lorem ipsum",
      des2: "",
      // img1: { placeholder },
      img2: { placeholder },
      route: "/about",
    },
    {
      title: "Project1",
      des1: "Lorem ipsum",
      des2: "",
      // img1: { placeholder },
      img2: { placeholder },
      route: "/about",
    },
    {
      title: "Project1",
      des1: "Lorem ipsum",
      des2: "",
      // img1: { placeholder },
      img2: { placeholder },
      route: "/about",
    },
  ];

  return (
    <div className="container blade-padding">
      <h3 className="heading text-center uppercase">Projects</h3>
      <div className="grid grid-cols-2 gap-6 mt-20">
        {projectCards.map((item, ind) => {
          const { title, des1, href, route } = item;


          return (
            <div className={`card shadow-soft rounded-lg p-4 `}>
              <img
                alt="thumbnail for the project"
                className=" h-52 w-full object-cover object-center grayscale rounded-md"
                src={placeholder}
              />
              <div className="flex justify-between mt-4">
                <div>
                  <h3 className="text-2xl ">{title}</h3>
                  <h4 className="paragraph">{des1}</h4>
                </div>
                <div className="">
                  {href ? <a href={href}>View</a> : ""}
                  {route ? <Link to={route}>View</Link> : ""}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
