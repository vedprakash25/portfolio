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
        start: "top 100%",
        end: "bottom 100%",
        snap: {
          snapTo: "labelsDirectional"
        },
        scrub: 1,
        markers: false,
      },
    });
    tl.addLabel("startLabel")
    tl.fromTo(
      service.current,
      { scale: 1, y: 0, transformOrigin: "center" },
      { scale: 1, y: 0 }
    ).addLabel("endLabel")
  }, []);

  return (
    <section
      id="About"
      ref={service}
      className="service-section overflow-hidden h-screen border-8 border-transparent"
    >
      <div className="flex items-center h-full bg-blue rounded-3xl">
        <div className="flex gap-5 container w-full">
          <div className="flex-1 max-w-lg">
            <h2 className="text-primary pb-4">Web Developer</h2>
            <h4 className="font-light text-primary">
              I love creating impressive interfaces that wow people. It's my
              passion! I put my best effort into each project, ensuring every
              detail is perfect. I aim to create designs that not only look
              amazing but are user-friendly and leave people in awe.
            </h4>
          </div>

          <div className="md:block hidden flex-1 max-w-md"></div>
        </div>
      </div>
    </section>
  );
}
