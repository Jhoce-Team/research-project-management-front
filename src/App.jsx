import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Projects from "./pages/Projects";
import Users from "./pages/Users";
import General from "./layouts/General";
import Home from "./pages/Home";
import EditProfile from "./pages/EditProfile";

function App() {
  return (
    <div className='overflow-x-hidden'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/" element={<General />}>
            <Route path="profile" element={<Profile />}></Route>
            <Route path="editProfile" element={<EditProfile />}></Route>
            <Route path="home" element={<Home />}></Route>
            <Route path="users" element={<Users />}></Route>
            <Route path="projects" element={<Projects />}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
