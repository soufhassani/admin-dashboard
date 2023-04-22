import React from "react";
import { Box } from "@mui/material";
import Header from "../common/Header";
import PieChart from "../common/PieChart";

const Pie = () => {
  return (
    <Box m="20px">
      <Header title="Pie Chart" subtitle="Simple Pie Chart" />
      <Box display="flex" height="75vh">
        <PieChart />
      </Box>
    </Box>
  );
};

export default Pie;
