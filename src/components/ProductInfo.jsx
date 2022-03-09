import React from "react";
import "../styles/ProductInfo.scss";

const ProductInfo = () => {
  return (
    <React.Fragment>
      <img
        src="https://images.pexels.com/photos/1606591/pexels-photo-1606591.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="paiting"
      />
      <div class="Product-info">
        <p>$35,00</p>
        <p>Painting</p>
        <p>
          Abstract painting. This art use seven colours. Her size is the 15,4MB.{" "}
        </p>
        <button class="primary-button add-to-cart-button">
          <img src="./icons/bt_add_to_cart.svg" alt="add to cart" />
          Add to cart
        </button>
      </div>
    </React.Fragment>
  );
};

export default ProductInfo;
