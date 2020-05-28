import React from "react";

function Cart( {cartNum} ) {
  cartNum > 0 ? cartNum = cartNum : cartNum = null;
  
  return (
    <a href="/cart" className="Checkout postings" id="cart">
      <span className="CartNum">{cartNum}</span>
      <span className="Cart"fill="#fff" height="29" width="29">
        <div className="Basket">
          <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" focusable="false">
            <path d="M5.625 19.25c.77 0 1.375.605 1.375 1.375S6.395 22 5.625 22s-1.375-.605-1.375-1.375.605-1.375 1.375-1.375zm13 
            0c.77 0 1.375.605 1.375 1.375S19.395 22 18.625 22s-1.375-.605-1.375-1.375.604-1.375 1.375-1.375zM1.135 2.212l2.962.543 18.762 
            2.622-2.29 7.853-13.855.492.368 2.167c.094.558.55.977 1.103 1.034l.13.007H20.25v1.5H8.314a2.75 2.75 0 
            01-2.677-2.12l-.034-.17-.427-2.514L3.36 4.144.865 3.688l.27-1.476z" id="nds-Icon815a"></path>
          </svg>
        </div>
      </span>
    </a>
  )
}

export default Cart;