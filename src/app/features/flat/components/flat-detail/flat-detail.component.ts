import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Flat } from '../../models/flat';
import { FlatService } from '../../services/flat.service';
import { FlatBookingComponent } from '../flat-booking/flat-booking.component';

@Component({
  selector: 'app-flat-detail',
  templateUrl: './flat-detail.component.html',
  styleUrls: ['./flat-detail.component.scss'],
})
export class FlatDetailComponent implements OnInit {
  //----------------------------------------------------------------------------------------
  // ATTRIBUTES
  //----------------------------------------------------------------------------------------
  flat!: Flat;

  //----------------------------------------------------------------------------------------
  // CONSTRUCTOR
  //----------------------------------------------------------------------------------------
  constructor(
    private route: ActivatedRoute,
    private flatService: FlatService,
    private dialog: MatDialog
  ) {}

  //----------------------------------------------------------------------------------------
  // LIFECYCLE
  //----------------------------------------------------------------------------------------
  ngOnInit() {
    this.route.paramMap.subscribe((p) => {
      const id = p.get('id');
      this.getFlat(id);
    });
  }

  //----------------------------------------------------------------------------------------
  // METHODS
  //----------------------------------------------------------------------------------------
  /**
   * Gets a flat by id
   * @param id
   */
  getFlat(id: any) {
    this.flatService.getFlat(id).subscribe({
      next: (response) => {
        this.flat = response;
      },
      error: (error) => {
        console.log('Request complete' + error);
      },
      complete: () => {
        console.log('Request complete');
      },
    });
  }

  //Not in use for flat-booking component
  openDialog() {
    this.dialog.open(FlatBookingComponent, {
      height: '600px',
      width: '600px',
      data: {
        id: this.flat.id,
        name: this.flat.name,
      },
    });
  }
}
