import React from "react";
import "./ProductInfo.css";
import { useEffect } from "react";
import StarIcon from "@material-ui/icons/Star";
import { ProductData } from "./ProductData";
import { connect } from "react-redux";
import { addToCart } from "../../redux/shopping/shoppingActions";
// images
import product1 from "../../images/product1.svg";
import goldenFlower from "../../images/goldenFlower.png";
import left from "../../images/left.png";
import right from "../../images/right.png";

const ProductInfo = ({ currentItem, addToCart }) => {
  useEffect(() => {
    const current = document.querySelector("#current");
    const imgs = document.querySelectorAll(".productinfo__imgs img");
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
    <div className="productinfo__containor">
      <div className="productinfo">
        <div className="productinfo__gallery">
          <div className="productinfo__hero">
            <img src={currentItem.image} alt={currentItem.title} id="current" />
          </div>

          <div className="productinfo__imgs">
            <img
              className="productinfo__imgs_1"
              src={currentItem.image}
              alt={currentItem.title}
            />
            <img
              className="productinfo__imgs_2"
              src={currentItem.image}
              alt={currentItem.title}
            />
            <img
              className="productinfo__imgs_3"
              src={currentItem.image}
              alt={currentItem.title}
            />
          </div>
        </div>
        <div className="productinfo__about">
          <h3 className="productinfo__aboutTitle">{currentItem.title}</h3>
          <p className="productinfo__aboutRatings">{currentItem.ratings}</p>
          <h4 className="productinfo__aboutDescTitle">Description</h4>
          <p className="productinfo__aboutDescription">
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
        </div>
      </div>
      <div className="productinfo__buttons">
        <button
          onClick={() => addToCart(currentItem.id)}
          className="productinfo__aboutBook"
        >
          <a>Add To Cart</a>
        </button>
        <button className="productinfo__aboutConsult">
          <a>Buy Now</a>
        </button>
      </div>
      <div className="productinfo__line"></div>
      <div className="productinfo__bottom">
        <div className="productinfo__left">
          <div className="productinfo__customQnA">
            <h3>Customer questions & answers</h3>
            <input
              type="text"
              placeholder="Have a question? Search for answers"
            />
            <button>
              <a href="">Submit</a>
            </button>
          </div>
          <div className="productinfo__faq">
            <div className="productinfo__qna">
              <p className="productinfo__qna_q">
                <span>Question:</span> Purchased on 4 oct Airtel double data
                offer available or not? And screen replacement?
              </p>
              <p className="productinfo__qna_a">
                <span>Answer:</span> Yes it was available | By Santosh Bhatia on
                6th October, 2019
              </p>
              <div></div>
              <p className="productinfo__qna_q">
                <span>Question:</span> Purchased on 4 oct Airtel double data
                offer available or not? And screen replacement?
              </p>
              <p className="productinfo__qna_a">
                <span>Answer:</span> Yes it was available | By Santosh Bhatia on
                6th October, 2019
              </p>
              <div></div>
              <p className="productinfo__qna_q">
                <span>Question:</span> Purchased on 4 oct Airtel double data
                offer available or not? And screen replacement?
              </p>
              <p className="productinfo__qna_a">
                <span>Answer:</span> Yes it was available | By Santosh Bhatia on
                6th October, 2019
              </p>
              <div></div>
              <p className="productinfo__qna_q">
                <span>Question:</span> Purchased on 4 oct Airtel double data
                offer available or not? And screen replacement?
              </p>
              <p className="productinfo__qna_a">
                <span>Answer:</span> Yes it was available | By Santosh Bhatia on
                6th October, 2019
              </p>
            </div>
          </div>
        </div>
        <div className="productinfo__right">
          <h3>Read reviews that mention</h3>
          <p>Battery life</p>
          <p>Camera quality</p>
          <p>Value for money</p>
          <p>Fingerprint</p>
          <p>Reader</p>
          <p>Fingerprint</p>
          <p>Backup price range</p>
          <p>Wrap charge</p>
          <p>Headphone jack</p>
          <p>Dolby atmos</p>
        </div>
      </div>
      <div className="productinfo__review">
        <div className="productinfo__header">
          <h2>Top reviews from India</h2>
          <img className="productinfoImg" src={goldenFlower} />
        </div>
        <div className="productinfo__reviewCols">
          <div className="productinfo__reviewCol">
            <h3>Manikchand</h3>
            <span>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </span>
            <p>
              Brighht Solar Home Lighting System uses the sun’s renewable energy
              to light up your home and you can charge your mobile phone also.
              Solar Home Lighting System is compact, portable and easily
              mountable in an easy-to-install kit. System Kit: Solar Panels:
              This is 9V, 3.5 watt strong aluminum framed solar panels with 3
            </p>
            <div className="productinfo__gallery">
              <img src={product1} alt="" />
              <img src={product1} alt="" />
              <img src={product1} alt="" />
            </div>
          </div>
          <div className="productinfo__reviewCol">
            <h3>Manikchand</h3>
            <span>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </span>
            <p>
              Brighht Solar Home Lighting System uses the sun’s renewable energy
              to light up your home and you can charge your mobile phone also.
              Solar Home Lighting System is compact, portable and easily
              mountable in an easy-to-install kit. System Kit: Solar Panels:
              This is 9V, 3.5 watt strong aluminum framed solar panels with 3
            </p>
            <div className="productinfo__gallery">
              <img src={product1} alt="" />
              <img src={product1} alt="" />
              <img src={product1} alt="" />
            </div>
          </div>
          <div className="productinfo__reviewCol">
            <h3>Manikchand</h3>
            <span>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </span>
            <p>
              Brighht Solar Home Lighting System uses the sun’s renewable energy
              to light up your home and you can charge your mobile phone also.
              Solar Home Lighting System is compact, portable and easily
              mountable in an easy-to-install kit. System Kit: Solar Panels:
              This is 9V, 3.5 watt strong aluminum framed solar panels with 3
            </p>
            <div className="productinfo__gallery">
              <img src={product1} alt="" />
              <img src={product1} alt="" />
              <img src={product1} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="products">
        <div className="productsHeader">
          <h2>Deals for you</h2>
        </div>
        <img className="leftImg" src={left} />
        <img className="rightImg" src={right} />
        <div className="productsCard">
          {ProductData.slice(0, 6).map((item) => {
            return (
              <div className="product" key={item.id}>
                <img className="product__img" src={item?.image} />
                <p className="product__title">{item.title}</p>
                <p className="product__ratings">{item.ratings}</p>
                <p className="product__originalPrice">{item.originalPrice}</p>
                <p className="product__afterDiscount">
                  <small>₹</small>
                  {item.afterDiscountPrice}
                </p>
                <p className="product__discount">{item.discount}</p>
                <button className="product__addButton">
                  <a> Add</a>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductInfo);
