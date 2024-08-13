import React from "react";
import { Route, Routes } from "react-router-dom";
import CoreRouter from "../core/routers/CoreRouter";
import AuthRouter from "../auth/routers/AuthRouter";
import DashRouter from "../dashboard/routers/DashRouter";
import ProfileRouter from "../profiles/routers/ProfileRouter";

const index = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<CoreRouter />} />
        <Route path="/auth/*" element={<AuthRouter />} />
        <Route path="/dashboard" element={<DashRouter />} />
        <Route path="/profiles/*" element={<ProfileRouter />} />
      </Routes>
    </>
  );
};

export default index;
