import React, { useState, useEffect } from "react";
import { Box, Container, Typography, Alert } from "@mui/material";
import { ReactComponent as LoginImage } from "../../assets/login.svg";
import "./login.css";
import PrimaryButton from "../buttons/PrimaryButton";
import { COLORS, LoginValues } from "../../constants";
import { useNavigate } from "react-router-dom";
import { Flex, FlexColumn, Label } from "../styled/styled";
import Otp from "../OtpInput";
import { Form } from "react-final-form";
import { LoginVal } from "../../types";

const { DarkMidnightBlue } = COLORS;

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [showVector, setShowVector] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    if (showVector) {
      setShowVector(true);
    }
  }, [showVector]);

  const handleEmailSubmit = (values: LoginVal) => {
    if (values.email === LoginValues.email) {
      setShowCodeInput(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Invalid email address");
    }
  };

  const onSubmit = (values: LoginVal) => {
    if (
      values.email === LoginValues.email &&
      values.code === LoginValues.code
    ) {
      navigate("/dashboard");
    } else {
      setErrorMessage("Please enter a valid code");
    }
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
        <Form
          onSubmit={onSubmit}
          render={({ handleSubmit, values, submitError }) => (
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
                handleEmailSubmit={() => handleEmailSubmit(values)}
                showVector={showVector}
                setShowVector={setShowVector}
                setErrorMessage={setErrorMessage}
              />
              {showCodeInput && (
                <FlexColumn
                  sx={{ width: "100%", gap: "15px", paddingTop: "15px" }}
                >
                  <Flex sx={{ width: "100%", justifyContent: "end" }}>
                    <PrimaryButton text="Submit" />
                  </Flex>
                  <Label />
                </FlexColumn>
              )}
            </form>
          )}
        />
      </FlexColumn>
    </Container>
  );
};

export default Login;
