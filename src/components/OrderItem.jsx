import React from "react";
import "../styles/OrderItem.scss";

const OrderItem = () => {
  return (
    <div className="OrderItem">
      <figure>
        <img
          src="https://images.pexels.com/photos/4175054/pexels-photo-4175054.jpeg?cs=srgb&dl=pexels-anni-roenkae-4175054.jpg&fm=jpg"
          alt=""
        />
      </figure>
      <p>Painting</p>
      <p>$120,00</p>
      <img src="./icons/icon_close.png" alt="close" />
    </div>
  );
};

export default OrderItem;
