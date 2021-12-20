import React from "react";
import Alert from "@mui/material/Alert";

const ErrorMessage = () => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="w-1/2">
        <Alert severity="warning" sx={{ width: "100%" }}>No estas autorizado para ver esta pagina 😟</Alert>
      </div>
    </div>
  );
};

export default ErrorMessage;
