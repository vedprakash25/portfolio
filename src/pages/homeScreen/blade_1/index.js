import React from "react";
import "./style.css";
import ved from "../../../assets/placeholder.jpg";
import { Bubbles } from "../../../components";

export default function Blade_1() {
  return (
    <section className="relative overflow-hidden">
      {/* <Bubbles /> */}

      <div className="container blade-1-wrapper ">
        <div className="pt-52 text-center ">
          <h3 className=" text-blue-300 2xl:text-7xl text-5xl font-bold leading-none ">
            Aute eu id ullamco.
          </h3>
          <h3 className="mt-6 text-2xl text-gray-700">
            Excepteur deserunt ut nostrud aute nulla et mollit occaecat pariatur
            aliquip.
          </h3>
          <button className=" btn-transparent  mt-10 ">Let's Connect</button>
          <button className="ml-5 btn-fill mt-10">Know more</button>
        </div>
      </div>
    </section>
  );
}
