import React from "react";
import Concept from "./Concept/Concept";
import giftman from "./giftman.svg";
import FilterIcon from "./FilterIcon.svg";
import concept from "./concept.png";
import concept1 from "./concept1.png";
import concept2 from "./concept2.png";
import concept3 from "./concept3.svg";
import concept4 from "./concept4.png";
import "./Concepts.css"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const Concepts = () => {
  return (
    <>
    <Header/>
    <div className="concepts">
      <div className="concepts__ad">
        <img src={giftman} alt="gift" className="concepts__adImg" />
        <p className="concepts__adText">
          One of a kind <span>Gifts </span>that never fail to <span>catch the eyes</span>
        </p>
        <button className="concepts__adButton">
          <a href="#">Explore Now</a>
        </button>
      </div>
      <div className="conceptsContent">
      <div className="concepts__header">
        <h2>Birthday Concepts</h2>
        <img className="conceptImg" src='./Images/goldenFlower.png' />
        <a href="#">
          <img src="./Images/FilterIcon.svg" alt="Filter" />
          <span>Filters</span>
        </a>
      </div>
      <div className="conceptsCard">
        <Concept
          className="conceptCard"
          id="BG1"
          image={concept1}
          description="What is Lorem Ipsum What is Lorem Ipsum Lorem Ipsum issimply dummy"
        />
        <Concept
          className="conceptCard"
          id="BG2"
          image={concept1}
          description="What is Lorem Ipsum What is Lorem Ipsum Lorem Ipsum issimply dummy"
        />
        <Concept
          className="conceptCard"
          id="BG3"
          image={concept1}
          description="What is Lorem Ipsum What is Lorem Ipsum Lorem Ipsum issimply dummy"
        />
        </div>
      <div className="conceptsCard">
        <Concept
          className="conceptCard"
          id="BG4"
          image={concept1}
          description="What is Lorem Ipsum What is Lorem Ipsum Lorem Ipsum issimply dummy"
        />
        <Concept
          className="conceptCard"
          id="BG5"
          image={concept1}
          description="What is Lorem Ipsum What is Lorem Ipsum Lorem Ipsum issimply dummy"
        />
        <Concept
          className="conceptCard"
          id="BG6"
          image={concept1}
          description="What is Lorem Ipsum What is Lorem Ipsum Lorem Ipsum issimply dummy"
        />
      </div>
      </div>      
      <div className="conceptsContent">
      <div className="concepts__header">
        <h2>Marriage Concepts</h2>
        <img className="conceptImg" src={concept} />
      </div>
      <div className="conceptsCard">
        <Concept
          className="conceptCard"
          id="MG1"
          image={concept2}
          description="What is Lorem Ipsum What is Lorem Ipsum Lorem Ipsum issimply dummy"
        />
        <Concept
          className="conceptCard"
          id="MG2"
          image={concept2}
          description="What is Lorem Ipsum What is Lorem Ipsum Lorem Ipsum issimply dummy"
        />
        <Concept
          className="conceptCard"
          id="MG3"
          image={concept2}
          description="What is Lorem Ipsum What is Lorem Ipsum Lorem Ipsum issimply dummy"
        />
        </div>
      <div className="conceptsCard">
        <Concept
          className="conceptCard"
          id="MG4"
          image={concept2}
          description="What is Lorem Ipsum What is Lorem Ipsum Lorem Ipsum issimply dummy"
        />
        <Concept
          className="conceptCard"
          id="MG5"
          image={concept2}
          description="What is Lorem Ipsum What is Lorem Ipsum Lorem Ipsum issimply dummy"
        />
        <Concept
          className="conceptCard"
          id="MG6"
          image={concept2}
          description="What is Lorem Ipsum What is Lorem Ipsum Lorem Ipsum issimply dummy"
        />
      </div>
      </div>      
      <div className="conceptsContent">
      <div className="concepts__header">
        <h2>Baby Shower Concepts</h2>
        <img className="conceptImg" src={concept} />
      </div>
      <div className="conceptsCard">
        <Concept
          className="conceptCard"
          id="BSG1"
          image={concept3}
          description="What is Lorem Ipsum What is Lorem Ipsum Lorem Ipsum issimply dummy"
        />
        <Concept
          className="conceptCard"
          id="BSG2"
          image={concept3}
          description="What is Lorem Ipsum What is Lorem Ipsum Lorem Ipsum issimply dummy"
        />
        <Concept
          className="conceptCard"
          id="BSG3"
          image={concept3}
          description="What is Lorem Ipsum What is Lorem Ipsum Lorem Ipsum issimply dummy"
        />
        </div>
      <div className="conceptsCard">
        <Concept
          className="conceptCard"
          id="BSG4"
          image={concept3}
          description="What is Lorem Ipsum What is Lorem Ipsum Lorem Ipsum issimply dummy"
        />
        <Concept
          className="conceptCard"
          id="BSG5"
          image={concept3}
          description="What is Lorem Ipsum What is Lorem Ipsum Lorem Ipsum issimply dummy"
        />
        <Concept
          className="conceptCard"
          id="BSG6"
          image={concept3}
          description="What is Lorem Ipsum What is Lorem Ipsum Lorem Ipsum issimply dummy"
        />
      </div>
      </div>      
      <div className="conceptsContent">
      <div className="concepts__header">
        <h2>Men's Special Concepts</h2>
        <img className="conceptImg" src={concept} />
      </div>
      <div className="conceptsCard">
        <Concept
          className="conceptCard"
          id="MSG1"
          image={concept4}
          description="What is Lorem Ipsum What is Lorem Ipsum Lorem Ipsum issimply dummy"
        />
        <Concept
          className="conceptCard"
          id="MSG2"
          image={concept4}
          description="What is Lorem Ipsum What is Lorem Ipsum Lorem Ipsum issimply dummy"
        />
        <Concept
          className="conceptCard"
          id="MSG3"
          image={concept4}
          description="What is Lorem Ipsum What is Lorem Ipsum Lorem Ipsum issimply dummy"
        />
        </div>
      <div className="conceptsCard">
        <Concept
          className="conceptCard"
          id="MSG4"
          image={concept4}
          description="What is Lorem Ipsum What is Lorem Ipsum Lorem Ipsum issimply dummy"
        />
        <Concept
          className="conceptCard"
          id="MSG5"
          image={concept4}
          description="What is Lorem Ipsum What is Lorem Ipsum Lorem Ipsum issimply dummy"
        />
        <Concept
          className="conceptCard"
          id="MSG6"
          image={concept4}
          description="What is Lorem Ipsum What is Lorem Ipsum Lorem Ipsum issimply dummy"
        />
      </div>
      </div>      
    </div>
    <Footer/>
    </>
  );
};

export default Concepts;
