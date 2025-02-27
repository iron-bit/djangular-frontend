import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-create-post-popup',
  imports: [CommonModule, FormsModule],
  templateUrl: './create-post-popup.component.html',
  styleUrl: './create-post-popup.component.css'
})
export class CreatePostPopupComponent implements OnInit {

  constructor(private apiService: ApiService) {}

  userAvatar: string = 'https://img.freepik.com/vector-gratis/juego-joystick-tecnologia-deportiva_138676-2045.jpg';

  selectedCategories = {
    social: false,
    science: false,
    tecnology: false,
    health: false,
    art: false,
  };

  postData = {
    title: '',
    description: '',
    community: '',
    selectedCategories: [],
    image: '',
  }

  toggleCategory(category: keyof typeof this.selectedCategories) {
    this.selectedCategories[category] = !this.selectedCategories[category];
  }

  selectedFile: File | null = null;

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
      // Aquí puedes agregar lógica adicional si es necesario
    }
  }

  // Método para enviar el archivo al backend
  uploadFile(): void {
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('image', this.selectedFile, this.selectedFile.name);

      // Aquí debes implementar la lógica para enviar 'formData' al backend
      // Por ejemplo, utilizando HttpClient de Angular
    } else {
      console.error('No se ha seleccionado ningún archivo.');
    }
  }

  //
  public communities = []

  ngOnInit(): void {
    this.apiService.getCommunities().subscribe({
      next: (response: any) => {
        this.communities = response;
        console.log(this.communities)
      },
      error: (err: any) => {
        if (err.status == 400) {
          console.error('Err', err);
        }
      }
    })
  }

  public createPost() {

  }

}
