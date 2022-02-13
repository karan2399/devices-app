import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeviceDetailComponent } from './components/device-detail/device-detail.component';
import { DevicesHomeComponent } from './components/devices-home/devices-home.component';

const routes: Routes = [
  { path: 'home', component: DevicesHomeComponent },
  { path: 'device-detail', component: DeviceDetailComponent },
  { path: '**', component: DevicesHomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
