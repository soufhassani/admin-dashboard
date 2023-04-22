import React, { useEffect, useState } from "react";

import { Box, IconButton, Typography, useTheme } from "@mui/material";
import {
  Sidebar as SideBar,
  Menu,
  MenuItem,
  useProSidebar,
} from "react-pro-sidebar";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { tokens } from "../../theme";
import userImg from "../../assets/user.png";
import { menuItems } from "../../services/menuService";
import NavItems from "../common/NavItems";
import { useLocation } from "react-router-dom";

function Sidebar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Team");
  const { collapseSidebar } = useProSidebar();
  let { pathname } = useLocation();

  useEffect(() => {
    const selectedItem = capitalize(pathname);
    setSelected(selectedItem);
  }, []);

  function capitalize(str) {
    if (str === "/") {
      return "Dashboard";
    }
    return str.charAt(1).toUpperCase() + str.slice(2);
  }

  function handleCollapse() {
    collapseSidebar();
    setIsCollapsed(!isCollapsed);
  }

  const rootStyles = {
    "& .ps-sidebar-root": {
      borderRight: "none !important",
      minHeight: "100vh",
    },
    "& .css-ewdv3l": {
      height: "100vh",
      overflow: "hidden",
    },
    "& .ps-sidebar-container": {
      background: `${colors.primary[400]} !important`,
    },
    "& .pro-icon-wrapper": {
      backgroundColor: "transparent !important",
    },
    "& .pro-inner-item": {
      padding: "5px 35px 5px 20px !important",
    },
    "& .ps-menu-button:hover": {
      backgroundColor: "transparent!important",
    },
    "& .ps-menu-button .ps-menu-icon": {
      justifyContent: isCollapsed && "center",
      marginRight: isCollapsed && "0px!important",
      flex: "1",
    },
    "& .ps-menu-button .ps-menu-label": {
      display: isCollapsed && "none",
    },
    "& .ps-menuitem-root.css-16jkw2k .ps-menu-button": {
      padding: "0px!important",
    },
    "& .MuiBox-root .ps-menu-button:hover": {
      color: "#868dfb !important",
      paddingLeft: "0px!important",
    },
    "& .pro-menu-item.active": {
      color: "#6870fa !important",
    },
  };

  return (
    <Box sx={rootStyles}>
      <SideBar
        style={{ background: colors.primary[400] }}
        collapsed={isCollapsed}
      >
        <Menu iconShape="square">
          <MenuItem
            onClick={() => handleCollapse()}
            icon={isCollapsed ? <MenuOutlinedIcon /> : null}
            style={{
              margin: "10px 0 10px 0",
              color: colors.grey[100],
              width: "100%",
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="flex-start"
                alignItems="center"
                ml="0px"
              >
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  {isCollapsed ? (
                    <MenuOutlinedIcon style />
                  ) : (
                    <ChevronLeftIcon />
                  )}
                </IconButton>
                <Typography
                  variant="h3"
                  color={colors.grey[100]}
                  style={{ flex: "1", marginLeft: "5px" }}
                >
                  My Dashboard
                </Typography>
              </Box>
            )}
          </MenuItem>
          <Box>
            <Box mb="25px" display="flex" gap="20px" p="0 10%">
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                flex={isCollapsed && "1"}
              >
                <img
                  alt=""
                  width={"50px"}
                  height={"50px"}
                  src={userImg}
                  style={{
                    cursor: "pointer",
                    borderRadius: "50%",
                    objectFit: "cover",
                  }}
                />
              </Box>
              {!isCollapsed && (
                <Box textAlign="center" flex="1">
                  <Typography
                    variant="h4"
                    color={colors.grey[100]}
                    fontWeight="bold"
                    textAlign="left"
                    sx={{ m: "0 0 0 0" }}
                  >
                    Soufiane
                  </Typography>
                  <Typography
                    variant="h6"
                    textAlign="left"
                    color={colors.greenAccent[500]}
                  >
                    VP Fancy Admin
                  </Typography>
                </Box>
              )}
            </Box>

            <Box paddingLeft={isCollapsed ? undefined : "10%"} overflowY="auto">
              {menuItems.map((item) => (
                <React.Fragment key={item._id}>
                  <Typography
                    variant="h6"
                    color={colors.grey[300]}
                    sx={{
                      m: isCollapsed ? "15px 0px" : "15px 0 5px 0px",
                      textAlign: isCollapsed ? "center" : "left",
                    }}
                  >
                    {item.name}
                  </Typography>
                  {item.information.map((info) => (
                    <NavItems
                      key={info._id}
                      title={info.title}
                      label={info.label}
                      icon={info.icon}
                      to={info.to}
                      selected={selected}
                      setSelected={setSelected}
                      isCollapsed={isCollapsed}
                    />
                  ))}
                </React.Fragment>
              ))}
            </Box>
          </Box>
        </Menu>
      </SideBar>
    </Box>
  );
}

export default Sidebar;
