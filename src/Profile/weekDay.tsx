import { Box, Typography, Button } from "@mui/material";
import React, { useState } from "react";

interface TimeRange {
  start: string | null;
  end: string | null;
}

interface WeekDayProps {
  day: string;
}

const WeekDay: React.FC<WeekDayProps> = ({ day }) => {
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
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography variant="h6" color={"#546E7B"} fontFamily={"sans-serif"}>
        {day}
      </Typography>
      <Box
        style={{
          maxHeight: timeRanges.length >= 4 ? "200px" : "auto",
          overflowY: "auto",
        }}
      >
        {timeRanges.map((range, index) => (
          <div style={{ display: "flex", flexDirection: "column" }}>
            <p style={{ margin: 0 }}> start/ end time </p>
            <div key={index} style={{ display: "flex", width: "100%" }}>
              <input
                type="time"
                value={range.start || ""}
                onChange={(e) => handleTimeChange(e.target.value, index, true)}
                style={{ width: "60%" }}
              />
              <span> - </span>
              <input
                type="time"
                value={range.end || ""}
                onChange={(e) => handleTimeChange(e.target.value, index, false)}
                style={{ width: "60%" }}
              />
              <button onClick={() => removeTimeRange(index)}>x</button>
            </div>
          </div>
        ))}
        <Button variant="text" sx={{ width: "70%" }} onClick={addTimeRange}>
          +
        </Button>
      </Box>
    </Box>
  );
};

export default WeekDay;
