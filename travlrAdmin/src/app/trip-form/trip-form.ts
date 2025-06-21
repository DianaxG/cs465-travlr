import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TripDataService, Trip } from '../trip-data.service';

@Component({
  selector: 'app-trip-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './trip-form.html',
  styleUrls: ['./trip-form.css']
})
export class TripFormComponent implements OnInit {
  tripId: string | null = null;
  isEditMode = false;

  newTrip: Trip = {
    code: '',
    name: '',
    length: '',
    start: '',
    resort: '',
    perPerson: '',
    image: '',
    description: ''
  };

  constructor(
    private tripService: TripDataService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.tripId = this.route.snapshot.paramMap.get('tripId');
    this.isEditMode = !!this.tripId;

    if (this.isEditMode && this.tripId) {
      this.tripService.getTripById(this.tripId).subscribe({
        next: (trip) => {
          this.newTrip = { ...trip };
        },
        error: (err) => console.error('Failed to load trip:', err)
      });
    }
  }

  saveTrip(): void {
    if (this.isEditMode && this.tripId) {
      this.tripService.updateTrip(this.tripId, this.newTrip).subscribe({
        next: () => {
          console.log('Trip updated successfully');
          this.router.navigate(['/']);
        },
        error: (err) => console.error('Trip update failed:', err)
      });
    } else {
      this.tripService.addTrip(this.newTrip).subscribe({
        next: () => {
          console.log('Trip created successfully');
          this.router.navigate(['/']);
        },
        error: (err) => console.error('Trip creation failed:', err)
      });
    }
  }
}
