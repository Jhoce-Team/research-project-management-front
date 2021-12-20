import React from "react";
import { useState } from "react";
import profile from "../images/profilePicture.jpg";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useLoggedContext } from "../context/loggedContext";
import PrivateComponent from "./PrivateComponent";

const NavBar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const { setToken } = useLoggedContext();

  const deleteToken = () => {
    setToken(null);
  };

  return (
    <div className="sticky top-0">
      <nav className="flex w-full h-16 justify-around items-center bg-color1 text-gray-200 md:justify-between">
        <div className="md:hidden">
          <button
            onClick={() => {
              setOpenNavbar(!openNavbar);
            }}
          >
            <i className="fas fa-bars text-3xl"></i>
          </button>
        </div>
        <div className="flex justify-around w-1/2 items-center">
          <Link to="/profile" className="hidden md:flex items-center">
            <img
              src={profile}
              alt="Your avatar"
              className="w-12 h-12 rounded-full md:w-14 md:h-14 mr-5"
            />
            <span className="font-bold text-xl md:text-2xl hover:text-gray-300">
              Profile
            </span>
          </Link>
          <Link to="/projects" className="hidden md:flex">
            <span className="font-bold text-xl md:text-2xl hover:text-gray-300">
              Projects
            </span>
          </Link>
          <PrivateComponent roleList={["ADMINISTRADOR", "LIDER"]}>
            <Link to="/users" className="hidden md:flex">
              <span className="font-bold text-xl md:text-2xl hover:text-gray-300">
                Users
              </span>
            </Link>
          </PrivateComponent>
        </div>
        <div className="mr-10">
          <NavLink
            to="/ingress/login"
            onClick={() => {
              deleteToken();
            }}
          >
            <i className="fas fa-sign-out-alt mr-2"></i>
            <span>Cerrar sesion</span>
          </NavLink>
        </div>
      </nav>
      {openNavbar ? <Options /> : <></>}
    </div>
  );
};

const Options = () => {
  return (
    <div className="w-full md:hidden bg-color1 text-gray-100">
      <ul className="flex flex-col justify-center items-center w-full">
        <li className="border-t-2 border-gray-400 w-full flex justify-center items-center hover:bg-color2 font-bold text-xl">
          <Link to="/profile">Profile</Link>
        </li>
        <li className="border-t-2 border-gray-400 w-full flex justify-center items-center hover:bg-color2 font-bold text-xl">
          <Link to="/projects">Projects</Link>
        </li>
        <li className="border-t-2 border-gray-400 w-full flex justify-center items-center hover:bg-color2 font-bold text-xl">
          <Link to="/users">Users</Link>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
