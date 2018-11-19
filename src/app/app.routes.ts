import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { USUARIOS_ROUTE } from './components/user/user.route';



const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'user/:id',
    component: UserComponent,
    children: USUARIOS_ROUTE
  },

  { path: '**', pathMatch: 'full', redirectTo: 'home' },

];

export const APP_ROUTING = RouterModule.forRoot(app_routes);


