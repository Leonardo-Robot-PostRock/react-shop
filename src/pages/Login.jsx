import React from "react";
import "../styles/Login.scss";

import logo from '@logos/logo_yard_sale.svg';

const Login = () => {
  return (
    <div class="Login">
      <div class="Login-container">
        <img src={logo} alt="logo" class="logo" />
        <form action="/" class="form">
          <label for="email" class="label">
            Email address
          </label>
          <input
            type="text "
            id="password"
            placeholder="mail@example.com"
            class="input input-email"
          />
          <label for="password" class="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="*********"
            class="input input-password"
          />
          <input
            type="submit"
            value="Log in"
            class="primary-button login-button"
          />
          <a href="/">Forgot my password</a>
        </form>
        <button class="secondary-button singUp-button">Sing up</button>
      </div>
    </div>
  );
};

export default Login;
