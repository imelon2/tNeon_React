import { ethers } from "ethers";
import { useCallback, useState } from "react";
import { SwitchNetwork } from "../helper/SwitchNetwork";
import  { getChainData } from "../helper/chainIds"

import polygon_icon from "../img/polygon_icon.png";
import ethereum_icon from "../img/ethereum_icon.png";
import binance_icon from "../img/binance_icon.png";

const ConnectButton = (props) => {
  const { isConnected,isSupported, connectWallet, currentBalance, walletAddress, chainId } =
    props;


  const displayWalletAddress = `${walletAddress?.substring(0, 10)}...`;
  const displayCurrentBalance = `${currentBalance?.toFixed(4)}`;

  // const test = () => {
  //   console.log(getRpcs(137).rpc);
  // };

  return (
    <>
      {/* <button onClick={() => test()} /> */}
      <div>
        <img
          onClick={(e) => SwitchNetwork(Number(e.target.dataset.id))}
          data-id={137}
          className="web3_icon"
          src={polygon_icon}
        />
        <img
          onClick={(e) => SwitchNetwork(Number(e.target.dataset.id))}
          data-id={1}
          className="web3_icon"
          src={ethereum_icon}
        />
        <img
          onClick={(e) => SwitchNetwork(Number(e.target.dataset.id))}
          data-id={56}
          className="web3_icon"
          src={binance_icon}
        />
      </div>
      {isConnected ? (
        <div className="buttonContainer">
          <span className="pageButtonBold connectButton">
            {displayCurrentBalance}{" "}
            {getChainData(chainId) !== undefined
              ? getChainData(chainId).symbol
              : ""}
          </span>

          {/* 미지원 네트워크 예외처리 */}
          <span
            className={
              isSupported
                ? "pageButtonBold connectButton"
                : "pageButtonBold networkErr"
            }
          >
            {isSupported
              ? getChainData(chainId).name
              : "Change Network"}
          </span>
          <span className="pageButtonBold connectButton">
            {displayWalletAddress}
          </span>
        </div>
      ) : (
        <div className="btn connectButton" onClick={() => connectWallet()}>
          Connect Wallet
        </div>
      )}
    </>
  );
};

export default ConnectButton;
