import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DeviceService } from 'src/app/services/devices-service';
import { Device } from '../../models/device.model';

@Component({
  selector: 'app-devices-home',
  templateUrl: './devices-home.component.html',
  styleUrls: ['./devices-home.component.scss'],
})
export class DevicesHomeComponent implements OnInit {
  public devices: Device[];
  public filterDropDown: AbstractControl;
  filterForm: FormGroup;
  total: number = 0;


  constructor(private router: Router, private deviceService: DeviceService) {
    this.filterForm = new FormGroup({
      filterDropDown: new FormControl(),
    });
    this.filterDropDown = this.filterForm.get('filterDropDown');


    this.deviceService.getAllDevices().subscribe(res => {
      this.deviceService.devices_list = res;
      this.devices = this.deviceService.getAllDevicesList();
      this.total = this.devices.length;
    });

  }

  onOptionsSelected(value: string) {
    this.devices = this.deviceService.getAllDevicesList();
    if (value == "available") {
      this.devices = this.devices.filter(c => c.device_status === 'Available');
    }
    else if (value == "not-available") {
      this.devices = this.devices.filter(c => c.device_status === 'Not Available');
    }
    else if (value == "all") {
      this.devices = this.deviceService.getAllDevicesList();
    }
    this.total = this.devices.length;

  }


  ngOnInit(): void {

  }
  onClickDevice(device: Device) {
    this.deviceService.setCurrentDevice(device);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/device-detail'])
    })
  }
}
