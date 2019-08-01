/////////////////////////////////////////
// Auto generated code. Do not modify! //
/////////////////////////////////////////

var BankerCompiled = {};

var RegulatorCompiled = {};

var BcAccountStoreCompiled = {};

var BcBankStoreCompiled = {};

var BcCheckStoreCompiled = {};

var BcTransactionStoreCompiled = {};

var CheckManagerCompiled = {};

var regulatorAddressDefault = "0x1349f3e1b8d71effb47b840594ff27da7e603d17";
var bankstoreAddressDefault = "0x9d13c6d3afe1721beef56b55d303b09e021e27ab";
var transactionstoreAddressDefault = "0xd9d64b7dc034fafdba5dc2902875a67b5d586420";
var banker1AddressDefault = "0xee02919a1fc709bce16f6bd13ede083f0d32449b";
var accountstore1AddressDefault = "0x541914ab6f8d7d00b085430f0ab4e8ab441270b8";
var checkstore1AddressDefault = "0x6e61505914a72dd4ff7bdbe93a6999748d1d66fd";
var checkmanagerstore1AddressDefault = "0x72b96b327b1a7b1beae7bfe782a669307a99a38f";

regulatorAddress = "";
bankstoreAddress = "";
transactionstoreAddress = "";
banker1Address = "";
accountstore1Address = "";
checkstore1Address = "";
checkmanager1Address = "";

var regulatorname = "Regulator";

var bankCode1 = "2038";
var bankName1 = "Bankia";

var inicode = 0;
var lengthcode = 4;

var regulatorEth  = web3.personal.listAccounts[0];
var bank1Eth  = web3.personal.listAccounts[1];
var user1Addr  = web3.personal.listAccounts[2];
var user2Addr  = web3.personal.listAccounts[3];
var user3Addr  = web3.personal.listAccounts[4];
var user4Addr  = web3.personal.listAccounts[5];
var user5Addr  = web3.personal.listAccounts[6];

console.log("Unlocking regulator");
web3.personal.unlockAccount(regulatorEth, "", 15000);
console.log("Unlocking bank1Eth");
web3.personal.unlockAccount(bank1Eth, "garfield123", 15000);
console.log("Unlocking user1Addr");
web3.personal.unlockAccount(user1Addr, "garfield123", 15000);
console.log("Unlocking user2Addr");
web3.personal.unlockAccount(user2Addr, "garfield123", 15000);
console.log("Unlocking user3Addr");
web3.personal.unlockAccount(user3Addr, "garfield123", 15000);

var account1 = "20380001012345678901";
var account2 = "20380002987654321098";
var account3 = "";
var account4 = "";
var account5 = "";
var account6 = "";

var codeline1 = '203800018111111111119959111';
var codeline2 = '203800018111111111119592221';
var codeline3 = '203800028222222222229933312';
var codeline4 = '203800018111111111119959113';

var bankerContract = web3.eth.contract(BankerCompiled.abi);
var regulatorContract = web3.eth.contract(RegulatorCompiled.abi);
var accountStoreContract = web3.eth.contract(BcAccountStoreCompiled.abi);
var bankStoreContract = web3.eth.contract(BcBankStoreCompiled.abi);
var checkStoreContract = web3.eth.contract(BcCheckStoreCompiled.abi);
var transactionStoreContract = web3.eth.contract(BcTransactionStoreCompiled.abi);
var checkmanagerContract = web3.eth.contract(CheckManagerCompiled.abi);

var regulator = {};
var bankstore = {};
var transactionstore = {};
var banker1 = {};
var accountstore1 = {};
var checkstore1 = {};
var checkmanager1 = {};

var deployGas = 6712390;
var transGas = 600000;

var CheckStatus = {
    'Issued' : 0,
    'Filled' : 1,
    'ReservedFunds' : 2,
    'Delivered' : 3,
    'Accepted' : 4,
    'PendingCertification' : 5,
    'Certified' : 6,
    'Deposited' : 7,
    'SentToHost' : 8,
    'Paid' : 9,
    'NotAccepted' : 10,
    'RejectedConformation' : 11,
    'RejectedCertification' : 12,
    'ReleasedFunds' : 13,
    'Rejected' : 14,
    'Locked' : 15,
    'Completed' : 16
}

var CheckType = {
    'Check' : 0, 
    'ConformedCheck' : 1,
    'Pagare' : 2, 
    'ConformedPagare' : 3
}

var deployBanker = function(owner, deployBankerCallback) {
    bankerContract.new( {
        from: owner,
        data: BankerCompiled.bytecode,
        gas: deployGas
    }, function (e, contract) {
        if (e) {
            console.log("Error creating Banker contract ", e);
        } else {
            if (!contract.address) {
                console.log('Waiting for Banker. TransactionHash: ' + contract.transactionHash);
            } else {
                console.log('Banker contract mined! address: "' + contract.address + '"\n');
                deployBankerCallback(contract);
            }
        }
    });
};

var deployRegulator = function(owner, deployRegulatorCallback) {
    regulatorContract.new( {
        from: owner,
        data: RegulatorCompiled.bytecode,
        gas: deployGas
    }, function (e, contract) {
        if (e) {
            console.log("Error creating Regulator contract ", e);
        } else {
            if (!contract.address) {
                console.log('Waiting for Regulator. TransactionHash: ' + contract.transactionHash);
            } else {
                console.log('Regulator contract mined! address: "' + contract.address + '"\n');
                deployRegulatorCallback(contract);
            }
        }
    });
};

var deployAccountStore = function(owner, deployAccountStoreCallback) {
    accountStoreContract.new( {
        from: owner,
        data: BcAccountStoreCompiled.bytecode,
        gas: deployGas
    }, function (e, contract) {
        if (e) {
            console.log("Error creating AccountStore contract ", e);
        } else {
            if (!contract.address) {
                console.log('Waiting for AccountStore. TransactionHash: ' + contract.transactionHash);
            } else {
                console.log('AccountStore contract mined! address: "' + contract.address + '"\n');
                deployAccountStoreCallback(contract);
            }
        }
    });
};

var deployBankStore = function(owner, deployBankStoreCallback) {
    bankStoreContract.new( {
        from: owner,
        data: BcBankStoreCompiled.bytecode,
        gas: deployGas
    }, function (e, contract) {
        if (e) {
            console.log("Error creating BankStore contract ", e);
        } else {
            if (!contract.address) {
                console.log('Waiting for BankStore. TransactionHash: ' + contract.transactionHash);
            } else {
                console.log('BankStore contract mined! address: "' + contract.address + '"\n');
                deployBankStoreCallback(contract);
            }
        }
    });
};

var deployCheckStore = function(owner, deployCheckStoreCallback) {
    checkStoreContract.new( {
        from: owner,
        data: BcCheckStoreCompiled.bytecode,
        gas: deployGas
    }, function (e, contract) {
        if (e) {
            console.log("Error creating CheckStore contract ", e);
        } else {
            if (!contract.address) {
                console.log('Waiting for CheckStore. TransactionHash: ' + contract.transactionHash);
            } else {
                console.log('CheckStore contract mined! address: "' + contract.address + '"\n');
                deployCheckStoreCallback(contract);
            }
        }
    });
};

var deployTransactionStore = function(owner, deployTransactionStoreCallback) {
    transactionStoreContract.new( {
        from: owner,
        data: BcTransactionStoreCompiled.bytecode,
        gas: deployGas
    }, function (e, contract) {
        if (e) {
            console.log("Error creating TransactionStore contract ", e);
        } else {
            if (!contract.address) {
                console.log('Waiting for TransactionStore. TransactionHash: ' + contract.transactionHash);
            } else {
                console.log('TransactionStore contract mined! address: "' + contract.address + '"\n');
                deployTransactionStoreCallback(contract);
            }
        }
    });
};

var deployCheckManager = function(owner, deployCheckManagerCallback) {
    checkmanagerContract.new( {
        from: owner,
        data: CheckManagerCompiled.bytecode,
        gas: deployGas
    }, function (e, contract) {
        if (e) {
            console.log("Error creating CheckManager contract ", e);
        } else {
            if (!contract.address) {
                console.log('Waiting for CheckManager. TransactionHash: ' + contract.transactionHash);
            } else {
                console.log('CheckManager contract mined! address: "' + contract.address + '"\n');
                deployCheckManagerCallback(contract);
            }
        }
    });
};

var linkContracts = function(regulatorD, banker1D, bankD, transactionD, account1D, check1D, checkmanager1D) {
    console.log('Linking contracts Demo ');
    
    transactionD.setBankStoreContract(bankD.address, {from:regulatorEth, gas:transGas});
    regulatorD.setBankContract(bankD.address, {from:regulatorEth, gas:transGas});
    regulatorD.setTransactionContract(transactionD.address, {from:regulatorEth, gas:transGas});
    regulatorD.setRegulatorName(regulatorname,{from:regulatorEth, gas:transGas});

    banker1D.setAccountContract(account1D.address, {from:bank1Eth, gas:transGas});
    banker1D.setCheckContract(check1D.address, {from:bank1Eth, gas:transGas});
    banker1D.setCheckManagerContract(checkmanager1D.address, {from:bank1Eth, gas:transGas});//??

    check1D.setAccountStore(account1D.address, {from:bank1Eth, gas:transGas});
    check1D.setTransactionStore(transactionD.address, {from:bank1Eth, gas:transGas});

    checkmanager1D.setAccountStore(account1D.address, {from:bank1Eth, gas:transGas});
    checkmanager1D.setCheckStore(check1D.address, {from:bank1Eth, gas:transGas});
    check1D.setManagerContractAddress(checkmanager1D.address, {from:bank1Eth, gas:transGas});

    regulatorAddress = regulatorD.address;
    bankstoreAddress = bankD.address;
    banker1Address = banker1D.address;
    transactionstoreAddress = transactionD.address;
    accountstore1Address = account1D.address;
    checkstore1Address = check1D.address;
    checkmanager1Address = checkmanager1D.address;

    info();
};

var linkContractsRegulator = function(regulatorD, bankD, transactionD) {
    console.log('Linking contracts Regulator');
    
    regulatorD.setBankContract(bankD.address, {from:regulatorEth, gas:transGas});
    regulatorD.setTransactionContract(transactionD.address, {from:regulatorEth, gas:transGas});
    transactionD.setBankStoreContract(bankD.address, {from:regulatorEth, gas:transGas});
    
    regulatorAddress = regulatorD.address;
    bankstoreAddress = bankD.address;
    transactionstoreAddress = transactionD.address;

    infoRegulator();
};

var linkContractsBanker = function(banker1D, account1D, check1D, checkmanager1D, transactionD, bankaddress) {
    console.log('Linking contracts Banker');
   
    banker1D.setAccountContract(account1D.address, {from:bankaddress, gas:transGas});
    banker1D.setCheckContract(check1D.address, {from:bankaddress, gas:transGas});
    banker1D.setCheckManagerContract(checkmanager1D.address, {from:bankaddress, gas:transGas});

    check1D.setTransactionStore(transactionD.address, {from:bankaddress, gas:transGas});

    banker1Address = banker1D.address;
    accountstore1Address = account1D.address;
    checkstore1Address = check1D.address;
    checkmanager1Address = checkmanager1D.address;
    transactionstoreAddress = transactionD.address;

    infoBanker();
};

var deploy = function() {
    console.log('Calling Demo contract creation');
    deployRegulator(regulatorEth, function(regulator) {
        console.log('Regulator ready, calling BankStore');
        deployBankStore(regulatorEth, function(bank) {
            console.log('BankStore ready, calling TransactionStore');
            deployTransactionStore(regulatorEth, function(transaction) {
                console.log('TransactionStore ready, calling Banker');
                deployBanker(bank1Eth, function(banker1) {
                    console.log('Banker ready, calling AccountStore');
                    deployAccountStore(bank1Eth, function(account1) {
                        console.log('AccountStore ready, calling CheckStore');
                        deployCheckStore(bank1Eth, function(check1) {
                            console.log('CheckStore ready, calling CheckManager');
                            deployCheckManager(bank1Eth, function(checkmanager1) {
                                console.log('CheckManager ready, calling final config');
                                linkContracts(regulator, banker1, bank, transaction, account1, check1, checkmanager1);
                            });
                        });
                    });
                });
            });
        });
    });
};

var deployForRegulator = function() {
    console.log('Calling Regulator contract creation');
    deployRegulator(regulatorEth, function(regulator) {
        console.log('Regulator ready, calling BankStore');
        deployBankStore(regulatorEth, function(bank) {
            console.log('BankStore ready, calling TransactionStore');
            deployTransactionStore(regulatorEth, function(transaction) {
                console.log('TransactionStore ready, calling final config');
                linkContractsRegulator(regulator, bank, transaction);
            });
        });
    });
};

var deployForBanker = function(bankaddress) {
    console.log('Calling Banker contract creation');
    deployBanker(bankaddress, function(banker1) {
        console.log('Banker ready, calling AccountStore');
        deployAccountStore(bankaddress, function(account1) {
            console.log('AccountStore ready, calling CheckStore');
            deployCheckStore(bankaddress, function(check1) {
                console.log('CheckStore ready, calling CheckManager');
                deployCheckManager(bankaddress, function(checkmanager1) {
                    console.log('CheckManager ready, calling TransactionStore');
                    deployTransactionStore(bankaddress, function(transaction) {
                        console.log('TransactionStore ready, calling final config');
                        linkContractsBanker(banker1, account1, check1, checkmanager1, transaction, bankaddress);
                    });
                });
            });
        });
    });
};

var infoDemo = function() {
    console.log('-------------------------- CONTRACTS INFO -------------------------');
    console.log('/* Copy & paste this to access deployed contracts */');
    console.log('setAddrs({');
    console.log('regulatorAddress : "' + regulatorAddress + '",');
    console.log('bankstoreAddress : "' + bankstoreAddress + '",');
    console.log('transactionstoreAddress : "' + transactionstoreAddress + '",');
    console.log('bankerAddress : "' + banker1Address + '",');
    console.log('accountstoreAddress : "' + accountstore1Address + '",');
    console.log('checkstoreAddress : "' + checkstore1Address + '",');
    console.log('checkmanagerAddress : "' + checkmanager1Address + '",');
    console.log('});');
    console.log('/* End here */');
    console.log('-------------------------------------------------------------------');

};

var infoRegulator = function() {
    console.log('-------------------------- CONTRACTS INFO -------------------------');
    console.log('/* Copy & paste this to access deployed contracts Regulator */');
    console.log('setAddrs({');
    console.log('regulatorAddress : "' + regulatorAddress + '",');
    console.log('bankstoreAddress : "' + bankstoreAddress + '"');
    console.log('transactionstoreAddress : "' + transactionstoreAddress + '"');
    console.log('});');
    console.log('/* End here */');
    console.log('-------------------------------------------------------------------');

};

var infoBanker = function() {
    console.log('-------------------------- INITIALIZE CONTRACTS BANKER INFO -------------------------');
    console.log('/* Copy & paste this to initialize contracts Banker */');
    console.log('setAddrs({');
    console.log('banker1Address : "' + banker1Address + '",');
    console.log('accountstore1Address : "' + accountstore1Address + '"');
    console.log('checkstore1Address : "' + checkstore1Address + '"');
    console.log('checkmanager1Address : "' + checkmanager1Address + '"');
    console.log('bankstoreAddress : "' + bankstoreAddress + '"');
    console.log('transactionstoreAddress : "' + transactionstoreAddress + '"');    
    console.log('});');
    console.log('/* End here */');
    console.log('-------------------------------------------------------------------');
};

var infoUsers = function() {
    console.log('---------------------------- USERS INFO ---------------------------');
    console.log('bank1Eth : "' + bank1Eth + '",');
    console.log('user1Addr : "' + user1Addr + '",');
    console.log('user2Addr : "' + user2Addr + '",');
    console.log('user3Addr : "' + user3Addr + '",');
    console.log('user4Addr : "' + user4Addr + '",');
    console.log('user5Addr : "' + user5Addr + '",');
    console.log('regulatorEth : "' + regulatorEth + '"');
    console.log('-------------------------------------------------------------------');
};

var info = function() {
    infoDemo();
//    infoRegulator();
//    infoBanker();
//    infoUsers();
};

var setContracts = function() {
    if (banker1Address == "") {
        banker1Address = banker1AddressDefault;
    }
    if (regulatorAddress == "") {
        regulatorAddress = regulatorAddressDefault;
    }
    if (accountstore1Address == "") {
        accountstore1Address = accountstore1AddressDefault;
    }
    if (bankstoreAddress == "") {
        bankstoreAddress = bankstoreAddressDefault;
    }
    if (checkstore1Address == "") {
        checkstore1Address = checkstore1AddressDefault;
    }
    if (transactionstoreAddress == "") {
        transactionstoreAddress = transactionstoreAddressDefault;
    }    
    if (checkmanager1Address == ""){
        checkmanager1Address = checkmanagerstore1AddressDefault;
    }

    banker1 = eth.contract(BankerCompiled.abi).at(banker1Address);
    regulator = eth.contract(RegulatorCompiled.abi).at(regulatorAddress);
    accountstore1 = eth.contract(BcAccountStoreCompiled.abi).at(accountstore1Address);
    bankstore = eth.contract(BcBankStoreCompiled.abi).at(bankstoreAddress);
    checkstore1 = eth.contract(BcCheckStoreCompiled.abi).at(checkstore1Address);
    transactionstore = eth.contract(BcTransactionStoreCompiled.abi).at(transactionstoreAddress);   
    checkmanager1 = eth.contract(CheckManagerCompiled.abi).at(checkmanager1Address);
};

var setAddrs = function(data) {

    regulatorAddress = data.regulatorAddress;
    bankstoreAddress = data.bankstoreAddress;
    checkstore1Address = data.checkstoreAddress;
    transactionstoreAddress = data.transactionstoreAddress;

    banker1Address = data.bankerAddress;
    accountstore1Address = data.accountstoreAddress;
    checkmanager1Address = data.checkmanagerAddress;
    
    banker1 = eth.contract(BankerCompiled.abi).at(banker1Address);
    regulator = eth.contract(RegulatorCompiled.abi).at(regulatorAddress);
    accountstore1 = eth.contract(BcAccountStoreCompiled.abi).at(accountstore1Address);
    bankstore = eth.contract(BcBankStoreCompiled.abi).at(bankstoreAddress);
    checkstore1 = eth.contract(BcCheckStoreCompiled.abi).at(checkstore1Address);   
    transactionstore = eth.contract(BcTransactionStoreCompiled.abi).at(transactionstoreAddress);  
    checkmanager1 = eth.contract(CheckManagerCompiled.abi).at(checkmanager1Address);
};

var initPoC = function() {
    setContracts();

    bankstore.setCodeLocation(inicode, lengthcode);   
    initBanks(checkmanager1, regulator, accountstore1, bankstore, checkstore1, bankCode1,  bankName1, bank1Eth, banker1.address);

    account1 = "20381540666000603516";
    account2 = "20381004763010063771";
    account3 = "20381540613000417116";
    account4 = "20381540991111111111";
    account5 = "20381540882222222222";

    console.log('Add Account - number(' + account1 + ') owner(' + user1Addr + ')');
    banker1.addAccount(user1Addr, account1, 300000000000, {from:bank1Eth, gas:transGas});

    console.log('Add Account - number(' + account2 + ') owner(' + user2Addr + ')');
    banker1.addAccount(user2Addr, account2, 300000000000, {from:bank1Eth, gas:transGas});

    console.log('Add Account - number(' + account3 + ') owner(' + user3Addr + ')');
    banker1.addAccount(user3Addr, account3, 300000000000, {from:bank1Eth, gas:transGas});

    console.log('Add Account - number(' + account4 + ') owner(' + user4Addr + ')');
    banker1.addAccount(user4Addr, account4, 300000000000, {from:bank1Eth, gas:transGas});

    console.log('Add Account - number(' + account5 + ') owner(' + user5Addr + ')');
    banker1.addAccount(user5Addr, account5, 300000000000, {from:bank1Eth, gas:transGas});

    info();
};

var initDemo = function() {
    setContracts();

    bankstore.setCodeLocation(inicode, lengthcode);   
    initBanks(checkmanager1, regulator, accountstore1, bankstore, checkstore1, bankCode1,  bankName1, bank1Eth, banker1.address);

    account1 = "20380001012345678901";
    account2 = "20380002987654321098";
    account3 = "";
    account4 = "";
    account5 = "";

    console.log('Add Account - number(' + account1 + ') owner(' + user1Addr + ')');
    banker1.addAccount(user1Addr, account1, 300000000000, {from:bank1Eth, gas:transGas});

    console.log('Add Account - number(' + account2 + ') owner(' + user2Addr + ')');
    banker1.addAccount(user2Addr, account2, 300000000000, {from:bank1Eth, gas:transGas});

    info();
};

var initBanker = function(bankcode, bankaddress) {
    setContracts();

    setContractsInitBank(checkmanager1, accountstore1, bankstore, checkstore1, bankcode, bankaddress);
};

var initRegulator = function() {
    setContracts();

    regulator.setRegulatorName(regulatorname, {from:regulatorEth, gas:transGas});

};

var initBanks = function(checkmanager, regulator, accountstore, bankstore, checkstore, bankcode, bankname, bankaddress, contractaddress) {
       
    setContractsInitBank(checkmanager, accountstore, bankstore, checkstore, bankcode, bankaddress);

    console.log('Add Bank - code(' + bankcode + ') name(' + bankname + ') bankaddress(' + bankaddress + ') contract(' + contractaddress + ')');
    regulator.addBank(bankcode,  bankname, bankaddress, contractaddress, {from:regulatorEth, gas:transGas});

};

var setPromotions = function(checkmanager, bankaddress) {
    /* LEGEND *******************************************************************************************************

       ROLES (Who can do the promotion)      FIELDS
       0001 - 1 - CHECK_OWNER                0000 - 0 - No modify allowed in deliveredTo and deposit account fileds.
       0010 - 2 - BANK_OWNER                 0001 - 1 - Modify allowed in deliveredTo field.
       0100 - 4 - CHECK_DEST                 0010 - 2 - Must modify deliveredTo field.
       1000 - 8 - EVERYBODY                  0100 - 4 - Modify allowed in deposit account field.
                                             1000 - 8 - Must modify deposit account field.
       SECURITY (Who need securityCode)      
       0001 - 1 - USER_SECURITY
       0010 - 2 - BANKER_SECURITY            REV (Amount of versions to be reverted)
       0100 - 4 - CERTIFIER 
                                             MIN (Minimun amount of versions needed to execute revert)
       TOKEN (SecurityCode update config)    
       0001 - 1 - CAN_UPDATE
       0010 - 2 - MUST_UPDATE
       0100 - 4 - CERTIFIER

    ****************************************************************************************************************/
    console.log('Setting Checks Promotions...');
    // config promotions      checkType,                currentStatus,                   finalStatus,                     rol, security,   fields,      token,        Rev., Minimun
    // Checks - Flow
    checkmanager.setPromotion(CheckType.Check,         CheckStatus.Issued,                  CheckStatus.Filled,                   1,      0,            5,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Check,         CheckStatus.Filled,                  CheckStatus.Delivered,                2,      0,            0,          2,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Check,         CheckStatus.Delivered,               CheckStatus.Accepted,                 8,      3,            4,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Check,         CheckStatus.Delivered,               CheckStatus.NotAccepted,              8,      3,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Check,         CheckStatus.Accepted,                CheckStatus.Deposited,                8,      3,            4,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Check,         CheckStatus.Accepted,                CheckStatus.PendingCertification,     2,      0,            0,          6,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Check,      CheckStatus.PendingCertification,       CheckStatus.Certified,                2,      4,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Check,      CheckStatus.PendingCertification,       CheckStatus.RejectedCertification,    2,      4,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Check,         CheckStatus.Certified,               CheckStatus.Deposited,                8,      3,            4,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Check,      CheckStatus.RejectedCertification,      CheckStatus.Rejected,                 2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Check,         CheckStatus.NotAccepted,             CheckStatus.Rejected,                 2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Check,         CheckStatus.Deposited,               CheckStatus.Paid,                     2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Check,         CheckStatus.Deposited,               CheckStatus.Rejected,                 2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    // Checks - Out of flow TimeOut  
    checkmanager.setPromotion(CheckType.Check,         CheckStatus.Delivered,               CheckStatus.Rejected,                 2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Check,         CheckStatus.Accepted,                CheckStatus.Rejected,                 2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    // Checks - Out of flow Administrator  
    checkmanager.setPromotion(CheckType.Check,         CheckStatus.Filled,                  CheckStatus.Rejected,                 2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Check,         CheckStatus.Filled,                  CheckStatus.Locked,                   2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Check,         CheckStatus.Filled,                  CheckStatus.Completed,                2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Check,         CheckStatus.Delivered,               CheckStatus.Locked,                   2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Check,         CheckStatus.Delivered,               CheckStatus.Completed,                2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Check,         CheckStatus.Accepted,                CheckStatus.Locked,                   2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Check,         CheckStatus.Accepted,                CheckStatus.Completed,                2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Check,         CheckStatus.Deposited,               CheckStatus.SentToHost,               2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Check,         CheckStatus.Deposited,               CheckStatus.Rejected,                 2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Check,         CheckStatus.Deposited,               CheckStatus.Locked,                   2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Check,         CheckStatus.Deposited,               CheckStatus.Completed,                2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Check,         CheckStatus.SentToHost,              CheckStatus.Paid,                     2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Check,         CheckStatus.SentToHost,              CheckStatus.Rejected,                 2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Check,         CheckStatus.SentToHost,              CheckStatus.Locked,                   2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Check,         CheckStatus.SentToHost,              CheckStatus.Completed,                2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Check,         CheckStatus.Paid,                    CheckStatus.Completed,                2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Check,         CheckStatus.NotAccepted,             CheckStatus.Locked,                   2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Check,         CheckStatus.NotAccepted,             CheckStatus.Completed,                2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Check,         CheckStatus.Rejected,                CheckStatus.Locked,                   2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Check,         CheckStatus.Rejected,                CheckStatus.Completed,                2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Check,         CheckStatus.Locked,                  CheckStatus.Completed,                2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    // Checks - Out of Flow Administrador - Certified  
    checkmanager.setPromotion(CheckType.Check,         CheckStatus.PendingCertification,    CheckStatus.Completed,                2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Check,         CheckStatus.PendingCertification,    CheckStatus.Locked,                   2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Check,         CheckStatus.RejectedCertification,   CheckStatus.Completed,                2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Check,         CheckStatus.RejectedCertification,   CheckStatus.Locked,                   2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});

    var promo = checkmanager.getPromotion(CheckType.Check, CheckStatus.RejectedCertification, CheckStatus.Locked, {from : bankaddress, gas : transGas});
    var result = assert(promo[0] == 2, 'Error in setPromotions');
    var msg = result.indexOf('PASS') !== -1 ? '--> done.' : result;
    console.log(msg);
                     
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // Pagares - Flow
    console.log('Setting Pagares Promotions...');
    checkmanager.setPromotion(CheckType.Pagare,        CheckStatus.Issued,                  CheckStatus.Filled,                   1,      0,            5,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Pagare,        CheckStatus.Filled,                  CheckStatus.Delivered,                2,      0,            0,          2,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Pagare,        CheckStatus.Delivered,               CheckStatus.Accepted,                 8,      3,            4,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Pagare,        CheckStatus.Delivered,               CheckStatus.NotAccepted,              8,      3,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Pagare,        CheckStatus.Accepted,                CheckStatus.Deposited,                8,      3,            4,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Pagare,        CheckStatus.Accepted,                CheckStatus.PendingCertification,     2,      0,            0,          6,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Pagare,        CheckStatus.PendingCertification,    CheckStatus.Certified,                2,      4,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Pagare,        CheckStatus.PendingCertification,    CheckStatus.RejectedCertification,    2,      4,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Pagare,        CheckStatus.Certified,               CheckStatus.Deposited,                8,      3,            4,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Pagare,        CheckStatus.RejectedCertification,   CheckStatus.Rejected,                 2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Pagare,        CheckStatus.NotAccepted,             CheckStatus.Rejected,                 2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Pagare,        CheckStatus.Deposited,               CheckStatus.Paid,                     2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Pagare,        CheckStatus.Deposited,               CheckStatus.Rejected,                 2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    // Pagares - Out of flow TimeOut 
    checkmanager.setPromotion(CheckType.Pagare,        CheckStatus.Delivered,               CheckStatus.Rejected,                 2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Pagare,        CheckStatus.Accepted,                CheckStatus.Rejected,                 2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    // Pagares - Out of flow Administrator  
    checkmanager.setPromotion(CheckType.Pagare,        CheckStatus.Filled,                  CheckStatus.Rejected,                 2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Pagare,        CheckStatus.Filled,                  CheckStatus.Locked,                   2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Pagare,        CheckStatus.Filled,                  CheckStatus.Completed,                2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Pagare,        CheckStatus.Delivered,               CheckStatus.Locked,                   2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Pagare,        CheckStatus.Delivered,               CheckStatus.Completed,                2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Pagare,        CheckStatus.Accepted,                CheckStatus.Locked,                   2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Pagare,        CheckStatus.Accepted,                CheckStatus.Completed,                2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Pagare,        CheckStatus.Deposited,               CheckStatus.SentToHost,               2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Pagare,        CheckStatus.Deposited,               CheckStatus.Rejected,                 2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Pagare,        CheckStatus.Deposited,               CheckStatus.Locked,                   2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Pagare,        CheckStatus.Deposited,               CheckStatus.Completed,                2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Pagare,        CheckStatus.SentToHost,              CheckStatus.Paid,                     2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Pagare,        CheckStatus.SentToHost,              CheckStatus.Rejected,                 2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Pagare,        CheckStatus.SentToHost,              CheckStatus.Locked,                   2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Pagare,        CheckStatus.SentToHost,              CheckStatus.Completed,                2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Pagare,        CheckStatus.Paid,                    CheckStatus.Completed,                2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Pagare,        CheckStatus.NotAccepted,             CheckStatus.Locked,                   2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Pagare,        CheckStatus.NotAccepted,             CheckStatus.Completed,                2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Pagare,        CheckStatus.Rejected,                CheckStatus.Locked,                   2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Pagare,        CheckStatus.Rejected,                CheckStatus.Completed,                2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Pagare,        CheckStatus.Locked,                  CheckStatus.Completed,                2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    // Pagares - Out of Flow Administrador - Certified
    checkmanager.setPromotion(CheckType.Pagare,        CheckStatus.PendingCertification,    CheckStatus.Completed,                2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Pagare,        CheckStatus.PendingCertification,    CheckStatus.Locked,                   2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Pagare,        CheckStatus.RejectedCertification,   CheckStatus.Completed,                2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.Pagare,        CheckStatus.RejectedCertification,   CheckStatus.Locked,                   2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
            
    promo = checkmanager.getPromotion(CheckType.Pagare, CheckStatus.RejectedCertification,  CheckStatus.Locked, {from : bankaddress, gas : transGas});
    result = assert(promo[0] == 2, 'Error in setPromotions');
    msg = result.indexOf('PASS') !== -1 ? '--> done.' : result;
    console.log(msg);
                     
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ConformedChecks - Flow
    console.log('Setting ConformedChecks Promotions...');
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.Issued,                CheckStatus.Filled,                   1,      0,            5,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.Filled,                CheckStatus.ReservedFunds,            2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.Filled,                CheckStatus.RejectedConformation,     2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.RejectedConformation,  CheckStatus.Rejected,                 2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.ReservedFunds,         CheckStatus.Delivered,                2,      0,            0,          2,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.Delivered,             CheckStatus.Accepted,                 8,      3,            4,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.Delivered,             CheckStatus.NotAccepted,              8,      3,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.Accepted,              CheckStatus.Deposited,                8,      3,            4,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.Accepted,              CheckStatus.PendingCertification,     2,      0,            0,          6,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.PendingCertification,  CheckStatus.Certified,                2,      4,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.PendingCertification,  CheckStatus.RejectedCertification,    2,      4,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.Certified,             CheckStatus.Deposited,                8,      3,            4,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.RejectedCertification, CheckStatus.ReleasedFunds,            2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});            
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.NotAccepted,           CheckStatus.ReleasedFunds,            2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.ReleasedFunds,         CheckStatus.Rejected,                 2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.Deposited,             CheckStatus.Paid,                     2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.Deposited,             CheckStatus.ReleasedFunds,            2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    //Out of flow TimeOut   
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.Delivered,             CheckStatus.ReleasedFunds,            2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.Accepted,              CheckStatus.ReleasedFunds,            2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    //Out of flow Administrator 
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.Filled,                CheckStatus.Rejected,                 2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.Filled,                CheckStatus.Locked,                   2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});            
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.Filled,                CheckStatus.Completed,                2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});            
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.ReservedFunds,         CheckStatus.Rejected,                 2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.ReservedFunds,         CheckStatus.Locked,                   2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});            
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.ReservedFunds,         CheckStatus.Completed,                2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});            
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.ReservedFunds,         CheckStatus.RejectedConformation,     2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});            
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.Delivered,             CheckStatus.Locked,                   2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.Delivered,             CheckStatus.Completed,                2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.Delivered,             CheckStatus.RejectedConformation,     2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.Accepted,              CheckStatus.Locked,                   2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.Accepted,              CheckStatus.Completed,                2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.Accepted,              CheckStatus.RejectedConformation,     2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});                    
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.Deposited,             CheckStatus.SentToHost,               2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.Deposited,             CheckStatus.Rejected,                 2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.Deposited,             CheckStatus.RejectedConformation,     2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});                                        
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.Deposited,             CheckStatus.Locked,                   2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.Deposited,             CheckStatus.Completed,                2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.SentToHost,            CheckStatus.Paid,                     2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.SentToHost,            CheckStatus.Rejected,                 2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});                    
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.SentToHost,            CheckStatus.RejectedConformation,     2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});                                        
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.SentToHost,            CheckStatus.Locked,                   2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.SentToHost,            CheckStatus.Completed,                2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});                                            
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.Paid,                  CheckStatus.Completed,                2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});            
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.NotAccepted,           CheckStatus.Locked,                   2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.NotAccepted,           CheckStatus.Completed,                2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});                    
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.RejectedConformation,  CheckStatus.Locked,                   2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.RejectedConformation,  CheckStatus.Completed,                2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});                    
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.ReleasedFunds,         CheckStatus.Locked,                   2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.ReleasedFunds,         CheckStatus.Completed,                2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});                                
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.Rejected,              CheckStatus.Locked,                   2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.Rejected,              CheckStatus.Completed,                2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.Locked,                CheckStatus.Completed,                2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    //Out of Flow Administrador - Certified  
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.PendingCertification,  CheckStatus.Completed,                2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});                    
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.PendingCertification,  CheckStatus.Locked,                   2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.RejectedCertification, CheckStatus.Completed,                2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedCheck,  CheckStatus.RejectedCertification, CheckStatus.Locked,                   2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});                
        
    promo = checkmanager.getPromotion(CheckType.ConformedCheck, CheckStatus.RejectedCertification, CheckStatus.Locked, {from : bankaddress, gas : transGas});
    result = assert(promo[0] == 2, 'Error in setPromotions');
    msg = result.indexOf('PASS') !== -1 ? '--> done.' : result;
    console.log(msg);
                     
    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    // ConformedPagares - Flow
    console.log('Setting ConformedPagares Promotions...');
    checkmanager.setPromotion(CheckType.ConformedPagare, CheckStatus.Issued,                CheckStatus.Filled,                    1,      0,            5,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedPagare, CheckStatus.Filled,                CheckStatus.ReservedFunds,             2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedPagare, CheckStatus.Filled,                CheckStatus.RejectedConformation,      2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedPagare, CheckStatus.RejectedConformation,  CheckStatus.Rejected,                  2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedPagare, CheckStatus.ReservedFunds,         CheckStatus.Delivered,                 2,      0,            0,          2,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedPagare, CheckStatus.Delivered,             CheckStatus.Accepted,                  8,      3,            4,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedPagare, CheckStatus.Delivered,             CheckStatus.NotAccepted,               8,      3,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedPagare, CheckStatus.Accepted,              CheckStatus.Deposited,                 8,      3,            4,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedPagare, CheckStatus.Accepted,              CheckStatus.PendingCertification,      2,      0,            0,          6,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedPagare, CheckStatus.PendingCertification,  CheckStatus.Certified,                 2,      4,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedPagare, CheckStatus.PendingCertification,  CheckStatus.RejectedCertification,     2,      4,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedPagare, CheckStatus.Certified,             CheckStatus.Deposited,                 8,      3,            4,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedPagare, CheckStatus.RejectedCertification, CheckStatus.ReleasedFunds,             2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});            
    checkmanager.setPromotion(CheckType.ConformedPagare, CheckStatus.NotAccepted,           CheckStatus.ReleasedFunds,             2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedPagare, CheckStatus.ReleasedFunds,         CheckStatus.Rejected,                  2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedPagare, CheckStatus.Deposited,             CheckStatus.Paid,                      2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedPagare, CheckStatus.Deposited,             CheckStatus.ReleasedFunds,             2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    //Out of flow TimeOut  
    checkmanager.setPromotion(CheckType.ConformedPagare,  CheckStatus.Delivered,            CheckStatus.ReleasedFunds,             2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedPagare,  CheckStatus.Accepted,             CheckStatus.ReleasedFunds,             2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    //Out of flow Administrator 
    checkmanager.setPromotion(CheckType.ConformedPagare,   CheckStatus.Filled,              CheckStatus.Rejected,                  2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedPagare,   CheckStatus.Filled,              CheckStatus.Locked,                    2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});            
    checkmanager.setPromotion(CheckType.ConformedPagare,   CheckStatus.Filled,              CheckStatus.Completed,                 2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});            
    checkmanager.setPromotion(CheckType.ConformedPagare,   CheckStatus.ReservedFunds,       CheckStatus.Rejected,                  2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedPagare,   CheckStatus.ReservedFunds,       CheckStatus.Locked,                    2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});            
    checkmanager.setPromotion(CheckType.ConformedPagare,   CheckStatus.ReservedFunds,       CheckStatus.Completed,                 2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});            
    checkmanager.setPromotion(CheckType.ConformedPagare,   CheckStatus.ReservedFunds,       CheckStatus.RejectedConformation,      2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});            
    checkmanager.setPromotion(CheckType.ConformedPagare,   CheckStatus.Delivered,           CheckStatus.Locked,                    2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedPagare,   CheckStatus.Delivered,           CheckStatus.Completed,                 2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedPagare,   CheckStatus.Delivered,           CheckStatus.RejectedConformation,      2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedPagare,   CheckStatus.Accepted,            CheckStatus.Locked,                    2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedPagare,   CheckStatus.Accepted,            CheckStatus.Completed,                 2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedPagare,   CheckStatus.Accepted,            CheckStatus.RejectedConformation,      2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});                    
    checkmanager.setPromotion(CheckType.ConformedPagare,   CheckStatus.Deposited,           CheckStatus.SentToHost,                2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedPagare,   CheckStatus.Deposited,           CheckStatus.Rejected,                  2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedPagare,   CheckStatus.Deposited,           CheckStatus.RejectedConformation,      2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});                                        
    checkmanager.setPromotion(CheckType.ConformedPagare,   CheckStatus.Deposited,           CheckStatus.Locked,                    2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedPagare,   CheckStatus.Deposited,           CheckStatus.Completed,                 2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedPagare,   CheckStatus.SentToHost,          CheckStatus.Paid,                      2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedPagare,   CheckStatus.SentToHost,          CheckStatus.Rejected,                  2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});                    
    checkmanager.setPromotion(CheckType.ConformedPagare,   CheckStatus.SentToHost,          CheckStatus.RejectedConformation,      2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});                                        
    checkmanager.setPromotion(CheckType.ConformedPagare,   CheckStatus.SentToHost,          CheckStatus.Locked,                    2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedPagare,   CheckStatus.SentToHost,          CheckStatus.Completed,                 2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});                                            
    checkmanager.setPromotion(CheckType.ConformedPagare,   CheckStatus.Paid,                CheckStatus.Completed,                 2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});            
    checkmanager.setPromotion(CheckType.ConformedPagare,   CheckStatus.NotAccepted,         CheckStatus.Locked,                    2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedPagare,   CheckStatus.NotAccepted,         CheckStatus.Completed,                 2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});                    
    checkmanager.setPromotion(CheckType.ConformedPagare,   CheckStatus.RejectedConformation,CheckStatus.Locked,                    2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedPagare,   CheckStatus.RejectedConformation,CheckStatus.Completed,                 2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});                    
    checkmanager.setPromotion(CheckType.ConformedPagare,   CheckStatus.ReleasedFunds,       CheckStatus.Locked,                    2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedPagare,   CheckStatus.ReleasedFunds,       CheckStatus.Completed,                 2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});                                
    checkmanager.setPromotion(CheckType.ConformedPagare,   CheckStatus.Rejected,            CheckStatus.Locked,                    2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedPagare,   CheckStatus.Rejected,            CheckStatus.Completed,                 2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedPagare,   CheckStatus.Locked,              CheckStatus.Completed,                 2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    //Out of Flow Administrador - Certified 
    checkmanager.setPromotion(CheckType.ConformedPagare,   CheckStatus.PendingCertification, CheckStatus.Completed,                2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});                    
    checkmanager.setPromotion(CheckType.ConformedPagare,   CheckStatus.PendingCertification, CheckStatus.Locked,                   2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedPagare,   CheckStatus.RejectedCertification,CheckStatus.Completed,                2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});
    checkmanager.setPromotion(CheckType.ConformedPagare,   CheckStatus.RejectedCertification,CheckStatus.Locked,                   2,      0,            0,          0,          0,       0, {from : bankaddress, gas : transGas});                            


    promo = checkmanager.getPromotion(CheckType.ConformedPagare, CheckStatus.RejectedCertification, CheckStatus.Locked, {from : bankaddress, gas : transGas});
    result = assert(promo[0] == 2, 'Error in setPromotions');
    msg = result.indexOf('PASS') !== -1 ? '--> done.' : result;
    console.log(msg);
};

var setContractsInitBank = function (checkmanager, accountstore, bankstore, checkstore, bankcode, bankaddress){
    setPromotions(checkmanager, bankaddress);    

    accountstore.setCheckStoreAddress(checkstore.address, {from:bankaddress, gas:transGas});
    checkstore.setManagerContractAddress(checkmanager.address, {from : bankaddress, gas:transGas});

    accountstore.setBankCode(web3.fromAscii(bankcode), {from:bankaddress, gas:transGas});
    accountstore.setBankStoreContract(bankstore.address, {from : bankaddress, gas:transGas});   
    checkstore.setBankCode(web3.fromAscii(bankcode), {from : bankaddress, gas:transGas});
};

var manage = function() {
    setContracts();
    info();
    console.log('Ready');
};

var push = function() {
    loadScript('script1.js');
};

var assert = function(value, desc) {
    var msg = value ? ' -> PASS' : ' -> *** FAIL ***';
    if (typeof desc !== 'undefined' && !value) { msg = msg + ' - ' + desc; }
    return msg;
}

//////////////////////////////////TEST/////////////////////////////////////////////////
var test = function() {
    setContracts();
        
    var deployGas = 6712390;
    var transGas = 600000;

    console.log('--------------------------- REGULATOR TEST ----------------------------');

    console.log('----------------------------------BANK----------------------')
    var bankId = '4050';
    var bankN = 'NewBank';

    var banksLength = regulator.getBankCount();
    console.log('Banks count previous: ' + banksLength);
    console.log('Adding Bank...');
    regulator.addBank(bankId, bankN, bank1Eth, banker1.address, {from:regulatorEth, gas:transGas});
    var countbank = regulator.getBankCount();
    var msg = assert(countbank == Number(banksLength) + 1, 'Bank not created');
    console.log('Banks count: ' + countbank + msg);

    var bankByCode = regulator.getBankByCode(bankId, {from:regulatorEth, gas:transGas});
    msg = assert(bankByCode[1] == bankId && bankByCode[2] == bankN && bankByCode[3] == bank1Eth && bankByCode[4] == banker1.address);
    console.log('Add Bank - code(' + bankByCode[1] + ') name(' + bankByCode[2] + ') bankaddress(' + bankByCode[3] + ') contract(' + bankByCode[4] + ')' + msg);

    var newBankN = 'UpdatedBank';
    console.log('Updating Bank...');
    regulator.updateBank(bankId, newBankN, bank1Eth, banker1.address, true, {from:regulatorEth, gas:transGas});

    bankByCode = regulator.getBankByCode(bankId, {from:regulatorEth, gas:transGas});
    msg = assert(bankByCode[1] == bankId && bankByCode[2] == newBankN && bankByCode[3] == bank1Eth && bankByCode[4] == banker1.address);
    console.log('Update Bank - code(' + bankByCode[1] + ') name(' + bankByCode[2] + ') bankaddress(' + bankByCode[3] + ') contract(' + bankByCode[4] + ')' + msg);

    var lastIndex = countbank - 1;
    var bankByIndex = regulator.getBankByIndex(lastIndex, {from:regulatorEth, gas:transGas});
    msg = assert(bankByIndex[1] == bankId && bankByIndex[2] == newBankN && bankByIndex[3] == bank1Eth && bankByIndex[4] == banker1.address, 'Get BankByIndex');
    console.log('Get byIndex - code(' + bankByIndex[1] + ') name(' + bankByIndex[2] + ') bankaddress(' + bankByIndex[3] + ') contract(' + bankByIndex[4] + ')' + msg);

    console.log('Deleting bank...');    
    regulator.deleteBank(bankId, {from:regulatorEth, gas:transGas});
    bankByCode = regulator.getBankByCode(bankId, {from:regulatorEth, gas:transGas});
    msg = assert(bankByCode[1] == bankId && bankByCode[6] == false, 'Error delete bank');
    console.log('Delete bank - code(' + bankByCode[1] + ') name(' + bankByCode[2] + ') exists(' + bankByCode[6] + ')' + msg);

    var bank1Code = banker1.getBankCode();
    console.log('Getting Bank1... ' + bank1Code);
    bankByCode = regulator.getBankByCode(bank1Code, {from:regulatorEth, gas:transGas});
    msg = assert(bankByCode[1] == bank1Code && bankByCode[6] == true);
    console.log('Get Bank - code(' + bankByCode[1] + ') name(' + bankByCode[2] + ') bankaddress(' + bankByCode[3] + ') contract(' + bankByCode[4] + ') exists(' + bankByCode[6] + ')' + msg);

    console.log('--------------------------- BANKER TEST ----------------------------');

    console.log('----------------------- ACCOUNT TEST --------------------------');
    var accountId = "203800018111111111120";

    var accountsLength = banker1.accountCount({from:bank1Eth, gas:transGas});
    console.log('Bank1 accounts count previous: ' + accountsLength);
    console.log('Adding an account...');    
    banker1.addAccount(user3Addr, accountId, 300000000000, {from:bank1Eth, gas:transGas});
    var countaccount = banker1.accountCount({from:bank1Eth, gas:transGas});
    msg = assert(countaccount == Number(accountsLength) + 1, 'Account not created');
    console.log('Bank1 accounts count: ' + countaccount + msg);

    var accountByNumber = banker1.getAccountByNumber(accountId, {from:bank1Eth, gas:transGas});
    msg = assert(accountByNumber[1] == accountId && accountByNumber[2] == 300000000000 && accountByNumber[3] == true, 'Error adding account');
    console.log('Add Account - number(' + accountByNumber[1] + ') balance(' + accountByNumber[2] + ') exists(' + accountByNumber[3] + ')' + msg);

    console.log('Updating an account...');
    banker1.updateAccount(user3Addr, accountId, 400000000000, {from:bank1Eth, gas:transGas});
    var accountByNumber = banker1.getAccountByNumber(accountId, {from:bank1Eth, gas:transGas});
    msg = assert(accountByNumber[1] == accountId && accountByNumber[2] == 400000000000 && accountByNumber[3] == true, 'Error updating account');
    console.log('Update Account - number(' + accountByNumber[1] + ') balance(' + accountByNumber[2] + ') exists(' + accountByNumber[3] + ')' + msg);

    console.log('Disabling an account...');
    banker1.disableAccount(accountId, {from:bank1Eth, gas:transGas});
    accountByNumber = banker1.getAccountByNumber(accountId, {from:bank1Eth, gas:transGas});
    msg = assert(accountByNumber[1] == accountId && accountByNumber[3] == false, 'Error disabling account');
    console.log('Disable Account - number(' + accountByNumber[1] + ') balance(' + accountByNumber[2] + ') exists(' + accountByNumber[3] + ')' + msg);

    console.log('Enabling account...');
    banker1.enableAccount(accountId, {from:bank1Eth, gas:transGas});
    accountByNumber = banker1.getAccountByNumber(accountId, {from:bank1Eth, gas:transGas});
    msg = assert(accountByNumber[1] == accountId && accountByNumber[3] == true, 'Error enabling account');
    console.log('Enable Account - number(' + accountByNumber[1] + ') balance(' + accountByNumber[2] + ') exists(' + accountByNumber[3] + ')' + msg);

    console.log('-------------------- CHECK TEST --------------------');    
    console.log('Adding check - codeline(' + codeline1 + ')');
    banker1.addCheck(account1, codeline1, CheckType.Check, {from:user1Addr, gas:transGas});
    var check = banker1.getBase(codeline1, {from:user1Addr, gas:transGas});
    msg = assert(check[1] == 0 && check[3] == 0 && check[4] == CheckType.Check, 'Error adding check');
    console.log('Add Check - owner(' + check[0] + ') amount(' + check[1] + ') date(' + check[2] + ') version(' + check[3] + ') checkType(' + check[4] + ')' + msg);

    console.log('Adding check - codeline(' + codeline2 + ')');
    banker1.addCheck(account1, codeline2, CheckType.Check, {from:user1Addr, gas:transGas});
    check = banker1.getBase(codeline2, {from:user1Addr, gas:transGas});
    msg = assert(check[1] == 0 && check[3] == 0 && check[4] == CheckType.Check, 'Error adding check');
    console.log('Add Check - owner(' + check[0] + ') amount(' + check[1] + ') date(' + check[2] + ') version(' + check[3] + ') checkType(' + check[4] + ')' + msg);

    console.log('Adding check - codeline(' + codeline3 + ')');
    banker1.addCheck(account2, codeline3, CheckType.Check, {from:user2Addr, gas:transGas});
    check = banker1.getBase(codeline3, {from:user2Addr, gas:transGas});
    msg = assert(check[1] == 0 && check[3] == 0 && check[4] == CheckType.Check, 'Error adding check');
    console.log('Add Check - owner(' + check[0] + ') amount(' + check[1] + ') date(' + check[2] + ') version(' + check[3] + ') checkType(' + check[4] + ')' + msg);

    console.log('Adding check - codeline(' + codeline4 + ')');
    banker1.addCheck(account1, codeline4, CheckType.Check, {from:user1Addr, gas:transGas});
    check = banker1.getBase(codeline2, {from:user1Addr, gas:transGas});
    msg = assert(check[1] == 0 && check[3] == 0 && check[4] == CheckType.Check, 'Error adding check');
    console.log('Add Check - owner(' + check[0] + ') amount(' + check[1] + ') date(' + check[2] + ') version(' + check[3] + ') checkType(' + check[4] + ')' + msg);

    var newcodeline  = "203800018111111111119959112";
    var newcodeline2 = "203800018111111111119112233";
    var newcodeline3 = "203800018111111111120445566";

    var checksAccount1 = banker1.getChecksCount(account1, {from:bank1Eth, gas:transGas});
    console.log('Account1 checks count previous: ' + checksAccount1);
    var checksAccount2 = banker1.getChecksCount(account2, {from:bank1Eth, gas:transGas});
    console.log('Account2 checks count previous: ' + checksAccount2);
    var checksAccount3 = banker1.getChecksCount(accountId, {from:bank1Eth, gas:transGas});
    console.log('Account3 checks count previous: ' + checksAccount3);

    console.log('Adding check - codeline(' + newcodeline + ')');
    banker1.addCheck(account1, newcodeline, CheckType.Check, {from:user1Addr, gas:transGas});
    var countcheck = banker1.getChecksCount(account1, {from:bank1Eth, gas:transGas});
    msg = assert(countcheck == Number(checksAccount1) + 1, 'Check not created');
    console.log('Account1 checks count: ' + countcheck + msg);

    var check = banker1.getBase(newcodeline, {from:user1Addr, gas:transGas});
    msg = assert(check[1] == 0 && check[3] == 0 && check[4] == CheckType.Check, 'Error adding check');
    console.log('Add Check - owner(' + check[0] + ') amount(' + check[1] + ') date(' + check[2] + ') version(' + check[3] + ') checkType(' + check[4] + ')' + msg);

    console.log('Adding check - codeline(' + newcodeline2 + ')');
    banker1.addCheck(account2, newcodeline2, CheckType.ConformedCheck, {from:user2Addr, gas:transGas});
    countcheck = banker1.getChecksCount(account2, {from:bank1Eth, gas:transGas});
    msg = assert(countcheck == Number(checksAccount2) + 1, 'Check not created');
    console.log('Account2 checks count: ' + countcheck + msg);

    check = banker1.getBase(newcodeline2, {from:user2Addr, gas:transGas});
    msg = assert(check[1] == 0 && check[3] == 0 && check[4] == CheckType.ConformedCheck, 'Error adding check');
    console.log('Add Check - owner(' + check[0] + ') amount(' + check[1] + ') date(' + check[2] + ') version(' + check[3] + ') checkType(' + check[4] + ')' + msg);

    console.log('Adding check - codeline(' + newcodeline3 + ')');
    banker1.addCheck(accountId, newcodeline3, CheckType.Pagare, {from:user3Addr, gas:transGas});
    countcheck = banker1.getChecksCount(accountId, {from:bank1Eth, gas:transGas});
    msg = assert(countcheck == Number(checksAccount3) + 1, 'Check not created');
    console.log('Account3 checks count: ' + countcheck + msg);

    check = banker1.getBase(newcodeline3, {from:user3Addr, gas:transGas});
    msg = assert(check[1] == 0 && check[3] == 0 && check[4] == CheckType.Pagare, 'Error adding check');
    console.log('Add Check - owner(' + check[0] + ') amount(' + check[1] + ') date(' + check[2] + ') version(' + check[3] + ') checkType(' + check[4] + ')' + msg);

    console.log('------------------- CHECK TEST VERSIONS ------------------------');
   
    var amount = 1500;
    var processDate = 1559111236639747158;
    var newStatus = CheckStatus.Filled;
    var securityCode = '';
    var newSecurityCode = '';
    var mail = 'test.ipsa.mail@gmail.com';

    console.log('Updating check...');
    var accountbynumber;
    checkindex = banker1.getCheckIndex(codeline3, {from:bank1Eth, gas:transGas});
    console.log('Index codeline3 : ' + checkindex);
 
    banker1.updateCheck(codeline3, amount, processDate, '', newStatus, '', '', 'test', securityCode, newSecurityCode, mail, {from:user2Addr, gas:transGas});

    check = banker1.getBase(codeline3, {from:bank1Eth, gas:transGas});
    msg = assert(check[1] == amount && check[2] == processDate && check[3] == 1 && check[4] == CheckType.Check, 'Error updating check');
    console.log('Update Check - owner(' + check[0] + ') amount(' + check[1] + ') date(' + check[2] + ') version(' + check[3] + ') checkType(' + check[4] + ')' + msg);
    var version = banker1.getVersion(codeline3, check[3], {from:bank1Eth, gas:transGas});
    msg = assert(version[0] == newStatus && version[6] == mail, 'Error updating check');
    console.log('               status(' + version[0] + ') depositAccount(' + version[1] + ') deliveredTo(' + version[2] + ') reason(' + version[3] + ') timestamp(' + version[5] + ') mail(' + version[6] + ')' + msg);
    
    var newStatus1 = CheckStatus.Delivered;
    securityCode = '';
    newSecurityCode = '123';
    banker1.updateCheck(codeline3, amount, processDate, '', newStatus1, '', '', 'test', securityCode, newSecurityCode, mail, {from:bank1Eth, gas:transGas});

    check = banker1.getBase(codeline3, {from:bank1Eth, gas:transGas});
    msg = assert(check[1] == amount && check[2] == processDate && check[3] == 2 && check[4] == CheckType.Check, 'Error updating check');
    console.log('Update Check - owner(' + check[0] + ') amount(' + check[1] + ') date(' + check[2] + ') version(' + check[3] + ') checkType(' + check[4] + ')' + msg);
    version = banker1.getVersion(codeline3, check[3], {from:bank1Eth, gas:transGas});
    msg = assert(version[0] == newStatus1 && version[6] == mail, 'Error updating check');
    console.log('               status(' + version[0] + ') depositAccount(' + version[1] + ') deliveredTo(' + version[2] + ') reason(' + version[3] + ') timestamp(' + version[5] + ') mail(' + version[6] + ')' + msg);

    console.log('Set status check as banker ...');
    var newStatus2 = CheckStatus.Locked;
    var amount2 = 0;
    var processDate2 = 0;
    securityCode = '';
    newSecurityCode = '';
    mail = '';
    banker1.updateCheck(codeline3, amount2, processDate2, '', newStatus2, '', '', '', securityCode, newSecurityCode, mail, {from:bank1Eth, gas:transGas});

    check = banker1.getBase(codeline3, {from:bank1Eth, gas:transGas});
    msg = assert(check[1] == amount && check[2] == processDate && check[3] == 3 && check[4] == CheckType.Check, 'Error set status check');
    console.log('Set status Check - owner(' + check[0] + ') amount(' + check[1] + ') date(' + check[2] + ') version(' + check[3] + ') checkType(' + check[4] + ')' + msg);
    version = banker1.getVersion(codeline3, check[3], {from:bank1Eth, gas:transGas});
    msg = assert(version[0] == newStatus2, 'Error set status check');
    console.log('                   status(' + version[0] + ') depositAccount(' + version[1] + ') deliveredTo(' + version[2] + ') reason(' + version[3] + ') timestamp(' + version[5] + ') mail(' + version[6] + ')' + msg);

    console.log('---------------------- TRANSACTION TEST ---------------------');
    
    console.log('Get transactions account ' + account2);
    var counttransini = regulator.getTransactionsLength(account2, {from:bank1Eth, gas:transGas});
    console.log('TransactionsLength before ' + counttransini);
    msg = assert(counttransini == 0, 'TransactionsLength before');
    console.log('TransactionsLength before ' + msg);
    console.log('------------------ADD TRANSACTION INTRA------------------');
    console.log('Adding Transaction IntraBank:'+ bankCode1 + ', ' + account2 + ', ' + codeline1);
    regulator.addTransaction(bankCode1, account2, codeline1, 0, CheckStatus.Filled, {from:bank1Eth, gas:transGas});
    console.log('Add Transaction');

    var counttransafter = regulator.getTransactionsLength(account2, {from:bank1Eth, gas:transGas});
    console.log('TransactionsLength after ' + counttransafter);
    msg = assert(counttransafter == 1, 'TransactionsLength after');
    console.log('TransactionsLength after ' + msg);

    var transactionadd = regulator.getTransaction(account2, counttransini, {from:bank1Eth, gas:transGas});
    msg = assert(transactionadd[4] == CheckStatus.Filled, 'Get transaction');
    console.log('Add Transaction ' + msg);

    var accountHash = regulator.getAccountHash(0, {from:regulatorEth, gas:transGas});
    counttransafter = regulator.getTransactionsLengthByHash(accountHash, {from:regulatorEth, gas:transGas});
    console.log('TransactionsLengthByHash ' + counttransafter);
    msg = assert(counttransafter == 1, 'Get transaction Length by accountHash');
    console.log('AccountTransactionHash ' + accountHash);
    console.log('TransactionsLengthByHash ' + msg);

    var lengthHash = regulator.getTransactionsLengthByHash(accountHash, {from:bank1Eth, gas:transGas});
    console.log('TransactionsLengthByHash before ' + lengthHash);

    var accountLength = regulator.getAccountLength();
    msg = assert(accountLength == 1, 'Get AccountLength');
    console.log('AccountTransactionLength ' + accountLength);
    console.log('AccountTransactionLength ' + msg);

};
//////////////////////////////////////////////////////////////////////////////////////

var usage = function() {
    console.log('Usage: ');
    console.log('     deploy()   -> Deploy contracts for PoC and Demo.');
//    console.log('     deployForDemo()   -> Deploy contracts opc. Demo.');
//    console.log('     deployForRegulator()   -> Deploy contracts opc. Regulator');
//    console.log('     deployForBanker(bankaddress)   -> Deploy contracts opc. Banker');
    console.log('     initPoC()  -> Initialize and configure contracts for PoC.');
    console.log('     initDemo() -> Initialize and configure contracts for Demo.');
//    console.log('     initRegulator()     -> Initialize and configure contracts opc. Regulator.');
//    console.log('     initBanker(bankcode, bankaddress)     -> Initialize and configure contracts opc. Banker.');
    console.log('     setAddrs() -> Sets previous deployed contract addresses.');
    console.log('     manage()   -> Manage contracts.');
//    console.log('     infoPoC()  -> Print contracts information for PoC.');
    console.log('     info()     -> Print contracts information.');
    console.log('     infoUsers()-> Print users information.');
    console.log('     push()     -> Push contracts deployment.');
    console.log('     test()     -> Execute a simple use case.')
    console.log('     usage()    -> Show this help.');
};

usage();