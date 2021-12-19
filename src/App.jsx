import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Projects from "./pages/Projects";
import General from "./layouts/General";
import UsersIndex from "./pages/users/UsersIndex";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  createHttpLink,
} from "@apollo/client";
import EditUser from "./pages/users/EditUser";
import { UserContext } from "./context/userContext";
import { useEffect, useState } from "react";
import Logged from "./layouts/Logged";
import { LoggedContext } from "./context/loggedContext";
import { setContext } from "@apollo/client/link/context";
import jwt_decode from "jwt-decode";

// uri: "https://server-gql-jhoceteam.herokuapp.com/graphql",
// uri: "http://localhost:4000/graphql",

const token = localStorage.getItem("token");

const client = new ApolloClient({
  uri: "https://server-gql-jhoceteam.herokuapp.com/graphql",
  cache: new InMemoryCache(),
  headers: {
    authorization: token ? `Bearer ${token}` : "",
  },
});

function App() {
  const [userData, setUserData] = useState({});
  const [ingressToken, setIngressToken] = useState("");

  const setToken = (token) => {
    setIngressToken(token);
    if (token) {
      localStorage.setItem("token", JSON.stringify(token));
    }
  };

  return (
    <ApolloProvider client={client}>
      <LoggedContext.Provider
        value={{ ingressToken, setToken, setIngressToken }}
      >
        <UserContext.Provider value={{ userData, setUserData }}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Landing />}></Route>
              <Route path="/" element={<General />}>
                <Route path="profile" element={<Profile />}></Route>
                <Route path="users" element={<UsersIndex />}></Route>
                <Route
                  path="users/editUser/:_id"
                  element={<EditUser />}
                ></Route>
                <Route path="projects" element={<Projects />}></Route>
              </Route>
              <Route path="/ingress" element={<Logged />}>
                <Route path="login" element={<Login />}></Route>
                <Route path="registration" element={<Registration />}></Route>
              </Route>
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </LoggedContext.Provider>
    </ApolloProvider>
  );
}

export default App;
