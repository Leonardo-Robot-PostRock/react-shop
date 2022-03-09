import React from "react";
import '../styles/Menu.scss';

const Menu = () => {
  return (
    <div class="Menu">
      <ul>
        <li>
          <a href="/" class="title">
            My orders
          </a>
        </li>
        <li>
          <a href="/" class="title">
            My account
          </a>
        </li>
        <li>
          <a href="/" class="title">
            Sign out
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
