import React from "react";

function Abouttest() {
  return (
    <div className="bg-[#F1F4F1]">
      <div className="containerCon1 textColor mx-auto">
        {/* <h1 class=" text-center text-5xl playfair2 mb-4 ">About</h1> */}
        <h1 class=" text-center text-5xl playfair2 text-[#131f35] headerText1 mb-10">
          About
        </h1>

        <div class=" flexAbout items-center justify-center bg-gray-100">
          <div class="aboutImg">
            <img
              src="./sophia.jpg"
              alt="Your Image"
              class="max-h-[30rem] object-contain rounded-3xl"
            />
          </div>
          <div class="aboutText">
            <p class=" bodyTextAbout">
              Hi there! I’m Sophia, registered physiotherapist student at adler
            </p>
            <p class=" bodyText playfair text-black">
              The T4 meaning primarily relates to your status as an employee,
              and The T4 slip enlists information about the employees’ income
              from sources other than work so the organisation may be able to
            </p>
            <br></br>
            <p class=" bodyText playfair text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut npming elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim
            </p>
            <br></br>
            <p class="bodyText playfair text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim
            </p>
          </div>
        </div>
      </div>

      <div className="flex md:flex md:flex-grow flex-row imgAdler">
        {" "}
        <img
          src="./adler.jpeg"
          className="rounded-full imgAdlerHeight mb-10 "
        />
      </div>
    </div>
  );
}

export default Abouttest;
