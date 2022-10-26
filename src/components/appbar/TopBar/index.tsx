import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { ConnectButton } from "../../components";

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        elevation={0}
        variant="outlined"
        color="inherit"
        enableColorOnDark
      >
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            color="primary"
            sx={{ flexGrow: 1 }}
          >
            Decentralet
          </Typography>
          <ConnectButton />
        </Toolbar>
      </AppBar>
    </Box>
  );
}
