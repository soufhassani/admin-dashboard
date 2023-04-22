import React from "react";
import { Box } from "@mui/material";
import Header from "../common/Header";
import LineChart from "../common/LineChart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Line Chart" subtitle="Simple Line Chart" />
      <Box display="flex" height="75vh">
        <LineChart />
      </Box>
    </Box>
  );
};

export default Pie;
