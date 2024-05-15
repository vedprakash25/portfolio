import React from "react";
import { Link } from "react-router-dom";
import placeholder from "../../../assets/placeholder.jpg";
import blogspot from "../../../assets/blogspot_thumbnail.jpg";
import SLS from "../../../assets/SLS.jpg";
// import blacksof from "../../../assets/blacksof.jpg"
import gavyam from "../../../assets/gavyam.jpg";
// import verde from "../../../assets/verde.jpg"
import varaha from "../../../assets/varaha.jpg";
// import fasal from "../../../assets/fasal.jpg"

import innogent_logo from "../../../assets/projects/innogent_logo.svg";
// import varaha_overlay from "../../../assets/projects/varaha_overlay.webp"
import supreme_overlay from "../../../assets/projects/supreme_overlay.svg";
import innogent_video from "../../../assets/projects/innogent_video.mp4";
import varaha_video from "../../../assets/projects/varaha_video.mp4";
import evre from "../../../assets/projects/evre_logo.svg";
import supreme_video from "../../../assets/projects/supreme_video.mp4";

import efp from "../../../assets/projects/efp.webp";
import blacksof from "../../../assets/projects/blacksof.webp";
import buyerr from "../../../assets/projects/buyerr.webp";
import verdemobility from "../../../assets/projects/verdemobility.webp";
import fasal from "../../../assets/projects/fasal.webp";
import gooddeed from "../../../assets/projects/gooddeed.webp";
import xero from "../../../assets/projects/xero.webp";
import iitpl_thumbnail from "../../../assets/projects/iitpl_thumbnail.webp";

import "./style.css";

export default function Projects() {
  const projectCards = [
    {
      title: "Innogent",
      des1: "Innogent  is a versatile software development company, specializing in React JS, Cloud Services, Java Development, AWS Cloud Computing, DevOps, and Big Data technologies.",
      des2: "",
      logo: innogent_logo,
      href: "https://innogent.in/",
    },
    {
      title: "Varaha",
      des1: "Varaha offers carbon credits that are associated with specific projects related to sustainable agriculture and regenerative farming practices. ",
      des2: "",
      img2: varaha,
      href: "https://www.varaha.earth/",
    },
    {
      title: "Supreme Group",
      des1: "Supreme Group is the tier-1 supplier of nonwoven fabrics and automotive NVH solutions. We modernised their website and assisted in establishing a global identity.",
      des2: "",
      logo: supreme_overlay,
      href: "https://supreme-group.vercel.app/",
    },
    {
      title: "Innvolution",
      des1: "IITPL is committed to cutting-edge cardiovascular care, to enhance the accessibility and affordability of CVD treatment for everyone. We designed a website aligning with their brand image, global brand identity.",
      des2: "",
      img2: iitpl_thumbnail,
      href: "https://innvolution.com/",
    },
    {
      title: "EF Polymer",
      des1: "EF Polymer, an agri-startup, offers water and fertilizer-saving products. The goal is to develop a website for a global audience, enhancing brand visibility worldwide.",
      des2: "",
      img2: efp,
      href: "https://efpolymer.in/",
    },
    {
      title: "Xero EV",
      des1: "Xero is a startup delivering lightweight, economic top-tier electric two-wheelers, We've developed a website to enhance brand visibility and awareness among their target audience.",
      des2: "",
      img2: xero,
      href: "https://xeroev.co/",
    },
    {
      title: "Good Deed",
      des1: "GoodDeed is a specialized food ordering platform that delivers surplus food from restaurants at a more affordable price. Their goal is to reduce food waste and make inexpensive food more accessible.",
      des2: "",
      img2: gooddeed,
      href: "https://gooddeed.in/",
    },

    {
      title: "Verdemobility",
      des1: "Verdemobility aims to support the transition to sustainable transportation by providing reliable and convenient EV charging solutions to individuals, businesses, and communities.",
      des2: "",
      img2: verdemobility,
      href: "https://www.verdemobility.com/",
    },
    {
      title: "EVRE",
      des1: "EVRE.in is a company based in India that is focused on developing and promoting electric vehicle charging infrastructure and related services. ",
      des2: "",
      logo: evre,
      href: "https://evre.in/",
    },
    {
      title: "Blacksof",
      des1: "Blacksof is a branding agency offering services in brand research, brand communication design, and identity application through websites. I was employed at this agency for two years and served as the primary developer responsible for creating their website.",
      des2: "",
      img2: blacksof,
      href: "https://blacksof.com/",
    },
    {
      title: "Gavyam Gentech",
      des1: "Gavyamgentec is a company based in India that focuses on developing and promoting products made from cow by-products. ",
      des2: "",
      img2: gavyam,
      href: "https://www.gavyamgentec.com/",
    },
    // {
    //   title: "The Sleek Studio",
    //   des1: "Sleek Studio is a company that offers handcrafted luxury fashion for contemporary shoppers. They also curate personalized occasion-wear.",
    //   des2: "",
    //   img2: placeholder,
    //   href: "https://thesleekstudio.com/",
    // },
    {
      title: "System Level Solutions",
      des1: "system level solutions are designed to address complex problems and challenges by taking a comprehensive, integrated approach that considers all of the components and subsystems that make up a larger system.",
      des2: "",
      img2: SLS,
      href: "https://www.slscorp.com/",
    },

    {
      title: "Fasal",
      des1: "Fasal, a leader in precision farming. Using an IoT-based AI platform, Fasal provides real-time, farm-specific recommendations based on on-farm sensor data, revolutionizing precision farming in horticulture.",
      des2: "",
      img2: fasal,
      href: "https://fasal-website.vercel.app/",
    },

    // {
    //   title: "Blogs_pot",
    //   des1: "Blogs_pot is website where user can.",
    //   des2: "",
    //   img2: blogspot,
    //   href: "https://vedprakash25.github.io/blogs_pot/",
    // },
  ];

  return (
    <section className="bg-blue ">
      <div
        id="Work"
        className="container blade-padding-top-lg  blade-padding-bottom-lg"
      >
        <h2 className="md:text-center text-primary font-semibold">Work</h2>
        <div
          className={`mx-auto grid place-content-start xl:grid-cols-3 sm:grid-cols-2 2xl:gap-10 gap-5 blade-padding-top-sm`}
        >
          {projectCards.map((item, ind) => {
            const { title, des1, href, route } = item;

            return (
              <div
                className={`w-full max-w-lg overflow-hidden rounded-xl bg-primary h-full 2xl:p-3 p-3`}
                key={ind}
              >
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-darkblue h-fit hover:text-opacity-70 rounded-xl"
                >
                  <div className="h-56 group rounded-lg overflow-hidden">
                    {item.img2 ? (
                      <div className="mx-auto group-hover:scale-110 transition-all duration-500 flex justify-center items-end h-full">
                        <img
                          alt="thumbnail for the project"
                          className="mx-auto w-full h-full object-cover object-center rounded-t-xl"
                          src={item.img2}
                        />
                      </div>
                    ) : (
                      <div className="h-56 grid bg-blue place-content-center group-hover:scale-110 transition-all duration-500">
                        <img
                          alt="thumbnail for the project "
                          className="h-32  max-w-[220px] object-contain object-center"
                          src={item.logo}
                        />
                      </div>
                    )}
                  </div>
                </a>

                <div className=" h-full mt-4">
                  <div className="flex ">
                    <a
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue hover:text-opacity-70"
                    >
                      <h4 className="text-center text-blue font-semibold">
                        {title}
                      </h4>
                    </a>
                  </div>

                  <h6 className="text-blue text-base text-opacity-80 font-normal mt-2 ">
                    {des1}
                  </h6>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
