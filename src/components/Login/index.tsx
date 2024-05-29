import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Alert } from "@mui/material";
import { ReactComponent as LoginImage } from "../../assets/login.svg";
import "./login.css";
import PrimaryButton from "../buttons/PrimaryButton";
import { COLORS } from "../../constants";
import { useNavigate } from "react-router-dom";
import { Flex, FlexColumn, Label } from "../styled/styled";
import Otp from "../OtpInput";

const { DarkMidnightBlue } = COLORS;

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [showVector, setShowVector] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (code) {
      setShowVector(true);
    }
  }, [code]);

  const handleEmailSubmit = () => {
    if (email === "demo@demo.com") {
      setShowCodeInput(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Invalid email.");
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (email === "demo@demo.com" && code === "111111") {
      navigate("/dashboard");
    } else {
      setErrorMessage("Please enter a valid code");
    }
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleCodeChange = (value: string) => {
    setCode(value);
  };

  return (
    <Container
      className="cont"
      sx={{
        display: "flex",
        alignItems: "center",
        height: "100vh",
        gap: "100px",
      }}
    >
      <Box sx={{ textAlign: "center" }}>
        <Typography
          className="txt"
          variant="h1"
          color={DarkMidnightBlue}
          fontFamily="sans-serif"
          mb={2}
        >
          PLAYGROUND
        </Typography>
        <LoginImage className="logImg" />
      </Box>
      <FlexColumn sx={{ alignItems: "start" }}>
        <form onSubmit={handleSubmit}>
          <Typography
            className="txt1"
            variant="h4"
            color={DarkMidnightBlue}
            fontFamily="sans-serif"
          >
            Login
          </Typography>
          {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
          <Otp
            showCodeInput={showCodeInput}
            email={email}
            handleEmailChange={handleEmailChange}
            handleEmailSubmit={handleEmailSubmit}
            code={code}
            handleCodeChange={handleCodeChange}
            showVector={showVector}
            errorMessage={errorMessage}
            setCode={setCode}
            setShowVector={setShowVector}
          />
          {showCodeInput && (
            <FlexColumn sx={{ width: "100%", gap: "15px", paddingTop: "15px" }}>
              <Flex sx={{ width: "100%", justifyContent: "end" }}>
                <PrimaryButton text="Submit" />
              </Flex>
              <Label />
            </FlexColumn>
          )}
        </form>
      </FlexColumn>
    </Container>
  );
};

export default Login;
