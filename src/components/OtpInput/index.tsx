import React from "react";
import { FlexColumn, Flex, OtpInput } from "../styled/styled";
import { TextField, IconButton, Typography } from "@mui/material";
import PrimaryButton from "../buttons/PrimaryButton";
import { COLORS } from "../../constants";
import { ReactComponent as DeleteIcon } from "../../assets/delete.svg";
import { LoginFormProps } from "../../types";

const { DarkMidnightBlue } = COLORS;

const EmailInput: React.FC<{
  email: string;
  handleEmailChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleEmailSubmit: () => void;
}> = ({ email, handleEmailChange, handleEmailSubmit }) => (
  <FlexColumn sx={{ alignItems: "start" }}>
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
    <Flex
      sx={{
        width: "100%",
        justifyContent: "end",
      }}
    >
      <PrimaryButton onClick={handleEmailSubmit} text="Send Code" />
    </Flex>
  </FlexColumn>
);

const CodeInput: React.FC<{
  code: string;
  handleCodeChange: (value: string) => void;
  showVector: boolean;
  setCode: React.Dispatch<React.SetStateAction<string>>;
  setShowVector: React.Dispatch<React.SetStateAction<boolean>>;
  errorMessage: string;
}> = ({
  code,
  handleCodeChange,
  showVector,
  setCode,
  setShowVector,
  errorMessage,
}) => (
  <div className="form-group">
    <Typography variant="body1">
      To finalize your verification, please enter the code that <br />
      has been sent to your email address / SMS
    </Typography>
    <Flex className="code">
      <OtpInput
        length={6}
        value={code}
        onChange={handleCodeChange}
        sx={{
          "& .MuiInputBase-root": {
            borderBottom: `1px solid ${
              errorMessage ? "red" : DarkMidnightBlue
            }`,
          },
          "& .MuiInputBase-input": {
            borderBottom: `1px solid ${
              errorMessage ? "red" : DarkMidnightBlue
            } !important`,
          },
        }}
      />
      {showVector && (
        <IconButton
          onClick={() => {
            setCode("");
            setShowVector(false);
          }}
          color="inherit"
        >
          <DeleteIcon />
        </IconButton>
      )}
    </Flex>
  </div>
);

const Otp: React.FC<LoginFormProps> = ({
  showCodeInput,
  email,
  handleEmailChange,
  handleEmailSubmit,
  code,
  handleCodeChange,
  showVector,
  errorMessage,
  setCode,
  setShowVector,
}) => {
  return (
    <>
      {!showCodeInput ? (
        <EmailInput
          email={email}
          handleEmailChange={handleEmailChange}
          handleEmailSubmit={handleEmailSubmit}
        />
      ) : (
        <CodeInput
          code={code}
          handleCodeChange={handleCodeChange}
          showVector={showVector}
          setCode={setCode}
          setShowVector={setShowVector}
          errorMessage={errorMessage}
        />
      )}
    </>
  );
};

export default Otp;
