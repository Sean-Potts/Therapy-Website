import React from "react";

function Footer() {
  return (
    <div className="containerCon mt-10 ">
      <div class=" mx-auto flex items-center justify-between  text-black border-b-2 border-black">
        <p class="pt-4">Sophia Buu</p>

        <div class="flex items-center">
          <a href="#" class="text-gray-300 mr-4 hover:text-gray-400">
            <img src="/link.png" className="pb-1" />
          </a>
          <a href="#" class="text-gray-300 mr-4 hover:text-gray-400">
            <img src="/insta.png" className="pb-1" />
          </a>
          <a href="#" class="text-gray-300 mr-4 hover:text-gray-400">
            <img src="/email.png" className="pb-1" />
          </a>
        </div>
      </div>
      <p className="text-black text-left">© 2024 Your Company</p>
    </div>
  );
}

export default Footer;
