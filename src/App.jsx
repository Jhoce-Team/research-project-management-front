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
import Ingress from "./layouts/Logged";

function App() {
  const client = new ApolloClient({
    uri: "https://server-gql-jhoceteam.herokuapp.com/graphql",
    cache: new InMemoryCache(),
  });

  return (
    <div className="">
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Landing />}></Route>
            <Route path="/" element={<General />}>
              <Route path="profile" element={<Profile />}></Route>
              <Route path="users" element={<UsersIndex />}></Route>
              <Route path="users/editUser/:_id" element={<EditUser />}></Route>
              <Route path="projects" element={<Projects />}></Route>
            </Route>
            <Route path="/ingress" element={<Ingress />}>
              <Route path="registration" element={<Registration />} />
              <Route path="login" element={<Login />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}

export default App;
