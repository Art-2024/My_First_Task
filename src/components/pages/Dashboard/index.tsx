import React from "react";
import { ReactComponent as DashboardImage } from "../../assets/dashboard.svg";
import { Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";
import PrimaryButton from "../../buttons/PrimaryButton";
import SecondaryButton from "../../buttons/SecondaryButton";
import { COLORS } from "../../../constants";

const { DarkMidnightBlue } = COLORS;

const Dashboard: React.FC = () => {
  const navigate = useNavigate();

  const handleProfile = () => {
    navigate("/profile");
  };

  const handleLogout = () => {
    navigate("/");
  };
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <DashboardImage className="dashImg" />
      <Typography
        className="txt1"
        variant="h3"
        color={DarkMidnightBlue}
        fontFamily={"sans-serif"}
      >
        COMMING SOON
      </Typography>
      <PrimaryButton
        onClick={handleProfile}
        text="EDIT MY PROFILE AND MY WORKLOG"
      />
      <SecondaryButton onClick={handleLogout} text="LOGOUT" />
    </Container>
  );
};

export default Dashboard;
