import React, { useEffect, useRef } from "react";
// import workImage from "../../../assets/placeholder.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const service = useRef(null)

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: service.current,
        start: "top 90%",
        end: "bottom 80%",
        scrub: 1  ,        
        snap:{
          duration:1,
          snapTo: 200
        },        
        markers: true,
      },
      
    })

    tl.fromTo(service.current, { scale: .8, transformOrigin: "top" }, { scale: 1})
  }, [])



  return (
    <section ref={service} className="service-section flex items-center h-screen bg-blue ">
      <div className="gap-5 container border-4 border-blue">
        <div className="flex-1">
          <h2 className=" text-primary pb-2">
            Web Developer
          </h2>
          <h4 className="font-light text-primary">
            Ved turns designs into interactive, pixel perfect and easy-to-manage website experiences.
          </h4>
        </div>

      </div>
    </section>
  );
}
