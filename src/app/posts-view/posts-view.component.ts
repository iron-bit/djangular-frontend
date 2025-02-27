import {Component, OnInit} from '@angular/core';
import {PostComponent} from '../post/post.component';
import {DockIzqComponent} from '../dock-izq/dock-izq.component';
import {CommunitiesComponent} from '../communities/communities.component';
import {ApiService} from '../services/api.service';
import {NgFor} from '@angular/common';

@Component({
  selector: 'app-posts-view',
  imports: [PostComponent, DockIzqComponent, CommunitiesComponent, NgFor],
  templateUrl: './posts-view.component.html',
  styleUrl: './posts-view.component.css'
})
export class PostsViewComponent implements OnInit {

  constructor(private apiService: ApiService) {
  }

  post = {
    'title': "",
    'content': "",
    'attached_picture': "",
    'aura': 0,
    'is_adult': false,
    'creation_date': "",
    'user': "",
    'community': {
      'id': 0,
      'name': "",
      'community_picture': "",
      'is_adult': false
    }
  }

  posts = [
    this.post
  ]

  ngOnInit(): void {
    this.apiService.getPostsInfo().subscribe({
      next: (response: any) => {
        this.posts = response;
        console.log('Posts:', this.posts);
      },
      error: (err: any) => {
        if (err.status === 400) {
          console.error('Err: ', err);
        }
      }
    });
  }

  updateAura(newAura: number): void {
    this.post.aura = newAura
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'  // Smooth scrolling
    });
  }
}
