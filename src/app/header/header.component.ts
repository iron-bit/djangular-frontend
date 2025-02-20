import {Component, OnInit} from '@angular/core';
import {MenuModule} from 'primeng/menu';
import {Menu} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import {PrimeIcons} from 'primeng/api';
import {Badge} from 'primeng/badge';
import {Avatar} from 'primeng/avatar';
import {NgIf, NgStyle} from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule, Menu, Badge, Avatar, NgIf, NgStyle],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [{
      separator: true
    },
      {
        label: 'Posts',
        items: [
          {
            label: 'New',
            icon: 'pi pi-plus',
          },
          {
            label: 'Search',
            icon: 'pi pi-search',
          }
        ]
      },
      {
        label: 'Profile',
        items: [
          {
            label: 'Your Profile',
            icon: 'pi pi-user',
          },
          {
            label: 'Your Posts',
            icon: 'pi pi-clipboard',
            badge: '16', // Poner el número de posts
          },
          {
            label: 'Logout',
            icon: 'pi pi-sign-out',
          }
        ]
      },
      {
        separator: true
      }];
  }

  user = {
    'id': '1',
    'name': 'John Doe',
    'nickname': 'johndoe123',
    'email': 'john@mail.com',
    'image': 'https://content.nationalgeographic.com.es/medio/2023/02/15/sus-incisivos-afilados-siempre-crecen_002dad44_230215174745_2000x1333.jpg',
    'age' : 25,
    'creation-time' : '19-02-2025',
  }

}
