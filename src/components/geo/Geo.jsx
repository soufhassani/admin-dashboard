import React from "react";
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import Header from "../common/Header";
import GeoChart from "../common/GeoChart";

const Geo = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="Geographic Chart" subtitle="Simple Geographic Chart" />
      <Box
        display="flex"
        height="75vh"
        border={`1px solid ${colors.grey[100]}`}
        borderRadius="4px"
      >
        <GeoChart />
      </Box>
    </Box>
  );
};

export default Geo;
