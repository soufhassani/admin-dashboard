import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
// in Real world aplication this mockDataTeam should come from the API You Provide me
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import { tokens } from "../../theme";
import Header from "../common/Header";
import DataTable from "../common/DataTable";

function Team() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const AccessBgColor = (access) => {
    return (
      (access === "admin" && colors.greenAccent[500]) ||
      (access === "manager" && colors.blueAccent[500]) ||
      (access === "user" && colors.redAccent[500])
    );
  };
  const columns = [
    {
      field: "id",
      headerName: "ID",
    },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column__name",
    },
    {
      field: "email",
      headerName: "E-Mail",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      type: "number",
      flex: 1,
    },
    {
      field: "access",
      headerName: "Role",
      flex: 1,
      renderCell: ({ row: { access } }) => (
        <Box
          width="100%"
          height="75%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          m="0 auto"
          borderRadius="5px"
          backgroundColor={AccessBgColor(access)}
          sx={{ cursor: "pointer" }}
        >
          <Box
            ml="15px"
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography sx={{ ml: "5px" }}>{access}</Typography>
          </Box>
          <Typography sx={{ mr: "15px" }}>Edit</Typography>
        </Box>
      ),
    },
  ];
  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing The Team Members " />
      <DataTable rowData={mockDataTeam} columnsData={columns} />
    </Box>
  );
}

export default Team;
