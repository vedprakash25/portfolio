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
          <div className="flex-1 max-w-lg ">
            <h2 className="pb-4 text-blue">Web Developer</h2>
            <h5 className="font-light text-blue">
              I love creating impressive interfaces that wow people. It's my
              passion! I put my best effort into each project, ensuring every
              detail is perfect. I aim to create designs that not only look
              amazing but are user-friendly and leave people in awe.
            </h5>
          </div>

          <div className="md:block hidden flex-1 max-w-md"></div>
        </div>
      </div>
    </section>
  );
}
