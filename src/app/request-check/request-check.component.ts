import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-request-check',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './request-check.component.html',
  styleUrl: './request-check.component.css'
})
export class RequestCheckComponent {
  formData = {
    accountNumber: '',
    numberOfCheques: null
  };
  chequebookRequestForm: FormGroup;

  constructor() {
    this.chequebookRequestForm = new FormGroup({
      accountNumber: new FormControl('', [
        Validators.required,
        Validators.maxLength(12)
      ]),
      numberOfCheques: new FormControl(null, [Validators.required, Validators.min(1)])
    });
  }

  successMessage: string = '';

  submitForm() {
    // Simulate form submission logic (e.g., sending data to a server)
    // Here, I'm just logging the form data to the console and showing a success message
    console.log('Form data:', this.formData);
    this.successMessage = 'Chequebook request submitted successfully!';
  }

}
