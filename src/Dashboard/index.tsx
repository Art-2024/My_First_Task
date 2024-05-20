import React from "react";
import { ReactComponent as DashboardImage } from "../assets/image 1.svg";
import { Button, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";

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
        color={"#003367"}
        fontFamily={"sans-serif"}
      >
        COMMING SOON
      </Typography>
      <Button
        variant="contained"
        sx={{ backgroundColor: "#003367" }}
        onClick={handleProfile}
      >
        EDIT MY PROFILE AND MY WORKLOG
      </Button>
      <Button
        onClick={handleLogout}
        variant="text"
        sx={{ color: "#003367", fontSize: 18 }}
      >
        LOGOUT
      </Button>
    </Container>
  );
};

export default Dashboard;
