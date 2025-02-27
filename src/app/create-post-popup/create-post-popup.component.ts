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
    health: false,
    tecnology: false,
    art: false,
    science: false,
  };

  // Define el orden de las categorías y sus números correspondientes
  categoryOrder: (keyof typeof this.selectedCategories)[] = [
    'social',
    'health',
    'tecnology',
    'art',
    'science'
  ];


  postData = {
    title: '',
    content : '',
    community_id: 0,
    is_adult: false,
    tag_ids: [] as number[],
    attached_picture: 'https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg',
  };

  toggleCategory(category: keyof typeof this.selectedCategories) {
    this.selectedCategories[category] = !this.selectedCategories[category];

    this.updateSelectedCategories();
  }

  // Update selected tags with the respective number
  updateSelectedCategories() {
    this.postData.tag_ids = this.categoryOrder
      .map((category, index) => ({
        isSelected: this.selectedCategories[category],
        number: index + 1
      }))
      .filter(item => item.isSelected)
      .map(item => item.number);
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
    this.postData.community_id = Number(this.postData.community_id)
    console.log(this.postData);
    this.apiService.createPost(this.postData).subscribe({
      next: (response: any) => {
        alert('New post created!')
      },
      error: (err: any) => {
        if (err.status == 400) {
          console.error('Err', err)
        }
      }
    })
  }

}
