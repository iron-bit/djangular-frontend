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
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    birthdate: '', // Valor ingresado por el usuario (string en formato de fecha)
    terms: false
  };

  constructor(private apiService: AuthService) {

    function convertirFecha(fecha: string): string | null {
      const partes = fecha.split('/');
      if (partes.length !== 3) return null; // Formato inválido
      const [dia, mes, año] = partes;
      // Retorna la fecha en formato ISO
      return `${año}-${mes.padStart(2, '0')}-${dia.padStart(2, '0')}`;
    }

  }

  onSubmit(): void {
    // Verifica que la contraseña y su confirmación coincidan
    if (this.registerData.password !== this.registerData.confirmPassword) {
      console.error('Las contraseñas no coinciden');
      return;
    }

    // Calcula la edad a partir de la fecha de nacimiento
    const birthDate = new Date(this.registerData.birthdate);
    const today = new Date();

    console.log(birthDate);
    console.log(today);
    
    
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    
    // Crea un objeto con los datos a enviar, usando la edad calculada
    const dataToSend = {
      nombre: this.registerData.nombre,
      username: this.registerData.username,
      email: this.registerData.email,
      password: this.registerData.password,
      age: age, // Se envía la edad en lugar de la fecha de nacimiento
      terms: this.registerData.terms
    };

    console.log('Registro enviado', dataToSend);

    this.apiService.register(dataToSend).subscribe(
      (response) => {
        console.log('Respuesta del servidor:', response);
      },
      (error) => {
        console.error('Error en la solicitud', error);
      }
    );
  }
  
}
