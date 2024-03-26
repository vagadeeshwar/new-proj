import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { account } from '../../assets/data'; // Adjust the import path as necessary

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  accountData = account; // Define the type based on your account data structure

}