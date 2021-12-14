import React from "react";
import { TextField } from "@mui/material";
import { FormControl } from "@mui/material";

const GeneralInput = ({ label, name, defaultValue, type, required }) => {
  return (
    <FormControl variant="standard" sx={{ m: 1, width: "100%" }}>
      {/* <InputLabel variant="standard" htmlFor="status">
        Estado
      </InputLabel> */}
      <TextField
        color="primary"
        className="w-full"
        name={name}
        label={label}
        defaultValue={defaultValue}
        required={required}
        type={type}
        variant="standard"
      />
    </FormControl>
  );
};

export default GeneralInput;
