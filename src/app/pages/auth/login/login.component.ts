import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
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
