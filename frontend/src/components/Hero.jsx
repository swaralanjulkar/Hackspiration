import React from "react";
import "./styles/hero.css";
import BannerImg from '../components/images/Untitled design.png'

const Hero = () => {
  return (
    <>
    <section className="herosection" style={{zIndex:"-456"}}>

<img src={BannerImg} className=" banner" alt="no"></img>
  </section>
    </>
  );
};

export default Hero;
