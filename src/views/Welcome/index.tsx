import { Grid, CardMedia, Paper, Typography } from "@mui/material";

import React from "react";
import img from "../../assets/img01.jpg";

const style = {
  gridContainer: {
    height: "100vh",
  },
  cardMedia: {
    width: 151,
  },
  paper: {
    padding: "64px",
    borderRadius: "50px",
    borderColor: "primary.main",
  },
};

export default function Welcome() {
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={style.gridContainer}
    >
      <Grid item>
        <Paper sx={style.paper}>
          <Typography>Welcome</Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}
