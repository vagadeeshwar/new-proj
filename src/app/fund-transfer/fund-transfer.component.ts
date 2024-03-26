// money-transaction.component.ts

import { Component } from '@angular/core';

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrls: ['./fund-transfer.component.css']
})
export class FundTransferComponent {
  balance: number = 1000; // Starting balance
  amount: number = 0;
  transactionType: string = 'withdraw'; // Default transaction type

  // Method to perform transaction
  performTransaction(): void {
    if (this.transactionType === 'withdraw') {
      if (this.amount > this.balance) {
        alert('Insufficient balance');
      } else {
        this.balance -= this.amount;
        alert(`Withdrawal successful. New balance: $${this.balance}`);
      }
    } else if (this.transactionType === 'deposit') {
      this.balance += this.amount;
      alert(`Deposit successful. New balance: $${this.balance}`);
    }
    this.amount = 0; // Reset amount after transaction
  }
}
