import React from "react";

const CreateNewPassword = () => {
  return (
    <div class="CreateNewPassword">
      <div class="CreateNewPassword-container">
        <img src="./logos/logo_yard_sale.svg" alt="logo" class="logo" />
        <h1 class="title">Create a new password</h1>
        <p class="subtitle">Enter a new password for you account</p>

        <form action="/" class="form">
          <label for="password" class="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="*********"
            class="input input-password"
          />

          <label for="new-password" class="l abel">
            Password
          </label>
          <input
            type="password"
            id="new-password"
            placeholder="*********"
            class="input input-password"
          />

          <input
            type="submit"
            value="Confirm"
            class="primary-button login-button"
          />
        </form>
      </div>
    </div>
  );
};

export default CreateNewPassword;
