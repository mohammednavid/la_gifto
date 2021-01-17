import React from "react";
import Concept from "../Concept/Concept";
import "./HomeConcepts.css";
import { Link } from "react-router-dom";

const HomeConcepts = () => {
  return (
    <div className="homeConcepts">
      <div className="homeConcepts__header">
        <h2>Concepts</h2>
        <img className="homeConceptImg" src="./Images/goldenFlower.png" />
        <Link to="/concepts" className="homeConceptsLink">
          <p>View All</p>
        </Link>
      </div>
      <div className="homeConceptsCard">
        <Concept
          className="homeConceptCard"
          id="1"
          image='./Images/concept1.png'
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, vitae."
        />
        <Concept
          className="homeConceptCard"
          id="2"
          image='./Images/concept2.png'
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, vitae."
        />
        <Concept
          className="homeConceptCard"
          id="3"
          image='./Images/concept3.png'
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, vitae."
        />
      </div>
    </div>
  );
};
export default HomeConcepts;
