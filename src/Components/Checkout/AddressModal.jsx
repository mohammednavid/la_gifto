import React from "react";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { useMediaQuery, useTheme } from "@material-ui/core";
import { Link } from "react-router-dom";
import AddIcon from "@material-ui/icons/Add";
import "./AddressModal.css";

const AddressModal = () => {
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
      <a onClick={() => handleClickOpen(setOpen(true))}>
        <div className="shipping__addressButton">
          <AddIcon className="shipping__addressIcon" />
          <input
            type="text"
            className="shipping__addressInput"
            placeholder="Add a new Address"
            readOnly
          />
        </div>
      </a>
      <Dialog
        fullScreen={fullScreen}
        onClose={() => handleClose()}
        aria-labelledby="customized-dialog-title"
        open={open}
        className="addressModal__container"
      >
        <div className="addressModal__content">
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
          <h3 className="addressModal__header">Add a new Address</h3>
          <div className="addressModal__inputAndName">
            <div className="addressModal__input">
              <p className="addressModal__inputName">Name</p>
              <input type="text" placeholder="Please enter your name here" />
            </div>
            <div className="addressModal__input">
              <p className="addressModal__inputName">Mobile Number</p>
              <input
                type="text"
                placeholder="Please enter your mobile number here"
              />
            </div>
          </div>
          <div className="addressModal__inputAndName">
            <div className="addressModal__input">
              <p className="addressModal__inputName">Pincode</p>
              <input type="text" placeholder="Please enter your Pincode here" />
            </div>
            <div className="addressModal__input">
              <p className="addressModal__inputName">State</p>
              <input
                type="text"
                placeholder="Please enter your State here"
              />
            </div>
          </div>
          <div className="addressModal__inputAddress">
            <p className="addressModal__inputDetails">Address</p>
            <input
              type="text"
              placeholder="Please enter your Address here"
            />
          </div>
          <div className="addressModal__line"></div>
          <h3 className="address__typeTitle">Address Type</h3>
          <div className="addressModal__type">
            <div className="types">
              <input type="radio" name="" id="" checked />
              <p>Home</p>
            </div>
            <div className="types">
              <input type="radio" name="" id="" />
              <p>Office</p>
            </div>
          </div>
          <div className="addressModal__line"></div>
          <div className="addressModal__checkbox">
            <input type="radio" />
            <span>Make this my default address</span>
          </div>
          <div className="addressModal__buttonDiv">
            <button className="addressModal__button">Submit</button>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default AddressModal;
