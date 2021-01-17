import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header/Header";
import Menu from "./Menu/Menu";
import Footer from "./Footer/Footer";
import Concepts from "./Concepts/Concepts";
import Pets from "./Pets/Pets";
import PetInfo from "./Pets/PetInfo";
import BrandConcepts from "./Concepts/BrandConcepts/BrandConcepts";
import Profile from "./Profile/Profile";
import Cart from "./Checkout/Cart";
import Checkout from "./Checkout/Checkout";
import Shipping from "./Checkout/Shipping";
import ProductInfo from "./Products/ProductInfo";
import CheckoutPayment from "./Checkout/CheckoutPayment";
import Success from "./Checkout/Success";
import BlogPage from "./Blogs/BlogPage";
import BlogInfo from "./Blogs/BlogInfo";
import FAQ from "./CustomerSupport/FAQ";
import Support from "./CustomerSupport/Support";
import ConceptInfo from "./Concepts/ConceptInfo";
import Error from "./Error/Error";

import { connect } from "react-redux";

const App = ({ currentItem }) => {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/concepts">
            <Header />
            <Menu />
            <Concepts />
            <Footer />
          </Route>
          <Route exact path="/pets">
            <Header />
            <Menu />
            <Pets />
            <Footer />
          </Route>
          <Route exact path="/petinfo">
            <Header />
            <Menu />
            <PetInfo />
            <Footer />
          </Route>
          <Route exact path={`/productinfo/:id`}>
            <Header />
            <Menu />
            <ProductInfo />
            <Footer />
          </Route>
          <Route exact path="/brandconcepts">
            <Header />
            <Menu />
            <BrandConcepts />
            <Footer />
          </Route>
          <Route exact path="/conceptinfo">
            <Header />
            <Menu />
            <ConceptInfo />
            <Footer />
          </Route>
          <Route exact path="/profile">
            <Header />
            <Profile />
            <Footer />
          </Route>
          <Route exact path="/cart">
            <Header />
            <Cart />
            <Footer />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
            <Footer />
          </Route>
          <Route exact path="/shipping">
            <Header />
            <Shipping />
            <Footer />
          </Route>
          <Route exact path="/checkoutpayment">
            <Header />
            <CheckoutPayment />
            <Footer />
          </Route>
          <Route exact path="/success">
            <Header />
            <Success />
            <Footer />
          </Route>
          <Route exact path="/blogs">
            <Header />
            <BlogPage />
            <Footer />
          </Route>
          <Route exact path="/bloginfo">
            <Header />
            <BlogInfo />
            <Footer />
          </Route>
          <Route exact path="/faq">
            <Header />
            <FAQ />
            <Footer />
          </Route>
          <Route exact path="/support">
            <Header />
            <Support />
            <Footer />
          </Route>
          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  );
};

const mapStateToProps = (state) => {
  return {
    currentItem: state.shop.currentItem,
  };
};

export default connect(mapStateToProps)(App);
