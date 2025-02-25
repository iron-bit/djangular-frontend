import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';

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

  constructor(private apiService: ApiService) {}

  // Método que se ejecuta al enviar el formulario
  onSubmit(): void {
    this.submitted = true;
    this.loginError = false;
  
    // Llamamos al servicio para autenticar al usuario
    this.apiService.login(this.loginData).subscribe({
      next: (response: any) => {
        console.log('Login correcto:', response);
        
        // Almacenar los tokens en el localStorage
        localStorage.setItem('access_token', response.access);
        localStorage.setItem('refresh_token', response.refresh);
        
        // Redireccionar al dashboard u otra ruta según convenga
        //this.router.navigate(['/dashboard']);
      },
      error: (error) => {
        console.error('Error en el login:', error);
        this.loginError = true;
      }
    });
  }
  
}
