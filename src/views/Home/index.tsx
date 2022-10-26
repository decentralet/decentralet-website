import { Grid, CardMedia, Paper } from "@mui/material";

import React from "react";
import img from "../../assets/img01.jpg";

const style = {
  gridContainer: {
    height: "100vh",
  },
  cardMedia: {
    width: 151,
  },
};

export default function Home() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={style.gridContainer}
      spacing={12}
    >
      <Grid item>
        <Paper>
          <CardMedia
            component="img"
            sx={style.cardMedia}
            image={img}
            alt="Decentralet - Your MultiSig Wallet"
          />
        </Paper>
      </Grid>
    </Grid>
  );
}
