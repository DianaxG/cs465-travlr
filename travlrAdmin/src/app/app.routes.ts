import { Routes } from '@angular/router';
import { TripListComponent } from './trip-list/trip-list.component';
import { TripFormComponent } from './trip-form/trip-form';

export const routes: Routes = [
  {
    path: '',
    component: TripListComponent
  },
  {
    path: 'add-trip',
    component: TripFormComponent
  },
  {
    path: 'edit-trip/:tripId',
    component: TripFormComponent
  }
];
