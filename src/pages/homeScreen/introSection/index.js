import React from "react";
import "./style.css";

export default function Intro() {
  return (
    <section className="relative xl:h-screen overflow-hidden bg-blue ">
      <div className="container blade-1-wrapper grid place-content-center h-fit 2xl:max-h-none xl:max-h-[90vh] lg:max-h-[420px] pb-5">
        <div className="grid gap-6 m-auto 2xl:max-w-screen-lg max-w-screen-md 2xl:mt-20 lg:mt-10">
          <h1 className="text-center text-white leading-tight font-semibold">
            Develop. Debug. Deploy.
          </h1>
          <h5 className=" text-gray-200 text-center 2xl:px-20 font-light text-opacity-90">
            Hi, I am Ved, a frontend developer who loves creating simple and
            effective solutions, backed up with over two years of experience.
          </h5>
          <a
            href="mailto:vedvprakash@gmail.com"
            className="btn-light mx-auto 2xl:mt-6 mt-3"
          >
            Let's connect
          </a>
        </div>
      </div>
    </section>
  );
}
