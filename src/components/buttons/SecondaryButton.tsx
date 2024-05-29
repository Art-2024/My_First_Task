import React from "react";
import { Button } from "@mui/material";
import { ButtonTypes } from "../../types";
import { COLORS } from "../../constants";

const { DarkMidnightBlue } = COLORS;

const SecondaryButton: React.FC<ButtonTypes> = ({ onClick, text }) => {
  return (
    <Button
      onClick={onClick}
      variant="text"
      sx={{ color: DarkMidnightBlue, fontSize: 18 }}
    >
      {text}
    </Button>
  );
};

export default SecondaryButton;
