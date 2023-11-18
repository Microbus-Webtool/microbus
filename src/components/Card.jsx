import React from "react";
import "../styles/card.scss";

const Card = ({ image, name, designation }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-details">
        <h2 className="card-title">{name}</h2>
        <a href="https://www.instagram.com/swn.himanshu/">
          <img
            className="socials"
            src="/assets/instagram.svg"
            alt="instagram"
          />
        </a>
        <a href="https://www.instagram.com/swn.himanshu/">
          <img className="socials" src="/assets/linkedin.svg" alt="linkedin" />
        </a>
        <a href="https://www.instagram.com/swn.himanshu/">
          <img className="socials" src="/assets/github.svg" alt="github" />
        </a>
      </div>
    </div>
  );
};

export default Card;
