import React from "react";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { useMediaQuery, useTheme } from "@material-ui/core";
import StarIcon from "@material-ui/icons/Star";
import "./ReviewModal.css";

const ReviewModal = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <button onClick={()=> handleClickOpen()} className="orderRatings__button">Write a Review</button>
      <Dialog
        fullScreen={fullScreen}
        onClose={() => handleClose()}
        aria-labelledby="customized-dialog-title"
        open={open}
        className="reviewModal__container"
      >
        <div className="reviewModal__content">
          <IconButton
            aria-label="close"
            style={{
              position: "absolute",
              right: 0,
              top: "0px",
              color: "gray",
              zIndex: 1000,
            }}
            onClick={() => setOpen(false)}
          >
            <CloseIcon />
          </IconButton>
          <div className="reviewModal__fullDetails">
            <img
              src="./Images/carousal.png"
              alt="Product Image"
              className="reviewModal__img"
            />
            <div className="reviewModal__details">
              <p className="reviewModal__detailsTitle">
                lorem ipsum is simply
                <br />
                dummy text of printing
              </p>
            </div>
          </div>
          <hr />
          <p className="reviewModal__rateProductTitle">Rate this product</p>
          <div className="reviewModal__rateProduct">
            <StarIcon className="reviewModal__star1"/>
            <span>
              <StarIcon className="reviewModal__star"/>
              <StarIcon className="reviewModal__star"/>
              <StarIcon className="reviewModal__star"/>
              <StarIcon className="reviewModal__star"/>
            </span>
          </div>
          <hr />
          <p className="reviewModal__writeReview">Write a Review</p>
          <div className="reviewModal__inputAddress">
            <p className="reviewModal__inputDetails">Review Description</p>
            <input
              type="text"
              placeholder="Please write your product review here"
            />
          </div>
          <hr />
          <p className="reviewModal__addPhoto">Add a Photo</p>
          <div className="reviewModal__buttonDiv">
            <button className="reviewModal__button">Submit</button>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ReviewModal;
