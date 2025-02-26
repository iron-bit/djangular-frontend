import {Component} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerData = {
    nombre: '',
    nickname: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthdate: '',
    terms: false
  };


  constructor(private apiService: AuthService) {
  }


  onSubmit(): void {
    // Verifica que la contraseña y su confirmación coincidan
    if (this.registerData.password !== this.registerData.confirmPassword) {
      return;
    }
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Registro enviado', this.registerData);
    this.apiService.register(this.registerData).subscribe(
      (response) => {
        // Guarda la respuesta en una variable de tu componente
        const respuestaServidor = response;
        console.log('Respuesta del servidor:', respuestaServidor);
      },
      (error) => {
        console.error('Error en la solicitud', error);
      }
    );
  }

}
