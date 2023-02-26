import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [FooterComponent, MenuComponent],
  imports: [CommonModule, RouterModule, SharedModule],
  exports: [FooterComponent, MenuComponent],
})
export class CoreModule {}
