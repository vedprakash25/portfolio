import React, { useState } from "react";
import "./style.css";

export default function Intro() {
  const [isModalOpen, setModal] = useState(false);

  return (
    <section className="relative xl:h-screen overflow-hidden bg-blue blade-padding-bottom">
      <div className="container blade-1-wrapper grid place-content-center h-fit 2xl:max-h-none xl:max-h-[90vh] lg:max-h-[420px]">
        <div className="grid gap-6 m-auto 2xl:max-w-screen-lg max-w-screen-md 2xl:mt-20 lg:mt-10">
          <h1 className="text-center neonText bg-gradient-to-t from-[#5d5b92] to-[#f2edff] bg-clip-text text-transparent text-shadow-sm leading-tight font-bold">
            Develop. Debug. Deploy.
          </h1>
          <h5 className=" text-gray-200 text-center 2xl:px-20 font-light text-opacity-90">
            Turning Ideas into Flawless Web Experiences
          </h5>
          <a
            href="mailto:vedvprakash@gmail.com"
            className="btn-light mx-auto 2xl:mt-5 mt-3"
          >
            Let's connect
          </a>
          {/* <button
            onClick={() => (isModalOpen ? setModal(false) : setModal(true))}
            className="btn-light mx-auto 2xl:mt-5 mt-3"
          >
            Let's connect
          </button> */}

          {/* <div
            className={`${
              isModalOpen ? "block" : "hidden"
            } h-screen w-screen fixed inset-0 bg-blue bg-opacity-70 backdrop-blur-2xl z-[9999] flex items-center justify-center`}
          >
            <div className="flex flex-col justify-center items-center  relative ">
              <button
                onClick={() => (isModalOpen ? setModal(false) : setModal(true))}
                className="text-white font-bold absolute -top-5 -right-5"
              >
                <svg
                  stroke="currentColor"
                  fill="none"
                  stroke-width="0"
                  viewBox="0 0 15 15"
                  height="1.2em"
                  width="1.2em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
              <h4 className="text-white text-left font-medium">Ping me!</h4>

              <form className="2xl:mt-8 flex flex-col justify-center">
                <input
                  class="w-64 master-input text-white font-light py-3 px-3 rounded-md bg-transparent border"
                  id="email"
                  name="email"
                  type="text"
                  autocomplete="off"
                  placeholder="Email"
                />
                <div class="error"></div>

                <button
                  type
                  className="mt-5 text-white hover:bg-white hover:text-blue transition-all px-4 py-1 mx-auto border rounded-md"
                >
                  Submit
                </button>
              </form>

              <h6 className="text-white py-9"></h6>

              <div className="flex sm:mb-6">
                <a
                  href="https://github.com/vedprakash25"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 flex mr-3 justify-center items-center text-2xl rounded-full h-12 w-12"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#31344b"
                    className="fill-primary"
                    viewBox="0 0 480 512"
                  >
                    <title>Github</title>

                    <path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z" />
                  </svg>
                </a>

                <a
                  href="https://twitter.com/home"
                  target="_blank"
                  rel="noreferrer"
                  className=" p-2 flex mr-3 justify-center items-center text-2xl rounded-full h-12 w-12"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#31344b"
                    className="fill-primary"
                    viewBox="0 0 16 16"
                  >
                    <title>Twitter</title>

                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>

                <a
                  href="https://www.linkedin.com/in/vp-vishwakarma"
                  target="_blank"
                  rel="noreferrer"
                  className=" p-2 flex mr-3 justify-center items-center text-2xl rounded-full h-12 w-12"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#31344b"
                    className="fill-primary pr-[2px]"
                    viewBox="0 0 448 512"
                  >
                    <title>Linkedin</title>

                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
                  </svg>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
