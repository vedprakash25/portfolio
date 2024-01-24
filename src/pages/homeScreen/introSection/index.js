import React from "react";
import "./style.css";

export default function Intro() {
  return (
    <section className="relative overflow-hidden md:py-0 py-10">
      <div className="container blade-1-wrapper grid place-content-center h-fit 2xl:max-h-[650px] xl:max-h-[90vh] lg:max-h-[420px] pb-5">
        <div className="grid gap-6 m-auto 2xl:max-w-screen-lg max-w-screen-md">
          <h1 className="text-center text-blue leading-tight font-bold">
            Develop. Debug. Deploy.
          </h1>
          <h5 className=" text-blue text-center 2xl:px-20 font-normal text-opacity-90">
            Hi there! I am Ved Prakash, a frontend developer who loves creating
            simple and effective solutions, backed up with over two years of
            experience.
          </h5>
          <a href="mailto:vedvprakash@gmail.com" className="btn-fill mx-auto ">
            Let's connect
          </a>
        </div>
      </div>
    </section>
  );
}
