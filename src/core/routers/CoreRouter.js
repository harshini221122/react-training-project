import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "../components/layout/Landing";

const CoreRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </>
  );
};

export default CoreRouter;
