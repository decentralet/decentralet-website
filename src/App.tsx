import { Box, Paper, Typography } from "@mui/material";
import { Container } from "@mui/system";

import React, { useContext } from "react";
import { BrowserRouter } from "react-router-dom";

import { TopBar, BottomBar } from "./components/appbar";
import RoutesView from "./RoutesView";
import { Welcome } from "./views";
import { Context } from "./context";

function App() {
  const context: any = useContext(Context);

  return (
    <Box component="div" bgcolor="primary.light">
      <TopBar />
      {!context.currentAccount ? (
        <Box sx={{ height: "100vh", width: "100vw" }}>
          <Welcome />
        </Box>
      ) : (
        <>
          <Container maxWidth="md" disableGutters>
            <Paper variant="outlined" sx={{ marginBlock: { lg: "32px" } }}>
              <BrowserRouter>
                <RoutesView />
              </BrowserRouter>
            </Paper>
          </Container>
          <BottomBar />
        </>
      )}
    </Box>
  );
}

export default App;
