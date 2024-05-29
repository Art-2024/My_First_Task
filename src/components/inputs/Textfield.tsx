import React from "react";
import { InputTypes } from "../../types";
import { TextField } from "@mui/material";

const TextFields: React.FC<InputTypes> = ({ name, label, onChange, value }) => {
  return (
    <TextField
      id="standard-basic"
      name={name}
      label={label}
      variant="standard"
      sx={{ width: "15%" }}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextFields;
