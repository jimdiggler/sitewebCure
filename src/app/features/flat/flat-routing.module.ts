import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FlatDetailComponent } from './components/flat-detail/flat-detail.component';
import { FlatBookingComponent } from './components/flat-booking/flat-booking.component';

const routes: Routes = [
  {
    path: ':id',
    component: FlatDetailComponent,
  },
  {
    path: 'booking',
    component: FlatBookingComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FlatRoutingModule {}
