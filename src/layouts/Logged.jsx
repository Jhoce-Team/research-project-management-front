import React from "react";
import { Outlet } from "react-router-dom";

const Ingress = () => {
  return (
    <div className="w-screen h-screen bg-color6">
      <Outlet />
    </div>
  );
};

export default Ingress;
