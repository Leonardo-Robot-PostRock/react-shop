import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../containers/Layout";
import Home from "../pages/Home";
import CreateNewAccount from "../pages/CreateAccount";
import Login from "../pages/Login";
import CreateNewPassword from "../pages/CreateNewPassword";
import PasswordRecovery from "../pages/PasswordRecovery";
import MailSent from "../pages/MailSent";
import Checkout from "../pages/Checkout";
import MyAccount from "../pages/MyAccount";
import Orders from "../pages/Orders";

import NotFound from "../pages/NotFound";
import "../styles/Login.scss";
import "../styles/global.css";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-account" element={<CreateNewAccount />} />
          <Route path="/login" element={<Login />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/recovery-password" element={<PasswordRecovery />} />
          <Route path="/mail-sent" element={<MailSent />} />
          <Route path="/create-new-password" element={<CreateNewPassword />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
