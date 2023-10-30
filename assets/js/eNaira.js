
    const VENDOR_ABI2 =[
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
var provider ="https://bsc-testnet.publicnode.com";
 let web3 = new Web3(provider)
const  vendorCA = "0xbcfc54a3671199218d4a24d3e1ccf93697cac392"
const contract = new web3.eth.Contract(VENDOR_ABI2, vendorCA)
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

var sender = "0x78EeF3BA63473733D236C6a9F6f602a8881129c8";
var geckoAPI = "https://api.coingecko.com/api/v3/simple/price?ids=tether%2Cbinancecoin&vs_currencies=ngn";
 let amount;
 let  beneficiary
 let eNairaWalletID;
 let receipt;
var nonce;
var gas;
var gasPrice;
var TOTAL;
var bnb_ngn;
var usdt_ngn;
var encodedABI;
var to_eNaira = false;
const loader = document.querySelector(".loader_first")
const fromTop = document.querySelector(".fromTop");

 const _setAmount = (  ) => {
    amount = document.querySelector("#amountIn").value
 }
 const _setBeneficiary = (  ) => {
 beneficiary = document.querySelector("#beneficiary").value;  
 }

const _setEnairaWalletID = () => {
 eNairaWalletID = document.querySelector("#eNairaID").value
}

fromTop.innerHTML = `    <form class="form box smallbox">
                        <div>ENSC CA: <small><i class="larger"> 0xbcfc54a3671199218d4a24d3e1ccf93697cac392 </i></small></div>
                        <input id="amountIn" onkeyup="_setAmount()"  type="text" class="mt-3 input is-info" placeholder="amount in" required/>
                        <input id="beneficiary" onkeyup="_setBeneficiary()" type="text" class="mt-3 input is-info " placeholder="Beneficiary ENSC wallet address" required/>
                         <button class=" button  is-info is-light is-fullwidth mt-2"  > Proceed swap  
                        <img class="ml-5" src="assets/images/eNaira.png" height="30" width="30" priority="true" alt="ENSC logo" />  
                            <i class="fa-solid fa-arrow-right ml-3 larger has-text-info"></i>
                        <img class="ml-5" src="assets/images/ENSC.png" height="30" width="30" priority="true" alt="eNaira logo" /> 
                        </button>
                    </form>`;

const updateTo_eNaira = ( ) => {
    console.log(to_eNaira)
    to_eNaira = !to_eNaira;
    to_eNaira ? fromTop.innerHTML = `  <form class="form box smallbox">
                        <div>ENSC CA: <small><i class="larger"> 0xbcfc54a3671199218d4a24d3e1ccf93697cac392 </i></small></div>
                        <input id="amountIn" onkeyup="_setAmount()"  type="text" class="mt-3 input is-info" placeholder="amount in" required/>
                        <input id="eNairaID" onkeyup="_setEnairaWalletID()" type="text" class="mt-3 input is-info" placeholder="eNaira Wallet ID" required/>
                         <button class=" button  is-info is-light is-fullwidth mt-2"  onclick="verifyBeneficiaryBankAcct()"> Proceed swap  
                        <img class="ml-5" src="assets/images/ENSC.png" height="30" width="30" priority="true" alt="eNaira logo" /> 
                            <i class="fa-solid fa-arrow-right ml-3 larger has-text-info"></i>
                        <img class="ml-5" src="assets/images/eNaira.png" height="30" width="30" priority="true" alt="ENSC logo" />  
                        </button>
                    </form>` : fromTop.innerHTML = `    <form class="form box smallbox">
                        <div>ENSC CA: <small><i class="larger"> 0xbcfc54a3671199218d4a24d3e1ccf93697cac392 </i></small></div>
                        <input id="amountIn" onkeyup="_setAmount()"  type="text" class="mt-3 input is-info" placeholder="amount in" required/>
                        <input id="beneficiary" onkeyup="_setBeneficiary()" type="text" class="mt-3 input is-info " placeholder="Beneficiary ENSC wallet address" required/>
                         <button class=" button  is-info is-light is-fullwidth mt-2"  > Proceed swap  
                        <img class="ml-5" src="assets/images/eNaira.png" height="30" width="30" priority="true" alt="ENSC logo" />  
                            <i class="fa-solid fa-arrow-right ml-3 larger has-text-info"></i>
                        <img class="ml-5" src="assets/images/ENSC.png" height="30" width="30" priority="true" alt="eNaira logo" /> 
                        </button>
                    </form>
             <script src="https://checkout.flutterwave.com/v3.js"></script>`;
}
const fetchPrices = async () => {
    const payload = await fetch(geckoAPI);
   let prices = await payload.json()
  bnb_ngn = await prices.binancecoin.ngn
  usdt_ngn = await prices.tether.ngn
   console.log(usdt_ngn, "usdt", bnb_ngn, "bnb")
}

const _error = ( msg ) => {
    console.error(msg)
}

const form = document.querySelector("form");

form.onsubmit = async ( e ) => {
    e.preventDefault();
   loader.style.display = "flex" 
   await  fetchPrices()
	const fee = Number(amount) * 0.01;
    console.log(fee, "fee")
	let amountOut =  Number(amount) - fee;
    const _amountOut = web3.utils.toWei(`${amountOut}`, "ether");
	let _fee = web3.utils.toWei(`${fee}`, "ether");
    //vaidate address
   let validAddress = web3.utils.isAddress(`${beneficiary}`);
    if (validAddress == true) {
        beneficiary = beneficiary
       
     let query = contract.methods.Exachange_eNaira_For_ENSC(`${beneficiary}`,_amountOut, _fee);
    //ENCODE CONTRACT ABI
    encodedABI = query.encodeABI()
    const transaction = {
        from: sender,
        to: vendorCA,
        gas: 21000,
        data: encodedABI
    }

    await web3.eth.getTransactionCount(sender, 'latest').then(_nonce =>{
        nonce = _nonce 
    })
    //check gas price or txcost
    await web3.eth.estimateGas({ transaction }).then(async (_gas) => {
       gas = _gas;
    });
    await web3.eth.getGasPrice().then(async (price) => {
        gasPrice = price;
    })

    var gasFee = gas * gasPrice;
     let  _toString = gasFee.toString();
     console.log(gasFee, "gasfee", _toString, "toString")
    let to1e18 = web3.utils.fromWei(_toString, "ether")
    let TX_FEE_TO_NGN = to1e18 * bnb_ngn;
    TOTAL = Math.round(parseFloat(TX_FEE_TO_NGN) + parseFloat(amount));
   //proceed to payment gateway
   loader.style.display = "none" 
    proceed()
    } else {
        beneficiary = ""
        _error(" Invalid Address")
    }
fetchPrices();
}

//beneficiary:0x9c6c3180d81C9649E931eA932aDE739E6C8250d9
const  proceed = async () => {
       let Random = parseInt(Math.random() * 1000)
        FlutterwaveCheckout({
            public_key: "FLWPUBK_TEST-cd94ba5d8645e63dfcfa7ddc95de6f19-X",
            tx_ref: `ENSC-${Random}Token`,
            amount: TOTAL,
            currency: "NGN",
            payment_options: "card, mobilemoneyghana, ussd,enaira",
            callback: function (payment) {
                // Send AJAX verification request to backend
                verifyTransactionOnBackend(payment);
            },
            onclose: function (incomplete) {
                if (incomplete || window.verified === false) {
                    console.error("payment failed")
                } else {
                   console.warn("payment failed")
                }
            },
            meta: {
                consumer_id: beneficiary,
                consumer_mac: "92a3-912ba-1192a",
            },
            customer: {
                email: "rose@unsinkableship.com",
                phone_number: "08102909304",
                name: "Rose DeWitt Bukater",
            },
            customizations: {
                title: "ENSC ENERGY",
                description: "Payment For ENSC Token",
                logo: "https://www.logolynx.com/images/logolynx/22/2239ca38f5505fbfce7e55bbc0604386.jpeg",
            },
        });

    }

// const proceed = () => { verifyTransactionOnBackend ( {status:"successful"}) }
const  verifyTransactionOnBackend = async (transaction) => {
        if (transaction.status == "successful") {
            // TRANSACTION CREATION
			loader.style.display = "none" 
            const tx = {
                from: beneficiary,
                to: vendorCA,
                data: encodedABI,
                gas: gas,
                nonce: nonce,
                gasLimit: 100000,
                maxPriorityFeePerGas: '0x3b9aca00',
                maxFeePerGas: '0x2540be400'
            };
            // Sign and send the transaction
            web3.eth.accounts.signTransaction(tx, "a03ccc4fd6704ff2ca56cc6b36db9cac788c1cd02a5a592286c066732ea5fcb3")
                .then((signedTx) => {
                    console.log( "Transaction Hash", signedTx.rawTransaction)
                    
                    web3.eth.sendSignedTransaction(signedTx.rawTransaction)
                        .on('receipt', (receipt) => {
                            console.log('Transaction receipt:', receipt);
							loader.style.display = "none" 
                            alert("Transaction successful 🎉");
                        })
                        .on('error', (error) => {
                            console.error('Transaction error:', error);
							loader.style.display = "none" 
							alert("Transaction Failed ❌")
                        });
                })
                .catch((error) => {
                    console.error('Transaction signing error:', error);
					loader.style.display = "none";
					alert("Transction Failed ❌") 
                });
        }
    }  

var account;
var _bep20Contract;

const verifyBeneficiaryBankAcct = async (  ) => {
	loader.style.display = "flex" 
    try {
	const accounts = await connectWallet()
	account = accounts[0];
	
	web3 = new Web3(window.ethereum)
	_bep20Contract = (ContractAddress) => {
    return new web3.eth.Contract(BEP20ABI, ContractAddress);
}
        const _contract = _bep20Contract("0x1ABc74b4AC263A20dfA0EB275F10906472275273");
        const tokenBal = await _contract.methods.balanceOf(account).call()
       let amountIn = web3.utils.toWei(`${amount}`, 'ether');
        if( Number(amountIn) > Number(tokenBal)){
			loader.style.display = "none" 
            return (alert("You are trying to withdraw more than you own?"))
        }else{
          
        try{
  const url = 'https://corsproxy.io/?' + encodeURIComponent('https://api.flutterwave.com/v3/accounts/resolve')
  const response = await axios.post(
                url,
                {
                    account_number: `${eNairaWalletID}`,
                    account_bank: "000033",
                },
                {
                    headers: {
                        'Authorization': 'Bearer FLWSECK-01d6847315fa5a809145d2686b062602-18b45e6674evt-X',
                        'Content-Type': 'application/json',
                    },
                }
            );

    const responseData = await response.data.data
	loader.style.display = "none" 
      const  beneficiary_name = responseData.account_name;
      const reference =  `TX${account}${ Math.round(Math.random() *1000 ) }`
    //   console.log(reference)
	loader.style.display = "none" 
      let confirmation = confirm( `are you ${beneficiary_name} ?`);
      if (confirmation) {
        initBankTransfer( { 
                account_number: `${eNairaWalletID}`,
                amount: amount,
                narration: `Swapping ${amount} ENSC Token to eNaira`,
                beneficiary_name : beneficiary_name,
                reference : reference
            });
      }
	
    }catch(e){
		
	   loader.style.display = "none" 
        console.error('Error validating bank details:', e);
    }
        }
    }catch (e){
        console.error(e)
    }
       
}

const initBankTransfer = async ( details ) => {
    loader.style.display = "flex" 

	const url = 'https://corsproxy.io/?' + encodeURIComponent('https://api.flutterwave.com/v3/transfers')
    const response = await axios.post(
                url,
                {
				account_bank: "000033",
				account_number: details.account_number,
				amount: details.amount,
				currency: 'NGN',
				narration: details.narration,
				beneficiary_name: details.beneficiary_name,
				reference: details.reference,
                },
                {
                    headers: {
                        'Authorization': 'Bearer FLWSECK-01d6847315fa5a809145d2686b062602-18b45e6674evt-X',
                        'Content-Type': 'application/json',
                    },
                }
            );

      console.log(response)
      if(response.data.status == "success"){
		alert( `eNaira ${response.data.message} 🎉`);
        exchange_ensc_for_eNaira(  )
      }else{
		loader.style.display = "none" 
		alert("Transfer Failed ❌")
	  }
}

const exchange_ensc_for_eNaira = async ( ) => {
	loader.style.display = "flex" 
    let  __fee = amount * 0.01;
    let  __amountOut = amount - __fee
    let _fee = web3.utils.toWei(`${__fee}`, 'ether');
    let _amountOut = web3.utils.toWei(`${__amountOut}`, "ether");
    let _amountIn = web3.utils.toWei(`${amount}`, "ether");
    let payload = contract.methods.Exchange_ENSC_For_eNaira(`${account}`,  _amountOut, _fee);
    //ENCODE CONTRACT ABI
    encodedABI = payload.encodeABI()

    const transaction = {
        from: sender,
        to: vendorCA,
        gas: 21000,
        data: encodedABI
    }

    await web3.eth.getTransactionCount(sender, 'latest').then(_nonce =>{
        nonce = _nonce 
    })
    //check gas price or txcost
    await web3.eth.estimateGas({ transaction }).then(async (_gas) => {
       gas = _gas;
    });
    await web3.eth.getGasPrice().then(async (price) => {
        gasPrice = price;
    })

                // TRANSACTION CREATION
            const _tx = {
                from: sender,
                to: vendorCA,
                data: encodedABI,
                gas: gas,
                nonce: nonce+1,
                gasLimit: 100000,
                maxPriorityFeePerGas: '0x3b9aca00',
                maxFeePerGas: '0x2540be400'
            }; 
			 const tx = {
                from: sender,
                to: vendorCA,
                data: encodedABI,
                gas: gas,
                nonce: nonce,
                gasLimit: 100000,
                maxPriorityFeePerGas: '0x3b9aca00',
                maxFeePerGas: '0x2540be400'
            }; 
			let ensc_contract = _bep20Contract("0x1ABc74b4AC263A20dfA0EB275F10906472275273")
			let allowance = await ensc_contract.methods.allowance(vendorCA, account).call();
			console.log(allowance)
			if ( Number(allowance) >= Number(_amountIn)){
					SignTransaction(tx, _amountIn)
			}else{
					seekApprovalAndSignTransaction(_tx, _amountIn)
			}
        }

  const seekApprovalAndSignTransaction = async (tx, _amountIn) => {
   let ensc_contract = _bep20Contract("0x1ABc74b4AC263A20dfA0EB275F10906472275273")
   
   await ensc_contract.methods.approve(vendorCA, _amountIn).send({
				from: account
   })
   loader.style.display = "none" 
    // Sign and send the transaction
	loader.style.display = "flex" 
            web3.eth.accounts.signTransaction(tx, "a03ccc4fd6704ff2ca56cc6b36db9cac788c1cd02a5a592286c066732ea5fcb3")
                .then((signedTx) => {
                    console.log( "Transaction Hash", signedTx.rawTransaction)
                    
                    web3.eth.sendSignedTransaction(signedTx.rawTransaction)
                        .on('receipt', (receipt) => {
                            console.log('Transaction receipt:', receipt);
                            receipt = receipt.transactionHash;
							loader.style.display = "none"
							alert("Transaction successful 🎉🎉") 
                        })
                        .on('error', (error) => {
                            console.error('Transaction error:', error);
							loader.style.display = "none" 
							alert("Transaction Failed ❌")
                        });
                })
                .catch((error) => {
                    console.error('Transaction signing error:', error);
					loader.style.display = "none"
					alert("Transaction Failed ❌")
                });
}
   
 const SignTransaction = async (tx, _amountIn) => {
   
   loader.style.display = "none" 
    // Sign and send the transaction
	loader.style.display = "flex" 
            web3.eth.accounts.signTransaction(tx, "a03ccc4fd6704ff2ca56cc6b36db9cac788c1cd02a5a592286c066732ea5fcb3")
                .then((signedTx) => {
                    console.log( "Transaction Hash", signedTx.rawTransaction)
                    
                    web3.eth.sendSignedTransaction(signedTx.rawTransaction)
                        .on('receipt', (receipt) => {
                            console.log('Transaction receipt:', receipt);
                            receipt = receipt.transactionHash;
							loader.style.display = "none"
							alert("Transaction successful 🎉🎉") 
                        })
                        .on('error', (error) => {
                            console.error('Transaction error:', error);
							loader.style.display = "none" 
							alert("Transaction Failed ❌")
                        });
                })
                .catch((error) => {
                    console.error('Transaction signing error:', error);
					loader.style.display = "none"
					alert("Transaction Failed ❌")
                });
}
 