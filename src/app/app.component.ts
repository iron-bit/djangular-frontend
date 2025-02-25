import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostComponent } from './post/post.component';
import { HeaderComponent } from './header/header.component';
import { DockIzqComponent } from './dock-izq/dock-izq.component';
import { CommunitiesComponent } from './communities/communities.component';
import { FooterComponent} from './footer/footer.component';
import { CreatePostPopupComponent } from './create-post-popup/create-post-popup.component';
import { AccountDataComponent } from './account-data/account-data.component';
import { RegisterComponent } from "./register/register.component";
import { LoginComponent } from "./login/login.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PostComponent, HeaderComponent, FooterComponent, DockIzqComponent, CommunitiesComponent, CreatePostPopupComponent, AccountDataComponent, RegisterComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'djangular-frontend';
}
