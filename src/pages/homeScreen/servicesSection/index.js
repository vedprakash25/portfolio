import React, { useRef } from "react";
// import workImage from "../../../assets/placeholder.jpg";
import gsap from "gsap";
import "./style.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const service = useRef(null);
  return (
    <section
      id="About"
      ref={service}
      className="service-section overflow-hidden border-8 border-transparent "
    >
      <div className="flex items-center h-full rounded-xl lg:rounded-3xl ">
        <div className="flex gap-5 container w-full">
          <div className="flex-1 2xl:max-w-2xl ">
            <h2 className="pb-4 text-blue">Web Developer</h2>
            <h5 className="font-light text-blue">
              I have a passion for crafting stunning interfaces that leave a
              lasting impression. With each project, I dedicate myself to
              perfection, ensuring every detail is just right. My goal is to
              design not only visually appealing interfaces but also ones that
              are easy for users to navigate, leaving them truly impressed.
            </h5>
          </div>

          <div className="md:block hidden flex-1 max-w-md"></div>
        </div>
      </div>
    </section>
  );
}
