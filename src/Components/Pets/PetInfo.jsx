import React from "react";
import "./PetInfo.css";
import { useEffect } from "react";
import BookingModal from "./BookingModal";

const PetInfo = () => {
  useEffect(() => {
    const current = document.querySelector("#current");
    const imgs = document.querySelectorAll(".petinfo__imgs img"); 
    const opacity = 1;

    imgs[0].style.opacity = opacity;
    imgs.forEach((img) => img.addEventListener("click", imgClick));

    function imgClick(e) {
      current.src = e.target.src; 

      imgs.forEach((img) => (img.style.opacity = 1));
      e.target.style.opacity = opacity;
    }
  }, []);

  return (
    <div className="petinfo__containor">
      <div className="petinfo">
        <div className="petinfo__gallery">
          <div className="petinfo__hero">
            <img src="./Images/dog.png" alt="" id="current" />
          </div>

          <div className="petinfo__imgs">
            <img className="petinfo__imgs_1" src="./Images/dog.png" alt="" />
            <img className="petinfo__imgs_2" src="./Images/cat.png" alt="" />
            <img className="petinfo__imgs_3" src="./Images/bird.png" alt="" />
          </div>
        </div>
        <div className="petinfo__about">
          <h3 className="petinfo__aboutTitle">
            Golden Retriever Puppy ( 3 Months)
          </h3>
          <p className="petinfo__aboutRatings">*****</p>
          <h4 className="petinfo__aboutDescTitle">Description</h4>
          <p className="petinfo__aboutDescription">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply
            dummy text of the printing and typesetting industry. Lorem Ipsum has
            been the industry's standard dummy text ever since the 1500s, when
            an unknown printer took a galley of type and scrambled it to make a
            type specimen book. It has survived not only five centuries, but
            also the leap into
          </p>
          <div className="petinfo__buttons">
          <BookingModal/>
          <button className="petinfo__aboutConsult">
            <a href="#">Consult Doctor</a>
          </button>
          </div>
        </div>
      </div>
      <p className="petinfo__fullDescription">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type
        and scrambled it to make a type specimen book. It has survived not only
        five centuries, but also the leap into
      </p>
      <div className="petinfo__giftRecommend">
        <div className="petinfo__gift_1">
          <img src="./Images/gift1.png" alt="" />
          <div className="petinfo__giftDetails">
            <p className="petinfo__giftTitle">Lorem ipsum is simply</p>
            <p className="petinfo__giftDescription">dummy text of printing</p>
            <p className="petinfo__giftPrice">Special Price : ₹249</p>
            <p className="petinfo__giftRatings">****</p>
          </div>
        </div>
        <div className="petinfo__gift_1">
          <img src="./Images/gift1.png" alt="" />
          <div className="petinfo__giftDetails">
            <p className="petinfo__giftTitle">Lorem ipsum is simply</p>
            <p className="petinfo__giftDescription">dummy text of printing</p>
            <p className="petinfo__giftPrice">Special Price : ₹249</p>
            <p className="petinfo__giftRatings">****</p>
          </div>
        </div>
        <div className="petinfo__gift_1">
          <img src="./Images/gift1.png" alt="" />
          <div className="petinfo__giftDetails">
            <p className="petinfo__giftTitle">Lorem ipsum is simply</p>
            <p className="petinfo__giftDescription">dummy text of printing</p>
            <p className="petinfo__giftPrice">Special Price : ₹249</p>
            <p className="petinfo__giftRatings">****</p>
          </div>
        </div>
        <div className="petinfo__gift_1">
          <img src="./Images/gift1.png" alt="" />
          <div className="petinfo__giftDetails">
            <p className="petinfo__giftTitle">Lorem ipsum is simply</p>
            <p className="petinfo__giftDescription">dummy text of printing</p>
            <p className="petinfo__giftPrice">Special Price : ₹249</p>
            <p className="petinfo__giftRatings">****</p>
          </div>
        </div>
      </div>
      <div className="petinfo__customQnA">
        <h3>Customer questions & answers</h3>
        <input type="text" placeholder="Have a question? Search for answers" />
        <button>
          <a href="">Submit</a>
        </button>
        <img src="./Images/right.png" alt="" />
      </div>
      <div className="petinfo__bottom">
        <div className="petinfo__faq">
          <div className="petinfo__qna">
            <p className="petinfo__qna_q">
              <span>Question:</span> Purchased on 4 oct Airtel double data offer
              available or not? And screen replacement?
            </p>
            <p className="petinfo__qna_a">
              <span>Answer:</span> Yes it was available | By Santosh Bhatia on
              6th October, 2019
            </p>
            <div></div>
            <p className="petinfo__qna_q">
              <span>Question:</span> Purchased on 4 oct Airtel double data offer
              available or not? And screen replacement?
            </p>
            <p className="petinfo__qna_a">
              <span>Answer:</span> Yes it was available | By Santosh Bhatia on
              6th October, 2019
            </p>
            <div></div>
            <p className="petinfo__qna_q">
              <span>Question:</span> Purchased on 4 oct Airtel double data offer
              available or not? And screen replacement?
            </p>
            <p className="petinfo__qna_a">
              <span>Answer:</span> Yes it was available | By Santosh Bhatia on
              6th October, 2019
            </p>
            <div></div>
            <p className="petinfo__qna_q">
              <span>Question:</span> Purchased on 4 oct Airtel double data offer
              available or not? And screen replacement?
            </p>
            <p className="petinfo__qna_a">
              <span>Answer:</span> Yes it was available | By Santosh Bhatia on
              6th October, 2019
            </p>
          </div>
        </div>
        <div className="petinfo__productRecommend">
          <div className="petinfo__product_1">
            <img src="./Images/product1.svg" alt=""/>
            <p className="petinfo__productTitle">
              What is Lorem ipsum <br />
              Lorem What is Lorem ipsum
            </p>
            <p className="petinfo__productRatings">****</p>
            <p className="petinfo__productSpecialPrice">Special Price</p>
            <p className="petinfo__productOriginalPrice">₹400</p>
            <p className="petinfo__productAfterDiscount">₹200</p>
            <p className="petinfo__productDiscount">50% off</p>
            <button className="petinfo__productAddButton">
              <a href="#"> Add</a>
            </button>
          </div>
          <div className="petinfo__product_1">
            <img src="./Images/product1.svg" alt=""/>
            <p className="petinfo__productTitle">
              What is Lorem ipsum <br />
              Lorem What is Lorem ipsum
            </p>
            <p className="petinfo__productRatings">****</p>
            <p className="petinfo__productSpecialPrice">Special Price</p>
            <p className="petinfo__productOriginalPrice">₹400</p>
            <p className="petinfo__productAfterDiscount">₹200</p>
            <p className="petinfo__productDiscount">50% off</p>
            <button className="petinfo__productAddButton">
              <a href="#"> Add</a>
            </button>
          </div>
          <div className="petinfo__product_1">
            <img src="./Images/product1.svg" alt=""/>
            <p className="petinfo__productTitle">
              What is Lorem ipsum <br />
              Lorem What is Lorem ipsum
            </p>
            <p className="petinfo__productRatings">****</p>
            <p className="petinfo__productSpecialPrice">Special Price</p>
            <p className="petinfo__productOriginalPrice">₹400</p>
            <p className="petinfo__productAfterDiscount">₹200</p>
            <p className="petinfo__productDiscount">50% off</p>
            <button className="petinfo__productAddButton">
              <a href="#"> Add</a>
            </button>
          </div>
          <div className="petinfo__product_1">
            <img src="./Images/product1.svg" alt=""/>
            <p className="petinfo__productTitle">
              What is Lorem ipsum <br />
              Lorem What is Lorem ipsum
            </p>
            <p className="petinfo__productRatings">****</p>
            <p className="petinfo__productSpecialPrice">Special Price</p>
            <p className="petinfo__productOriginalPrice">₹400</p>
            <p className="petinfo__productAfterDiscount">₹200</p>
            <p className="petinfo__productDiscount">50% off</p>
            <button className="petinfo__productAddButton">
              <a href="#"> Add</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetInfo;
