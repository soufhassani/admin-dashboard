import React from "react";
import { Box, Button, Typography, useTheme } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { tokens } from "../../theme";

const Modal = ({ openModal, setOpenModal, values }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleClose = (e) => {
    console.log("e.currentTarget", e.currentTarget);
    console.log("e.current", e.target);
    if (e.currentTarget === e.target) setOpenModal(false);
  };

  return (
    <Box
      onClick={(e) => handleClose(e)}
      display={openModal ? "flex" : "none"}
      justifyContent="center"
      alignItems="center"
      width="100vw"
      height="100vh"
      zIndex="9556321"
      position="fixed"
      top="0"
      left="0"
      backgroundColor="rgba(0,0,0,0.5)"
      sx={{
        backdropFilter: "blur(10px)",
      }}
    >
      <Box
        display="flex"
        flexDirection="column"
        alignContent="center"
        width="600px"
        height="auto"
        m="0 auto"
        position="relative"
        textAlign="left"
        backgroundColor={colors.primary[400]}
        padding="2rem 4rem"
        borderRadius="25px"
        boxShadow={`0 1px 5px ${colors.primary[400]}`}
      >
        <HighlightOffIcon
          onClick={() => setOpenModal(false)}
          sx={{
            position: "absolute",
            fontSize: "35px",
            top: "10px",
            right: "10px",
            cursor: "pointer",
            transition: "color .4s ease",
            "&:hover": { color: colors.greenAccent[400] },
          }}
        />
        <Typography variant="h2" sx={{ margin: "2rem 0" }}>
          You have successfully registred the user...
        </Typography>
        <Typography
          variant="h4"
          sx={{ marginBottom: "1rem", textAlign: "left" }}
        >
          Information:
        </Typography>
        <Box
          display="grid"
          columnGap="40px"
          rowGap="10px"
          gridTemplateColumns="repeat(4,  1fr)"
          textAlign="left"
          sx={{
            "& .MuiTypography-root span": {
              color: colors.greenAccent[400],
            },
          }}
        >
          <Typography sx={{ gridColumn: "span 2" }}>
            First Name: <span>{values.firstName}</span>
          </Typography>
          <Typography sx={{ gridColumn: "span 2" }}>
            Last Name: <span>{values.lastName}</span>
          </Typography>
          <Typography sx={{ gridColumn: "span 2" }}>
            E-mail: <span>{values.email}</span>
          </Typography>
          <Typography sx={{ gridColumn: "span 2" }}>
            Contact Number: <span>{values.contact}</span>
          </Typography>
          <Typography sx={{ gridColumn: "span 4" }}>
            Address 1: <span>{values.address1}</span>
          </Typography>
          {values.address2 && (
            <Typography sx={{ gridColumn: "span 4" }}>
              Address 2: <span>{values.address2}</span>
            </Typography>
          )}
          <Button
            color="secondary"
            variant="contained"
            onClick={() => setOpenModal(false)}
            sx={{ margin: "2.5rem 0 0" }}
          >
            Close
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Modal;
