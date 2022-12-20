import React from "react";
import workImage from "../../../assets/placeholder.jpg";

export default function Blade_2() {
  return (
    <section className="blade-padding ">
      <div className="container ">
        <h3 className="text-center text-5xl text-blue-300 font-semibold">
          Lorem ipsum
        </h3>
        <div className="flex pt-24 gap-10">
          <div className="flex-1 ">
            <div className="">
              <h3 className="font-medium text-2xl">Frontend Development</h3>
              <p className="mt-1 font-normal text-xl">
                I am frontend developer who create the creative, interactive and
                accessible interface. I like to create innovative ideas that
                impact on the user.
              </p>
            </div>
            <div className="mt-6">
              <h3 className="font-medium text-2xl">Backend Development</h3>
              <p className="mt-1 font-normal text-xl">
                I am frontend developer who create the creative, interactive and
                accessible interface. I like to create innovative ideas that
                impact on the user.
              </p>
            </div>
            <div className="mt-6">
              <h3 className="font-medium text-2xl">API Integrations</h3>
              <p className="mt-1 font-normal text-xl">
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
