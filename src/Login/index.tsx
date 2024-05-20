import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  TextField,
  Alert,
  IconButton,
} from "@mui/material";
import { ReactComponent as LoginImage } from "../assets/image 2.svg";
import { ReactComponent as DeleteIcon } from "../assets/Vector.svg";
import { MuiOtpInput } from "mui-one-time-password-input";
import "./login.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [showCodeInput, setShowCodeInput] = useState(false);
  const [showVector, setShowVector] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleEmailSubmit = () => {
    if (email === "demo@demo.com") {
      setShowCodeInput(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Invalid email.");
    }
  };

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    if (email === "demo@demo.com" && code === "111111") {
      window.location.href = "/dashboard";
    } else {
      setErrorMessage("Please enter a valid code");
    }
  };

  const handleEmailChange = (event: {
    target: { value: React.SetStateAction<string> };
  }) => {
    setEmail(event.target.value);
  };

  const handleCodeChange = (value: React.SetStateAction<string>) => {
    setCode(value);
    setShowVector(true);
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
          color={"#003367"}
          fontFamily={"sans-serif"}
          mb={2}
        >
          PLAYGROUND
        </Typography>
        <LoginImage className="logImg" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          gap: "20px",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Typography
            className="txt1"
            variant="h4"
            color={"#003367"}
            fontFamily={"sans-serif"}
          >
            Login
          </Typography>
          {errorMessage && <Alert severity="error">{errorMessage}</Alert>}
          {!showCodeInput ? (
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "start",
                gap: "20px",
              }}
            >
              <TextField
                id="standard-basic"
                className="email"
                label="Enter your email"
                variant="standard"
                value={email}
                onChange={handleEmailChange}
                required
                autoComplete="email"
              />
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Button
                  className="button1"
                  onClick={handleEmailSubmit}
                  variant="contained"
                  sx={{ backgroundColor: "#003367" }}
                >
                  Send code
                </Button>
              </Box>
            </div>
          ) : (
            <div className="form-group">
              <label htmlFor="code">
                To finalize your verification, please enter the code that <br />{" "}
                has been sent to your email address / SMS
              </label>
              <Box className="code" sx={{ display: "flex" }}>
                <MuiOtpInput
                  length={6}
                  value={code}
                  onChange={handleCodeChange}
                  sx={{
                    "& .MuiInputBase-root": {
                      fontFamily: "Roboto",
                      fontSize: "12px",
                      fontWeight: 400,
                      lineHeight: "15px",
                      letterSpacing: "0.4px",
                      border: "none",
                      borderBottom: `1px solid ${
                        errorMessage ? "red" : "#003367"
                      } `,
                      boxShadow: "none",
                      width: "46.13px",
                    },
                    "& .MuiInputBase-input": {
                      border: "none",
                      borderBottom: `1px solid ${
                        errorMessage ? "red" : "#003367"
                      } !important`,
                    },
                    "& .MuiOutlinedInput-notchedOutline": {
                      border: "none",
                    },
                  }}
                />
                {showVector ? (
                  <IconButton
                    onClick={() => {
                      setCode("");
                      setShowVector(false);
                    }}
                    color="inherit"
                  >
                    <DeleteIcon />
                  </IconButton>
                ) : (
                  ""
                )}
              </Box>
            </div>
          )}
          {showCodeInput && (
            <Box
              sx={{
                width: "100%",
                display: "flex",
                gap: "15px",
                paddingTop: "15px",
                flexDirection: "column",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  display: "flex",
                  justifyContent: "end",
                }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ backgroundColor: "#003367" }}
                >
                  Submit
                </Button>
              </Box>
              <label
                htmlFor="code"
                style={{
                  fontFamily: "Roboto",
                  fontSize: "12px",
                  fontWeight: 400,
                  lineHeight: "15px",
                  color: "#95A2A7",
                }}
              >
                If you do not receive the confirmation message within a few{" "}
                <br /> minutes, please check your Spam or Bulk E-Mail folder
              </label>
            </Box>
          )}
        </form>
      </Box>
    </Container>
  );
};

export default Login;
