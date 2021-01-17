import React, { useEffect } from "react";
import "./Support.css";
import './FAQ.css'

const Support = () => {
    useEffect(() => {
        let coll = document.getElementsByClassName("collapsible");
        let i;
        for (i = 0; i < coll.length; i++) {
          coll[i].addEventListener("click", function () {
            this.classList.toggle("active");
            let content = this.nextElementSibling;
            if (content.style.maxHeight) {
              content.style.maxHeight = null;
            } else {
              content.style.maxHeight = content.scrollHeight + "px";
            }
          });
        }
      }, []);
  return (
    <div className="support">
      <div className="supportCentre">
        <h3 className="supportCentre__title">HELP CENTRE</h3>
        <p className="supportCentre__title2">We are here to help you</p>
        <ul className="supportCentre__header">
          <li>New Complaint or Feedback</li>
          <li>Have an unresolved issue</li>
          <li>FAQ's</li>
        </ul>
        <div className="supportCentre__inputAndName">
          <div className="supportCentre__input">
            <p className="supportCentre__inputName">Name</p>
            <input type="text" placeholder="Please enter your name here" />
          </div>
          <div className="supportCentre__input">
            <p className="supportCentre__inputName">Email</p>
            <input type="text" placeholder="Please enter your email here" />
          </div>
        </div>
        <div className="supportCentre__inputAndName">
          <div className="supportCentre__input">
            <p className="supportCentre__inputName">Mobile Number</p>
            <input
              type="text"
              placeholder="Please enter your mobile number here"
            />
          </div>
          <div className="supportCentre__upload">
            <p className="supportCentre__inputFile">Upload File</p>
            <button>Choose File</button>
          </div>
        </div>
        <div className="supportCentre__inputComments">
          <p className="supportCentre__inputDetails">Your Comments</p>
          <input type="text" placeholder="Leave your comments here" />
          <img className="supportCentre__rightImg" src="./Images/right.png" />
        </div>
        <div className="supportCentre__buttonDiv">
          <button className="supportCentre__button">Save</button>
        </div>
      </div>
      <div className="supportCentre supportCentre__issue">
        <h3 className="supportCentre__title">Have an Unresolved Issue?</h3>
        <div className="supportCentre__inputAndName">
          <div className="supportCentre__input">
            <p
              className="supportCentre__inputName"
              style={{ background: "#353530" }}
            >
              Order ID
            </p>
            <input type="text" placeholder="Please enter your Order ID here" />
          </div>
          <div className="supportCentre__upload">
            <span className="supportCentre__inputFile">Upload File</span>
            <button>Choose File</button>
          </div>
        </div>
        <div className="supportCentre__inputComments">
          <p
            className="supportCentre__inputDetails"
            style={{ background: "#353530" }}
          >
            Your Comments
          </p>
          <input type="text" placeholder="Leave your comments here" />
        </div>
        <div className="supportCentre__buttonDiv">
          <button className="supportCentre__button">Submit</button>
        </div>
      </div>
      <div className="supportCentre">
        <h3 className="supportCentre__title">FAQ's</h3>
        <div className="collapsible__container">
          <button className="collapsible">
            Lorem ipsum is simply dummy text
          </button>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
          </div>
        </div>
        <hr />
        <div className="collapsible__container">
          <button className="collapsible">
            Lorem ipsum is simply dummy text
          </button>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
          </div>
        </div>
        <hr />
        <div className="collapsible__container">
          <button className="collapsible">
            Lorem ipsum is simply dummy text
          </button>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
          </div>
        </div>
        <hr />
        <div className="collapsible__container">
          <button className="collapsible">
            Lorem ipsum is simply dummy text
          </button>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
          </div>
        </div>
        <hr />
        <div className="collapsible__container">
          <button className="collapsible">
            Lorem ipsum is simply dummy text
          </button>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
          </div>
        </div>
        <hr />
        <div className="collapsible__container">
          <button className="collapsible">
            Lorem ipsum is simply dummy text
          </button>
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit
              amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.
            </p>
          </div>
        </div>
        <hr />
        <img src="./Images/left.png" alt="" className="supportCentre__leftImg"/>
      </div>
    </div>
  );
};

export default Support;
