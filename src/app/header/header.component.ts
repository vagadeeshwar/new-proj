import { Component } from '@angular/core';
import { RouterLink, Router } from "@angular/router";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'header',
  standalone: true,
  imports: [RouterLink, FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  selectedOption: string = '';

  constructor(private router: Router) { }

  onOptionSelected() {
    if (this.selectedOption === 'checkbook') {
      this.router.navigate(['/req-check']);
    } else if (this.selectedOption === 'card') {
      this.router.navigate(['/req-card']);
    }
  }
}