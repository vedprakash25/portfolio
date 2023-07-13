import React from "react";
import { Link } from "react-router-dom";
import placeholder from "../../../assets/placeholder.jpg";
import blogspot from "../../../assets/blogspot_thumbnail.jpg";
import "./style.css";

export default function Projects() {
  const projectCards = [
    {
      title: "Varaha",
      des1: "Varaha offers carbon credits that are associated with specific projects related to sustainable agriculture and regenerative farming practices. The projects aim to reduce carbon emissions and promote carbon sequestration in the soil, which can help to mitigate the effects of climate change. ",
      des2: "",
      img2: placeholder,
      href: "https://www.varaha.earth/",
    },
    {
      title: "Verdemobility",
      des1: "Verdemobility aims to support the transition to sustainable transportation by providing reliable and convenient EV charging solutions to individuals, businesses, and communities.",
      des2: "",
      img2: placeholder,
      href: "https://www.verdemobility.com/",
    },
    {
      title: "EVRE",
      des1: "EVRE.in is a company based in India that is focused on developing and promoting electric vehicle charging infrastructure and related services. ",
      des2: "",
      img2: placeholder,
      href: "https://evre.in/",
    },
    {
      title: "Gavyam Gentech",
      des1: "Gavyamgentec is a company based in India that focuses on developing and promoting products made from cow by-products. ",
      des2: "",
      img2: placeholder,
      href: "https://www.gavyamgentec.com/",
    },
    {
      title: "System Level Solutions",
      des1: "system level solutions are designed to address complex problems and challenges by taking a comprehensive, integrated approach that considers all of the components and subsystems that make up a larger system.",
      des2: "",
      img2: placeholder,
      href: "https://www.slscorp.com/",
    },
    {
      title: "Blacksof",
      des1: "Blacksof amplify the Brand Potential of Businesses with authenticity and shared values.      ",
      des2: "",
      img2: placeholder,
      href: "https://blacksof.com/",
    },

    {
      title: "Fasal",
      des1: "Fasal is adklfj sdflksjfslk sddfjlkj.",
      des2: "",
      img2: placeholder,
      href: "https://fasal-website.vercel.app/",
    },

    {
      title: "Blogs_pot",
      des1: "Blogs_pot description will come here.",
      des2: "",
      img2: blogspot,
      href: "https://vedprakash25.github.io/blogs_pot/",
    },
  ];

  return (
    <div className="container blade-padding-lg">
      <h2 className="text-center text-blue">
        A small selections <br /> of my work
      </h2>
      <div
        className={`project-cardsWrapper  max-w-screen-lg mx-auto grid gap-7 mt-20`}
      >
        {projectCards.map((item, ind) => {
          const { title, des1, href, route } = item;

          return (
            <div
              className={`card shadow-soft w-full max-w-xl grid rounded-lg p-4 `}
              key={ind}
            >
              <div className="bg-blue rounded-lg pt-10">
                <img
                  alt="thumbnail for the project"
                  className="h-52 w-full object-contain object-center rounded-sm"
                  src={item.img2}
                />
              </div>

              <div className="flex justify-between mt-4">
                <div>
                  <h4 className=" text-blue font-medium">{title}</h4>
                  <h5 className="text-blue-200 mt-1">{des1}</h5>
                </div>
                <div className="">
                  {href ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue hover:text-opacity-70"
                    >
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
