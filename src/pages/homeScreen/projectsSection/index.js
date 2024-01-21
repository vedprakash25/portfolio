import React from "react";
import { Link } from "react-router-dom";
import placeholder from "../../../assets/placeholder.jpg";
import blogspot from "../../../assets/blogspot_thumbnail.jpg";
import "./style.css";

export default function Projects() {
  const projectCards = [
    {
      title: "Innogent",
      des1: "Innogent  is a versatile software development company, specializing in React JS, Cloud Services, Java Development, AWS Cloud Computing, DevOps, and Big Data technologies.",
      des2: "",
      img2: placeholder,
      href: "https://innogent.in/",
    },
    {
      title: "Supreme Group",
      des1: "Supreme Group is the largest and tier-1 supplier of nonwoven fabrics and automotive NVH solutions. We modernised their website and assisted in establishing a global identity retaining their authentic principles and brand identity.",
      des2: "",
      img2: placeholder,
      href: "https://supreme-group.vercel.app/",
    },
    {
      title: "Innvolution",
      des1: "IITPL is committed to advancing cutting-edge cardiovascular care therapies, striving to enhance the accessibility and affordability of CVD treatment for everyone. We designed a website aligning with their brand image, global brand identity, and the challenge of visualizing complex products.",
      des2: "",
      img2: placeholder,
      href: "https://innvolution.com/",
    },
    {
      title: "EF Polymer",
      des1: "EF Polymer, an agri-startup, offers water and fertilizer-saving products. The goal is to develop a website for a global audience, enhancing brand visibility worldwide.",
      des2: "",
      img2: placeholder,
      href: "https://efpolymer.in/",
    },
    {
      title: "Xero EV",
      des1: "Xero is a startup delivering lightweight, economic top-tier electric two-wheelers, We've developed a website to enhance brand visibility and awareness among their target audience.",
      des2: "",
      img2: placeholder,
      href: "https://xeroev.co/",
    },
    {
      title: "Good Deed",
      des1: "GoodDeed is a specialized food ordering platform that delivers surplus food from restaurants at a more affordable price. Their goal is to reduce food waste and make inexpensive food more accessible.",
      des2: "",
      img2: placeholder,
      href: "https://gooddeed.in/",
    },
    {
      title: "Varaha",
      des1: "Varaha offers carbon credits that are associated with specific projects related to sustainable agriculture and regenerative farming practices. ",
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
      title: "The Sleek Studio",
      des1: "Sleek Studio is a company that offers handcrafted luxury fashion for contemporary shoppers. They also curate personalized occasion-wear.",
      des2: "",
      img2: placeholder,
      href: "https://thesleekstudio.com/",
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
      des1: "Blacksof is a branding agency offering services in brand research, brand communication design, and identity application through websites. I was employed at this agency for two years and served as the primary developer responsible for creating their website.",
      des2: "",
      img2: placeholder,
      href: "https://blacksof.com/",
    },

    {
      title: "Fasal",
      des1: "Fasal, a leader in precision farming. Using an IoT-based AI platform, Fasal provides real-time, farm-specific recommendations based on on-farm sensor data, revolutionizing precision farming in horticulture.",
      des2: "",
      img2: placeholder,
      href: "https://fasal-website.vercel.app/",
    },

    // {
    //   title: "Blogs_pot",
    //   des1: "Blogs_pot description will come here.",
    //   des2: "",
    //   img2: blogspot,
    //   href: "https://vedprakash25.github.io/blogs_pot/",
    // },
  ];

  return (
    <div id="Work" className="container blade-padding-top-lg">
      <h2 className="md:text-center text-blue font-bold">Work</h2>
      <div
        className={`project-cardsWrapper max-w-screen-lg mx-auto grid gap-7 blade-padding-top-sm`}
      >
        {projectCards.map((item, ind) => {
          const { title, des1, href, route } = item;

          return (
            <div
              className={`card shadow-soft w-full max-w-xl grid rounded-lg md:p-4 p-3`}
              key={ind}
            >
              <div className="bg-blue rounded-lg md:pt-10">
                <img
                  alt="thumbnail for the project"
                  className="h-52 w-full object-contain object-center rounded-sm"
                  src={item.img2}
                />
              </div>

              <div className="mt-4">
                <div className="flex justify-between items-baseline">
                  <h4 className=" text-blue font-semibold">{title}</h4>
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

                <h6 className="text-blue text-opacity-80 font-normal mt-2">
                  {des1}
                </h6>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
