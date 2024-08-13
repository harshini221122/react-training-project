import React from "react";
import { Routes, Route } from "react-router-dom";
import Profiles from "../components/Profiles";
import UserProfile from "../components/Profile";

const ProfileRouter = () => {
  return <>
    <Routes>
        <Route path="/profile" element={<UserProfile/>}/>
        <Route path="/all" element={<Profiles/>}/>
    </Routes>
  </>;
};

export default ProfileRouter;
