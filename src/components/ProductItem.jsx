import React from "react";
import '../styles/ProductItem.scss';

const ProductItem = () => {
  return (
    <div className="ProductItem">
      <img
        src="https://images.pexels.com/photos/1606591/pexels-photo-1606591.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt=""
      />
      <div class="product-info">
        <div>
          <p>$120,00</p>
          <p>Painting</p>
        </div>
        <figure>
          <img src="./icons/bt_add_to_cart.svg" alt="add to cart" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
