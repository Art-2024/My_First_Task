import React, { useState } from "react";
import {
  Box,
  Checkbox,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import TextFields from "../../../components/inputs/Textfield";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ReactComponent as SlackIcon } from "../../../assets/slack.svg";
import { ReactComponent as GithubIcon } from "../../../assets/github.svg";
import { COLORS, FormValues } from "../../../constants";

const { DarkMidnightBlue } = COLORS;

const GeneralInfo: React.FC = () => {
  const [formValues, setFormValues] = useState(FormValues);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = event.target;
    setFormValues({
      ...formValues,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleDateChange = (name: string, date: any) => {
    setFormValues({
      ...formValues,
      [name]: date,
    });
  };
  return (
    <Box
      sx={{
        paddingLeft: "25px",
        display: "flex",
        gap: "15px",
      }}
    >
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <Typography
            variant="h5"
            color={DarkMidnightBlue}
            fontFamily={"sans-serif"}
          >
            General Info
          </Typography>
          <Box sx={{ display: "flex", gap: "90px" }}>
            <TextFields
              name="firstName"
              label="First name"
              onChange={handleChange}
              value={formValues.firstName}
            />
            <TextFields
              name="lastName"
              label="Last name"
              value={formValues.lastName}
              onChange={handleChange}
            />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                label="Date of birth"
                value={formValues.dateOfBirth}
                onChange={(date) => handleDateChange("dateOfBirth", date)}
                slotProps={{
                  textField: {
                    variant: "standard",
                  },
                }}
              />
            </LocalizationProvider>
          </Box>
          <Box sx={{ display: "flex", gap: "150px" }}>
            <TextFields
              name="email"
              label="Email"
              value={formValues.email}
              onChange={handleChange}
            />
            <TextFields
              name="personalEmail"
              label="Personal Email"
              value={formValues.personalEmail}
              onChange={handleChange}
            />
            <TextFields
              name="mobilePhone"
              label="Mobile Phone"
              value={formValues.mobilePhone}
              onChange={handleChange}
            />
          </Box>
          <Box sx={{ display: "flex", gap: "30px", paddingTop: "10px" }}>
            <LocalizationProvider dateAdapter={AdapterDayjs}>
              <DatePicker
                sx={{ width: "22%" }}
                label="Start date"
                value={formValues.startDate}
                onChange={(date) => handleDateChange("startDate", date)}
                slotProps={{
                  textField: {
                    variant: "standard",
                  },
                }}
              />
            </LocalizationProvider>
            <TextField
              sx={{ width: "10%" }}
              id="outlined-number"
              name="absences"
              variant="standard"
              label="Absences"
              type="number"
              value={formValues.absences}
              onChange={handleChange}
            />
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    name="coreTeamMember"
                    checked={formValues.coreTeamMember}
                    onChange={handleChange}
                    sx={{ "& .MuiSvgIcon-root": { fontSize: 30 } }}
                  />
                }
                label="Core team member"
              />
            </FormGroup>
          </Box>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "30%",
          gap: "15px",
        }}
      >
        <Typography
          variant="h5"
          color={DarkMidnightBlue}
          fontFamily={"sans-serif"}
        >
          My accounts
        </Typography>
        <TextField
          id="input-with-icon-textfield"
          name="slackUsername"
          label="Slack"
          placeholder="Enter your slack user name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SlackIcon width={27} />
              </InputAdornment>
            ),
          }}
          variant="standard"
          value={formValues.slackUsername}
          onChange={handleChange}
        />
        <TextField
          id="input-with-icon-textfield"
          name="githubUsername"
          label="Github"
          placeholder="Enter your github user name"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <GithubIcon width={27} />
              </InputAdornment>
            ),
          }}
          variant="standard"
          value={formValues.githubUsername}
          onChange={handleChange}
        />
      </Box>
    </Box>
  );
};
export default GeneralInfo;
