import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../containers/Login";
import Layout from "../containers/Layout";
import RecoveryPassword from "../containers/RecoveryPassword";
import "../styles/Login.scss";
import "../styles/global.css";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          {/* <Route exact path="/" element={<Home/>} /> */}
          <Route exact path="/login" element={<Login />} />
          <Route
            exact
            path="recovery-password"
            element={<RecoveryPassword />}
          />
          {/* <Route element={<NotFound/>} />   */}
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
