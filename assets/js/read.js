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

var price;
var title;
var target;
var owner;
var img;
var deadline;
var _deadline;
var description;
var price;
var web3;
var account;
var amountRaised;
var oracleRate;
var ensc_price;

window.onload = async ( ) => {
    const campaigns = document.querySelector("#campaigns");
	const openIGO = document.querySelector("#openIGO");
	const past = document.querySelector(".past-igo");

    campaigns.innerHTML = "";
	openIGO.innerHTML = "";
    web3 = new Web3 (window.ethereum)
   let accounts = await connectWallet()
    account = accounts[0]

	let oracleContract = new web3.eth.Contract(VENDOR_ABI, "0xbcfc54a3671199218d4a24d3e1ccf93697cac392");
	oracleRate = await oracleContract.methods.USD_RATE().call()
	let price = 1/Number(oracleRate)
	ensc_price = price.toFixed(5)
	console.log(ensc_price, "price")

    crowdFundingContract = new web3.eth.Contract(crowdFundingABI, "0x54680E25106Ce038b60714f1d29dB08251A06222");
    const numberOfCampaigns = await crowdFundingContract.methods.numberOfCampaigns().call()
    for ( i =1; i < Number(numberOfCampaigns); i++ ){    
       
        const campaign = await crowdFundingContract.methods.campaigns(i).call();
        title = campaign.title;
        target = web3.utils.fromWei(`${campaign.target}`, "ether");
        owner = campaign.owner
        img = campaign.image
        _deadline = campaign.deadline;
        description = campaign.description
        amountRaised = web3.utils.fromWei(`${campaign.amountCollected}`, "ether") 
        
//    //calculate timeOut
    deadline = await calculateTimeStamp(_deadline)
        campaigns.innerHTML += `
               <div class="col-lg-4 col-md-6">
                                <div class="project-shape-item hover-shape-border">
                                    <div class="project-item ">
                                        <div class="project-info">
                                            <a href="${i}-project-details.html"><img src="${img}" alt="Explore-Image" /></a>
                                            <div class="project-auother">
                                                <h4 class="mb-10"><a href="${i}-project-details.html">${title}</a></h4>
                                                <div class="dsc">PRICE (ENSC) = ${ensc_price} USD</div>
                                            </div>
                                        </div>
                                        <div class="project-content">
                                            <div class="project-header d-flex justify-content-between">
                                                <div class="heading-title">
                                                    <h4 >${deadline}</h4>
                                                </div>
                                                <div class="project-icon">
                                                    <img src="assets/images/project/project-single-image4.png" alt="Project-Image" />
                                                </div>
                                            </div>
                                            <div class="project-media">
                                                <ul class="project-listing">
                                                    <li>Energy Fund <span >${description}</span></li>
                                                    <li>Min investment <span>500 USD</span></li>
                                                    <li>Targeted raise <span >${target}</span></li>
                                                    <li id="full-description-1">Saraswati Group of Colleges, established in 2004, offers diverse professional courses in fields like Ayurveda, Nursing, Pharmacy</li>                                                </ul>
                                            </div>
                                        </div>
                                        <span class="border-shadow shadow-1"></span>
                                        <span class="border-shadow shadow-2"></span>
                                        <span class="border-shadow shadow-3"></span>
                                        <span class="border-shadow shadow-4"></span>
                                    </div>
                                    <div class="icon-listing">            
                                        <ul class="social-icon-list">
                                            <li><a href="#"><i class="icon-telegram"></i></a></li>
                                            <li><a href="#"><i class="icon-twitter"></i></a></li>
                                            <li><a href="#"><i class="icon-discord"></i></a></li>
                                            <li><a href="#"><i class="icon-medium"></i></a></li>
                                            <li><a href="#"><i class="icon-world"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <span class="border-shadow shadow-1"></span>
                                <span class="border-shadow shadow-2"></span>
                                <span class="border-shadow shadow-3"></span>
                                <span class="border-shadow shadow-4"></span>
                            </div>
        `;
		openIGO.innerHTML += `
               <div class="col-lg-4 col-md-6">
                                <div class="project-shape-item hover-shape-border">
                                    <div class="project-item ">
                                        <div class="project-info">
                                            <a href="${i}-project-details.html"><img src="${img}" alt="Explore-Image" /></a>
                                            <div class="project-auother">
                                                <h4 class="mb-10"><a href="${i}-project-details.html">${title}</a></h4>
                                                <div class="dsc">PRICE (ENSC) = ${ensc_price} USD</div>
                                            </div>
                                        </div>
                                        <div class="project-content">
                                            <div class="project-header d-flex justify-content-between">
                                                <div class="heading-title">
                                                    <h4 >${deadline}</h4>
                                                </div>
                                                <div class="project-icon">
                                                    <img src="assets/images/project/project-single-image4.png" alt="Project-Image" />
                                                </div>
                                            </div>
                                            <div class="project-media">
                                                <ul class="project-listing">
                                                    <li>Energy Fund <span >${description}</span></li>
                                                    <li>Min investment <span>500 USD</span></li>
                                                    <li>Targeted raise <span >${target}</span></li>
                                                    <li id="full-description-1">Saraswati Group of Colleges, established in 2004, offers diverse professional courses in fields like Ayurveda, Nursing, Pharmacy</li>                                                </ul>
                                            </div>
                                        </div>
                                        <span class="border-shadow shadow-1"></span>
                                        <span class="border-shadow shadow-2"></span>
                                        <span class="border-shadow shadow-3"></span>
                                        <span class="border-shadow shadow-4"></span>
                                    </div>
                                    <div class="icon-listing">            
                                        <ul class="social-icon-list">
                                            <li><a href="#"><i class="icon-telegram"></i></a></li>
                                            <li><a href="#"><i class="icon-twitter"></i></a></li>
                                            <li><a href="#"><i class="icon-discord"></i></a></li>
                                            <li><a href="#"><i class="icon-medium"></i></a></li>
                                            <li><a href="#"><i class="icon-world"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <span class="border-shadow shadow-1"></span>
                                <span class="border-shadow shadow-2"></span>
                                <span class="border-shadow shadow-3"></span>
                                <span class="border-shadow shadow-4"></span>
                            </div>
        `;
    }

	const pastIGO = await crowdFundingContract.methods.campaigns(0).call()
      let  title_ = pastIGO.title;
      let  target_ = web3.utils.fromWei(`${pastIGO.target}`, "ether");
      let owner_ = pastIGO.owner
      let  img_ = pastIGO.image
      let  description_ = pastIGO.description
      let  deadline_ = await calculateTimeStamp( pastIGO.deadline);
      let  amountRaised_ = web3.utils.fromWei(`${pastIGO.amountCollected}`, "ether") 
	  past.innerHTML += `
               <div class="col-lg-4 col-md-6">
                                <div class="project-shape-item hover-shape-border">
                                    <div class="project-item ">
                                        <div class="project-info">
                                            <a href="${0}-project-details.html"><img src="${img_}" alt="Explore-Image" /></a>
                                            <div class="project-auother">
                                                <h4 class="mb-10"><a href="${0}-project-details.html">${title_}</a></h4>
                                                <div class="dsc">PRICE (ENSC) = ${ensc_price} USD</div>
                                            </div>
                                        </div>
                                        <div class="project-content">
                                            <div class="project-header d-flex justify-content-between">
                                                <div class="heading-title">
                                                    <h4 >${deadline_}</h4>
                                                </div>
                                                <div class="project-icon">
                                                    <img src="assets/images/project/project-single-image4.png" alt="Project-Image" />
                                                </div>
                                            </div>
                                            <div class="project-media">
                                                <ul class="project-listing">
                                                    <li>Energy Fund <span >${description_}</span></li>
                                                    <li>Min investment <span>500 USD</span></li>
                                                    <li>Targeted raise <span >${target_}</span></li>
                                                    <li id="full-description-1">Saraswati Group of Colleges, established in 2004, offers diverse professional courses in fields like Ayurveda, Nursing, Pharmacy</li>                                                </ul>
                                            </div>
                                        </div>
                                        <span class="border-shadow shadow-1"></span>
                                        <span class="border-shadow shadow-2"></span>
                                        <span class="border-shadow shadow-3"></span>
                                        <span class="border-shadow shadow-4"></span>
                                    </div>
                                    <div class="icon-listing">            
                                        <ul class="social-icon-list">
                                            <li><a href="#"><i class="icon-telegram"></i></a></li>
                                            <li><a href="#"><i class="icon-twitter"></i></a></li>
                                            <li><a href="#"><i class="icon-discord"></i></a></li>
                                            <li><a href="#"><i class="icon-medium"></i></a></li>
                                            <li><a href="#"><i class="icon-world"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                                <span class="border-shadow shadow-1"></span>
                                <span class="border-shadow shadow-2"></span>
                                <span class="border-shadow shadow-3"></span>
                                <span class="border-shadow shadow-4"></span>
                            </div>
        `;
}

const calculateTimeStamp = async ( _timestamp ) => {
     try {
    const blockNumber = await web3.eth.getBlockNumber();
    const block = await web3.eth.getBlock(blockNumber);
    if (block) {

      const timestamp = block.timestamp;

      let timeleftInSecs = Number(_timestamp) - Number(timestamp)

      let timeleftInMins = timeleftInSecs/60

      let timeleftInHrs = timeleftInSecs/3600

      let timeleftInDays = timeleftInHrs/24

      if ( timeleftInDays >= 1 ){
         return Math.round(timeleftInDays) + " Days Left";
      }
      else if ( timeleftInHrs >= 1 ) {
         return Math.round(timeleftInHrs) + " Hours Left";
      }
      else if ( timeleftInMins >= 1 ) {
        return Math.round(timeleftInMins) + " Mins Left";
      }else if( timeleftInSecs >= 1 ){
        return (  Math.round( timeleftInSecs ) + " Secs Left")
      }else{
        return "Just concluded";
      }
     
    } else {
      console.error(`Block ${blockNumber} not found`);
      return null;
    }
  } catch (error) {
    console.error('Error occurred while fetching current block timestamp:', error);
    throw error;
  }
}