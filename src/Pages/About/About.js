import React from "react";

function About() {
  return (
    <div className="containerCon textColor mb-10">
      <div class="grid grid-cols-3 gap-4 place-content-start">
        <div class=" col-span-1 mb-auto mt-6">
          {" "}
          <img src="./sophia.jpg" className="" />
          <p class="text-left poppins-bold text-[20px]">
            physiotherapist Adler Student{" "}
          </p>
          <p class="text-black text-left poppins-light text-[16px]">
            physiotherapist Adler Student{" "}
          </p>
        </div>
        <div class="col-span-2 text-left h-full ">
          <h1 class=" text-center headerText  ">About</h1>
          <p class=" bodyText poppins-regular">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          </p>
          <br></br>
          <p class=" bodyText poppins-regular">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          </p>
          <br></br>
          <p class=" bodyText poppins-regular">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;
