import React from "react";
import OrderItem from "@component/OrderItem";
import '@styles/Orders.scss';

const Orders = () => {
  return (
    <div className="Orders">
      <div className="Orders-container">
        <h1 className="title">My Orders</h1>
        <div className="Orders-content">
        <OrderItem/>
        </div>
      </div>
    </div>
  );
};

export default Orders;
