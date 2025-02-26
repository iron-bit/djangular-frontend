import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../services/auth.service';

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

  constructor(private apiService: AuthService) {
  }

  // Méthodo que se ejecuta al enviar el formulario
  onSubmit(): void {
    this.submitted = true;
    this.loginError = false;


    // Llamamos al servicio para autenticar al usuario
    this.apiService.login(this.loginData.username, this.loginData.password).subscribe({
      next: () => alert('Login hecho correctamente!'),
      error: () => alert('Error en el login:'),
    });
  }
}
