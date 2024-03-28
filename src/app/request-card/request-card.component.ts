import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { account } from '../../assets/data';

@Component({
  selector: 'app-request-card',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './request-card.component.html',
  styleUrl: './request-card.component.css'
})
export class RequestCardComponent {
  showSuccessMessage: boolean = false;
  fullName: string = '';
  accountNumber: number = NaN;
  address: string = '';
  email: string = '';
  phoneNumber: number = NaN;

  submitForm() {
    // if (this.cardRequestForm.valid) {
    //   // Form submission logic goes here
      this.showSuccessMessage = true;
     
    // Handle form submission logic here
    alert('Form submitted');
    // this.showSuccessMessage = true;
    this.fullName = '';
    this.accountNumber = NaN;
    this.address = '';
    this.email = '';
    this.phoneNumber = NaN; 
  }

}