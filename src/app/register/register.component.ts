import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerData = {
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthdate: '', // Valor ingresado por el usuario (string en formato de fecha)
    terms: false
  };

  constructor(private apiService: AuthService, private router: Router) {
  }

  onSubmit(): void {
    // Validate Terms and Conditions
    if (!this.registerData.terms) {
      alert('You must accept the terms and conditions.');
      return;
    }

    // Validate Passwords
    if (this.registerData.password !== this.registerData.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    // Validate Email Format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.registerData.email)) {
      alert('Please enter a valid email address.');
      return;
    }

    // Validate Birthdate
    const birthDate = new Date(this.registerData.birthdate);
    const today = new Date();

    if (isNaN(birthDate.getTime())) {
      alert('Invalid birthdate.');
      return;
    }

    if (birthDate > today) {
      alert('Birthdate cannot be in the future.');
      return;
    }

    // Calculate Age
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }

    // Prepare Data for Submission
    const dataToSend = {
      name: this.registerData.name,
      username: this.registerData.username,
      email: this.registerData.email,
      password: this.registerData.password,
      age: age,
      terms: this.registerData.terms,
    };

    console.log('Sending registration data...', dataToSend);

    // Call Registration API with error handling
    this.apiService.register(dataToSend).subscribe({
      next: (response) => {
        alert('Registration successful. Welcome!');
        console.log('Server response:', response);
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Error in the request:', error);

        this.handleRegistrationError(error);
      },
    });
  }

  private handleRegistrationError(error: any): void {
    if (error.status === 400) {
      alert('Invalid data. Please check your information.');
    } else if (error.status === 409) {
      alert('User already exists. Try using a different email or username.');
    } else {
      alert('An error occurred during registration. Please try again later.');
    }
  }
}
