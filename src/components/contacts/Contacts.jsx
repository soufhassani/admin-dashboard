import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
// in Real world aplication this mockDataTeam should come from the API You Provide me
import { mockDataContacts } from "../../data/mockData";
import { tokens } from "../../theme";
import Header from "../common/Header";
import DataTable from "../common/DataTable";

function Contacts() {
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
      flex: 0.5,
    },
    {
      field: "registrarId",
      headerName: "Registrar ID",
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
      field: "age",
      headerName: "Age",
      type: "number",
      headerAlign: "left",
      align: "left",
      flex: 1,
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "address",
      headerName: "Address",
      flex: 1,
    },
    {
      field: "city",
      headerName: "City",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header
        title="CONTACTS"
        subtitle="List of contacts for Future References."
      />
      <DataTable
        rowData={mockDataContacts}
        columnsData={columns}
        toolBar={true}
      />
    </Box>
  );
}

export default Contacts;
