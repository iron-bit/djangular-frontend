import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DockIzqComponent } from './dock-izq/dock-izq.component';
import { CommunitiesComponent } from './communities/communities.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DockIzqComponent, CommunitiesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'djangular-frontend';
}
