import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import MoreIcon from "@mui/icons-material/MoreVert";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";

function HideOnScroll({ children }: any) {
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="up" in={!trigger}>
      {children}
    </Slide>
  );
}

export default function BottomBar() {
  return (
    <>
      <HideOnScroll>
        <AppBar
          position="fixed"
          elevation={0}
          variant="outlined"
          color="inherit"
          enableColorOnDark
          sx={{ top: "auto", bottom: 0 }}
        >
          <Toolbar>
            <Box sx={{ flexGrow: 2 }} />
            <IconButton color="primary" sx={{ flexGrow: 1 }}>
              <MenuIcon />
            </IconButton>
            <IconButton color="primary" sx={{ flexGrow: 1 }}>
              <SearchIcon />
            </IconButton>
            <Box />
            <IconButton color="primary" sx={{ flexGrow: 1 }}>
              <MoreIcon />
            </IconButton>
            <Box sx={{ flexGrow: 2 }} />
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Toolbar />
    </>
  );
}
