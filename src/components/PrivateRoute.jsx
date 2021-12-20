import React from "react";
import ErrorMessage from "./ErrorMessage";
import { useUser } from "../context/userContext";

const PrivateRoute = ({ roleList, children }) => {
  const { userData } = useUser();
  if (roleList.includes(userData.rol)) {
    return children;
  }
  return <ErrorMessage />;
};

export default PrivateRoute;
