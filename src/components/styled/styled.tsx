import { Box } from "@mui/material";
import { MuiOtpInput } from "mui-one-time-password-input";
import styled from "styled-components";
import { COLORS } from "../../constants";

const { Silver } = COLORS;

export const OtpInput = styled(MuiOtpInput)(({ theme }) => ({
  "& .MuiInputBase-root": {
    fontFamily: "Roboto",
    fontSize: "20px",
    fontWeight: 400,
    lineHeight: "15px",
    letterSpacing: "0.4px",
    border: "none",
    boxShadow: "none",
    width: "46.13px",
  },
  "& .MuiInputBase-input": {
    border: "none",
  },
  "& .MuiOutlinedInput-notchedOutline": {
    border: "none",
  },
}));

export const FlexColumn = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
}));

export const Flex = styled(Box)(({ theme }) => ({
  display: "flex",
}));

export const Label: React.FC = () => {
  return (
    <label
      htmlFor="code"
      style={{
        fontFamily: "Roboto",
        fontSize: "12px",
        fontWeight: 400,
        lineHeight: "15px",
        color: Silver,
      }}
    >
      If you do not receive the confirmation message within a few
      <br /> minutes, please check your Spam or Bulk E-Mail folder
    </label>
  );
};
