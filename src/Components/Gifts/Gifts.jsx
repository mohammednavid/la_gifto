import React from "react";
import Gift from "./Gift/Gift";
import gift from "./gift.png";
import gift1 from "./gift1.png";
import "./Gifts.css";

const Gifts = () => {
  return (
    <>
      <div className="gifts">
        <div className="giftsHeader">
        <h2>Popular Gifts</h2>
        <img className="giftImg" src={gift} />
        <p>View All</p>
        </div>
        <div className="giftsCard">
          <Gift
            className="giftCard"
            id="1"
            image={gift1}
            title="Lorem ipsum is simply"
            description="dummy text of printing"
            ratings="****"
            specialPrice="Special Price: ₹249"
          />
          <Gift
            className="giftCard"
            id="2"
            image={gift1}
            title="Lorem ipsum is simply"
            description="dummy text of printing"
            ratings="****"
            specialPrice="Special Price: ₹249"
          />
          <Gift
            className="giftCard"
            id="3"
            image={gift1}
            title="Lorem ipsum is simply"
            description="dummy text of printing"
            ratings="****"
            specialPrice="Special Price: ₹249"
          />
        </div>
      </div>
      <div className="gifts">
      <div className="giftsHeader">
<h2>Top Trending</h2>
        <img className="giftImg" src={gift} />
        <p>View All</p>
        </div>
        <div className="giftsCard">
          <Gift
            className="giftCard"
            id="1"
            image={gift1}
            title="Lorem ipsum is simply"
            description="dummy text of printing"
            ratings="****"
            specialPrice="Special Price: ₹249"
          />
          <Gift
            className="giftCard"
            id="2"
            image={gift1}
            title="Lorem ipsum is simply"
            description="dummy text of printing"
            ratings="****"
            specialPrice="Special Price: ₹249"
          />
          <Gift
            className="giftCard"
            id="3"
            image={gift1}
            title="Lorem ipsum is simply"
            description="dummy text of printing"
            ratings="****"
            specialPrice="Special Price: ₹249"
          />
        </div>
      </div>
      </>
  );
};
export default Gifts;
