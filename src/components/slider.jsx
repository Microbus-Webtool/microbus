import React from "react";
import "../styles/slider.scss";

const Slider = ({ images }) => {
  return (
    <div className="Wrapper">
        <div className="main1">
            <div className = "main-slide1">
                {images.map((image, index) => (
                <img key={index} src={image} alt={`image${index + 1}.jpg`} />
                ))}
            </div>
            <div className = "main-slide1">
                {images.map((image, index) => (
                <img key={index} src={image} alt={`image${index + 1}.jpg`} />
                ))}
            </div>
        </div>

        <div className="slider-heading">
            MICROBUS
        </div>
        
        <div className="main2">
            <div className = "main-slide2">
            {images.map((image, index) => (
                <img key={index} src={image} alt={`image${index + 1}.jpg`} />
            ))}
            </div>
            <div className = "main-slide2">
            {images.map((image, index) => (
                <img key={index} src={image} alt={`image${index + 1}.jpg`} />
            ))}
            </div>
        </div>
    </div>
  );
}

export default Slider;
