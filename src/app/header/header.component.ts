import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ApiService } from '../services/api.service';
import { Router, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';
import { Menu, MenuModule } from 'primeng/menu';
import { MenuItem } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { Badge } from 'primeng/badge';
import { Avatar } from 'primeng/avatar';
import { NgClass, NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule, Menu, Badge, Avatar, NgIf, NgClass, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  registered = false;
  user = {
    'id': '1',
    'name': 'John Doe',
    'username': 'johndoe123',
    'email': 'john@mail.com',
    'image': 'https://content.nationalgeographic.com.es/medio/2023/02/15/sus-incisivos-afilados-siempre-crecen_002dad44_230215174745_2000x1333.jpg',
    'age': 25,
    'creation-time': '19-02-2025',
  };

  private authSubscription!: Subscription;

  constructor(private authService: AuthService, private apiService: ApiService, private router: Router) { }

  ngOnInit(): void {
    this.authSubscription = this.authService.authStatus$.subscribe((status) => {
      this.registered = status;
      if (status) {
        this.apiService.getUserInfo().subscribe({
          next: (response: any) => {
            this.user = response;
            this.user.image = 'https://content.nationalgeographic.com.es/medio/2023/02/15/sus-incisivos-afilados-siempre-crecen_002dad44_230215174745_2000x1333.jpg';
          },
          error: (err: any) => {
            if (err.status === 401) {
              this.registered = false;
            }
          }
        });
      }
    });
  }

  ngOnDestroy(): void {
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  logout() {
    console.log('Logging out');
    this.authService.logout();
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
  ];

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
          command: () => this.onProfileClick()
        },
        {
          label: 'Your Posts',
          icon: 'pi pi-clipboard',
          badge: '16',
        },
        {
          label: 'Logout',
          icon: 'pi pi-sign-out',
          command: () => this.logout()
        }
      ]
    },
    {
      separator: true
    }
  ];

  onProfileClick() {
    this.router.navigate(['/profile']);
  }
}
