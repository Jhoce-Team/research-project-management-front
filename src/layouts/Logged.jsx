import React from "react";
import { Outlet } from "react-router-dom";
import "../../src/styles/loginStyles.css";

const Logged = () => {
  return (
    <div className="w-screen h-screen loggedLayout">
      <Outlet />
    </div>
  );
};

export default Logged;
