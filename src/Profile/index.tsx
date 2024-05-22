import React, { useState } from "react";
import {
  Box,
  Checkbox,
  Container,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { ReactComponent as SlackIcon } from "../assets/slack-svgrepo-com.svg";
import { ReactComponent as GithubIcon } from "../assets/github-142-svgrepo-com.svg";
import WeekDay from "./weekDay";

const Profile: React.FC = () => {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: null,
    email: "",
    personalEmail: "",
    mobilePhone: "",
    startDate: null,
    absences: "",
    coreTeamMember: false,
    slackUsername: "",
    githubUsername: "",
  });

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
    console.log(date.$d);
    console.log(date);
    console.log(name);
  };

  return (
    <Container sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Typography variant="h4" color={"#003367"} fontFamily={"sans-serif"}>
        My Profile
      </Typography>
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
              color={"#003367"}
              fontFamily={"sans-serif"}
            >
              General Info
            </Typography>
            <Box sx={{ display: "flex", gap: "90px" }}>
              <TextField
                id="standard-basic"
                name="firstName"
                label="First name"
                variant="standard"
                sx={{ width: "15%" }}
                value={formValues.firstName}
                onChange={handleChange}
              />
              <TextField
                id="standard-basic"
                name="lastName"
                label="Last name"
                variant="standard"
                sx={{ width: "15%" }}
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
              <TextField
                id="standard-basic"
                name="email"
                label="Email"
                variant="standard"
                sx={{ width: "15%" }}
                value={formValues.email}
                onChange={handleChange}
              />
              <TextField
                id="standard-basic"
                name="personalEmail"
                label="Personal Email"
                variant="standard"
                sx={{ width: "20%" }}
                value={formValues.personalEmail}
                onChange={handleChange}
              />
              <TextField
                id="standard-basic"
                name="mobilePhone"
                label="Mobile Phone"
                variant="standard"
                sx={{ width: "20%" }}
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
          <Typography variant="h5" color={"#003367"} fontFamily={"sans-serif"}>
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
      <Box
        sx={{
          maxWidth: "100%",
          overflowX: "auto",
          paddingLeft: "25px",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <Typography variant="h5" color={"#003367"} fontFamily={"sans-serif"}>
          Work logs
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "20px",
          }}
        >
          {[
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ].map((day, index) => (
            <WeekDay key={index} day={day} />
          ))}
        </Box>
      </Box>
    </Container>
  );
};

export default Profile;
