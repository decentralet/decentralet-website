import { ButtonBase, Typography, Paper } from "@mui/material";
import React, { useContext, useState } from "react";
import { Context } from "../../../context";
import { GoerliAccount, IncorrectNetwork } from "./NetWorkInfo";
import { IncorrectNetworkPopup } from "../../components";

const style = {
  borderPrimary: {
    height: "48px",
    width: "196px",
    borderColor: "primary.main",
    borderRadius: "50px",
  },
  borderError: {
    height: "48px",
    width: "196px",
    borderColor: "error.main",
    borderRadius: "50px",
  },
};

export default function ConnectButton() {
  const context = useContext(Context);
  let chainId;

  if (context.currentChainId === "0x5") {
    chainId = true;
  } else {
    chainId = false;
  }

  return (
    <Paper
      variant="outlined"
      sx={chainId ? style.borderPrimary : style.borderError}
    >
      {!context.currentAccount ? (
        <ButtonBase sx={style.borderPrimary} onClick={context.connectWallet}>
          <Typography variant="button" color="primary">
            Connect
          </Typography>
        </ButtonBase>
      ) : (
        <>
          {chainId ? (
            <GoerliAccount />
          ) : (
            <>
              <IncorrectNetwork />
              <IncorrectNetworkPopup />
            </>
          )}
        </>
      )}
    </Paper>
  );
}
