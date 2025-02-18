import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { DockIzqComponent } from './dock-izq/dock-izq.component';
import { CommunitiesComponent } from './communities/communities.component';
import { FooterComponent} from './footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,  HeaderComponent, FooterComponent, DockIzqComponent, CommunitiesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'djangular-frontend';
}
