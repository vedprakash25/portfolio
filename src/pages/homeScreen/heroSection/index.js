import React from "react";
import "./style.css";
// import ved from "../../../assets/placeholder.jpg";
// import { Bubbles } from "../../../components";

export default function Hero() {
  
  return (
    <section className="relative overflow-hidden">
      {/* <Bubbles /> */}

      <div className="container blade-1-wrapper grid place-content-center">
        <div className="text-center m-auto max-w-screen-md">
          <h3 className="heading text-blue-300  ">
            Develop. Debug. Deploy
          </h3>
          <h3 className="mt-6 text-2xl text-gray-700 text-center">
            I like build web pages that is useful.
            I like build web pages that is useful.
            I like build web pages 
            I like build web pages that is useful.
          </h3>
          <button className="btn-fill  mt-6 ">Let's Connect</button>
          <button className="ml-5 btn-transparent mt-6">Know more</button>
        </div>
      </div>
    </section>
  );
}
