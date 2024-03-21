import React from "react";
import "./Hero.css";
function Hero() {
  return (
    <div>
      <div>
        <video className="video" src="/hero.mp4" loop autoPlay muted>
          {" "}
          <div className="text-white">Ready for therapy?</div>
        </video>
        <div>Ready for therapy?</div>
      </div>
    </div>
  );
}

export default Hero;
