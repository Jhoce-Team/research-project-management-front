import React from "react";
import { Outlet } from "react-router-dom";

const Ingress = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default Ingress;
