import React, { useEffect }from 'react';
import 'tiny-slider/dist/tiny-slider.css';
import { tns } from "tiny-slider/src/tiny-slider";

const CarouselComponent = () => {
  useEffect(() => {
    const slider = tns({
      container: '.my-slider',
      mode: 'carousel',
      axis: 'horizontal',
      items: 4,
      edgePadding: 50,
      gutter: 150,
      controls: true,
      nav: true,
      mouseDrag: true, 
      touch: true,
      speed: 2500,
      loop: true,
      autoplay: true,
      // autoplayButton: false,
      autoplayTimeout: 2000,
      animateIn: 'fadeIn',
      controls: false,
      rewind: false,
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
      <h1>OUR SOCIETY</h1>
      <div className="my-slider">
        <div>
          <img src="./assets/image2.png" alt="image1.jpg" />
        </div>
        <div>
          <img src="./assets/image2.png" alt="image2.jpg" />
        </div>
        <div>
          <img src="./assets/image2.png" alt="image3.jpg" />
        </div>
        <div>
          <img src="./assets/image2.png" alt="image1.jpg" />
        </div>
        <div>
          <img src="./assets/image2.png" alt="image2.jpg" />
        </div>
        <div>
          <img src="./assets/image2.png" alt="image3.jpg" />
        </div>
        <div>
          <img src="./assets/image2.png" alt="image2.jpg" />
        </div>
        <div>
          <img src="./assets/image2.png" alt="image3.jpg" />
        </div>
      </div>
    </div>
  );
};

export default CarouselComponent;
