import React from "react";
import { Button } from "@mui/material";
import { ButtonTypes } from "../../types";
import { COLORS } from "../../constants";

const { DarkMidnightBlue } = COLORS;

const PrimaryButton: React.FC<ButtonTypes> = ({ onClick, text }) => {
  return (
    <Button
      type="submit"
      className="button1"
      onClick={onClick}
      variant="contained"
      sx={{ backgroundColor: DarkMidnightBlue }}
    >
      {text}
    </Button>
  );
};

export default PrimaryButton;
