import React from "react";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import "./BookingModal.css";
import ThankModal from "./ThankModal";

const BookingModal = () => {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>
      <button
        onClick={() => handleClickOpen(setOpen(true))}
        className="petinfo__aboutBook"
      >
        <a href="#">Book Service</a>
      </button>
      <Dialog
        fullScreen={fullScreen}
        onClose={() => handleClose()}
        aria-labelledby="customized-dialog-title"
        open={open}
        className="bookingModal__container"
      >
        <div className="bookingModal__content">
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
          <h3 className="bookingModal__header">Book Service</h3>
          <div className="bookingModal__inputAndName">
            <div className="bookingModal__input">
              <p className="bookingModal__inputName">Name</p>
              <input type="text" placeholder="Please enter your name here" />
            </div>
            <div className="bookingModal__input">
              <p className="bookingModal__inputName">Mobile Number</p>
              <input
                type="text"
                placeholder="Please enter your mobile number here"
              />
            </div>
          </div>
          <div className="bookingModal__inputMsg">
            <p className="bookingModal__inputDetails">Message Box</p>
            <input type="text" placeholder="Please enter your message here" />
          </div>
          <ul className="bookingModal__dateAndTime">
            <li className="bookingModal__selectDate">Select Date</li>
            <li className="bookingModal__selectTime">Select time slot</li>
          </ul>
          <div className="bookingModal__buttonDiv">
            <ThankModal />
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default BookingModal;
