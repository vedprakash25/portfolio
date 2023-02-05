import React from "react";
import "./style.css";
// import ved from "../../../assets/placeholder.jpg";
// import { Bubbles } from "../../../components";

export default function Intro() {

  return (
    <section className="relative overflow-hidden pb-10">
      {/* <Bubbles /> */}

      <div className="container blade-1-wrapper grid place-content-center">
        <div className="text-center m-auto max-w-screen-md">
          <h1 className=" text-blue ">
            Develop. Debug. Deploy.
          </h1>
          <h4 className="mt-6  text-blue text-center ">
            High-end Frontend development for design-driven companies where attention to detail and passionate dedication matter.


          </h4>
          <button className="btn-fill  mt-6 ">Let's Connect</button>
          {/* <button className="ml-5 btn-transparent mt-6">Know more</button> */}
        </div>
      </div>
    </section>
  );
}
