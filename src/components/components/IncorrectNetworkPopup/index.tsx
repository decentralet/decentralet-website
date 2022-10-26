import { Grid, Typography } from "@mui/material";
import React from "react";
import { BasicModal } from "../../elements";

export default function IncorrectNetworkPopup() {
  return (
    <BasicModal>
      <Grid
        container
        direction="column"
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Incorrect Network
          </Typography>
        </Grid>
        <Grid item>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Please, switch to Görli Testnet.
          </Typography>
        </Grid>
      </Grid>
    </BasicModal>
  );
}
