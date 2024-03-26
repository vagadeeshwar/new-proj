import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { providers } from '../../assets/data'; // Adjust the import path as necessary

@Component({
  selector: 'app-bill-payment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bill-payment.component.html',
  styleUrl: './bill-payment.component.css'
})

export class BillPaymentComponent {
  providers = providers;
  availableBoolean = Array(this.providers.length).fill(true);


  filteredProviders(bool:Boolean) {
    return this.providers.filter((_, index) => this.availableBoolean[index] === bool);
  }

  updateProvider(e: Event) {
    const target = e.target as HTMLInputElement; // Type assertion
    const id = parseInt(target.id, 10) - 1; // Ensure 'id' is treated as a number
    this.availableBoolean[id] = !this.availableBoolean[id];
  }
}