import React from "react";
import { FlexColumn, Flex, OtpInput } from "../../styled/styled";
import { TextField, IconButton, Typography, Alert } from "@mui/material";
import PrimaryButton from "../../buttons/PrimaryButton";
import { COLORS, validateCode, validateEmail } from "../../../constants";
import { ReactComponent as DeleteIcon } from "../../assets/delete.svg";
import { Field } from "react-final-form";

const { DarkMidnightBlue } = COLORS;

const EmailInput: React.FC<{
  showCodeInput: boolean;
  handleEmailSubmit: () => void;
}> = ({ showCodeInput, handleEmailSubmit }) => (
  <FlexColumn sx={{ alignItems: "start" }}>
    <Field name="email" validate={validateEmail}>
      {({ input, meta }) => (
        <>
          <TextField
            {...input}
            id="standard-basic"
            className="email"
            label="Enter your email"
            variant="standard"
            required
            autoComplete="email"
          />
          {meta.error && meta.touched && (
            <Alert severity="error">{meta.error}</Alert>
          )}
        </>
      )}
    </Field>
    <Flex sx={{ width: "100%", justifyContent: "end" }}>
      <PrimaryButton onClick={handleEmailSubmit} text="Send Code" />
    </Flex>
  </FlexColumn>
);

const CodeInput: React.FC<{
  showVector: boolean;
  setShowVector: React.Dispatch<React.SetStateAction<boolean>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
}> = ({ showVector, setShowVector, setErrorMessage }) => (
  <div className="form-group">
    <Typography variant="body1">
      To finalize your verification, please enter the code that <br />
      has been sent to your email address / SMS
    </Typography>
    <Field name="code" validate={validateCode}>
      {({ input, meta }) => (
        <>
          <Flex className="code">
            <OtpInput
              length={6}
              value={input.value}
              onChange={(newValue) => {
                input.onChange(newValue);
                if (newValue.length === 6) {
                  setShowVector(false);
                } else {
                  setShowVector(true);
                }
              }}
              sx={{
                "& .MuiInputBase-root": {
                  borderBottom: `1px solid ${
                    meta.submitFailed ? "red" : DarkMidnightBlue
                  }`,
                },
                "& .MuiInputBase-input": {
                  borderBottom: `1px solid ${
                    meta.submitFailed ? "red" : DarkMidnightBlue
                  } !important`,
                },
              }}
            />
            {showVector && (
              <IconButton
                onClick={() => {
                  input.onChange("");
                  setShowVector(false);
                  setErrorMessage("");
                }}
                color="inherit"
              >
                <DeleteIcon />
              </IconButton>
            )}
          </Flex>
          {(meta.error || meta.submitError) && meta.touched && (
            <Alert severity="error">{meta.error || meta.submitError}</Alert>
          )}
        </>
      )}
    </Field>
  </div>
);

const Otp: React.FC<{
  showCodeInput: boolean;
  handleEmailSubmit: () => void;
  showVector: boolean;
  setShowVector: React.Dispatch<React.SetStateAction<boolean>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
}> = ({
  showCodeInput,
  handleEmailSubmit,
  showVector,
  setShowVector,
  setErrorMessage,
}) => {
  return (
    <>
      {!showCodeInput ? (
        <EmailInput
          showCodeInput={showCodeInput}
          handleEmailSubmit={handleEmailSubmit}
        />
      ) : (
        <CodeInput
          showVector={showVector}
          setShowVector={setShowVector}
          setErrorMessage={setErrorMessage}
        />
      )}
    </>
  );
};

export default Otp;
