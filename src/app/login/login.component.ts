import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // Objeto para almacenar los datos del formulario
  loginData = {
    username: '',
    password: '',
    rememberMe: false
  };

  // Banderas para manejo de estados y errores
  submitted: boolean = false;
  loginError: boolean = false;

  constructor(private apiService: AuthService, private router: Router) {
  }

  // Méthodo que se ejecuta al enviar el formulario
  onSubmit(): void {
    this.submitted = true;
    this.loginError = false;

    // Validate input fields
    if (!this.loginData.username || !this.loginData.password) {
      this.loginError = true;
      alert('Please enter both username/email and password.');
      return;
    }

    // Call API service for authentication
    this.apiService.login(this.loginData.username, this.loginData.password).subscribe({
      next: () => {
        alert('Login successful!');
        this.router.navigate(['/']);
      },
      error: (err) => {
        this.loginError = true;
        console.error('Login error:', err);

        if (err.status === 401) {
          alert('Incorrect username or password.');
        } else if (err.status === 500) {
          alert('Server error. Please try again later.');
        } else {
          alert('Login error: ' + (err.message || 'Unknown error'));
        }
      },
    });
  }
}
