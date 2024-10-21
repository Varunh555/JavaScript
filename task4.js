class BankAccount {
    constructor(accountNumber, accountHolderName, balance) {
        this.accountNumber = accountNumber;
        this.accountHolderName = accountHolderName;
        this.balance = balance;
    }

    
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited $${amount}. New balance: $${this.balance.toFixed(2)}`);
        } else {
            console.log("Deposit amount must be greater than zero.");
        }
    }

    
    withdraw(amount) {
        if (amount > 0) {
            if (amount <= this.balance) {
                this.balance -= amount;
                console.log(`Withdrew $${amount}. New balance: $${this.balance.toFixed(2)}`);
            } else {
                console.log("Insufficient balance.");
            }
        } else {
            console.log("Withdrawal amount must be greater than zero.");
        }
    }

    
    checkBalance() {
        console.log(`Current balance: $${this.balance.toFixed(2)}`);
        return this.balance;
    }
}


const myAccount = new BankAccount('123456789', 'John Doe', 1000);

myAccount.deposit(500);     
myAccount.withdraw(200);    
myAccount.checkBalance();  
