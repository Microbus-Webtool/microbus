import { tns } from "./node_modules/tiny-slider/src/tiny-slider";

const slider = document.querySelector(".slider");
const carsObject = [
  {
    "img": "https://images.pexels.com/photos/9784188/pexels-photo-9784188.jpeg?cs=srgb&dl=pexels-mathias-reding-9784188.jpg&fm=jpg",
    "model" : "FERRARI 296 GTS",
    "type" : "coupe"
  },
  {
    "img": "https://images.pexels.com/photos/10292234/pexels-photo-10292234.jpeg?cs=srgb&dl=pexels-yoshi-10292234.jpg&fm=jpg",
    "model" : "FERRARI SF90",
    "type" : "coupe"
  },
  {
    "img": "https://images.pexels.com/photos/11202306/pexels-photo-11202306.jpeg?cs=srgb&dl=pexels-prat-clement-11202306.jpg&fm=jpg",
    "model" : "FERRARI F60 America",
    "type" : "coupe"
  },
  {
    "img": "https://images.pexels.com/photos/8171898/pexels-photo-8171898.jpeg?cs=srgb&dl=pexels-eriks-abzinovs-8171898.jpg&fm=jpg",
    "model" : "FERRARI F8",
    "type" : "hatchback"
  }
];

// const images = [
//   '/assets/image1.jpg',
//   '/assets/image2.jpg',
//   '/assets/image3.jpg',
//   '/assets/image4.jpg',
//   '/assets/image5.jpg',
//   '/assets/image6.jpg',
//   '/assets/image7.jpg',
//   '/assets/image8.jpg',
//   '/assets/image9.jpg',
// ];

window.addEventListener("load", initializeSlider());

function initializeSlider(){
  let cars = "";
  for(let car in carsObject){
    cars += `<div class="slide">
              <img src="${carsObject[car].img}"
                alt="image">
              <br><br>
              <div>
                <h3>${carsObject[car].model}</h3>
                <p>${carsObject[car].type}</p>
              </div>
            </div>`
  }
  slider.innerHTML = cars;
}

const tnslider = tns({
  container: '.slider',
  autoWidth:true,
  gutter: 15,
  slideBy: 1,
  nav: true,
  speed: 400,
  controlsContainer: '#controls',
  prevButton: '.previous',
  nextButton: '.next'
});
