import React from "react";
import error from "../../images/error.svg";
import "./Error.css";
import { Link } from "react-router-dom";
import Header from "../Header/Header";

const Error = () => {
  return (
    <>
    <Header/>
    <div className="error">
      <img src={error} alt="404" className="error__img" />
      <p className="error__msg">Sorry page not found</p>
      <p className="error__home">
        Go back to{" "}
        <Link to="/">
          <span>Homepage</span>
        </Link>
      </p>
    </div>
    </>
  );
};

export default React.memo(Error);
