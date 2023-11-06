import React, { useEffect } from "react";
import "tiny-slider/dist/tiny-slider.css";
import { tns } from "tiny-slider/src/tiny-slider";
import "../styles/tinySlider.scss";
import ActionAreaCard from "./sliderCard";

const CarouselComponent = () => {
  useEffect(() => {
    const slider = tns({
      mode: "carousel",
      axis: "horizontal",
      edgePadding: 50,
      gutter: 15,
      nav: false,
      touch: true,
      loop: true,
      autoplay: true,
      autoplayButtonOutput:false,
      autoplayTimeout: 2000,
      animateIn: "fadeIn",
      controls: false,
      rewind: false,

      container: ".my-slider",
      items: 3,
      mouseDrag: true,
      swipeAngle: false,
      speed: 400,
      responsive: {
        768: {
          items: 5,
        },
      },
    });
    
    return () => {
      slider.destroy();
    };
  }, []);
  
  return (
    <div>
      <div className="my-slider">
        <div>
          <ActionAreaCard />
        </div>
        <div>
          <ActionAreaCard />
        </div>
        <div>
          <ActionAreaCard />
        </div>
        <div>
          <ActionAreaCard />
        </div>
        <div>
          <ActionAreaCard />
        </div>
        <div>
          <ActionAreaCard />
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
