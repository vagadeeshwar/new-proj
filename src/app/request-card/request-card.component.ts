import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-request-card',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './request-card.component.html',
  styleUrls: ['./request-card.component.css']
})
export class RequestCardComponent {
  cardRequestForm: FormGroup;
  showSuccessMessage: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.cardRequestForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      accountNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{12}$/)]],
      address: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]]
    });
  }

  get fullName() {
    return this.cardRequestForm.get('fullName') as FormControl;
  }

  get accountNumber() {
    return this.cardRequestForm.get('accountNumber') as FormControl;
  }

  get address() {
    return this.cardRequestForm.get('address') as FormControl;
  }

  get email() {
    return this.cardRequestForm.get('email') as FormControl;
  }

  get phoneNumber() {
    return this.cardRequestForm.get('phoneNumber') as FormControl;
  }

  submitForm() {
    if (this.cardRequestForm.valid) {
      this.showSuccessMessage = true;

      this.cardRequestForm.reset();
    }
  }
}