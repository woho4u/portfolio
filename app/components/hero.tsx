import React from "react";

const Hero = () => {
  return (
    <>
      <div className="hero-container">
        <div className="hero-card text-container">
          <h1 id="title-intro" className="fantasy">
            Hi, my name is
          </h1>
          <div id="hero-title-container">
            <h1 className="hero1 eerie-color fantasy hero-title">Oliver</h1>
            <h1 className="hero2 eerie-color fantasy hero-title">Kvamme</h1>
            <h1 className="hero3 eerie-color fantasy hero-title">Eriksen</h1>
          </div>

          <div className="separate w-3/4 eerie-background h-1 ml-3"></div>

          <div id="hero-para-container">
            <div className="bg-hero-gray bg-opacity-50 rounded m-4">
              <p id="hero-para" className="eerie-color">
                Im am a fullstack developer, with Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Amet suscipit rem id, molestias,
                est, saepe nesciunt iste aperiam fugit ullam repellendus fugiat
                impedit illo odit assumenda doloremque dolore unde consequatur.
              </p>
            </div>
          </div>
        </div>

        <img className="hero-img" src="punk-header2.png" alt="" />
      </div>
    </>
  );
};

export default Hero;
