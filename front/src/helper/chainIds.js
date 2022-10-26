const chainIds = {
  1: { name: "Ethereum mainnet", symbol: "ETH" },
  3: { name: "Ropsten", symbol: "RopstenETH" },
  4: { name: "Rinkeby", symbol: "RinkebyETH" },
  5: { name: "Goerli", symbol: "GoerliETH" },
  42: { name: "Kovan", symbol: "KovanETH" },
  56: { name: "Binance Smart Chain Mainnet", symbol: "BNB" },
  97: { name: "Binance Smart Chain Testnet", symbol: "tBNB" },
  43114: { name: "Avalanche C-Chain", symbol: "AVAX" },
  137: { name: "Polygon Mainnet", symbol: "MATIC" },
  80001: { name: "Mumbai", symbol: "MATIC" },
  42161: { name: "Arbitrum One", symbol: "ETH" },
  10: { name: "Optimism", symbol: "ETH" },
  250: { name: "Fantom Opera", symbol: "FTM" },
  8217: { name: "Klaytn Mainnet Cypress", symbol: "KLAY" },
  1001: { name: "baobob", symbol: "KLAY" },
  61: { name: "Ethereum Classic Mainnet", symbol: "ETC" },
};

const rpcs = {
  137: { rpc: "https://polygon-rpc.com/", explore: "https://polygonscan.com" },
  80001: {
    rpc: "https://rpc-mumbai.maticvigil.com",
    explore: "https://mumbai.polygonscan.com",
  },
  56: {
    rpc: "https://bsc-dataseed1.ninicoin.io",
    explore: "https://bscscan.com/",
  },
  97: {
    rpc: "https://data-seed-prebsc-1-s1.binance.org:8545/",
    explore: "https://testnet.bscscan.com",
  },
};

export function getChainData(id) {
  return chainIds[id];
}

export function getRpcs(id) {
  return rpcs[id];
}
