import React from "react";
import { Box, Typography, useTheme } from "@mui/material";
// in Real world aplication this mockDataTeam should come from the API You Provide me
import { mockDataInvoices } from "../../data/mockData";
import { tokens } from "../../theme";
import Header from "../common/Header";
import DataTable from "../common/DataTable";

const Invoices = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    {
      field: "id",
      headerName: "ID",
      flex: 0.5,
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
      field: "cost",
      headerName: "Cost",
      flex: 1,
      renderCell: (params) => (
        <Typography color={colors.greenAccent[500]}>
          ${params.row.cost}
        </Typography>
      ),
    },
    {
      field: "phone",
      headerName: "Phone Number",
      flex: 1,
    },
    {
      field: "date",
      headerName: "Date",
      flex: 1,
    },
  ];

  return (
    <Box m="20px">
      <Header title="INVOICES" subtitle="List of invoice Balances." />
      <DataTable
        rowData={mockDataInvoices}
        columnsData={columns}
        toolBar={false}
        checkBox={true}
      />
    </Box>
  );
};

export default Invoices;
