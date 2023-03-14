import React from "react";
import { Link } from "react-router-dom";
import placeholder from "../../../assets/placeholder.jpg";
import blogspot from "../../../assets/blogspot_thumbnail.jpg";

export default function Projects() {
  const projectCards = [
    {
      title: "Blogs_pot",
      des1: "Blogs_pot description will come here.",
      des2: "",
      img2: blogspot,
      href: "https://vedprakash25.github.io/blogs_pot/",
    },
    {
      title: "Project",
      des1: "Lorem ipsum",
      des2: "",
      img2: { placeholder },
      route: "/about",
    },
    {
      title: "Project",
      des1: "Lorem ipsum",
      des2: "",
      img2: { placeholder },
      route: "/about",
    },
    {
      title: "Project",
      des1: "Lorem ipsum",
      des2: "",
      img2: { placeholder },
      route: "/about",
    },
  ];

  return (
    <div className="container blade-padding">
      <h2 className="text-center text-blue">
        A small selections <br /> of my work
      </h2>
      <div className="grid grid-cols-2 gap-6 mt-20">
        {projectCards.map((item, ind) => {
          const { title, des1, href, route } = item;

          return (
            <div className={`card shadow-soft rounded-lg p-4 `} key={ind}>
              <div className="bg-white">
                <img
                  alt="thumbnail for the project"
                  className=" h-52 w-full object-contain object-center  rounded-md"
                  src={item.img2}
                />
              </div>
              <div className="flex justify-between mt-4">
                <div>
                  <h4 className=" text-blue font-medium">{title}</h4>
                  <h5 className="text-blue-200">{des1}</h5>
                </div>
                <div className="">
                  {href ? (
                    <a href={href} target="_blank" rel='noreferrer' className="text-blue">
                      View
                    </a>
                  ) : (
                    ""
                  )}
                  {route ? (
                    <Link to={route} className="text-blue">
                      View
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
