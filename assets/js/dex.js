const coinGeckoAPI = "https://api.coingecko.com/api/v3/simple/price?ids=tether&vs_currencies=ngn";
const _VENDOR_ABI=[
	{
		"inputs": [
			{
				"internalType": "address payable",
				"name": "_wallet",
				"type": "address"
			},
			{
				"internalType": "address payable",
				"name": "_feesWallet",
				"type": "address"
			},
			{
				"internalType": "contract ERC20",
				"name": "_token",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_usdc",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_usdt",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_usdRate",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_purchaseStartTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_purchaseEndTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_lockupPeriod",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "purchaser",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "beneficiary",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokens",
				"type": "uint256"
			}
		],
		"name": "TokenPurchase",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "vendor",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "beneficiary",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "tokens",
				"type": "uint256"
			}
		],
		"name": "TokenSwapped",
		"type": "event"
	},
	{
		"inputs": [],
		"name": "ENSC_Token",
		"outputs": [
			{
				"internalType": "contract ERC20",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "ENSC_Wallet",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_beneficiary",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_tokens",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_fee",
				"type": "uint256"
			}
		],
		"name": "Exachange_eNaira_For_ENSC",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_beneficiary",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amountOut",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_fee",
				"type": "uint256"
			}
		],
		"name": "Exchange_ENSC_For_eNaira",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_tokenIn",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amountIn",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_amountOut",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_fee",
				"type": "uint256"
			}
		],
		"name": "Exchange_For_ENSC",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract ERC20",
				"name": "_tokenOut",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "_amountIn",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_amountOut",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_fee",
				"type": "uint256"
			}
		],
		"name": "Exchange_From_ENSC",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "USDC",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "USDT",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "USD_RATE",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "tokenAddress",
				"type": "address"
			}
		],
		"name": "addTokenToWhitelist",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "allowedTokens",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "blacklistAddress",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "blacklistCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "fees_Wallet",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "isBlacklisted",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "lockupPeriod",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "purchaseEndTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "purchaseStartTime",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_address",
				"type": "address"
			}
		],
		"name": "removeAddressFromBlacklist",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "tokenAddress",
				"type": "address"
			}
		],
		"name": "removeTokenFromWhitelist",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_usdt",
				"type": "address"
			}
		],
		"name": "setUSDC",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_usdt",
				"type": "address"
			}
		],
		"name": "setUSDT",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_time",
				"type": "uint256"
			}
		],
		"name": "updateLockPeriod",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_time",
				"type": "uint256"
			}
		],
		"name": "updatePurchaseEndTime",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_time",
				"type": "uint256"
			}
		],
		"name": "updatePurchaseStartTime",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_newRate",
				"type": "uint256"
			}
		],
		"name": "updateRate",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "weiSold",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "whitelistedTokenCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "withdrawBalance",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]

const BEP20ABI =[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "tName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "tSymbol",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "cap",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "cap",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "destroy",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "mintMore",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]

 const ERC20ABI =[
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "tName",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "tSymbol",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "cap",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Approval",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": true,
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"indexed": true,
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "value",
				"type": "uint256"
			}
		],
		"name": "Transfer",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			}
		],
		"name": "allowance",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "approve",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "account",
				"type": "address"
			}
		],
		"name": "balanceOf",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "burn",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "cap",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "decimals",
		"outputs": [
			{
				"internalType": "uint8",
				"name": "",
				"type": "uint8"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "subtractedValue",
				"type": "uint256"
			}
		],
		"name": "decreaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "destroy",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "spender",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "addedValue",
				"type": "uint256"
			}
		],
		"name": "increaseAllowance",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "mintMore",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "name",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "symbol",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalSupply",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transfer",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "from",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "to",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "amount",
				"type": "uint256"
			}
		],
		"name": "transferFrom",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"stateMutability": "payable",
		"type": "receive"
	}
]
const whitelistedTokens = [
             
              {
                ca: "0x64544969ed7EBf5f083679233325356EbE738930",
                decimal: 6,
                logo : "usdc.png",
                name: " USD Coin",
                symbol: "USDC",
                decimal: 18
              },   
                  {
                ca: "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd",
                decimal: 6,
                logo: "usdt.png",
                name : "Tether USD₮",
                symbol : "USDT",
                decimal: 6
              }  
]

const usdc_contractAddress = "0x64544969ed7EBf5f083679233325356EbE738930";
const usdt_contractAddress = "0x337610d27c682E347C9cD60BD4b3b107C9d34dDd";
const ensc_contractAddress = "0x1E3c63162310e116ab8278a8D522817d8D4c0635";
const _ensc_vendor_contractAddress = "0xD1c0db31c48b97Fc30b07C5fb4115DB6Cb389dF6";
//0x5c0be7e91E596b4e4187eAd554A2cE865a24FB41
//0x1E3c63162310e116ab8278a8D522817d8D4c0635 token
const findButton = document.querySelector(".find");
var tokenOUT = document.querySelector("#tokenOut")
var TokenInInput = document.querySelector("#tokenIn ")
const spin = document.querySelector(".spin")
var tokens = document.querySelector(".tokens")
var token = document.querySelectorAll(".token");
const bal = document.querySelector(".bal")
var logo1 = document.querySelector("#logo1")
const connectBtn  = document.querySelector("#connect")
const form = document.querySelector("form")
const loader = document.querySelector(".loader_first")
 var fee;
 var _fee;
 var txFee;
var _web3;
var Address;
var tokenIN;
var tokenInCA;
var usdc_contract;
var usdt_contract;
var usdc_bal;
var usdt_bal;
var TokenBalance;
var symbol;
var  amountIn;
var amountOut;
var tokenIn;
var tokenOut;
var contractAddress;
var ensc_contract;
var ensc_vendor_contract;
var vendorCA = "0xbcfc54a3671199218d4a24d3e1ccf93697cac392"
var enscCA = "0x1ABc74b4AC263A20dfA0EB275F10906472275273"
// const __error = ( error ) => {
//     console.error(error)
// };


findButton.onclick = ( e ) => {
    console.log("clicked")
    e.preventDefault();
    tokens.innerHTML = ""
    whitelistedTokens.forEach( (token ) => {
        tokens.innerHTML += `
                           <div class="token box" onclick="setData({name: '${token.name}', ca: '${token.ca}', 
                           logo: '${token.logo}', symbol: '${token.symbol}', decimal: '${token.decimal}' })"> 
                                <div class="img">
                                    <img src="assets/images/${token.logo}" alt="">
                                </div>
                                <div class="name ml-2">${token.symbol}</div>
                            </div>`
    })
 tokens.classList.toggle("hide")
}

const setTokenOut = async ( e ) => {
	tokenOut = e;
}

const setData =  async ( e ) => {
	tokenIn = e
    tokenInCA = e.ca;
   tokens.classList.toggle("hide")
    findButton.innerHTML = `${ e.name } <i class="fa-solid fa-angle-down ml-2"></i>`;
    TokenBalance = await fetchBal(tokenInCA);
   TokenInInput.placeholder = ` ${e.name} bal: ${TokenBalance}`;
}

const fetchBal = async ( _contractAddress ) => {
    var accounts = await connectWallet();
    Address = accounts[0]
    _web3 = new Web3(window.ethereum)
    console.log(_web3)
          if ( _contractAddress == usdt_contractAddress ){
    console.log(_contractAddress, "ca")
         _contract = new _web3.eth.Contract(BEP20ABI, _contractAddress );
         _token_bal = await _contract.methods.balanceOf(Address).call({
            from:Address
         })
         console.log(_token_bal, "bal2")
         let _bal = _web3.utils.fromWei(_token_bal, "ether");
         return (_bal)
          }else {
         _contract = new _web3.eth.Contract(ERC20ABI, _contractAddress );
         _token_bal = await _contract.methods.balanceOf(Address).call()
         let _bal = _web3.utils.fromWei(_token_bal, "ether");
         return (_bal)
          }
}



form.onsubmit = async ( e ) => {
	 e.preventDefault();
	  let tokenInSymbol = tokenIn.symbol;
	   
	  switch (tokenInSymbol) {
		case "USDT":
			try {
			let _amountIn = _web3.utils.toWei(`${Number(amountIn)}`, "ether");
			let _amountOut = _web3.utils.toWei(`${Number(amountOut)}`, "ether");
			let txFee = _web3.utils.toWei(`${_fee}`, "ether");
			let _tokenIn = tokenIn.ca;
		_contract = new _web3.eth.Contract(BEP20ABI, _tokenIn );
        ensc_vendor_contract = new _web3.eth.Contract(_VENDOR_ABI, vendorCA)
		     //check if _amountOut is valid number
			 if ( _amountOut !== null ){
				loader.style.display = "flex" 
			//check allowance level
			let allowance = await _contract.methods.allowance(Address, vendorCA).call();
			loader.style.display = "none" 
			if ( Number(allowance) >= Number(_amountIn) ){
				//procced with exchange
				loader.style.display = "flex" 
			await ensc_vendor_contract.methods.Exchange_For_ENSC ( _tokenIn, _amountIn, _amountOut, txFee ).send({
				from: Address
			});
			loader.style.display = "none" 
				fetchBal(enscCA)
			}else {
				loader.style.display = "flex" 
			//seek approval to spend amountIn from user balance
			await _contract.methods.approve(vendorCA, _amountIn).send({
				from: Address
			});
			// Vendors has been approved to spend  balance ENSC balance of onlyOwner
			//procced with exchange
			await ensc_vendor_contract.methods.Exchange_For_ENSC ( _tokenIn, _amountIn, _amountOut, txFee ).send({
				from: Address
			});
			loader.style.display = "none" 
				fetchBal(enscCA)
				alert("Transaction  successful 🎉🎉")
		 }
		
			 }else{
				
				loader.style.display = "none" 
				alert("calulating amount out.")
			 }
			} catch (error) {
				loader.style.display = "none" 
				alert("Transaction Failed ❌")
				console.error(error.message);
			}
			break;
		case "ENSC" : 
		try {
            
			let _amountIn = _web3.utils.toWei(`${Number(amountIn)}`, "ether");
			let _amountOut = _web3.utils.toWei(`${Number(amountOut)}`, "ether");
			let txFee = _web3.utils.toWei(`${_fee}`, "ether");
			let _tokenOut = tokenOut.ca;
            ensc_vendor_contract = new _web3.eth.Contract(_VENDOR_ABI, vendorCA)
            ensc_contract = new _web3.eth.Contract(ERC20ABI, enscCA)
			 if ( _amountOut !== null ){
				loader.style.display = "flex" 
			//check allowance
			let allowance = await ensc_contract.methods.allowance(Address, enscCA).call()
			if( Number(allowance) >= Number(_amountIn) ){
			
				//proceed to swapping
				await ensc_vendor_contract.methods.Exchange_From_ENSC ( _tokenOut, _amountIn, _amountOut, txFee  ).send({
				from: Address
			 })
			 loader.style.display = "none" 
			 fetchBal(usdt_contractAddress)
			 alert("Transaction successful 🎉🎉")
			}else{
		     //check if _amountOut is valid number
		    //seek permision to spend ENSC balance of msg.sender	
			loader.style.display = "flex" 
			await ensc_contract.methods.approve(vendorCA, _amountIn).send({
				from:Address
			})
			
		//vendor has permission to spend ENSC tokens 
		//Ensure vendor has permission to spend ERC20 token from  Wallet
		//so proceed
			await ensc_vendor_contract.methods.Exchange_From_ENSC ( _tokenOut, _amountIn, _amountOut, txFee ).send({
				from: Address
			 })
			 loader.style.display = "none" 
			 fetchBal(usdt_contractAddress)
			 alert("Transaction successful 🎉🎉")
			}
			 }else{
				alert("calulating amount out.")
			 }
			} catch (error) {
				console.error(error.message);
				alert("Transaction Failed ❌")
			}
			break;
		default:
			break;
	  }

}
const From = document.querySelector("#tokenIn")
const To = document.querySelector("#tokenOUT");

TokenInInput.onkeyup = async ( ) => {
    To.disabled = "true"

    symbol = tokenIn.symbol;
    console.log(symbol)
    switch (symbol) {
        case "USDT":
            rates = await fetch(coinGeckoAPI);
            _rate = await rates.json()
            console.log(_rate)
            rate = _rate.tether.ngn;
            amountIn = parseFloat( `${From.value}` );
            console.log(rate)
			 fee = amountIn * 0.01;
			 _fee = parseFloat(fee) * parseFloat(rate);
			console.log(_fee, "fee"); 
            amountOut =  (parseFloat(amountIn) * parseFloat(rate)) - _fee;
			console.log(amountOut, "out")
            To.value = amountOut;
            break;
    
            case "ENSC": 
             rates = await fetch(coinGeckoAPI);
            _rate = await rates.json()
            rate = _rate.tether.ngn;
            amountIn = parseFloat( `${From.value}` );
            console.log(rate)
			 fee = amountIn * 0.01;
			 _fee = parseFloat(fee) / parseFloat(rate);
			 console.log(_fee,"fee");
            amountOut = (parseFloat(amountIn) / parseFloat(rate)) - _fee ;
			console.log(amountOut, "out")
            To.value = amountOut;
            break;

        default:
            break;
    }
}

 const spinUp = (  ) => {
    setTokenOut(tokenIn);
    spin.style.transitionDuration = "2s"
    spin.style.rotate = '360deg';
    tokenOut.innerHTML = tokenIn.symbol;
    logo1.src= `assets/images/${tokenIn.logo}`;
    findButton.innerHTML = "ENSC Energy";
    findButton.disabled="true"
    To.disabled = "true"
     tokens.classList.toggle("hide")
    setData({name: 'ENSC Energy', ca: ensc_contractAddress, 
                logo: 'assets/images/ENSC.png', symbol: 'ENSC', decimal: '18' })
    From.placeholder = " From ENSC Energy"

    bal.innerHTML = `Balance: <span id="bal">${ TokenBalance}</span>`;
}

