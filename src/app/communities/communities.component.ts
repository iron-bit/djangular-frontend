import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-communities',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './communities.component.html',
  styleUrl: './communities.component.css',
})
export class CommunitiesComponent {
  communitiesList = [
    {
      community_name: 'MasticaMuelas',
      community_image: 'assets/1.jpg',
      community_members: '123.123.123',
    },
    {
      community_name: 'RevientaCocos400',
      community_image: 'assets/1.jpg',
      community_members: '123.123.123',
    },
    {
      community_name: 'Community132123132',
      community_image: 'assets/1.jpg',
      community_members: '123.123.123',
    },
    {
      community_name: 'SpaceX',
      community_image: 'assets/1.jpg',
      community_members: '123.123.123',
    },
    {
      community_name: 'LaCommunidad',
      community_image: 'assets/1.jpg',
      community_members: '123.123.123',
    },
    {
      community_name: 'Community',
      community_image: 'assets/1.jpg',
      community_members: '123.123.123',
    },
  ];

  communitiesIniciales = this.communitiesList.slice(0, 3);
  ver6Comunidades = false;

  action() {
    if (this.ver6Comunidades) {
      this.communitiesIniciales = this.communitiesList.slice(0, 3);
    } else {
      this.communitiesIniciales = this.communitiesList;
    }
    this.ver6Comunidades = !this.ver6Comunidades;
  }
}
