import polygon_icon from "../img/polygon_icon.png";
import ethereum_icon from "../img/ethereum_icon.png";
import binance_icon from "../img/binance_icon.png";



/**
 * Network Id List
 * 137 : Polygon Mainnet
 * 80001 : Polygon Testnet
 * 1 : Ethereum Mainnet
 * 5 : Ethereum Testnet(Goerli)
 * 56 : Binance Mainnet
 * 97 : Binance Testnet
 */

export const CheckSupportNetwork = (id) => {
    if (
      // id == 137 || 
      id == 80001 || 
      // id == 1 || 
      id == 5 || 
      // id == 56 || 
      id == 97 
    ) {
      return true;
    } else {
      return false;
    }
  };
  
  export const SupporNetwork = () => {
//  return [137,1,56]
    return [80001, 5, 97];
  };
  