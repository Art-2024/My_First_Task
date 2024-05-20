import React from "react";
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
import { ReactComponent as SlackIcon } from "../assets/slack-svgrepo-com.svg";
import { ReactComponent as GithubIcon } from "../assets/github-142-svgrepo-com.svg";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import WeekDay from "./weekDay";

const Profile: React.FC = () => {
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
                label="First name"
                variant="standard"
                sx={{ width: "15%" }}
              />
              <TextField
                id="standard-basic"
                label="Last name"
                variant="standard"
                sx={{ width: "15%" }}
              />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Date of birth"
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
                label="Email"
                variant="standard"
                sx={{ width: "15%" }}
              />
              <TextField
                id="standard-basic"
                label="Personal Email"
                variant="standard"
                sx={{ width: "20%" }}
              />
              <TextField
                id="standard-basic"
                label="Mobile Phone"
                variant="standard"
                sx={{ width: "20%" }}
              />
            </Box>
            <Box sx={{ display: "flex", gap: "30px", paddingTop: "10px" }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  sx={{ width: "22%" }}
                  label="Start date"
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
                variant="standard"
                label="Absences"
                type="number"
              />
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked
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
          />
          <TextField
            id="input-with-icon-textfield"
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
          <WeekDay day="Sunday" />
          <WeekDay day="Monday" />
          <WeekDay day="Tuesday" />
          <WeekDay day="Wednesday" />
          <WeekDay day="Thursday" />
          <WeekDay day="Friday" />
        </Box>
      </Box>
    </Container>
  );
};

export default Profile;
