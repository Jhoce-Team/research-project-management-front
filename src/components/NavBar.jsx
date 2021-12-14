import React from "react";
import { useState } from "react";
import profile from "../images/profilePicture.jpg";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [openNavbar, setOpenNavbar] = useState(false);

  return (
    <div>
      <nav className="flex w-screen h-16 justify-around items-center bg-color1 text-gray-200 md:justify-between md:pr-14">
        <div className="md:hidden">
          <button
            onClick={() => {
              setOpenNavbar(!openNavbar);
            }}
          >
            <i className="fas fa-bars text-3xl"></i>
          </button>
        </div>
        <div className="flex justify-around w-1/2">
          <Link to="/projects" className="hidden md:flex">
            <span className="font-bold text-xl md:text-2xl hover:text-gray-300">Projects</span>
          </Link>
          <Link to="/users" className="hidden md:flex">
            <span className="font-bold text-xl md:text-2xl hover:text-gray-300">Users</span>
          </Link>
        </div>
        <div>
          <div>
            <Link to="/profile">
              <img
                src={profile}
                alt="Your avatar"
                className="w-12 h-12 rounded-full md:w-14 md:h-14"
              />
            </Link>
          </div>
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
