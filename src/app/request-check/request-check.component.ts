import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-check',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './request-check.component.html',
  styleUrls: ['./request-check.component.css']
})
export class RequestCheckComponent {
  chequebookRequestForm: FormGroup;
  successMessage: string = '';

  constructor(private formBuilder: FormBuilder) {
    this.chequebookRequestForm = this.formBuilder.group({
      accountNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{12}$/)]],
      numberOfCheques: [null, [Validators.required, Validators.min(1)]]
    });
  }

  get accountNumber() {
    return this.chequebookRequestForm.get('accountNumber') as FormControl;
  }

  get numberOfCheques() {
    return this.chequebookRequestForm.get('numberOfCheques') as FormControl;
  }

  submitForm() {
    if (this.chequebookRequestForm.valid) {
      // Simulate form submission logic (e.g., sending data to a server)
      // Here, I'm just logging the form data to the console and showing a success message
      console.log('Form data:', this.chequebookRequestForm.value);
      this.successMessage = 'Chequebook request submitted successfully!';

      // Reset form
      this.chequebookRequestForm.reset();
    }
  }
}