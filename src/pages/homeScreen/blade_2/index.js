import React from "react";
import workImage from '../../../assets/placeholder.jpg'

export default function Blade_2() {
  return (
    <div className="container h-screen">
      <h3 className="text-center text-4xl text-blue-300 font-semibold">
        What can I do?
      </h3>
      <div className="flex pt-16 gap-5">
        <div className="flex-1 ">
          <div className="">
            <h3 className="font-medium text-2xl">Frontend Development</h3>
            <p className="mt-1 font-normal text-xl">
              I am frontend developer who create the creative, interactive and
              accessible interface. I like to create innovative ideas that
              impact on the user.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="font-medium text-2xl">Backend Development</h3>
            <p className="mt-1 font-normal text-xl">
              I am frontend developer who create the creative, interactive and
              accessible interface. I like to create innovative ideas that
              impact on the user.
            </p>
          </div>
          <div className="mt-4">
            <h3 className="font-medium text-2xl">API Integrations</h3>
            <p className="mt-1 font-normal text-xl">
              I am frontend developer who create the creative, interactive and
              accessible interface. I like to create innovative ideas that
              impact on the user.
            </p>
          </div>
        </div>
        <div className="flex-1 h-[30rem]">
          <img className="w-full h-full object-cover" src={workImage} alt="work image"/>
        </div>
      </div>
    </div>
  );
}
