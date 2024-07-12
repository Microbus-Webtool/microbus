import React from "react";
import "../styles/card.scss";

const Card = ({ image, name, designation, linkedinURL, instaURL, githubURL }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-details">
        <div>
          <h2 className="card-title">{name}</h2>
        </div>
        <div>
          <p className="card-designation">{designation}</p>
        </div>
        <div className="profile-url">
          <div className="linkedin"><a href={linkedinURL}><img src="./assets/linkedinBlack.png" alt=""/></a></div>
          <div className="insta"><a href={instaURL}><img src="./assets/instaBlack.png" alt="" /></a></div>
          {/* <div className="github"><a href={githubURL}><img src="./assets/github.png" alt="" /></a></div> */}
        </div>
      </div>
    </div>
  );
};

export default Card;
