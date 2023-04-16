import React, { useState } from "react";
import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";

const DataTable = ({ rowData, columnsData, toolBar, checkBox, ...rest }) => {
  const [paginationModel, setPaginationModel] = useState({
    pageSize: 5,
    page: 0,
  });
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const toolTipsCss = document.styleSheets[1];

  const tooTipBg = () => {
    toolTipsCss.cssRules[7].style.setProperty(
      "background-color",
      colors.primary[400],
      "important"
    );
    toolTipsCss.cssRules[8].style.setProperty(
      "color",
      colors.grey[100],
      "important"
    );
    toolTipsCss.cssRules[9].style.setProperty(
      "color",
      colors.blueAccent[700],
      "important"
    );
    toolTipsCss.cssRules[10].style.setProperty(
      "color",
      colors.grey[100],
      "important"
    );
  };
  tooTipBg();

  let showToolBar = toolBar || false;
  let showCheckBox = checkBox || false;
  // const checkedCheckbox = showCheckBox
  //   ? checkboxSelection + "" + disableRowSelectionOnClick
  //   : null;

  return (
    <Box
      m="40px 0 0 0 "
      height="70vh"
      sx={{
        "& .MuiDataGrid-root": {
          border: "none",
        },
        "& .MuiDataGrid-root *:focus, .MuiDataGrid-root *:focus-within": {
          border: "none!important",
          outline: "none!important",
        },
        "& .MuiDataGrid-cell": {
          borderBottom: "none",
        },
        "& .MuiDataGrid-columnHeaderTitle": {
          color: `${colors.grey[100]} !important`,
        },

        "& .name-column__name": {
          color: colors.greenAccent[300],
        },
        "& .MuiDataGrid-columnHeaders": {
          backgroundColor: colors.blueAccent[700],
          borderBottom: "none",
        },
        "& .MuiDataGrid-virtualScroller": {
          backgroundColor: colors.primary[400],
        },
        "& .MuiDataGrid-virtualScroller::-webkit-scrollbar": {
          width: "5px",
        },
        "& .MuiDataGrid-virtualScroller::-webkit-scrollbar-track": {
          backgroundColor: "transparent",
          width: "5px",
        },
        "& .MuiDataGrid-footerContainer": {
          borderTop: "none",
          backgroundColor: colors.blueAccent[700],
        },
        "& .MuiDataGrid-columnSeparator": {
          color: `${colors.blueAccent[500]} !important`,
        },
        "& .MuiDataGrid-toolbarContainer": {
          marginBottom: `20px !important`,
        },
        "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
          color: `${colors.grey[100]} !important`,
        },
        "& .MuiCheckbox-root": {
          color: `${colors.greenAccent[200]} !important`,
        },
      }}
    >
      <DataGrid
        rows={rowData}
        columns={columnsData}
        components={showToolBar ? { Toolbar: GridToolbar } : null}
        checkboxSelection={checkBox ? true : null}
      />
    </Box>
  );
};

export default DataTable;
