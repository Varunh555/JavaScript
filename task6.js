class Loan {
    constructor(id, applicantName, amount, income, accountBalance) {
      this.id = id;
      this.applicantName = applicantName;
      this.amount = amount;
      this.income = income;
      this.accountBalance = accountBalance;
      this.status = 'Pending';
    }
  
    
    displayDetails() {
      console.log("Loan ID:", this.id);
      console.log("Applicant:",this.applicantName);
      console.log("Amount: ",this.amount);
      console.log("Income: ",this.income);
      console.log("Account Balance:",this.accountBalance);
      console.log("Status:",this.status);
    }
  }
  
  class LoanManager {
    constructor(minimumIncome, minimumBalance) {
      this.loans = [];
      this.minimumIncome = minimumIncome;
      this.minimumBalance = minimumBalance;
    }
  
  
    applyForLoan(id, applicantName, amount, income, accountBalance) {
      const newLoan = new Loan(id, applicantName, amount, income, accountBalance);
      this.loans.push(newLoan);
      console.log("Loan application submitted for", applicantName);
    }
  
   
    approveLoan(id) {
      const loan = this.loans.find(loan => loan.id === id);
      if (loan) {
        if (this._isEligible(loan)) {
          loan.status = 'Approved';
          console.log("Loan ID" + id + "has been approved.");
        } else {
          console.log("Loan ID" + id + "does not meet the eligibility criteria.");
        }
      } else {
        console.log("Loan ID" + id + "not found.");
      }
    }
  
    
    rejectLoan(id) {
      const loan = this.loans.find(loan => loan.id === id);
      if (loan) {
        loan.status = 'Rejected';
        console.log("Loan ID" + id + "has been rejected.");
      } else {
        console.log("Loan ID" + id + "not found.");
      }
    }
  
    
    _isEligible(loan) {
      return loan.income >= this.minimumIncome && loan.accountBalance >= this.minimumBalance;
    }
  
    
    listLoans() {
      this.loans.forEach(loan => loan.displayDetails());
    }
  }
  
 
  const manager = new LoanManager(30000, 1000);
  
  manager.applyForLoan(1, 'John Doe', 5000, 35000, 1200);
  manager.applyForLoan(2, 'Jane Smith', 7000, 25000, 900);
  
  manager.listLoans();
  
  manager.approveLoan(1);
  manager.rejectLoan(2);
  
  manager.listLoans();
  