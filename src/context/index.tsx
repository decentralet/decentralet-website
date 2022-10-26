import React, { useState, useEffect, createContext } from "react";
declare var window: any;
interface ContextInterface {
  currentAccount: any;
  currentChainId: number;
  connectWallet: Function;
}
const { ethereum } = window;

export const Context = createContext<ContextInterface | null>(null);

export function ContextProvider({ children }: any) {
  const [currentAccount, setCurrentAccount] = useState(null);
  const [currentChainId, setCurrentChainId] = useState(0x0);

  const checkChainId = async () => {
    try {
      if (!ethereum)
        return console.log("Please install a Cryptocurrency Software Wallet");

      const chainId = await ethereum.request({ method: "eth_chainId" });

      setCurrentChainId(chainId);
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object.");
    }
  };
  const checkIfWalletisConnected = async () => {
    try {
      if (!ethereum)
        return console.log("Please install a Cryptocurrency Software Wallet");

      const accounts = await ethereum.request({ method: "eth_accounts" });

      if (accounts.length) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("No accounts found.");
      }
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object.");
    }
  };
  const connectWallet = async () => {
    try {
      if (!ethereum)
        return console.log("Please install a Cryptocurrency Software Wallet");

      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });

      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(error);

      throw new Error("No ethereum object.");
    }
  };

  const context: ContextInterface = {
    currentAccount: currentAccount,
    currentChainId: currentChainId,
    connectWallet: connectWallet,
  };

  useEffect(() => {
    if (ethereum) {
      ethereum.on("chainChanged", () => {
        checkChainId();
      });
      ethereum.on("accountsChanged", () => {
        window.location.reload();
      });
    }
  });

  useEffect(() => {
    checkIfWalletisConnected();
    checkChainId();
  }, [currentAccount]);

  return <Context.Provider value={context}>{children}</Context.Provider>;
}
