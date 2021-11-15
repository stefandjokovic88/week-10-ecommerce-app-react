import React from 'react';
import source from "../images/cart-icon.png";

export default function Header(props) {
  return (
    <header>
          <p>Mobile Shop</p>
          <div onClick={props.showBasket}>
              <img src={source} alt="cart-icon" className="cart-icon"/>
              <span className="cart-number">{props.countCartItems}</span>
          </div>
      </header>
  );
}
