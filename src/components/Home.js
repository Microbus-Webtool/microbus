import React from "react";
import Wave from "../asserts/wave.png";
import Globe from "../asserts/globe.png";
import "./styles/home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="home_mid">
        <div>
          <h3>WHO ARE WE ?</h3>
          <p>
            lorem GitHub Desktop Focus on what matters instead of fighting with
            Git. Whether you're new to Git or a seasoned user, GitHub Desktop
            simplifies your development workflow.
            lorem GitHub Desktop Focus on what matters instead of fighting with
            Git. Whether you're new to Git or a seasoned user, GitHub Desktop
            simplifies your development workflow.
          </p>
        </div>
        <div><img src={Globe}/></div>
        
      </div>
      <div className="home_mid">
      <div><img src={Globe}/></div>
        <div>
          <h3 style={{textAlign: "end"}}>WHO ARE WE ?</h3>
          <p>
            lorem GitHub Desktop Focus on what matters instead of fighting with
            Git. Whether you're new to Git or a seasoned user, GitHub Desktop
            simplifies your development workflow.
            lorem GitHub Desktop Focus on what matters instead of fighting with
            Git. Whether you're new to Git or a seasoned user, GitHub Desktop
            simplifies your development workflow.
            lorem GitHub Desktop Focus on what matters instead of fighting with
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
