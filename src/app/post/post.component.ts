import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

// post = {
//    'id': '1111',
//    'title': 'I bought a used printer and thought I would go check to see what print files the previous owner may have left on the flash drive. While looking I noticed that they had been doing timelapse videos.',
//    'community_image': 'https://avatars.githubusercontent.com/u/72162161?v=4',
//    'community_name': 'Salinas',
//    'image': 'https://gratisography.com/wp-content/uploads/2025/01/gratisography-dog-vacation-800x525.jpg',
//    // 'image': 'https://imgs.search.brave.com/dMYkbf1nBKGo6Y0QY4_FvjFiXI_LZ-LPUkpNB9lCtho/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzM4LzVj/Lzc2LzM4NWM3NjY5/ODljNmYxYzM1NGY0/YzFkZGZjMWI5YzZi/LmpwZw',
//    'aura': '7000',
//    'comments': '299',
//    // 'posted_date': '2025-02-14',
//    'posted_date': '9 hours ago',
//    'tags': [
//      'Social',
//      'Health',
//      'Gaming',
//      'Science',
//      'Art'
//    ],
//    'on_community': 'false',
//    'nsfw': 'true'
//  }

const post = {
  title: "",
  content: "",
  attached_picture: "",
  aura: 0,
  is_adult: false,
  creation_date: "",
  user: "",
  post_tags: [
    {tag: 'social'},
    {tag: 'health'},
    {tag: 'technology'}
  ],
  community: {
    id: 0,
    name: "",
    community_picture: "",
    is_adult: false
  }
};

@Component({
  selector: 'app-post',
  imports: [CommonModule],
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  @Input() post: any = {};

  private maxShowTags = 3;
  public tags: any[] = [];
  private tagsCategory: { [key: string]: string } = {
    social: 'blue',
    health: 'purple',
    technology: 'rose',
    science: 'emerald',
    art: 'orange',
  };
  public nsfw: boolean = false;

  ngOnInit(): void {
    this.tags = this.post.tags ? this.post.tags.slice(0, this.maxShowTags) : [];
    this.nsfw = this.post.nsfw ? this.post.nsfw.toLocaleLowerCase() === 'true' : false;
  }

  public getLabelColor(tagObject: { tag: string }) {
  const label = tagObject.tag.toLowerCase();
  const color = this.tagsCategory[label];
  return `${color}-label`;
}

  public disableNSFW() {
    this.nsfw = false;
  }
}
