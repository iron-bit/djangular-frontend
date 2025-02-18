import { Component, Pipe } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-post',
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent {
  post = {
    'id': '1111',
    'title': 'I bought a used printer and thought I would go check to see what print files the previous owner may have left on the flash drive. While looking I noticed that they had been doing timelapse videos.',
    'community_image': 'https://avatars.githubusercontent.com/u/72162161?v=4',
    'community_name': 'Salinas',
    'image': 'https://gratisography.com/wp-content/uploads/2025/01/gratisography-dog-vacation-800x525.jpg',
    // 'image': 'https://imgs.search.brave.com/dMYkbf1nBKGo6Y0QY4_FvjFiXI_LZ-LPUkpNB9lCtho/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzM4LzVj/Lzc2LzM4NWM3NjY5/ODljNmYxYzM1NGY0/YzFkZGZjMWI5YzZi/LmpwZw',
    'aura': '7000',
    'comments': '299',
    // 'posted_date': '2025-02-14',
    'posted_date': '9 hours ago',
    'tags': [
      'Social',
      'Sports',
      'Games'
    ],
    'on_community': 'false'
  }
}
