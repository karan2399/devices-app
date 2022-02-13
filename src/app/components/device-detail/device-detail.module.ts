import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeviceDetailComponent } from './device-detail.component';
import { SearchBarModule } from '../search-bar/search-bar.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    DeviceDetailComponent
  ],
  imports: [
    CommonModule,
    SearchBarModule,
    MatFormFieldModule,
    MatIconModule,
    SearchBarModule,
    RouterModule
  ],
  exports: [DeviceDetailComponent],
})
export class DeviceDetailModule { }
