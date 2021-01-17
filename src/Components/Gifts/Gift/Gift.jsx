import React from "react";
import "./Gift.css";

const Gift = ({ id, image, title, description, ratings, specialPrice }) => {
  return (
    <div className="gift__page" value={id}>
      <div className="gift">
        <img className="gift__img" src={image} />
        <p className="gift__title">{title}</p>
        <p className="gift__description">{description}</p>
        <p className="gift__ratings">{ratings}</p>
        <p className="gift__specialPrice">{specialPrice}</p>
      </div>
      <button className="gift__addToCart">
        <a href="#"> Add To Cart</a>
      </button>
    </div>
  );
};

export default Gift;
