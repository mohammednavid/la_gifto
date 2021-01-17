import React from "react";
import "./Pet.css";

const Pet = ({ id, image, title }) => {
  return (
    <div className="pet" value={id}>
      <img className="pet__img" src={image} />
      <p className="pet__title">{title}</p>
    </div>
  );
};
export default Pet;
