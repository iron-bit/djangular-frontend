import { Component } from '@angular/core';


interface User {
  fullName: string;
  nickName: string;
  age: number;
  creationDate: string;
  email: string;
  photoUrl?: string;
}

@Component({
  selector: 'app-account-data',
  imports: [],
  templateUrl: './account-data.component.html',
  styleUrl: './account-data.component.css'
})
export class AccountDataComponent {
  
  isEditing = false;
  user: User = {
    fullName: 'Nombre Apellido',
    nickName: 'Usuario123',
    age: 30,
    creationDate: '2022-01-01',
    email: 'usuario@example.com',
    photoUrl: 'assets/default-user-datos-cuenta.webp', 
  };

  photoPreview: string | ArrayBuffer | null | undefined = this.user.photoUrl;

  toggleEdit() {
    if (this.isEditing) {
      // Lógica para guardar los cambios
      this.saveProfile();
    }
    this.isEditing = !this.isEditing;
  }

  onFileChange(event: Event) {
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

  saveProfile() {
    // Lógica para guardar el perfil actualizado
    console.log('Perfil guardado', this.user);
    // Aquí puedes agregar la lógica para enviar los datos actualizados al servidor
  }
}