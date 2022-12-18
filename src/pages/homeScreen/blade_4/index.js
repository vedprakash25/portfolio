import React from "react";
import { Link } from "react-router-dom";
import placeholder from "../../../assets/placeholder.jpg";

export default function Blade_4() {
  const projectCards = [
    {
      title: "Project1",
      des1: "Lorem ipsum",
      des2: "",
      img1: { placeholder },
      img2: { placeholder },
      href: "https://www.google.com",
    },
    {
      title: "Project1",
      des1: "Lorem ipsum",
      des2: "",
      img1: { placeholder },
      img2: { placeholder },
      route: "/about",
    },
  ];

  return (
    <div className="container blade-padding">
      <h3 className="heading text-center uppercase">Projects</h3>
      <div className="grid grid-cols-2 gap-6 mt-10">
        {projectCards.map((item, ind) => {
          const { title, des1, img1, href, route } = item;
          return (
            <div className="card d rounded-lg p-4">
              <img
                className=" h-52 w-full object-cover object-center grayscale rounded-md"
                src={placeholder}
              />
              <h3 className="text-2xl mt-5">
                {title}
                {ind}
              </h3>
              <h4 className="paragraph">{des1}</h4>
              {href ? <a href={href}>View</a> : ""}
              {route ? <Link to={route}>View</Link> : ""}
            </div>
          );
        })}
      </div>
    </div>
  );
}
