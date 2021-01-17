import React from "react";
import Dialog from "@material-ui/core/Dialog";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { useMediaQuery, useTheme } from "@material-ui/core";
import CheckCircleOutlineIcon from "@material-ui/icons/CheckCircleOutline";
import "./ThankModal.css";

const ThankModal = () => {
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
        className="bookingModal__button"
      >
        Submit
      </button>
      <Dialog
        fullScreen={fullScreen}
        onClose={() => handleClose()}
        aria-labelledby="customized-dialog-title"
        open={open}
        className="thankModal__container"
      >
        <div className="thankModal__content">
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
          <div className="thankModal__icon">
          <CheckCircleOutlineIcon className="CheckCircleOutlineIcon" />
        </div>
        <p className="thankModal__msg">
          Thank You
        </p>
        <p className="thankModal__confirmation">
          Your query has been recieved and
          <br/>
          we will get back to you soon
        </p>
          <div className="thankModal__buttonDiv">
            <button className="thankModal__button"
        onClick={() => handleClose(setOpen(false))}>Done</button>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default ThankModal;
