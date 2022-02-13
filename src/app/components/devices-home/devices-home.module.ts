import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DevicesHomeComponent } from './devices-home.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { SearchBarModule } from '../search-bar/search-bar.module';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@NgModule({
  declarations: [
    DevicesHomeComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    SearchBarModule,
    RouterModule,
    AppRoutingModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,

  ],
  exports: [DevicesHomeComponent],
})
export class DevicesHomeModule { }
