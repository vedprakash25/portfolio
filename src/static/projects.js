import innogent_logo from "../assets/projects/innogent_logo.svg";
import varaha_overlay from "../assets/projects/varaha_overlay.webp";
import supreme_overlay from "../assets/projects/supreme_overlay.svg";
import innogent_video from "../assets/projects/innogent_video.mp4";
import varaha_video from "../assets/projects/varaha_video.mp4";
import evre from "../assets/projects/evre.mp4";
import supreme_video from "../assets/projects/supreme_video.mp4";

import blacksof from "../assets/projects/blacksof.webp";
import buyerr from "../assets/projects/buyerr.webp";
import verdemobility from "../assets/projects/verdemobility.webp";
import fasal from "../assets/projects/fasal.webp";
import gooddeed from "../assets/projects/gooddeed.webp";
import xero from "../assets/projects/xero.webp";
import iitpl_thumbnail from "../assets/projects/iitpl_thumbnail.webp";
import efp from "../assets/projects/efp.webp";

export const projects = [
  {
    title: "Innogent",
    tech: ["React", "TailwindCSS", "GSAP"],
    desc: "Innogent is a software company specializing in MVP, data management, legacy modernization, cloud computing, and tech consulting. We enhanced their online presence with a customized website.",
    overlay: innogent_logo,
    coverVideo: innogent_video,
    poster: efp,
    url: "https://innogent.in/",
  },
  {
    title: "Blacksof",
    tech: ["AstroJS", "GSAP", "DigitalOcean"],
    desc: "Blacksof is a branding agency offering services in brand research, brand communication design, and identity application through websites. I was employed at this agency for two years and served as the primary developer responsible for creating their website",
    isStatic: true,
    poster: blacksof,
    url: "https://blacksof.com/",
  },
  {
    title: "Buyerr",
    tech: ["React", "Laravel", "TailwindCSS", "GSAP"],
    desc: "Buyer is a full-service strategic martech firm. They tailor solutions for their customers in the areas of employer branding, search engine optimization, social media strategies, and traditional print & online media negotiation and placement.",
    isStatic: true,
    poster: buyerr,
    url: "https://buyerr.in/",
  },
  {
    title: "Varaha",
    tech: ["React", "TailwindCSS", "GSAP", "AWS"],
    desc: "Varaha specializes in monetizing, standardizing, and trading carbon credits using technologies like remote sensing and blockchain. We crafted their online identity and developed dedicated landing pages for their projects.",
    coverVideo: varaha_video,
    overlay: varaha_overlay,
    poster: efp,
    url: "https://varaha.earth/",
  },
  {
    title: "EVRE",
    tech: ["React", "Matrial UI", "Framer Motion"],
    desc: "They are enhancing EV charging stations and solutions through their patented technologies, products, and designs. Actively constructing the largest and most cohesive network of chargers.",
    coverVideo: evre,
    logo: evre_logo,
    poster: efp,
    url: "https://evre.in",
  },

  {
    title: "Supreme Group",
    tech: ["React", "Laravel", "TailwindCSS", "GSAP"],
    isProgress: true,
    isStatic: false,
    desc: "Supreme Group is the largest and tier-1 supplier of nonwoven fabrics and automotive NVH solutions. We modernised their website and assisted in establishing a global identity retaining their authentic principles and brand identity.",
    overlay: supreme_overlay,
    coverVideo: supreme_video,
    url: "https://supreme-group.vercel.app/",
  },
  {
    title: "VerdeMobility",
    tech: ["React", "TailwindCSS", "Framer Motion"],
    desc: "VerdeMobility offers the next generation of EV charging solutions, aspiring to establish a comprehensive EV charging ecosystem through its hardware and software, encompassing EV charging infrastructure, EV chargers, and charging management systems.",
    isStatic: true,
    poster: verdemobility,
    url: "https://www.verdemobility.com/",
  },

  {
    title: "Fasal",
    tech: ["AstroJS", "Tailwind", "HTML/CSS"],
    isProgress: true,
    isStatic: true,
    desc: "Fasal is a full-stack platform for precision horticulture farming anchored on an IoT-SaaS platform that provides farm-level, crop-specific, and crop stage-specific actionable intelligence to optimize cultivation costs, increase yield, and quality of the produce.",
    poster: fasal,
    url: "https://fasal-website.vercel.app/",
  },
  {
    title: "Good Deed",
    tech: ["React", "TailwindCSS", "GSAP"],
    isProgress: true,
    isStatic: true,
    desc: "GoodDeed is a specialized food ordering platform that delivers surplus food from restaurants at a more affordable price. Their goal is to reduce food waste and make inexpensive food more accessible.",
    poster: gooddeed,
    url: "https://gooddeed.in/",
  },

  {
    title: "Xero",
    tech: ["React", "TailwindCSS", "GSAP"],
    desc: "Xero is a startup delivering lightweight, economic top-tier electric two-wheelers, We've developed a website to enhance brand visibility and awareness among their target audience.",
    isStatic: true,
    poster: xero,
    url: "https://xeroev.co/",
  },
  {
    title: "Innvolution",
    tech: ["React", "Laravel", "TailwindCSS"],
    isProgress: true,
    isStatic: true,
    desc: "IITPL is committed to advancing cutting-edge cardiovascular care therapies, striving to enhance the accessibility and affordability of CVD treatment for everyone. We designed a website aligning with their brand image, global brand identity, and the challenge of visualizing complex products.",
    poster: iitpl_thumbnail,
    url: "https://innvolution.com/",
  },
  {
    title: "EF Polymer",
    tech: ["NextJS", "Laravel", "TailwindCSS"],
    desc: "EF Polymer, an agri-startup, offers water and fertilizer-saving products. The goal is to develop a website for a global audience, enhancing brand visibility worldwide.",
    isStatic: true,
    poster: efp,
    url: "https://efpolymer.in/",
  },
];
