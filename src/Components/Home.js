import React from "react";
import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import Carousal from "./Carousal/Carousal";
import Products from "./Products/Products";
import HomeConcepts from "./Concepts/HomeConcepts/HomeConcepts";
import Gifts from "./Gifts/Gifts";
import HomePets from "./Pets/HomePets";
import HomeBlogs from "./Blogs/HomeBlogs";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Menu />
      <Carousal />
      <Products />
      <HomeConcepts />
      <Gifts />
      <HomePets />
      <HomeBlogs />
      <Footer />
    </>
  );
};

export default Home;
