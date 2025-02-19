import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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


  


  onSubmit(): void {
    // Verifica que la contraseña y su confirmación coincidan
    if (this.registerData.password !== this.registerData.confirmPassword) {
      console.error('Las contraseñas no coinciden.');
      return;
    }
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Registro enviado', this.registerData);
  }
}
