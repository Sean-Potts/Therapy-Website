import React from "react";
import "./Hero.css";
function Hero() {
  return (
    <div className="HeroContainer">
      <div>
        <video className="back-video" src="/hero.mp4" loop autoPlay muted>
          {" "}
        </video>
        <div className="text-white heroNameText  drop-shadow-2xl  ">
          Sophia Buu <br />
          <span className=" heroQuoteText playfair">
            -To live is to suffer, to survive is to find some meaning in the
            suffering.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
