import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { TripListComponent } from './trip-list/trip-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],  // 
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})

export class App {
  protected title = 'travlrAdmin';
}

