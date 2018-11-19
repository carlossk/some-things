import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { NewuserComponent } from './components/user/newuser.component';
import { EditUserComponent } from './components/user/edit-user.component';
import { DetailUserComponent } from './components/user/detail-user.component';


const app_routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'user/:id',
    component: UserComponent,
    children: [
      { path: 'new', component: NewuserComponent },
      { path: 'edit', component: EditUserComponent },
      { path: 'detail', component: DetailUserComponent },
      { path: '**', pathMatch: 'full', redirectTo: 'new' },
    ]
  },

  { path: '**', pathMatch: 'full', redirectTo: 'home' },

];

export const APP_ROUTING = RouterModule.forRoot(app_routes);


