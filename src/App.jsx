import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import General from "./layouts/General";
import UsersIndex from "./pages/users/UsersIndex";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import EditUser from "./pages/users/EditUser";
import { UserContext } from "./context/userContext";
import { useState, useEffect } from "react";
import Logged from "./layouts/Logged";
import { LoggedContext } from "./context/loggedContext";
import jwt_decode from "jwt-decode";
import { createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import ProjectsIndex from "./pages/projects/ProjectsIndex";
import FullProject from "./pages/projects/FullProject";
import AdvanceIndex from "./pages/advances/AdvanceIndex";

// uri: "https://server-gql-jhoceteam.herokuapp.com/graphql",
// uri: "http://localhost:4000/graphql",

const httpLink = createHttpLink({
  uri: "http://localhost:4000/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = JSON.parse(localStorage.getItem("token"));
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: authLink.concat(httpLink),
});

function App() {
  const [userData, setUserData] = useState({});
  const [ingressToken, setIngressToken] = useState("");

  const setToken = (token) => {
    setIngressToken(token);
    if (token) {
      localStorage.setItem("token", JSON.stringify(token));
    } else {
      localStorage.removeItem("token");
    }
  };

  useEffect(() => {
    if (ingressToken) {
      const decoded = jwt_decode(ingressToken);
      setUserData({
        _id: decoded._id,
        nombre: decoded.nombre,
        apellido: decoded.apellido,
        identificacion: decoded.identificacion,
        correo: decoded.correo,
        rol: decoded.rol,
        foto: decoded.foto,
      });
    }
  }, [ingressToken]);

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
                <Route path="projects" element={<ProjectsIndex />}></Route>
                <Route
                  path="projects/fullProject/:_id"
                  element={<FullProject />}
                />
                <Route
                  path="projects/advance/:_id"
                  element={<AdvanceIndex />}
                />
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
