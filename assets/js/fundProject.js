const crowdFundingABI = [
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_owner",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "_title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "_description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_target",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_deadline",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_image",
				"type": "string"
			}
		],
		"name": "createCampaign",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_amount",
				"type": "uint256"
			}
		],
		"name": "donateToCampaign",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "contract ERC20",
				"name": "_enscToken",
				"type": "address"
			},
			{
				"internalType": "address",
				"name": "_wallet",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
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
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "campaigns",
		"outputs": [
			{
				"internalType": "address",
				"name": "owner",
				"type": "address"
			},
			{
				"internalType": "string",
				"name": "title",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "description",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "target",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "deadline",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "amountCollected",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "image",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "enscToken",
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
		"name": "getCampaigns",
		"outputs": [
			{
				"components": [
					{
						"internalType": "address",
						"name": "owner",
						"type": "address"
					},
					{
						"internalType": "string",
						"name": "title",
						"type": "string"
					},
					{
						"internalType": "string",
						"name": "description",
						"type": "string"
					},
					{
						"internalType": "uint256",
						"name": "target",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "deadline",
						"type": "uint256"
					},
					{
						"internalType": "uint256",
						"name": "amountCollected",
						"type": "uint256"
					},
					{
						"internalType": "string",
						"name": "image",
						"type": "string"
					},
					{
						"internalType": "address[]",
						"name": "donators",
						"type": "address[]"
					},
					{
						"internalType": "uint256[]",
						"name": "donations",
						"type": "uint256[]"
					}
				],
				"internalType": "struct CrowdFunding.Campaign[]",
				"name": "",
				"type": "tuple[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_id",
				"type": "uint256"
			}
		],
		"name": "getDonators",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			},
			{
				"internalType": "uint256[]",
				"name": "",
				"type": "uint256[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "isDonator",
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
		"name": "numberOfCampaigns",
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
		"name": "wallet",
		"outputs": [
			{
				"internalType": "address payable",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
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
const VENDOR_ABI= [
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
var result;

window.onload = async ( ) => {

const projectId = document.querySelector(".projectId").value 
const data1 = document.querySelector(".data1")
const data2 = document.querySelector(".p-info")
const data3 = document.querySelector(".t-info")

var oracleRate;
var ensc_price;

web3 = new Web3 (window.ethereum)

	oracleContract = new web3.eth.Contract(VENDOR_ABI, "0xbcfc54a3671199218d4a24d3e1ccf93697cac392");
	oracleRate = await oracleContract.methods.USD_RATE().call()
	let price = 1/Number(oracleRate)
	ensc_price = price.toFixed(5)

    crowdFundingContract = new web3.eth.Contract(crowdFundingABI, "0x2Fd37f659Fb769E09D275be5D638b0E96D862acC");
    const getCampaign = await crowdFundingContract.methods.campaigns(projectId).call();
	var amountRaised = getCampaign.amountCollected;
	var target = getCampaign.target;
	var progress = ( ( amountRaised * 100 )/target).toFixed(2);
	var deadline = Number(getCampaign.deadline);
	  let endDate = new Date(deadline *1000)
	  let now = new Date().getTime();
	  let timeLeft = endDate - now;
	
	 
const solveTimeout = async ( ) => {
	
    crowdFundingContract = new web3.eth.Contract(crowdFundingABI, "0x2Fd37f659Fb769E09D275be5D638b0E96D862acC");
    const getCampaign = await crowdFundingContract.methods.campaigns(projectId).call();
	var deadline = Number(getCampaign.deadline);
	  let endDate = new Date(deadline *1000)
	  let now = new Date().getTime();
	  let timeLeft = endDate - now;
	   // Calculate days, hours, minutes, and seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
	if ( timeLeft <= 0 ){
	let days_ = document.querySelector("li.days")
	let hrs_ = document.querySelector("li.hours");
	let mins_ = document.querySelector("li.minutes");
	let secs_ = document.querySelector("li.seconds");
	days_.innerHTML =0 + '<small style="font-size:14px">D</small>';
	 hrs_.innerHTML = 0 +   '<small style="font-size:14px">H</small>';
	 mins_.innerHTML = 0+   '<small style="font-size:14px">M </small>';
	 secs_.innerHTML = 0 +   '<small style="font-size:14px">S</small>';

	}else{
	
	let days_ = document.querySelector("li.days")
	let hrs_ = document.querySelector("li.hours");
	let mins_ = document.querySelector("li.minutes");
	let secs_ = document.querySelector("li.seconds");
	days_.innerHTML = days +  '<small style="font-size:14px">D</small>';
	 hrs_.innerHTML = hours +   '<small style="font-size:14px">H </small>';
	 mins_.innerHTML = minutes +   '<small style="font-size:14px">M</small>';
	 secs_.innerHTML = seconds +   '<small style="font-size:14px">S</small>';

	}
}

	 
    data1.innerHTML = `<div class="game-price-inner">
                        <div class="total-price">
                            <div class="price-inner d-flex mb-45">
                                <div class="image-icon">
                                    <img src="${getCampaign.image}" alt="icon-image" />
                                </div>
                                <div class="price-details">
                                    <h3 class="mb-15">${getCampaign.title}</h3>
                                    <div class="dsc">PRICE (ENSC) = ${ensc_price} USD</div>
                                </div>
                            </div>
                            <div class="all-raise mb-10"> Total Raise ${web3.utils.fromWei(`${getCampaign.amountCollected}`, "ether")} ENSC ( ${progress} % )</div>
                        </div>
                        <div class="allocation-max text-center">
                            <img src="assets/images/project/icon-1.png" alt="icon-image" />
                        </div>
                        <div class="targeted-raise">
                            <div class="all-raise mb-10">Fund Ends In</div>
                            <div class="price-counter mb-48">
                                <div class="timer timer">
                                    <ul> 
                                        <li class="days"></li>
                                        <li class="hours"></li>
                                        <li class="minutes"></li>
                                        <li class="seconds"></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="targeted-raise text-end">
                                Targeted Raise ${web3.utils.fromWei(`${getCampaign.target}`, "ether")} ENSC
                            </div>
                        </div>
                    </div>
                    
                    
                <div class="progress-inner">
                    <div class="progress">
                        <div class="progress-bar progress-bar-striped" role="progressbar" aria-valuenow="43"
                            aria-valuemin="0" aria-valuemax="100" style="width: ${progress}%">
                        </div>
                    </div>
                </div>
                <div class="banner-bottom-content mt-40">
                    <div class="btn-area" data-bs-toggle="modal" data-bs-target="#fundingModal">
                        <a class="readon white-shape-small" href="#">
                            <span class="btn-text">Fund Project </span>
                            <span class="hover-shape1"></span>
                            <span class="hover-shape2"></span>
                            <span class="hover-shape3"></span>
                        </a>
                    </div>

                    <div class="social-area">
                        <ul class="social-icon-list">
                            <li><a href="#"><i class="icon-telegram"></i></a></li>
                            <!-- <li><a href="#"><i class="icon-twitter"></i></a></li>
                                <li><a href="#"><i class="icon-discord"></i></a></li>
                                <li><a href="#"><i class="icon-medium"></i></a></li>
                                <li><a href="#"><i class=" icon-world"></i></a></li> -->
                        </ul>
                    </div>
                </div>
                <span class="border-shadow shadow-1"></span>
                <span class="border-shadow shadow-2"></span>
                <span class="border-shadow shadow-3"></span>
                <span class="border-shadow shadow-4"></span>
                <span class="hover-shape-bg hover_shape1"></span>
                <span class="hover-shape-bg hover_shape2"></span>
                <span class="hover-shape-bg hover_shape3"></span>`;
    data2.innerHTML = `
    
    <div class="project-item">
                            <div class="project-info">
                                <h4 class="mb-30">Project Info <img src="assets/images/project/project-heading-image.png" alt="project" /></h4>
                            </div>
                            <div class="project-content">
                                <div class="project-media">
                                    <ul class="project-listing">
                                        <li>Address <span><img src="assets/images/project/icon.png" alt="project"/>${getCampaign.owner}</span></li>
                                        <li>Energy Fund type <span>Utility Scale Solar Farm</span></li>
                                        <li>CO2 Emissions(Kgs/Year) <span>492075</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>` ;           
    data3.innerHTML = `
     <div class="project-item">
                            <div class="project-info d-flex">
                                <h4 class="mb-20">Token Info <img src="assets/images/project/project-heading-image.png" alt="project"/></h4>
                            </div>
                            <div class="project-content">
                                <div class="project-media">
                                    <ul class="project-listing">
                                        <li>Token Name <span>ENSC Energy</span></li>
                                        <li>Token Symbol <span>ENSC</span></li>
                                        <li>Decimals <span>18</span></li>
                                        <li>Address <span><img src="assets/images/project/icon.png" alt="project"/>0x1ABc74b4AC263A20dfA0EB275F10906472275273</span></li>
                                        <li>Total Supply <span>20,000,000,000 ENSC</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>`

	const getDonators = await crowdFundingContract.methods.getDonators(projectId).call();

let donators = document.querySelector("ul.donators");

const addresses = getDonators[0];
const donations = getDonators[1];

// Iterate through the addresses and calculate total donations for each donator
addresses.forEach((address, index) => {
    const donationAmount = web3.utils.fromWei(donations[index], "ether");
    
    // Create a new list item element for each donator
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <h4><span><img src="assets/images/icons/avater-2.svg" alt=""></span>${address.substring(0, 5)}....${address.slice(-5) }</h4>
        <h5>ENSC</h5>
        <h6>Amount: ${donationAmount}</h6>
    `;

    // Append the current list item to the donators list
    donators.appendChild(listItem);
});


const fundMarkup = document.querySelector(".fundProject");
fundMarkup.onclick = async (  ) => {
    let input = document.querySelector(".amt").value;
    const projectId = document.querySelector(".projectId").value 
	try {
		let accounts = await connectWallet()
		let account = accounts[0];
		const web3 = new Web3(window.ethereum)
		let amount = web3.utils.toWei(`${input}`, "ether");
		console.log(projectId, "id")
		const ensc_contract = new web3.eth.Contract(ERC20ABI, "0x1ABc74b4AC263A20dfA0EB275F10906472275273");
		const approval = await ensc_contract.methods.approve("0x2Fd37f659Fb769E09D275be5D638b0E96D862acC", amount).send({
			from: account
		})

		const fundCampaign = await crowdFundingContract.methods.donateToCampaign(projectId, amount).send({
			from: account
		})

		alert("Campaign funded successfully 🎉🎉");
		// getDonators()
	} catch (error) {
		console.error(error)
	}
}


	 setInterval( () => { solveTimeout() }, 1000)
	  
	 if ( timeLeft <= 0 ){
		clearInterval(solveTimeout)
		result = ( {days:0, hours: 0, minutes: 0, seconds : 0 } )
	 }
}