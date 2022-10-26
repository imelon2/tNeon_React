import { ethers } from "ethers";
import {getChainData,getRpcs} from "./chainIds";


export const SwitchNetwork = async (networkId) => {
  const chainId = "0x" + networkId.toString(16);

  try {
    await window.ethereum.request({
      method: "wallet_switchEthereumChain",
      params: [{ chainId }],
    });
  } catch (switchError) {
    if (switchError.code === 4902) {
      try {
        const chainData = getChainData(networkId);
        const RPCURL = getRpcs(networkId);

        await window.ethereum.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId,
              chainName: chainData.name,
              nativeCurrency: {
                name: chainData.symbol,
                symbol: chainData.symbol,
                decimals: 18,
              },
              rpcUrls: [RPCURL.rpc],
              blockExplorerUrls: [RPCURL.explore],
            },
          ],
        });
      } catch (addError) {
        // handle "add" error
        console.log(addError);
      }
    } else {
      // handle other "switch" errors
      console.log(switchError);
    }
  }
};
