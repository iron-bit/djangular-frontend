import { Component } from '@angular/core';
import { PostComponent } from '../post/post.component';
import { DockIzqComponent } from '../dock-izq/dock-izq.component';
import { CommunitiesComponent } from '../communities/communities.component';

@Component({
  selector: 'app-posts-view',
  imports: [PostComponent, DockIzqComponent, CommunitiesComponent],
  templateUrl: './posts-view.component.html',
  styleUrl: './posts-view.component.css'
})
export class PostsViewComponent {

}
