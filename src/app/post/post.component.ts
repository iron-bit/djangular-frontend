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
