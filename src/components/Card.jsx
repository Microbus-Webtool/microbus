import React from "react";
import "../styles/card.scss";

const Card = ({ image, name, designation }) => {
  return (
    <div className="card">
      <img src={image} alt={name} className="card-image" />
      <div className="card-details">
        <h2 className="card-title">{name}</h2>
        <p className="card-designation">{designation}</p>
      </div>
    </div>
  );
};

export default Card;
