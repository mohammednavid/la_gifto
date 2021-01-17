import React from "react";
import Pet from "./Pet/Pet";
import cat from "./cat.png";
import dog from "./dog.png";
import bird from "./bird.png";
import giftAd from "./giftAd.jpg";
import petService from "./petService.png";
import "./HomePets.css";
import { Link } from "react-router-dom";

const HomePets = () => {
  return (
      <div>
      <div className="giftAd">
      <img className="giftAdImg" src={giftAd}/>
        <h2>
          These gifts have <span>Secret deals, Sign In</span> to know more
        </h2>
        <button>
          <a href="#">Sign in</a>
        </button>
      </div>
      <div className="homePets">
        <div className="homePetsHeader">
        <h2>Pet Services</h2>
        <img className="homePetImg" src={petService} />
        <Link to="/pets" className="homePetsLink">
        <p>View All</p></Link>
        </div>
        <div className="homePetsCard">
          <Pet
            id="1"
            image={cat}
            title="Cat Services"          
            />
          <Pet
            id="2"
            image={dog}
            title="Dog Services"          
            />
          <Pet
            id="3"
            image={bird}
            title="Bird Services"          
            />
        </div>
        </div>
        </div>
)}
export default HomePets;