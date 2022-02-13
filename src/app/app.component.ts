import { Component } from '@angular/core';
import { DeviceService } from './services/devices-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private deviceService: DeviceService) { }
  title = 'devices';
}
