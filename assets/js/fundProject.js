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

window.onload = async ( ) => {
    

const projectId = document.querySelector(".projectId").value 
const data1 = document.querySelector(".data1")
const data2 = document.querySelector(".p-info")
const data3 = document.querySelector(".t-info")
    web3 = new Web3 (window.ethereum)
   let accounts = await connectWallet()
    let account = accounts[0]

    crowdFundingContract = new web3.eth.Contract(crowdFundingABI, "0x54680E25106Ce038b60714f1d29dB08251A06222");
    const getCampaign = await crowdFundingContract.methods.campaigns(projectId).call();

    data1.innerHTML = `<div class="game-price-inner">
                        <div class="total-price">
                            <div class="price-inner d-flex mb-45">
                                <div class="image-icon">
                                    <img src="${getCampaign.image}" alt="icon-image" />
                                </div>
                                <div class="price-details">
                                    <h3 class="mb-15">${getCampaign.title}</h3>
                                    <div class="dsc">PRICE (ENSC) = 0.001282 USD</div>
                                </div>
                            </div>
                            <div class="all-raise mb-10"> Total Raise ${web3.utils.fromWei(`${getCampaign.amountCollected}`, "ether")} ENSC ( 0% )</div>
                        </div>
                        <div class="allocation-max text-center">
                            <img src="assets/images/project/icon-1.png" alt="icon-image" />
                            <div class="allocation">Allocation: 500 USD Min</div>
                        </div>
                        <div class="targeted-raise">
                            <div class="all-raise mb-10">Fund Ends In</div>
                            <div class="price-counter mb-48">
                                <div class="timer timer_1">
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
                            aria-valuemin="0" aria-valuemax="100" style="width: 0%">
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
                                        <li>Minimum Investment <span>20 ENSC</span></li>
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
}

const fund = async (  ) => {
    console.log();
    let input = document.querySelector(".amt").value;
    const projectId = document.querySelector(".projectId").value 
	try {
		let accounts = await connectWallet()
		let account = accounts[0];
		const web3 = new Web3(window.ethereum)
		let amount = web3.utils.toWei(`${input}`, "ether");

		const ensc_contract = new web3.eth.Contract(ERC20ABI, "0x1ABc74b4AC263A20dfA0EB275F10906472275273");
		const approval = await ensc_contract.methods.approve("0x54680E25106Ce038b60714f1d29dB08251A06222", amount).send({
			from: account
		})

		const fundCampaign = await crowdFundingContract.methods.donateToCampaign(projectId, amount).send({
			from: account
		})

		alert("Campaign funded successfully 🎉🎉");
	
	} catch (error) {
		console.error(error)
	}
}