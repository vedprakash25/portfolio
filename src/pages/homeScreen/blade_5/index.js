import React from "react";
import "./style.css";

export default function Blade_5() {
  return (
    <div className="relative   max-w-md mx-auto d">
      <div className="logo-hover-effect overflow-visible grid grid-cols-2 absolute bg-slate-200 bg-opacity-50 h-full w-full top-0 left-0">
        <div className="d"></div>
        <div className="d"></div>
        <div className="d"></div>
        <div className="d"></div>
      </div>
      <div className="logo-wrapper">
        <svg
          className="logo w-full fill-slate-300 stroke-slate-300"
          viewBox="0 0 80 93"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d_3_19)">
            <path
              d="M7 3L27.5 11.5L50.0833 69.0571L43.8195 83H38.0139L7 3ZM45.1944 35.8L55.7361 12.1429H73C73 12.1429 73 12.1429 70.0972 18.5429C61.7454 38.1238 56.0926 53.1333 54.0556 58.3143L52.9861 55.6857L45.1944 35.8Z"
              fill="none"
            />
            <path
              d="M7 3L27.5 11.5L50.0833 69.0571L43.8195 83H38.0139L7 3ZM45.1944 35.8L55.7361 12.1429H73C73 12.1429 73 12.1429 70.0972 18.5429C61.7454 38.1238 56.0926 53.1333 54.0556 58.3143L52.9861 55.6857L45.1944 35.8Z"
              stroke="none"
              stroke-width="3"
            />
          </g>
          <defs>
            <filter
              id="filter0_d_3_19"
              x="0.333012"
              y="0.27034"
              width="78.9944"
              height="92.2297"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feComposite in2="hardAlpha" operator="out" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_3_19"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow_3_19"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
}
