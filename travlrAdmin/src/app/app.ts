import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],  // Enables routing in app.html
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  protected title = 'travlrAdmin';
}
