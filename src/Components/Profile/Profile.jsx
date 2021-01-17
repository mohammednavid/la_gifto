import React from "react";
import "./Profile.css";
import Avatar from "@material-ui/core/Avatar";
import AccountSettings from "./AccountSettings";
import MyOrders from "./MyOrders";
import Payments from "./Payments";
import MyWishlist from "./MyWishlist";
import MyRatings from "./MyRatings";
import MyCoupens from "./MyCoupens";

const Profile = () => {
  return (
    <div className="profile__container">
      <div className="profile__header1">
        <a href="#" className="profile__header1Avatar">
          <Avatar variant="circle" alt="Lorem" className="avatar" />
        </a>
        <p className="profile__header1UserName">
          Hello,
          <br />
          <span>Lorem Ipsum</span>
        </p>
        <a className="profile__header1Button">
          <button>Logout</button>
        </a>
      </div>
      <div className="profile__header2">
        <a href="#" className="profile__header2Tabs">
          Account Settings
        </a>
        <a href="#" className="profile__header2Tabs">
          My Orders
        </a>
        <a href="#" className="profile__header2Tabs">
          Payments
        </a>
        <a href="#" className="profile__header2Tabs">
          My Wishlist
        </a>
        <a href="#" className="profile__header2Tabs">
          My Ratings & Reviews
        </a>
        <a href="#" className="profile__header2Tabs">
          My Coupens
        </a>
        <div className="profile__headerUnderLine"></div>
      </div>
      <AccountSettings />
      <MyOrders />
      <Payments />
      <MyWishlist />
      <MyRatings />
      <MyCoupens />
    </div>
  );
};
export default Profile;
