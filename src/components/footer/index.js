import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div id="Contact" className="bg-primary py-5">
      <div className="container">
        <div className="grid gap-4 blade-padding">
          <h2 className="text-blue text-center">Ready to build something</h2>
          <h4 className="text-blue text-center">Leave a message for me!</h4>
          <a href="mailto:vedvprakash@gmail.com" className="btn-fill mx-auto">Let's connect</a>
        </div>
        <div className="flex flex-wrap gap-3 justify-between pt-14">
          <div className="">
            <h3 className="text-blue text-2xl">Thanks for trusting me!</h3>
            <h4 className="text-blue mt-2">
              Feel free to reach out to me on these platforms.
            </h4>
          </div>
          <div className="flex ">
            <a
              href="https://github.com/vedprakash25"
              target="_blank"
              className="p-2 flex mr-3 justify-center items-center text-2xl rounded-full h-12 w-12"
            >
              <svg xmlns="http://www.w3.org/2000/svg"
                fill="#31344b"
                className="bi bi-github"
                viewBox="0 0 480 512">
                <title>Github</title>

                <path d="M186.1 328.7c0 20.9-10.9 55.1-36.7 55.1s-36.7-34.2-36.7-55.1 10.9-55.1 36.7-55.1 36.7 34.2 36.7 55.1zM480 278.2c0 31.9-3.2 65.7-17.5 95-37.9 76.6-142.1 74.8-216.7 74.8-75.8 0-186.2 2.7-225.6-74.8-14.6-29-20.2-63.1-20.2-95 0-41.9 13.9-81.5 41.5-113.6-5.2-15.8-7.7-32.4-7.7-48.8 0-21.5 4.9-32.3 14.6-51.8 45.3 0 74.3 9 108.8 36 29-6.9 58.8-10 88.7-10 27 0 54.2 2.9 80.4 9.2 34-26.7 63-35.2 107.8-35.2 9.8 19.5 14.6 30.3 14.6 51.8 0 16.4-2.6 32.7-7.7 48.2 27.5 32.4 39 72.3 39 114.2zm-64.3 50.5c0-43.9-26.7-82.6-73.5-82.6-18.9 0-37 3.4-56 6-14.9 2.3-29.8 3.2-45.1 3.2-15.2 0-30.1-.9-45.1-3.2-18.7-2.6-37-6-56-6-46.8 0-73.5 38.7-73.5 82.6 0 87.8 80.4 101.3 150.4 101.3h48.2c70.3 0 150.6-13.4 150.6-101.3zm-82.6-55.1c-25.8 0-36.7 34.2-36.7 55.1s10.9 55.1 36.7 55.1 36.7-34.2 36.7-55.1-10.9-55.1-36.7-55.1z" />
              </svg>

            </a>

            <a
              href="https://twitter.com/home"
              target="_blank"
              className=" p-2 flex mr-3 justify-center items-center text-2xl rounded-full h-12 w-12"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#31344b"
                className="bi bi-twitter"
                viewBox="0 0 16 16"
              >
                <title>Twitter</title>

                <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
              </svg>
            </a>
            {/* <a
              href="https://github.com/"
              target="_blank"
              className=" p-2 flex mr-3 justify-center items-center text-2xl rounded-full h-12 w-12"
            >
              <svg
                fill="#31344b"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>LeetCode</title>
                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z" />
              </svg>
            </a> */}
            <a
              href="https://www.linkedin.com/in/vp-vishwakarma"
              target="_blank"
              className=" p-2 flex mr-3 justify-center items-center text-2xl rounded-full h-12 w-12"
            >

              <svg xmlns="http://www.w3.org/2000/svg"
                fill="#31344b"
                className="bi bi-linkedin pr-[2px]"
                viewBox="0 0 448 512">
                <title>Linkedin</title>

                <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z" />
              </svg>
            </a>
          </div>
        </div>

        <h3 className="pt-10 text-right font-light">@developed by CODE</h3>
      </div>
    </div>
  );
}
