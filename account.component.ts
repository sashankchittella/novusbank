import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {
  user = {
    name: "sashank",
    cardNumber: "2583 5147 6970",
    cardExpiry: "12/25",
    cardCVV: "XXX",
    balance: 5000
  };

  recipientAccountNumber: string = '';
  transferAmount: number | null = null;
  transferNote: string = '';
  errorMessage: string = '';

  transactionHistory: any[] = [];

  transferMoney() {
    if (!this.recipientAccountNumber || !this.transferAmount || this.transferAmount <= 0) {
      this.errorMessage = "Invalid input values";
      return;
    }

    if (this.transferAmount > this.user.balance) {
      this.errorMessage = "Insufficient balance";
      return;
    }

    this.user.balance -= this.transferAmount;

    this.transactionHistory.push({
      time: new Date().toLocaleString(),
      toAccount: this.recipientAccountNumber,
      note: this.transferNote,
      amount: -this.transferAmount,
      amountColor: "red"
    });

    // Clear input fields and error message
    this.recipientAccountNumber = '';
    this.transferAmount = null;
    this.transferNote = '';
    this.errorMessage = '';
  }
  
  applyForLoan() {
    // You can implement the logic for applying for loans here
    // navigate to the loans page
  }
}
