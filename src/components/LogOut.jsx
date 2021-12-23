import React from "react";
import { NavLink } from "react-router-dom";
import { useLoggedContext } from "../context/loggedContext";

const LogOut = () => {
  const { setToken } = useLoggedContext();
  const deleteToken = () => {
    setToken(null);
  };
  return (
    <NavLink
      className={"fixed top-2 right-2 z-40"}
      to="/ingress/login"
      onClick={() => {
        deleteToken();
      }}
    >
      <i className="fas fa-sign-out-alt mr-2 text-3xl text-gray-200 sm:text-gray-900 hover:text-primary"></i>
    </NavLink>
  );
};

export default LogOut;
