import {Routes} from '@angular/router';
import {PostsViewComponent} from './posts-view/posts-view.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {LoginComponent} from './login/login.component';
import {RegisterComponent} from './register/register.component';
import {AccountDataComponent} from './account-data/account-data.component';
import { CreatePostPopupComponent } from './create-post-popup/create-post-popup.component';


export const routes: Routes = [
  {path: '', component: PostsViewComponent},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'profile', component: AccountDataComponent},
  { path: 'create-post', component: CreatePostPopupComponent},
  { path: '**', component:NotFoundComponent }
];
