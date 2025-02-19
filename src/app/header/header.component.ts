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
        this.items = [
            {
                separator: true
            },
            {
                label: 'Posts',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-plus',
                        shortcut: 'ctrl+N'
                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-search',
                        shortcut: 'ctrl+S'
                    }
                ]
            },
            {
                label: 'Profile',
                items: [
                    {
                        label: 'Your Profile',
                        icon: 'pi pi-user',
                        shortcut: 'ctrl+P'
                    },
                    {
                        label: 'Your Posts',
                        icon: 'pi pi-clipboard',
                        badge: '16', // Poner el número de posts
                    },
                    {
                        label: 'Logout',
                        icon: 'pi pi-sign-out',
                        shortcut: 'ctrl+Q'
                    }
                ]
            },
            {
                separator: true
            }
        ];
    }
}
