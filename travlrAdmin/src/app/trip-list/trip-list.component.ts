import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TripDataService, Trip } from '../trip-data.service';
import { TripCardComponent } from '../trip-card/trip-card.component';



@Component({
  selector: 'app-trip-list',
  standalone: true,
  imports: [CommonModule, TripCardComponent],
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.css']
})
export class TripListComponent implements OnInit {
  trips: Trip[] = [];

  constructor(private tripService: TripDataService) {}

  ngOnInit(): void {
    this.tripService.getTrips().subscribe((data) => {
      this.trips = data;
    });
  }
}

