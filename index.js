let balance = 0;
const balanceDisplay = document.getElementById("balance");
const transactionsList = document.getElementById("transactions");

function addMoney() {
    let amount = parseFloat(document.getElementById("amount").value);
    if (amount > 0) {
        balance += amount;
        updateBalance();
        addTransaction("Add", amount);
        document.getElementById("amount").value = "";
    } else {
        alert("Please enter a valid amount.");
    }
}

function withdrawMoney() {
    let amount = parseFloat(document.getElementById("amount").value);
    if (amount > 0 && amount <= balance) {
        balance -= amount;
        updateBalance();
        addTransaction("Withdraw", amount);
        document.getElementById("amount").value = "";
    } else {
        alert("don't have enough funds to withdraw");
    }
}

function updateBalance() {
    balanceDisplay.textContent = balance.toFixed(2);
}

function addTransaction(type, amount) {
    const now = new Date();
    const transaction = `<li>${now.toLocaleString()} - ${type}: $${amount.toFixed(2)}</li>`;
    transactionsList.innerHTML += transaction;
}