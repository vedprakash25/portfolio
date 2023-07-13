import React, { useEffect, useRef } from "react";
// import workImage from "../../../assets/placeholder.jpg";
import gsap from "gsap";
import "./style.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const service = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: service.current,
        start: "top 90%",
        end: "bottom 80%",
        scrub: 1,
        // snap: {
        //   duration: 1,
        //   snapTo: 200,
        // },
        markers: false,
      },
    });

    tl.fromTo(
      service.current,
      { scale: 0.8, y: 20, transformOrigin: "top" },
      { scale: 1, y: 0 }
    );
  }, []);

  return (
    <section
      ref={service}
      className="service-section overflow-hidden flex items-center md:h-screen py-16 bg-blue max-h-[780px]"
    >
      <div className="flex gap-5 container w-full border-4 border-blue">
        <div className="flex-1 max-w-lg">
          <h2 className=" text-primary pb-4">Web Developer</h2>
          <h4 className="font-light text-primary">
            I love creating impressive interfaces that wow people. It's my
            passion! I put my best effort into each project, ensuring every
            detail is perfect. I aim to create designs that not only look
            amazing but are user-friendly and leave people in awe.{" "}
          </h4>
        </div>

        {/* <div className="cube-3d hidden h-96 flex-1 relative"></div> */}
        <div className="md:block hidden flex-1 max-w-md"></div>
      </div>
    </section>
  );
}
