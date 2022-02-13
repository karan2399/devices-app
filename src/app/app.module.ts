import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeviceDetailModule } from './components/device-detail/device-detail.module';
import { DevicesHomeModule } from './components/devices-home/devices-home.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SearchBarModule } from './components/search-bar/search-bar.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DevicesHomeModule,
    DeviceDetailModule,
    BrowserAnimationsModule,
    SearchBarModule,
    HttpClientModule,
    RouterTestingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
