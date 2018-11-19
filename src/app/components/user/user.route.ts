import { Routes } from '@angular/router';

import { NewuserComponent } from './newuser.component';
import { EditUserComponent } from './edit-user.component';
import { DetailUserComponent } from './detail-user.component';

export const USUARIOS_ROUTE: Routes = [
  { path: 'new', component: NewuserComponent },
  { path: 'edit', component: EditUserComponent },
  { path: 'detail', component: DetailUserComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'new' },
];


