import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

interface User {
  fullName: string;
  username: string;
  age: number;
  creationDate: string;
  email: string;
  photoUrl?: string;
}

@Component({
  selector: 'app-account-data',
  imports: [FormsModule, CommonModule],
  templateUrl: './account-data.component.html',
  styleUrls: ['./account-data.component.css']  // Asegúrate de usar "styleUrls" (con s)
})
export class AccountDataComponent implements OnInit {

  isEditing = false;
  user: User = {
    fullName: '',
    username: '',
    age: 0,
    creationDate: '',
    email: '',
    photoUrl: 'assets/default-user-datos-cuenta.webp'
  };

  photoPreview: string | ArrayBuffer | null | undefined = this.user.photoUrl;

  constructor(private apiService: ApiService, private authService: AuthService) {}

  ngOnInit(): void {
    this.loadUserData();
  }

  loadUserData(): void {
    this.apiService.getUserInfo().subscribe(
      (data: any) => {
        // Ajusta este mapeo según la estructura que devuelva tu API
        this.user = {
          fullName: data.first_name + ' ' + data.last_name,
          username: data.username,
          age: data.age,
          creationDate: data.creation_date.split('T')[0], // Solo se obtiene la parte de la fecha
          email: data.email,
          photoUrl: data.profile_picture || 'assets/default-user-datos-cuenta.webp'
        };
        this.photoPreview = this.user.photoUrl;
      },
      error => {
        console.error('Error al cargar los datos del usuario', error);
      }
    );
  }

  toggleEdit(): void {
    if (this.isEditing) {
      // Lógica para guardar los cambios
      this.saveProfile();
    }
    this.isEditing = !this.isEditing;
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        this.photoPreview = e.target?.result;
      };
      reader.readAsDataURL(file);
      // Aquí puedes agregar la lógica para subir la nueva imagen al servidor
    }
  }

  saveProfile(): void {
    // Lógica para guardar el perfil actualizado
    console.log('Perfil guardado', this.user);
    // Aquí puedes agregar la lógica para enviar los datos actualizados al servidor
  }
}