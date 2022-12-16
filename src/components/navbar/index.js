import React from "react";

export default function Navbar() {
  const navLink = ["about", "contact", "blogs"];
  return (
    <div className="container flex justify-between">
      <div className=" bg-slate-600  p-4">
        <h3 className=" text-white text-4xl">DE</h3>
      </div>
      <ul>
        {["about", "contact", "blogs"].map((item) => {
          <li className="text-black">{item}</li>;
        })}
      </ul>
    </div>
  );
}
