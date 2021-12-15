import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <CircularProgress color="inherit" />
    </div>
  );
};

export default Loading;
