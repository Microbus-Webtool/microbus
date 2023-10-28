import React from "react";
import "../styles/slider.scss";

const Slider = ({ images }) => {
  return (
    <div>
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

        <h1 className="slider-heading">MICROBUS</h1>
        
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
