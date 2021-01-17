import React from "react";
import './Concept.css'

const Concept = ({id,image,description}) => {
  return (
    <div className="concept" value={id} >
        <img className="concept__img" src={image}/>
  <p className="concept__description">{description}</p>
        <a className="concept__knowMore" href="#"> Know More</a>
    </div>
  );
};

export default Concept;
