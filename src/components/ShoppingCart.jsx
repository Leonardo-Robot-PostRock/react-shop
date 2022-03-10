import React from "react";
import '../styles/ShoppingCart.scss';

const ShoppingCart = () => {
  return (
    <div class="Shopping-cart">
      <figure>
        <img
          src="https://images.pexels.com/photos/4175054/pexels-photo-4175054.jpeg?cs=srgb&dl=pexels-anni-roenkae-4175054.jpg&fm=jpg"
          alt="paiting"
        />
      </figure>
      <p>Painting</p>
      <p>$120,00</p>
    </div>
  );
};

export default ShoppingCart;