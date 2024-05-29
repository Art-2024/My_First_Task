import { Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";
import { Flex, FlexColumn } from "../styled/styled";

interface TimeRange {
  start: string | null;
  end: string | null;
}

interface WeekDayProps {
  day: string;
}

const WeeklySchedule: React.FC<WeekDayProps> = ({ day }) => {
  const [timeRanges, setTimeRanges] = useState<TimeRange[]>([
    { start: null, end: null },
  ]);

  const addTimeRange = () => {
    const newTimeRanges = [...timeRanges, { start: null, end: null }];
    setTimeRanges(newTimeRanges);
  };

  const removeTimeRange = (index: number) => {
    const newTimeRanges = [...timeRanges];
    newTimeRanges.splice(index, 1);
    setTimeRanges(newTimeRanges);
  };

  const handleTimeChange = (
    value: string | null,
    index: number,
    isStart: boolean
  ) => {
    const newTimeRanges = [...timeRanges];
    if (isStart) {
      newTimeRanges[index].start = value ?? "";
    } else {
      newTimeRanges[index].end = value ?? "";
    }
    setTimeRanges(newTimeRanges);
  };

  return (
    <FlexColumn sx={{ gap: "10px" }}>
      <Typography variant="h6" color={"#546E7B"} fontFamily={"sans-serif"}>
        {day}
      </Typography>
      <Box
        sx={{
          maxHeight: timeRanges.length >= 4 ? "200px" : "auto",
          overflowY: "auto",
        }}
      >
        {timeRanges.map((range, index) => (
          <FlexColumn key={index} sx={{ gap: "5px" }}>
            <Typography variant="body2" sx={{ margin: 0 }}>
              Start / End Time
            </Typography>
            <Flex key={index} sx={{ gap: "10px", alignItems: "center" }}>
              <input
                type="time"
                id={`start-time-${index}`}
                value={range.start || ""}
                onChange={(e) => handleTimeChange(e.target.value, index, true)}
                style={{ width: "40%" }}
              />
              <span>-</span>
              <input
                id={`end-time-${index}`}
                type="time"
                value={range.end || ""}
                onChange={(e) => handleTimeChange(e.target.value, index, false)}
                style={{ width: "40%" }}
              />
              <button onClick={() => removeTimeRange(index)}>x</button>
            </Flex>
          </FlexColumn>
        ))}
        <Button
          variant="text"
          sx={{ width: "70%", marginTop: "10px" }}
          onClick={addTimeRange}
        >
          +
        </Button>
      </Box>
    </FlexColumn>
  );
};

export default WeeklySchedule;
