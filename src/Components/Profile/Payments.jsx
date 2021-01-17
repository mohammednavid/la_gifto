import React from "react";
import "./Payments.css";
import AddIcon from "@material-ui/icons/Add";

const Payments = () => {
  return (
    <div className="payments">
      <h3 className="payments__header">Saved Cards</h3>
      <div className="payments__content">
        <AddIcon className="payments__icon" />
        <input
          type="text"
          className="payments__input"
          placeholder="Add a new Card"
          readOnly
        />
      </div>
      <div className="payments__savedCards">
        <div className="payments__savedCardContent">
          <img src="./Images/sbi.png" alt="" className="payments__bankLogo" />
          <p className="payments__bankName">SBI BANK</p>
          <img src="./Images/visa.png" alt="" className="payments__cardLogo" />
          <p className="payments__cardType">Debit Card</p>
          <p className="payments__cardNumber">
            Card Number
            <br />
            <span>1234 **** **** 1234</span>
          </p>
          <p className="payments__cardName">
            Name on Card
            <br />
            <span>Lorem Ipsum</span>
          </p>
          <p className="payments__cardValidity">
            Validity
            <br />
            <span>02/22</span>
          </p>
        </div>
        <div className="payments__savedCardContent">
          <img src="./Images/sbi.png" alt="" className="payments__bankLogo" />
          <p className="payments__bankName">SBI BANK</p>
          <img src="./Images/visa.png" alt="" className="payments__cardLogo" />
          <p className="payments__cardType">Debit Card</p>
          <p className="payments__cardNumber">
            Card Number
            <br />
            <span>1234 **** **** 1234</span>
          </p>
          <p className="payments__cardName">
            Name on Card
            <br />
            <span>Lorem Ipsum</span>
          </p>
          <p className="payments__cardValidity">
            Validity
            <br />
            <span>02/22</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Payments;
