import React from "react";
import "../styles/card.scss";

const Postcard = ({ image, name, designation }) => {
  return (
    <div className="card_post">
      <img src={image} alt={name} className="card-image" />
      <div className="card-details-post">
        <h2 className="card-title">{name}</h2>
        <p className="card-designation">{designation}</p>
      </div>
    </div>
  );
};

export default Postcard;