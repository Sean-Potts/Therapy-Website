import { useState } from "react";
import "./Contact.css";

import React from "react";

function Contacttest() {
  return (
    <div className="bg-[#F1F4F1] text-black">
      <div className="containerCon1 mx-auto">
        <h2 class=" text-4xl tracking-tight font-extrabold playfair2 text-center  mb-14 border-b-2 pb-2  border-black">
          Contact Me
        </h2>
        {/* <h2 class="mb-4 text-4xl tracking-tight font-extrabold playfair2 text-center pt-5 border-b-2 pb-2 border-black">
          Contact Me
        </h2> */}
        <form action="#" class="space-y-8  pb-10">
          <div className="flex justify-between space-x-3 text-left">
            <div className="flex-auto">
              <label for="email" class="block  text-sm font-medium  ">
                First Name
              </label>
              <input
                type="email"
                id="email"
                class="shadow-sm bg-[#D2E0EE] w-full border  placeholder-gray-600 focus:ring-blue-500 focus:bg-[#dee8f1] focus:border-blue-500 focus:outline-8 border-black text-black text-sm   block  p-2.5 "
                placeholder=""
                required
              />
            </div>
            <div className="flex-auto pl-10">
              <label for="email" class="block  text-sm font-medium  ">
                Last Name
              </label>
              <input
                type="email"
                id="email"
                class="shadow-sm bg-[#D2E0EE] w-full border  placeholder-gray-600 focus:ring-blue-500 focus:border-blue-500  focus:bg-[#dee8f1] focus:outline-8 border-black text-black text-sm   block  p-2.5 "
                placeholder=""
                required
              />
            </div>
          </div>
          <div className>
            <label for="email" class="block text-left  text-sm font-medium  ">
              Email
            </label>
            <input
              type="email"
              id="email"
              class="shadow-sm bg-[#D2E0EE] border w-full placeholder-gray-600 focus:ring-blue-500 focus:border-blue-500 focus:bg-[#dee8f1] focus:outline-8 border-black text-black text-sm   block  p-2.5 "
              placeholder=""
              required
            />
          </div>
          <div className>
            <label for="email" class="block text-left  text-sm font-medium  ">
              Message
            </label>
            <textarea
              type="email"
              id="email"
              class="shadow-sm align-top bg-[#D2E0EE] border w-full h-60 placeholder-gray-600 focus:ring-blue-500 focus:bg-[#dee8f1] focus:border-blue-500 focus:outline-8 border-black text-black text-sm   block  p-2.5 "
              placeholder=""
              required
            />
          </div>
          <button
            className="bg-[#202020] text-white px-14 py-3 rounded-xl hover:bg-[#333333] hover:grow"
            onclick="return validateForm()"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contacttest;
