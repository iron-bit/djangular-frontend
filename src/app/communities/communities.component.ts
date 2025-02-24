import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, state, style, transition, animate } from '@angular/animations';

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
  communitiesList = [
    {
      name: 'MasticaMuelas',
      image: 'assets/1.jpg',
      members: '123.123.123',
    },
    {
      name: 'RevientaCocos400',
      image: 'assets/1.jpg',
      members: '123.123.123',
    },
    {
      name: 'Community132123132',
      image: 'assets/1.jpg',
      members: '123.123.123',
    },
    {
      name: 'SpaceX',
      image: 'assets/1.jpg',
      members: '123.123.123',
    },
    {
      name: 'LaCommunidad',
      image: 'assets/1.jpg',
      members: '123.123.123',
    },
    {
      name: 'Community',
      image: 'assets/1.jpg',
      members: '123.123.123',
    },
    {
      name: 'SpaceX',
      image: 'assets/1.jpg',
      members: '123.123.123',
    },
    {
      name: 'LaCommunidad',
      image: 'assets/1.jpg',
      members: '123.123.123',
    },
    {
      name: 'Community',
      image: 'assets/1.jpg',
      members: '123.123.123',
    }
  ];

  visibleItems = 4;
  showAllCommunities = false;

  toggleShowCommunities() {
    this.showAllCommunities = !this.showAllCommunities;
    this.visibleItems = this.showAllCommunities ? this.communitiesList.length : 4;
  }

  get visibleCommunities() {
    return this.communitiesList.slice(0, this.visibleItems);
  }
}
