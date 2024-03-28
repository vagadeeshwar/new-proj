import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Transaction {
  id: number;
  type: string;
  amount: number;
  date: string;
  receiver_account_number: string;
}

@Component({
  selector: 'app-fund-transfer',
  templateUrl: './fund-transfer.component.html',
  styleUrl: './fund-transfer.component.css',
  standalone: true,
  imports: [CommonModule, FormsModule]
})

export class FundTransferComponent {
  balance: number = 1500; // Starting balance
  amount: number = 0;
  count: number = 0;
  transactionType: string = "withdraw"; // Default transaction type
  transactionHistory: Transaction[] = [];
  account_number: string = "12345678908675";
  receiver_account_number: string = "";


  // Method to perform transaction
  performTransaction(): void {
    if (this.transactionType === 'withdraw' || this.transactionType === 'transact') {
      if (this.amount > this.balance) {
        alert(`Insufficient balance: $${this.balance}`);
      } else {
        this.balance -= this.amount;
        alert(`Withdrawal successful. New balance: $${this.balance}`);
      }
    } else if (this.transactionType === 'deposit') {
      this.balance += this.amount;
      alert(`Deposit successful. New balance: $${this.balance}`);
    }

    this.transactionHistory.push({
      id: ++this.count,
      type: this.transactionType,
      amount: this.amount,
      date: new Date().toUTCString(),
      receiver_account_number: this.transactionType==='transact' ? this.receiver_account_number : this.account_number
    })

    this.amount = 0; // Reset amount after transaction
    this.receiver_account_number = '0';
  }
}