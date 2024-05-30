import React from "react";
import { Container, Typography } from "@mui/material";
import WeeklySchedule from "../../WeeklySchedule";
import GeneralInfo from "./generalInfo";
import { Flex, FlexColumn } from "../../styled/styled";
import { COLORS } from "../../../constants";

const { DarkMidnightBlue } = COLORS;

const Profile: React.FC = () => {
  return (
    <Container sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <Typography
        variant="h4"
        color={DarkMidnightBlue}
        fontFamily={"sans-serif"}
      >
        My Profile
      </Typography>
      <GeneralInfo />
      <FlexColumn
        sx={{
          maxWidth: "100%",
          overflowX: "auto",
          paddingLeft: "25px",
          gap: "15px",
        }}
      >
        <Typography
          variant="h5"
          color={DarkMidnightBlue}
          fontFamily={"sans-serif"}
        >
          Work logs
        </Typography>
        <Flex
          sx={{
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
            <WeeklySchedule key={index} day={day} />
          ))}
        </Flex>
      </FlexColumn>
    </Container>
  );
};

export default Profile;
