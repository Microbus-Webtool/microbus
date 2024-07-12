import React from "react";
// import Wave from "../assets/wave.png";
// import Globe from "../assets/globe.png";
import Slider from "./slider";
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
    <div className="home">
    
      <div className="homeImage">
        {/* <Slider images={images} /> */}
        <img src="/./assets/landing bg1.png" alt="" />
      </div>

      <div className="home_about" id="about">
        <div className="home_mid">
          <div>
            <h3 >WHO ARE WE ?</h3>
            <p>
            Microbus, the official techno-managerial society of the Electronics and Communication Engineering Department at NIT Kurukshetra, provides an exceptional platform for enthusiastic and adept ECE students to enhance their technical and interpersonal skillset. Recognized as one of the institute's most prominent technical societies, Microbus is known for organizing a multitude of tech-fest events and technical workshops. These initiatives not only keep students abreast of the latest advancements in the dynamic ECE field but also offer a hands-on approach to learning. In addition to these academic endeavors, the club strives to foster the interpersonal development of students by providing them with an opportunity to work in a corporate-like setting. Microbus actively facilitates interactions between students, seniors, professors, and companies, fostering a strong connection with the corporate world and helping students build their professional profiles. The club has been receiving responses from other prominent institutes in an increasing fashion and holds constructive relations with renowned institutes, thus strengthening its position in the academic landscape.
            </p>
          </div>
          {/*
          <div>
            <img src="/assets/globe.png" />
          </div>
  */}
        </div>

        <div className="home_mid">
          {/*
          <div>
            <img src="/assets/globe.png" />
          </div>
  */}
          <div>
            <h3 style={{ textAlign: "start" }}>WHAT WE DO ?</h3>
            <p>
            Microbus is recognized for its expertise in organizing a diverse array of technical workshops and conferences. These initiatives serve the dual purpose of keeping students informed about the latest advancements in the dynamic field of ECE, while also providing them with practical, hands-on learning opportunities. In addition to our academic pursuits, our club is dedicated to cultivating students' interpersonal skills by offering them the chance to engage in a corporate-like environment. Microbus actively facilitates interactions among students, seniors, professors, and industry professionals, thereby fostering robust connections with the corporate world and assisting students in the development of their professional profiles.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
