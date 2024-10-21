class Loan {
    constructor(loanAmount, interestRate, loanTerm) {
        this.loanAmount = loanAmount;
        this.interestRate = interestRate / 100;
        this.loanTerm = loanTerm; 
        this.monthlyPayment = this.calculateMonthlyPayment();
        this.emisPaid = 0;
    }

   
    calculateMonthlyPayment() {
        const principal = this.loanAmount;
        const rate = this.interestRate / 12;
        const term = this.loanTerm;

        
        const emi = principal * rate * Math.pow(1 + rate, term) / (Math.pow(1 + rate, term) - 1);

        return emi;
    }

   
    checkLoanStatus() {
        const totalPaid = this.monthlyPayment * this.emisPaid;
        const remainingLoanAmount = this.loanAmount * Math.pow(1 + this.interestRate / 12, this.loanTerm) - totalPaid * (Math.pow(1 + this.interestRate / 12, this.loanTerm) - 1) / (this.interestRate / 12);
        
        console.log("EMIs Paid:",this.emisPaid);
        console.log("Remaining Loan Amount: ",remainingLoanAmount.toFixed(2));
        console.log("Total Payment Made: ",totalPaid.toFixed(2));
        return remainingLoanAmount;
    }

    
    payEmi() {
        if (this.emisPaid < this.loanTerm) {
            this.emisPaid++;
            console.log("EMI Paid. Total EMIs Paid: ",this.emisPaid);
        } else {
            console.log("All EMIs have already been paid.");
        }
    }
}


const myLoan = new Loan(10000, 5, 24); 

console.log("Monthly EMI: ",myLoan.calculateMonthlyPayment().toFixed(2));
myLoan.payEmi();        
myLoan.checkLoanStatus(); 
