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
                label: 'Documents',
                items: [
                    {
                        label: 'New',
                        icon: 'pi pi-plus',
                        shortcut: '⌘+N'
                    },
                    {
                        label: 'Search',
                        icon: 'pi pi-search',
                        shortcut: '⌘+S'
                    }
                ]
            },
            {
                label: 'Profile',
                items: [
                    {
                        label: 'Settings',
                        icon: 'pi pi-cog',
                        shortcut: '⌘+O'
                    },
                    {
                        label: 'Messages',
                        icon: 'pi pi-inbox',
                        badge: '2'
                    },
                    {
                        label: 'Logout',
                        icon: 'pi pi-sign-out',
                        shortcut: '⌘+Q'
                    }
                ]
            },
            {
                separator: true
            }
        ];
    }
}
