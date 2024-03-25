import React from "react";
import "./Hero.css";
function Hero() {
  return (
    <div className="HeroContainer">
      <div>
        <video className="back-video" src="/hero.mp4" loop autoPlay muted>
          {" "}
        </video>
        <div className="text-white text-6xl text drop-shadow-2xl NavHeader ">
          Sophia Buu <br />
          <span className="text-3xl playfair">
            -To live is to suffer, to survive is to find some meaning in the
            suffering.
          </span>
        </div>
      </div>
    </div>
  );
}

export default Hero;
