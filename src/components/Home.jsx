import React from "react";
// import Wave from "../assets/wave.png";
// import Globe from "../assets/globe.png";
import Slider from "./slider";
import Postholder from "./Postholder";
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

      <div className="home">
        <div className="home_mid">
          <div>
            <h3>WHO ARE WE ?</h3>
            <p>
              lorem GitHub Desktop Focus on what matters instead of fighting
              with Git. Whether you're new to Git or a seasoned user, GitHub
              Desktop simplifies your development workflow. lorem GitHub Desktop
              Focus on what matters instead of fighting with Git. Whether you're
              new to Git or a seasoned user, GitHub Desktop simplifies your
              development workflow.
            </p>
          </div>
          <div>
            <img src="/assets/globe.png" />
          </div>
        </div>

        <div className="home_mid">
          <div>
            <img src="/assets/globe.png" />
          </div>
          <div>
            <h3 style={{ textAlign: "end" }}>WHO ARE WE ?</h3>
            <p>
              lorem GitHub Desktop Focus on what matters instead of fighting
              with Git. Whether you're new to Git or a seasoned user, GitHub
              Desktop simplifies your development workflow. lorem GitHub Desktop
              Focus on what matters instead of fighting with Git. Whether you're
              new to Git or a seasoned user, GitHub Desktop simplifies your
              development workflow. lorem GitHub Desktop Focus on what matters
              instead of fighting with
            </p>
          </div>
        </div>
      </div>

      <Postholder/>
    </div>
  );
};

export default Home;
