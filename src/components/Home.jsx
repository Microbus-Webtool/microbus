import React from "react";
// import Wave from "../assets/wave.png";
// import Globe from "../assets/globe.png";
import Slider from "./slider";
import Home_Content from "./Home_Content";
import "../styles/home.scss";
// import test from "../assets/slider/image2.png";

const images = [
  "/assets/slider/image2.png",
  "/assets/slider/image2.png",
  "/assets/slider/image2.png",
  "/assets/slider/image2.png",
  "/assets/slider/image2.png",
  "/assets/slider/image2.png",
  "/assets/slider/image2.png",
  "/assets/slider/image2.png",
];

const Home = () => {
  return (
    <div>
      <Slider images={images} />
      <Home_Content />
    </div>
  );
};

export default Home;
