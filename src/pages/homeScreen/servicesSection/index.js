import React, { useEffect } from "react";
// import workImage from "../../../assets/placeholder.jpg";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  useEffect(() => {
    gsap.fromTo(
      ".blade-2-wrapper",
      { background: "transparent", opacity: 0, y: 100 },
      {
        background: "#31344b",
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: ".blade-2-wrapper",
          start: "20% 80%", //position of container start, position of scroll start
          end: "bottom 20%",
        },
      }
    );
  }, []);

  return (
    <section className="blade-padding blade-2-wrapper ">
      <div className="container blade-padding">
        <h3 className="heading-w text-center text-5xl text-primary font-semibold">
          Services
        </h3>
        <div className="flex pt-24 gap-10">
          <div className="flex-1 flex flex-col gap-3">
            <div>
              <h3 className="font-medium text-2xl text-primary">
                Frontend Development
              </h3>
              <p className="mt-1 font-normal text-xl text-gray-400">
                I am frontend developer who create the creative, interactive and
                accessible interface. I like to create innovative ideas that
                impact on the user.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-2xl text-primary">
                Backend Development
              </h3>
              <p className="mt-1 font-normal text-xl text-gray-400">
                I am backend developer who create the creative, interactive and
                accessible interface. I like to create innovative ideas that
                impact on the user.
              </p>
            </div>
            <div>
              <h3 className="font-medium text-2xl text-primary">
                Integrations
              </h3>
              <p className="mt-1 font-normal text-xl text-gray-400">
                I am frontend developer who create the creative, interactive and
                accessible interface. I like to create innovative ideas that
                impact on the user.
              </p>
            </div>
          </div>
          <div className="flex-1 h-[30rem]">
            <img
              className="w-full h-full object-cover object-top grayscale hover:blur-none blur-[2px] rounded-3xl duration-300 "
              // src={workImage}
              src="https://images.unsplash.com/photo-1668531125847-d71a1369a29a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
              alt="mockup describing the ved prakash"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
