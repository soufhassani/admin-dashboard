import { Box, Typography, useTheme } from "@mui/material";
import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { tokens } from "../../theme";

const NavItems = ({
  title,
  label,
  icon,
  to,
  selected,
  setSelected,
  isCollapsed,
}) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const navLinkStyles = {
    color: selected === title ? colors.greenAccent[400] : colors.grey[100],
    display: "flex",
    alignItems: "center",
    justifyContent: isCollapsed ? "center" : "flex-start",
    textDecoration: "none",
    margin: isCollapsed ? "15px 0px" : "15px 5px 15px 0px",
  };

  return (
    <NavLink to={to} style={navLinkStyles}>
      <Box
        display="flex"
        flexDirection="row"
        onClick={() => setSelected(title)}
      >
        {icon}
        {!isCollapsed && (
          <Typography
            style={{
              marginLeft: "10px",
              color: selected === navLinkStyles.color,
              textDecoration: "none",
            }}
          >
            {label}
          </Typography>
        )}
      </Box>
    </NavLink>
  );
};
export default NavItems;
