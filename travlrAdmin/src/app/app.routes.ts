import { Routes } from '@angular/router';
import { LoginComponent } from './login/login';
import { TripListComponent } from './trip-list/trip-list.component';
import { TripFormComponent } from './trip-form/trip-form';
import { authGuard } from './auth-guard';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'trips',
    component: TripListComponent,
    canActivate: [authGuard]
  },
  {
    path: 'add-trip',
    component: TripFormComponent,
    canActivate: [authGuard]
  },
  {
    path: 'edit-trip/:tripCode',
    component: TripFormComponent,
    canActivate: [authGuard]
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
