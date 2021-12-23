import React from "react";
import { useState } from "react";
import profile from "../images/profilePicture.jpg";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useLoggedContext } from "../context/loggedContext";
import PrivateComponent from "./PrivateComponent";
import projectIcon from "../images/project.ico";
import { useEffect } from "react";
import { useUser } from "../context/userContext";

const NavBar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const { setToken } = useLoggedContext();
  const { userData, setUserData } = useUser();

  const deleteToken = () => {
    setToken(null);
  };

  return (
    <div className="w-full sm:w-16 sticky top-0 text-gray-100 font-bold sm:h-screen z-30">
      <nav
        className={`w-full h-full flex items-center justify-center py-1 px-2 sm:px-0 sm:py-3 bg-color6 sm:h-screen ${
          openNavbar ? "sm:w-48" : ""
        }`}
      >
        <div
          className={`h-full sm:flex sm:flex-col sm:justify-center sm:items-center ${
            openNavbar ? "" : ""
          }`}
        >
          <section className="w-10 h-auto">
            <button
              onClick={() => {
                setOpenNavbar(!openNavbar);
              }}
            >
              <img src={projectIcon} alt="idea" />
            </button>
          </section>
          <section
            className={`hidden sm:flex h-full flex-col font-bold text-2xl w-full `}
          >
            <div className="h-1/2 flex flex-col justify-end">
              <ul>
                <li className="mb-4 hover:bg-color9 px-3 py-2">
                  <Link to="/projects">
                    <i className="fas fa-project-diagram"></i>
                    {openNavbar ? " Proyectos" : ""}
                  </Link>
                </li>
                <li className="mb-4 hover:bg-color9 px-3 py-2">
                  <Link to="/users">
                    <i className="fas fa-users"></i>
                    {openNavbar ? " Usuarios" : ""}
                  </Link>
                </li>
              </ul>
            </div>
            <div className="h-1/2 flex flex-col justify-end">
              <ul>
                <li className="mb-4 hover:bg-color9 px-3 py-2 text-center">
                  <Link to="/profile">
                    <i className="fas fa-user-circle"></i>
                    {openNavbar
                      ? ` ${
                          userData.userName +
                          " " +
                          userData.userLastName.split(" ")[0]
                        }`
                      : ""}
                  </Link>
                </li>
              </ul>
            </div>
          </section>
        </div>
        {openNavbar ? <Options></Options> : <></>}
      </nav>
    </div>
  );
};

const Options = () => {
  return (
    <section className="w-full h-auto flex items-center justify-center text-2xl py-8 px-10 bg-color6 sm:hidden">
      <ul className="flex flex-col justify-center items-center w-full">
        <li className="w-full flex justify-center items-center hover:bg-color9 font-bold py-1">
          <Link to="/profile">Perfil</Link>
        </li>
        <li className="w-full flex justify-center items-center hover:bg-color9 font-bold py-1">
          <Link to="/projects">Proyectos</Link>
        </li>
        <li className="w-full flex justify-center items-center hover:bg-color9 font-bold py-1">
          <Link to="/users">Usuarios</Link>
        </li>
      </ul>
    </section>
  );
};

export default NavBar;
