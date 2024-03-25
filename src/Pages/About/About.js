import React from "react";

function About() {
  return (
    <div className="bg-[#F1F4F1]">
      <div className="containerCon1 textColor mx-auto">
        {/* <h1 class=" text-center text-5xl playfair2 mb-4 ">About</h1> */}
        <h1 class=" text-center text-5xl playfair2 text-[#131f35] mb-10">
          About
        </h1>
        <div class="grid grid-cols-2 gap-4 place-content-center">
          <div class=" col-span-1 mt-6">
            {" "}
            <img src="./sophia.jpg" className="rounded-3xl aboutImage img1 " />
          </div>
          <div class="col-span-1 text-left h-full pl-24  pt-20 ">
            <p class=" bodyTextAbout pb-10">
              Hi there! I’m Sophia, registered physiotherapist student at adler
            </p>
            <p class=" bodyText playfair text-black">
              The T4 meaning primarily relates to your status as an employee,
              and The T4 slip enlists information about the employees’ income
              from sources other than work so the organisation may be able to
              account to the Canadian Revenue Agency. As per the norms of the
              CRA, a company will deduct taxes from their regular employees if
              their income exceeds a stipulated bracket.
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
      <div className="flex md:flex md:flex-grow flex-row justify-end pr-[4rem]">
        {" "}
        <img src="./adler.jpeg" className="rounded-full h-32 mb-10 " />
      </div>
    </div>
  );
}

export default About;
