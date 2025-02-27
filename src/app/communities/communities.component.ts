import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-communities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './communities.component.html',
  styleUrls: ['./communities.component.css'],
  animations: [
    trigger('expandCollapse', [
      state('collapsed', style({
        height: '{{collapsedHeight}}',
        opacity: 0.8,
        overflow: 'hidden'
      }), { params: { collapsedHeight: '240px' }}),
      state('expanded', style({
        height: '*',
        opacity: 1,
        overflow: 'hidden'
      })),
      transition('collapsed <=> expanded', [
        animate('400ms cubic-bezier(0.4, 0, 0.2, 1)')
      ])
    ])
  ]
})
export class CommunitiesComponent {

  constructor(private apiService: ApiService) {}

  public communities = []

  visibleItems = 4;
  showAllCommunities = false;

  toggleShowCommunities() {
    this.showAllCommunities = !this.showAllCommunities;
    this.visibleItems = this.showAllCommunities ? this.communities.length : 4;
  }

  get visibleCommunities() {
    return this.communities.slice(0, this.visibleItems);
  }

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

}
