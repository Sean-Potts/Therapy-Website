import React from "react";

function About() {
  return (
    <div>
      <div className="containerCon textColor swatch_2  ">
        {/* <h1 class=" text-center text-5xl playfair2 mb-4 ">About</h1> */}
        <div class="grid grid-cols-3 gap-4 place-content-start">
          <div class=" col-span-1 mb-auto mt-6">
            {" "}
            <img src="./sophia.jpg" className="rounded-3xl mt-20" />
            <p class="text-black text-left playfair3 text-[20px] pl-3">
              physiotherapist Adler Student{" "}
            </p>
            <p class="text-black text-left playfair4 text-[18px] pl-3">
              physiotherapist Adler Student{" "}
            </p>
          </div>
          <div class="col-span-2 text-left h-full pl-24   ">
            <h1 class=" text-center text-5xl playfair2 text-[#131f35] mb-10">
              About
            </h1>
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
    </div>
  );
}

export default About;
