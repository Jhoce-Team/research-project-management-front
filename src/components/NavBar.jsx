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

  useEffect(() => {
    console.log(openNavbar);
    console.log(userData);
  }, [openNavbar]);

  return (
    <div className="w-full sm:w-16 sticky top-0 text-gray-100 font-bold sm:h-screen z-50">
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
                    {openNavbar ? ` ${userData.userName + " " +  userData.userLastName.split(" ")[0]}` : ""}
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

{
  /* <div className="md:hidden">
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
      Perfil
    </span>
  </Link>
  <Link to="/projects" className="hidden md:flex">
    <span className="font-bold text-xl md:text-2xl hover:text-gray-300">
      Proyectos
    </span>
  </Link>
  <PrivateComponent roleList={["ADMINISTRADOR"]}>
    <Link to="/users" className="hidden md:flex">
      <span className="font-bold text-xl md:text-2xl hover:text-gray-300">
        Usuarios
      </span>
    </Link>
  </PrivateComponent>
  <PrivateComponent roleList={["LIDER"]}>
    <Link to="/users" className="hidden md:flex">
      <span className="font-bold text-xl md:text-2xl hover:text-gray-300">
        Estudiantes
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
</div> */
}
