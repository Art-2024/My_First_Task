import { Box } from "@mui/material";
import styled from "styled-components";
import { COLORS } from "../../constants";

const { Silver } = COLORS;

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
