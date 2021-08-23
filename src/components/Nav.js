import React from "react";
import cart from "../assets/cart.svg";
const Nav = () => {
  return (
    <div>
      <section className="nav">
        <div className="nav-items">
          <div className="start-wrapper wrapper">
            <p>Menu</p>
          </div>
          <h1>Ritual</h1>

          <div className="end-wrapper wrapper">
            <p>Who We Are</p>

            <div className="cart-logo">
              <img src={cart} alt="cart-logo" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Nav;
