import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Projects from "./pages/Projects";
import General from "./layouts/General";
import Home from "./pages/Home";
import EditProfile from "./pages/EditProfile";
import UsersIndex from "./pages/users/UsersIndex";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";

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
              <Route path="editProfile" element={<EditProfile />}></Route>
              <Route path="home" element={<Home />}></Route>
              <Route path="users" element={<UsersIndex />}></Route>
              <Route path="projects" element={<Projects />}></Route>
            </Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/registration" element={<Registration />}></Route>
          </Routes>
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}

export default App;
