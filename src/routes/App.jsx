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
import "../styles/global.css";
import AppContext from "../context/AppContext";
import useInitialState from "../hooks/useInitialState";

const App = () => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/create-account"
              element={<CreateNewAccount />}
            />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/my-account" element={<MyAccount />} />
            <Route
              exact
              path="/recovery-password"
              element={<PasswordRecovery />}
            />
            <Route exact path="/mail-sent" element={<MailSent />} />
            <Route
              exact
              path="/create-new-password"
              element={<CreateNewPassword />}
            />
            <Route exact path="/orders" element={<Orders />} />
            <Route exact path="/checkout" element={<Checkout />} />
            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default App;
