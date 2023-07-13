import React from "react";
import "./style.css";
// import ved from "../../../assets/placeholder.jpg";
// import { Bubbles } from "../../../components";

export default function Intro() {
  return (
    <section className="relative overflow-hidden pb-10 ">
      {/* <Bubbles /> */}

      <div className="container blade-1-wrapper grid place-content-center max-h-[700px]">
        <div className=" grid gap-6 m-auto 2xl:max-w-screen-lg max-w-screen-md">
          <h1 className="md:text-center text-blue leading-tight font-bold">
            Develop. Debug. Deploy.
          </h1>
          <h4 className=" text-blue md:text-center 2xl:px-20">
            High-end Frontend development for design-driven companies where
            attention to detail and passionate dedication matter.
          </h4>
          <a href="mailto:ved1998karma@gmail.com">
            <button className="btn-fill"> Let's Connect</button>
          </a>
          {/* <button className="ml-5 btn-transparent mt-6">Know more</button> */}
        </div>
      </div>
    </section>
  );
}
