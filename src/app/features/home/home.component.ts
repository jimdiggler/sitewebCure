import { Component } from '@angular/core';
import { Flat } from '../flat/models/flat';
import { FlatService } from '../flat/services/flat.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  //----------------------------------------------------------------------------------------
  // ATTRIBUTES
  //----------------------------------------------------------------------------------------
  flats!: Flat[];

  //----------------------------------------------------------------------------------------
  // CONSTRUCTOR
  //----------------------------------------------------------------------------------------
  constructor(private flatService: FlatService) {}

  //----------------------------------------------------------------------------------------
  // LIFECYCle
  //----------------------------------------------------------------------------------------
  ngOnInit() {
    this.loadFlats();
  }

  //----------------------------------------------------------------------------------------
  // METHODS
  //----------------------------------------------------------------------------------------
  /**
   * Gets list of flats
   */
  loadFlats() {
    this.flatService.getFlats().subscribe({
      next: (response) => {
        this.flats = response;
      },
      error: (error) => {
        console.log('Request complete' + error);
      },
      complete: () => {
        console.log('Request complete');
      },
    });
  }
}
