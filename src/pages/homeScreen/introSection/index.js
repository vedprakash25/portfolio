import React from "react";
import "./style.css";

export default function Intro() {
  return (
    <section className="relative xl:h-screen overflow-hidden bg-blue blade-padding-bottom">
      <div className="container blade-1-wrapper grid place-content-center h-fit 2xl:max-h-none xl:max-h-[90vh] lg:max-h-[420px]">
        <div className="grid gap-6 m-auto 2xl:max-w-screen-lg max-w-screen-md 2xl:mt-20 lg:mt-10">
          <h1 className="text-center neonText bg-gradient-to-t from-[#5d5b92] to-[#f2edff] bg-clip-text text-transparent text-shadow-sm leading-tight font-bold">
            Develop. Debug. Deploy.
          </h1>
          <h5 className=" text-gray-200 text-center 2xl:px-20 font-light text-opacity-90">
            Turning Ideas into Flawless Web Experiences
          </h5>
          <a
            href="mailto:vedvprakash@gmail.com"
            className="btn-light mx-auto 2xl:mt-5 mt-3"
          >
            Let's connect
          </a>
        </div>
      </div>
    </section>
  );
}
