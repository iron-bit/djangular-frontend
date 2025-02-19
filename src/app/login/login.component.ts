import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  // Credenciales válidas para la prueba
  validCredentials = {
    nickname: 'paco',
    password: '1234'
  };

  
  // Objeto para almacenar los datos del formulario
  loginData = {
    nickname: '',   
    password: '',
    rememberMe: false
  };

  // Banderas de validación
  submitted: boolean = false;
  nicknameError: boolean = false;
  passwordError: boolean = false;
  loginError: boolean = false;

  // Al iniciar el componente, si existen credenciales guardadas se autocompleta el formulario
 

  // Método que se ejecuta al enviar el formulario
  onSubmit(): void {
    this.submitted = true;
    this.nicknameError = this.loginData.nickname !== this.validCredentials.nickname;
    this.passwordError = this.loginData.password !== this.validCredentials.password;

    if (
      this.loginData.nickname === this.validCredentials.nickname &&
      this.loginData.password === this.validCredentials.password
    ) {
      console.log('Login correcto');
      console.log('Datos del formulario:', this.loginData);
  
      // Aquí podrías llamar a un servicio de autenticación o redirigir al usuario
    } else {
      console.error('Credenciales incorrectas');
      this.loginError = true;
    }
  }
}
