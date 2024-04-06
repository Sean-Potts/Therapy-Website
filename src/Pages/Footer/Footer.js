import React from "react";

function Footer() {
  return (
    <div className="bg-[#202020]">
      <div className="containerCon1 mx-auto ">
        <div class=" mx-auto flex items-center justify-between  text-white border-b-2 border-white">
          <p class="pt-4">Sophia Buu</p>

          <div class="flex items-center">
            <a href="#" class="text-gray-300 mr-4 hover:text-gray-400">
              <img src="/link.png" className="pb-1 h-12" />
            </a>
            <a href="#" class="text-gray-300 mr-4 hover:text-gray-400">
              <img src="/insta.png" className="pb-1 h-12" />
            </a>
            <a href="#" class="text-gray-300 mr-4 hover:text-gray-400">
              <img src="/email.png" className="pb-1 h-12" />
            </a>
          </div>
        </div>
        <p className="text-white text-left">© 2024 Your Company</p>
      </div>
    </div>
  );
}

export default Footer;
