import React from "react";
import Dashboard from "../components/Dashboard";
import { Routes, Route, NavLink } from "react-router-dom";

const dashboardRouters = () => {
  return (
    <Routes>
      <Route path="" element={<Dashboard />}></Route>
    </Routes>
  );
};

export default dashboardRouters;
