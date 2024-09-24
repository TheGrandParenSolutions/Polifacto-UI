import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.scss'
})
export class ForgotPasswordComponent {
  isLoading = false;
  hasRecoveryEmailSent = false;

  sendRecoveryEmailToReceipt = () => {
    this.isLoading = true;
    this.hasRecoveryEmailSent = true
    this.isLoading = false;
  }
}
