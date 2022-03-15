import React from "react";
import "@styles/NotFound.scss";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="NotFound">
      <img
        src="https://i.pinimg.com/564x/88/f5/db/88f5db500777fad5cc4770da32c0657f.jpg"
        alt="page not found"
      />
      <div>
        <p className="NotFound--text">Oops! Page not found</p>
        <Link className="link" to="/">return to home</Link>
      </div>
    </div>
  );
};

export default NotFound;
