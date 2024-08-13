import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Register from "../components/Register";
import Register2 from "../components/Register2";
import Login2 from "../components/Login2";

const AuthRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login2 />} />
        <Route path="/register" element={<Register2 />} />
      </Routes>
    </>
  );
};

export default AuthRouter;
