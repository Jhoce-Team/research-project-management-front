import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Projects from "./pages/Projects";
import General from "./layouts/General";
import UsersIndex from "./pages/users/UsersIndex";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import EditUser from "./pages/users/EditUser";
import { UserContext } from "./context/userContext";
import { useEffect, useState } from "react";
import Ingress from "./layouts/Logged";

function App() {
  const client = new ApolloClient({
    uri: "https://server-gql-jhoceteam.herokuapp.com/graphql",
    // uri: "http://localhost:4000/graphql",
    cache: new InMemoryCache(),
  });
  const [userData, setUserData] = useState({});

  // En esta parte una vez se integre el login/registro se deben vincular los datos del usuario logeado
  useEffect(() => {
    setUserData({
      _id: "61bbcff4ce60883c51ea58b0",
    });
  }, []);

  return (
    <div className="">
      <ApolloProvider client={client}>
        <UserContext value={{ userData, setUserData }}>
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
              <Route path="/ingress" element={<Ingress />}>
                <Route path="registration" element={<Registration />} />
                <Route path="login" element={<Login />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </UserContext>
      </ApolloProvider>
    </div>
  );
}

export default App;
