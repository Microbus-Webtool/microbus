import React from "react";
import "../styles/TeamPage.scss";
import TinySlider from "../components/tinySlider";
import Carousel from "./Carousel";


const images = [
  "/assets/slider/image2.png",
  "/assets/slider/image2.png",
  "/assets/slider/image2.png",
  "/assets/slider/image2.png",
  "/assets/slider/image2.png",
  "/assets/slider/image2.png",
  "/assets/slider/image2.png",
  "/assets/slider/image2.png",
  "/assets/slider/image2.png",
  "/assets/slider/image2.png",
  "/assets/slider/image2.png",
  "/assets/slider/image2.png",
  "/assets/slider/image2.png",
  "/assets/slider/image2.png",
  "/assets/slider/image2.png",
  "/assets/slider/image2.png",
  "/assets/slider/image2.png",
  "/assets/slider/image2.png",
];

const TeamPage = () => {


    return (
      <div>
        <h1>TEAMS</h1>

        <div className="slider-container-1">
          <h3>DEVELOPERS</h3>
          <Carousel images={images}/>
        </div>
        
        <br />
        <div className="slider-container-2">
          <h3>DESIGNERS</h3>
          <Carousel images={images}/>
        </div>

        <br />
        <div className="slider-container-3">
          <h3>CONTENT WRITERS</h3>
          <Carousel images={images}/>
        </div>
        <br />
        <br />
      </div>
    );
};

export default TeamPage;