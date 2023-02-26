import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlatDetailComponent } from './components/flat-detail/flat-detail.component';
import { FlatRoutingModule } from './flat-routing.module';
import { FlatBookingComponent } from './components/flat-booking/flat-booking.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [FlatDetailComponent, FlatBookingComponent],
  imports: [CommonModule, FlatRoutingModule, SharedModule],
})
export class FlatModule {}
