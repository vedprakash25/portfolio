import React, { useRef } from "react";
import gsap from "gsap";
import "./style.css";

export default function Services() {
  const service = useRef(null);
  return (
    <section
      id="About"
      ref={service}
      className="service-section overflow-hidden blade-padding-top-lg"
    >
      <div className="flex items-center h-full rounded-xl lg:rounded-3xl ">
        <div className="flex gap-5 container w-full">
          <div className="flex-1 2xl:max-w-2xl ">
            <h2 className="pb-4 text-blue font-semibold">About</h2>

            <h5 className="font-light text-blue leading-normal">
              Hey there! I'm Ved, a web developer who builds awesome UIs. I love
              creating interfaces that are both stunning and ridiculously easy
              to use. Every project is a chance to push the design envelope and
              obsess over every detail.
            </h5>
            <h5 className="font-light text-blue leading-normal mt-3">
              But for me, it's more than just looks. I code with React.js & Next.js to make sure your website works flawlessly
              and empowers users to do what they need.
            </h5>
          </div>

          <div className="md:block hidden flex-1 max-w-md"></div>
        </div>
      </div>
    </section>
  );
}
