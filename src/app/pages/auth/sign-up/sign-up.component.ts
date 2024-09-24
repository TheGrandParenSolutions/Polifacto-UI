import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [CommonModule,RouterModule, FormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent {
  isLoading = false;
  isPasswordSectionActive = false;
  showPassword = false;
  activePasswordSection = () => {
    this.isPasswordSectionActive = true;
  }

  showPasswordToUser = () => {
    this.showPassword = true;
  }

  hidePasswordFromUser = () => {
    this.showPassword = false;
  }
}
