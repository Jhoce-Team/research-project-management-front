import React from "react";
import {ApoloProvider, ApolloClient, InMemoryCache, createHttpLink} from '@apollo/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Projects from "./pages/Proyectos";
import Users from "./pages/Users";
import General from "./layouts/PrivateLayout";
import Home from "./pages/Home";
import EditProfile from "./pages/EditProfile";
import IndexProyectos from "./pages/Proyectos/index";
import 'styles/globals.css';
import 'styles/tabla.css';
import NewProject from "./pages/Proyectos/NewProject";

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
});

function App() {
  return (
    <ApoloProvider client={client}>
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
            <Route path="/pages/Proyectos" element={<IndexProyectos />}></Route>
            <Route path="/pages/Proyectos" element={<NewProject />}></Route>
          </Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    </ApoloProvider>
  );
}

export default App;
