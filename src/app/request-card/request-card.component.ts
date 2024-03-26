import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-request-card',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './request-card.component.html',
  styleUrl: './request-card.component.css'
})
export class RequestCardComponent {
  showSuccessMessage: boolean = false;

  submitForm() {
    // Handle form submission logic here
    alert('Form submitted');
    this.showSuccessMessage = true;
  }
}
