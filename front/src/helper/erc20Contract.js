const { ethers } = require('ethers')
const ERC20ABI = require('../abi/ERC20ABI.json');

export const erc20MetaData = {
    137: {
        USDC : {
            name : "USD Coin",
            symbol : "USDC",
            decimals : 18,
            address : "0x2791Bca1f2de4661ED88A30C99A7a9449Aa84174"
        },
        USDT : {
            name : "Tether USD",
            symbol : "USDT",
            decimals : 6,
            address : "0xc2132D05D31c914a87C6611C10748AEb04B58e8F"
        }
    },
    80001 : {
        USDC : {
            name : "USDC",
            symbol : "USDC",
            decimals : 18,
            address : "0xe11A86849d99F524cAC3E7A0Ec1241828e332C62"
        },
        USDT : {
            name : "Tether USD",
            symbol : "USDT",
            decimals : 6,
            address : "0x3813e82e6f7098b9583FC0F33a962D02018B6803"
        }
    }
}

export const getTokenContract = (web3Provider,networkId,tokenName) => {
    const _network = erc20MetaData[networkId][tokenName].address;
    if(_network) {
        return new ethers.Contract(_network, ERC20ABI, web3Provider)
    } else {
        return undefined;
    }
}