import "./App.css";
import { useState, useEffect, useCallback } from "react";
import { ethers } from "ethers";
import { WalletRPC ,WalletData } from "./helper/Wallet"
import { CheckSupportNetwork } from "./helper/Supported"
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/pages/Home";
import PrivateSale from "./components/pages/PrivateSale";
import Lottery from "./components/pages/Lottery";
import Nav from "./components/pages/Nav";

function App() {
  const [provider, setProvider] = useState(undefined);
  const [signer, setSigner] = useState(undefined);
  const [walletAddress, setWalletAddress] = useState(undefined);
  const [currentBalance, setCurrentBalance] = useState(undefined);
  const [chainId, setChainId] = useState(undefined);


  const [isConnected, setIsConnected] = useState(false);
  const [isSupported, setIsSupported] = useState(false);

  const connectWallet = useCallback(async () => {
    try {
      if (typeof window.ethereum !== "undefined") {
        await _connectWallet();
        event();
        setIsConnected(true);
      } else {
        // todo :
        alert("please install MetaMask");
      }
    } catch (error) {
      console.log(error);
    }
  });

  const _connectWallet = useCallback(async() => {
    const RPC = await WalletRPC();
    setProvider(RPC.provider)
    setSigner(RPC.signer)

    const WALLETDATA = await WalletData(RPC.signer);
    setWalletAddress(WALLETDATA.adress);
    setCurrentBalance(WALLETDATA.balance);
    setChainId(WALLETDATA.chainId);

    setIsSupported(CheckSupportNetwork(WALLETDATA.chainId));
  })


  // event
  const event = () => {
    window.ethereum.on("chainChanged", async () => {
      await _connectWallet();
    });

    window.ethereum.on("accountsChanged", async () => {
      await _connectWallet();
    });
  };


  return (
    <BrowserRouter>
      <div className="App">
        <Nav
          isConnected={isConnected}
          isSupported={isSupported}
          connectWallet={connectWallet}
          walletAddress={walletAddress}
          currentBalance={currentBalance}
          chainId={chainId}
        />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route
            path="/PrivateSale"
            element={<PrivateSale />}
            // element={<PrivateSale networkId={networkId} provider={provider} signerAddress={signerAddress} signer={signer}/>}
          ></Route>
          <Route path="/Lottery" element={<Lottery provider={provider} walletAddress={walletAddress} signer={signer}/>}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
