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
window.onload = async ( ) => {
    const campaigns = document.querySelector("#campaigns");
    campaigns.innerHTML = "";
    web3 = new Web3 (window.ethereum)
   let accounts = await connectWallet()
    account = accounts[0]

    crowdFundingContract = new web3.eth.Contract(crowdFundingABI, "0x54680E25106Ce038b60714f1d29dB08251A06222");
    const numberOfCampaigns = await crowdFundingContract.methods.numberOfCampaigns().call()

   console.log(numberOfCampaigns, "number of campaigns")
    for ( i =0; i < Number(numberOfCampaigns); i++ ){    
        console.log(i)
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
                                                <h4 class="mb-10"><a href="${0}-project-details.html">${title}</a></h4>
                                                <div class="dsc">PRICE (ENSC) = 0.001282 USD</div>
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

}

const calculateTimeStamp = async ( _timestamp ) => {
     try {
    const blockNumber = await web3.eth.getBlockNumber();
    const block = await web3.eth.getBlock(blockNumber);
    if (block) {

      const timestamp = block.timestamp;
      console.log(`Timestamp of the current block (${blockNumber}): ${timestamp}`);
      console.log(_timestamp, "project deadline");

      let timeleftInSecs = Number(_timestamp) - Number(timestamp)
      console.log(timeleftInSecs, "in secs")

      let timeleftInMins = timeleftInSecs/60
      console.log(timeleftInMins, "in mins")

      let timeleftInHrs = timeleftInSecs/3600
      console.log(timeleftInHrs, "in Hrs")

      let timeleftInDays = timeleftInHrs/24
      console.log(timeleftInDays)

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