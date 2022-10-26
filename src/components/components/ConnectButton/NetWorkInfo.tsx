import React, { useContext } from "react";
import { IconButton, Stack, Typography } from "@mui/material";
import { Context } from "../../../context";
import { shortenAddress } from "../../../utils/shortenAddress";
import LogoutIcon from "@mui/icons-material/Logout";

export function GoerliAccount() {
  const context = useContext(Context);
  return (
    <Stack direction="column" justifyContent="center" alignItems="center">
      <Typography variant="caption" color="primary.main">
        Görli
      </Typography>
      <Typography variant="body1" color="primary.dark">
        {shortenAddress(context?.currentAccount)}
      </Typography>
    </Stack>
  );
}
export function IncorrectNetwork() {
  return (
    <Stack direction="column" justifyContent="center" alignItems="center">
      <Typography variant="caption" color="error.main">
        Incorrect Network
      </Typography>
      <Typography variant="body2" color="error.main">
        Please switch to Görli
      </Typography>
    </Stack>
  );
}
