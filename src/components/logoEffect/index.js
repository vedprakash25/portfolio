import React from "react";
import "./style.css";

export default function LogoEffect({ classes }) {
  return (
    <div className={classes}>

      <div className="max-w-md mx-auto blade-padding">
        <div className="hover-container overflow-visible grid bg-blue-100  relative bg-opacity-50 h-full w-full top-0 left-0">
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
          <div className="child"></div>
          <div className="logo-wrapper absolute  w-full h-full">
            <svg className="w-full h-full" viewBox="0 0 787 811" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M0.5 0L258.898 90L538 599L436.925 811L0.5 0Z" fill="#31344B" />
              <path d="M563 546L459.51 359.605L585.717 90.6327H787L563 546Z" fill="#31344B" />
            </svg>
          </div>
        </div>
      </div>

    </div>
  );
}
