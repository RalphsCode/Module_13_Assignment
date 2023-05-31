// HELPER FUNCTION TO GET DOM ELEMENTS
(function bankAccount() {
    const $ = (id) => document.getElementById(id)

    var user;
    var balance = 0;
    const transactions = []

    function welcomeDisplay(ownerName){
        $('welcomeText').innerHTML =
        `Welcome to the bank ${ownerName}, please select an option below:`
        transactions.push('<br>Signed In');
        displayBalance();
    }


    //  GET THE USERNAME FROM THE DOM
    $('userNameBtn').addEventListener('click', function() {   
        $('withdrawText').textContent = `` ;
        $('depositText').textContent = `` ;
        user = $('userName').value
        welcomeDisplay(user)
        })


    // DEPOSIT FUNCTIONALITY
    $('deposit').addEventListener('click', function() {  
        $('withdrawText').textContent = `` ;
        $('displayText').textContent = `` ;
        if (!user) {
            $('depositText').textContent =
            `Please enter your name above before proceeding.`}
        else {
            $('depositText').innerHTML =
            `How much are you depositing? <input type="number" id="depositAmt">
                <button id="depositAmtBtn">Deposit Now</button>`
            $('depositAmtBtn').addEventListener('click', function() {  
                let depositAmount = Number($('depositAmt').value);
                $('depositText').textContent = ``; 
                if (depositAmount < 1) {
                    depositAmount = 1;
                    $('depositText').textContent = `Minimum deposit amount is $1 .`;
                  } else if (depositAmount > 100000) {
                    depositAmount = 100000;
                    $('depositText').textContent = `Maximum deposit amount is $100,000 .`;
                  }
                balance = balance + depositAmount
                $('depositText').textContent += `>>> Deposit Approved <<<`;
                transactions.push(`<br>Deposit: ${depositAmount}      Balance: ${balance}`);
                displayBalance()
                })
                }})


    //WITHDRAW FUNCTIONALITY
    $('withdraw').addEventListener('click', function() {   
        $('depositText').textContent = ``;
        $('displayText').textContent = ``;
        if (!user) {
            $('withdrawText').textContent =
            `Please enter your name above before proceeding.`}
        else {
            $('withdrawText').innerHTML =
            `How much are you withdrawing? <input type="number" id="withdrawAmt">
                <button id="withdrawAmtBtn">Withdraw Now</button>`
            $('withdrawAmtBtn').addEventListener('click', function() {   
                withdrawAmount = Number($('withdrawAmt').value);
                $('withdrawText').textContent = `` ;
                if (withdrawAmount < 0) {
                    withdrawAmount = 1;
                    $('withdrawText').textContent = `Minimum withdrawl amount is $1 .`;
                } else if (withdrawAmount > 100000) {
                    withdrawAmount = 100000;
                    $('withdrawText').textContent = `Maximum withdrawl amount is $100,000 .`;
                }
                if (balance - withdrawAmount < 0) {
                    $('withdrawText').textContent = `That amount (${withdrawAmount}) is not available, please try again.`;
                }
                else {
                    balance = balance - withdrawAmount;
                    $('withdrawText').textContent += `<<< Withdrawl Complete >>>` ;
                    transactions.push(`<br>Withdraw: ${withdrawAmount}      Balance: ${balance}`);
                    displayBalance()
                    } })
                }})


    // DISPLAY BALANCE
    function displayBalance() {
        $('currBal').innerHTML = 
        `${user}, your current balance is: $${balance}.`
        console.log(transactions)
        }


    // DISPLAY TRANSACTIONS
    $('display').addEventListener('click', function() {   
            $('depositText').textContent = ``;
            $('withdrawText').textContent = `` ;
            if (!user) {
                $('displayText').innerHTML =
                `Please enter your name above before proceeding.`}
            else {
                $('displayText').innerHTML = `${transactions}`
            }
        }
        )
    })();