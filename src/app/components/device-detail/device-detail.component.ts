import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Device } from 'src/app/models/device.model';
import { DeviceService } from 'src/app/services/devices-service';

@Component({
  selector: 'app-device-detail',
  templateUrl: './device-detail.component.html',
  styleUrls: ['./device-detail.component.scss']
})
export class DeviceDetailComponent implements OnInit {
  devices: Device[];
  device: Device;


  isDetailPage = true;

  constructor(private router: Router, private deviceService: DeviceService) {
    this.devices = this.deviceService.getAllDevicesList();
    for (let i = this.devices.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [this.devices[i], this.devices[j]] = [this.devices[j], this.devices[i]];
    }
    this.devices.splice(3);
  }

  ngOnInit(): void {
    this.device = this.deviceService.getCurrentDevice();
  }
  onClickDevice(device: Device) {
    this.deviceService.setCurrentDevice(device);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/device-detail'])
    })
  }
}
