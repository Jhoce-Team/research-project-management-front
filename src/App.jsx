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

function App() {
  const client = new ApolloClient({
    uri: "https://server-gql-jhoceteam.herokuapp.com/graphql",
    cache: new InMemoryCache(),
  });
  const [userData, setUserData] = useState({});

  // En esta parte una vez se integre el login/registro se deben vincular los datos del usuario logeado
  useEffect(() => {
    setUserData({
      _id: "61a2c76bf3bdad1b165ee5fc",
    });
  }, []);

  return (
    <div className="">
      <ApolloProvider client={client}>
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
              <Route path="/login" element={<Login />}></Route>
              <Route path="/registration" element={<Registration />}></Route>
            </Routes>
          </BrowserRouter>
        </UserContext.Provider>
      </ApolloProvider>
    </div>
  );
}

export default App;
