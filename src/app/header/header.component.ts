import {Component, OnInit} from '@angular/core';
import {Menu, MenuModule} from 'primeng/menu';
import {MenuItem} from 'primeng/api';
import {ButtonModule} from 'primeng/button';
import {PrimeIcons} from 'primeng/api';
import {Badge} from 'primeng/badge';
import {Avatar} from 'primeng/avatar';
import {NgClass, NgIf} from '@angular/common';
import {AuthService} from '../services/auth.service';
import {ApiService} from '../services/api.service';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule, Menu, Badge, Avatar, NgIf, NgClass, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  registered = true;
  user = {
    'id': '1',
    'name': 'John Doe',
    'username': 'johndoe123',
    'email': 'john@mail.com',
    'image': 'https://content.nationalgeographic.com.es/medio/2023/02/15/sus-incisivos-afilados-siempre-crecen_002dad44_230215174745_2000x1333.jpg',
    'age': 25,
    'creation-time': '19-02-2025',
  }

  constructor(private authService: AuthService, private apiService: ApiService) {
  }

  ngOnInit(): void {
    this.registered = this.authService.isAuthenticated();
    if (this.registered) {
      this.apiService.getUserInfo().subscribe((response: any) => {
        this.user = response;
        this.user.image = 'https://content.nationalgeographic.com.es/medio/2023/02/15/sus-incisivos-afilados-siempre-crecen_002dad44_230215174745_2000x1333.jpg';
      });
    }
  }

  logout() {
    this.authService.logout()
    this.registered = false;
  }

  default_items = [{
    separator: true
  },
    {
      label: 'Account',
      items: [
        {
          label: 'Sign In',
          icon: 'pi pi-sign-in',
        },
        {
          label: 'Sign Up',
          icon: 'pi pi-user-plus',
        }
      ]
    }
  ]

  items = [{
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
