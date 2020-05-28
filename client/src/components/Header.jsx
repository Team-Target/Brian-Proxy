import React from "react";
import Search from "./Search";
import SignIn from "./SignIn";
import Cart from "./Cart";

function Header( {cartNum} ) {
  
  return (
    <div id="viewport" className="brian-container">
      <div className="HeaderWrapper">
        <nav className="MainHeader">
          <a href="/" className="navbar-logo-frame postings" id="home">
            <span className="navbar-logo-box">
              <div className="navbar-logo-inner">
                <img src="https://targaryenstore.s3.us-east-2.amazonaws.com/Targaryen-white.jpg"></img>
              </div>
            </span>
          </a>
          <a href="#categoriesMenu" className="Menu postings nav-drop" 
          id="menu">
            <span>Menu</span>
            <span className="caret"></span>
          </a>
          <a href="#categoriesMenu" className="Categories postings nav-drop" 
          id="categories">
            <span>Categories</span>
            <span className="caret"></span>
          </a>
          <a href="#dealsMenu" className="Deals postings nav-drop full-nav" 
          id="deals">
            Deals
            <span className="caret"></span>
          </a>
          <a href="#trendingMenu" className="Trending postings nav-drop full-nav" 
          id="trending">
            What’s New
            <span className="caret"></span>
          </a>
          <a href="#sameDayDelivery" className="Delivery postings nav-drop full-nav" 
          id="delivery">
            Same Day Delivery
          </a>

          <Search />
          <SignIn />
          <Cart cartNum={cartNum} />

        </nav>
        <div className="SubHeader">
        </div>
      </div>
    </div>
  )
}

export default Header;
