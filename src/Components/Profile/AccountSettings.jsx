import React from "react";
import "./AccountSettings.css";
import AddIcon from "@material-ui/icons/Add";
import AddressModal from "../Checkout/AddressModal";

const AccountSettings = () => {
  return (
    <div className="accountSettings__container">
      <div className="accountSettings__name">
        <div className="accountSettings__nameHeader">
          <h3 className="accountSettings__nameHeaderTitle">
            Personal Information
          </h3>
          <a href="" className="accountSettings__nameHeaderEdit">
            Edit
          </a>
        </div>
        <div className="accountSettings__nameContent">
          <input
            type="text"
            className="accountSettings__fName"
            placeholder="Lorem"
            readOnly
          />
          <input
            type="text"
            className="accountSettings__lName"
            placeholder="Ipsum"
            readOnly
          />
        </div>
      </div>
      <div className="accountSettings__gender">
        <h3 className="accountSettings__genderHeader">Your Gender</h3>
        <div className="accountSettings__genderContent">
          <div className="accountSettings__genderOption1">
            <input type="radio" checked />
            <p>Male</p>
          </div>
          <div className="accountSettings__genderOption2">
            <input type="radio" />
            <p>Female</p>
          </div>
        </div>
      </div>
      <div className="accountSettings__email">
        <div className="accountSettings__emailHeader">
          <h3 className="accountSettings__emailHeaderTitle">Email Address</h3>
          <a href="" className="accountSettings__emailHeaderEdit">
            Edit
          </a>
        </div>
        <input
          type="text"
          className="accountSettings__emailInput"
          placeholder="loremipsum@gmail.com"
          readOnly
        />
      </div>
      <div className="accountSettings__mobile">
        <div className="accountSettings__mobileHeader">
          <h3 className="accountSettings__mobileHeaderTitle">Mobile Number</h3>
          <a href="" className="accountSettings__mobileHeaderEdit">
            Edit
          </a>
        </div>
        <input
          type="number"
          className="accountSettings__mobileInput"
          placeholder="+911234567890"
          readOnly
        />
      </div>
      <div className="accountSettings__address">
        <div className="accountSettings__addressHeader">
          <h3 className="accountSettings__addressHeaderTitle">
            Manage Address
          </h3>
          <a href="" className="accountSettings__addressHeaderEdit">
            Edit
          </a>
        </div>
        <div className="accountSettings__addressModal">
          <AddressModal/>
        </div>
      </div>
      <div className="accountSettings__savedAddContainer">
        <div className="accountSettings__savedAdd">
          <div className="accountSettings__savedAddHeader">
            <div className="accountSettings__savedAddLeft">
              <p className="accountSettings__savedAddType">HOME</p>
              <p className="accountSettings__savedAddContact">
                <span>Lorem Ipsum</span>
                <span>+91 1234567890</span>
              </p>
            </div>
            <div className="accountSettings__savedAddRight">
              <button className="accountSettings__savedAddEdit">Edit</button>
              <button className="accountSettings__savedAddDelete">
                Delete
              </button>
            </div>
          </div>
          <p className="accountSettings__savedAddDetails">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
        <hr/>
        <div className="accountSettings__savedAdd">
          <div className="accountSettings__savedAddHeader">
            <div className="accountSettings__savedAddLeft">
              <p className="accountSettings__savedAddType">WORK</p>
              <p className="accountSettings__savedAddContact">
                <span>Lorem Ipsum</span>
                <span>+91 1234567890</span>
              </p>
            </div>
            <div className="accountSettings__savedAddRight">
              <button className="accountSettings__savedAddEdit">Edit</button>
              <button className="accountSettings__savedAddDelete">
                Delete
              </button>
            </div>
          </div>
          <p className="accountSettings__savedAddDetails">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AccountSettings;
