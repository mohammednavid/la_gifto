import React from "react";
import giftman from "./giftman.svg";
import FilterIcon from "./FilterIcon.svg";
import petService from "./petService.png";
import "./Pets.css";
import { catsData, dogsData, birdsData, fishesData } from "./PetsData";

const Pets = () => {
  return (
    <>
      <div className="pets">
        <div className="pets__ad">
          <img src={giftman} alt="gift" className="pets__adImg" />
          <p className="pets__adText">
            One of a kind <span>Gifts </span>that never fail to
            <span>catch the eyes</span>
          </p>
          <button className="pets__adButton">
            <a href="#">Explore Now</a>
          </button>
        </div>
        <div className="petsContent">
          <div className="pets__header">
            <h2>Cat Sevices</h2>
            <img className="petImg" src={petService} />
            <a href="#">
              <img src={FilterIcon} alt="Filter" />
              <span>Filters</span>
            </a>
          </div>
          <div className="petsCard">
            {catsData?.slice(0, 6).map((item) => {
              return (
                <div className="pet" value={item.id} key={item.id}>
                  <img className="pet__img" src={item.image} />
                  <p className="pet__description">{item.description}</p>
                  <a className="pet__knowMore" href="#">
                    {" "}
                    Know More
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="petsContent">
          <div className="pets__header">
            <h2>Dog Sevices</h2>
            <img className="petImg" src={petService} />
          </div>
          <div className="petsCard">
            {dogsData?.slice(0, 6).map((item) => {
              return (
                <div className="pet" value={item.id} key={item.id}>
                  <img className="pet__img" src={item.image} />
                  <p className="pet__description">{item.description}</p>
                  <a className="pet__knowMore" href="#">
                    Know More
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="petsContent">
          <div className="pets__header">
            <h2>Bird Sevices</h2>
            <img className="petImg" src={petService} />
          </div>
          <div className="petsCard">
            {birdsData?.slice(0, 6).map((item) => {
              return (
                <div className="pet" value={item.id} key={item.id}>
                  <img className="pet__img" src={item.image} />
                  <p className="pet__description">{item.description}</p>
                  <a className="pet__knowMore" href="#">
                    Know More
                  </a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="petsContent">
          <div className="pets__header">
            <h2>Fish Sevices</h2>
            <img className="petImg" src={petService} />
          </div>
          <div className="petsCard">
            {fishesData?.slice(0, 6).map((item) => {
              return (
                <div className="pet" value={item.id} key={item.id}>
                  <img className="pet__img" src={item.image} />
                  <p className="pet__description">{item.description}</p>
                  <a className="pet__knowMore" href="#">
                    Know More
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Pets;
