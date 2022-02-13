import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Device } from 'src/app/models/device.model';
import { DeviceService } from 'src/app/services/devices-service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
  @Input() item;
  public typeahead: AbstractControl;
  devices: Device[];
  searchForm: FormGroup;
  suggestions: Device[] = [];
  constructor(private router: Router, private deviceService: DeviceService) {
    this.searchForm = new FormGroup({
      typeahead: new FormControl(),
    });
    this.deviceService.getAllDevices().subscribe(res => {
      this.deviceService.devices_list = res;
      this.devices = this.deviceService.getAllDevicesList();
    });

    this.typeahead = this.searchForm.get('typeahead');
  }

  ngOnInit(): void {

    this.typeahead = this.searchForm.get('typeahead');
    if (this.item) {
      this.searchForm.controls['typeahead'].disable();
    }
  }
  suggest() {
    this.suggestions = this.devices
      .filter(c => c.device_name.toUpperCase().startsWith(this.typeahead.value.toUpperCase()))
      .slice(0, 3);
  }

  hideSuggestions() {
    this.suggestions.length = 0;
  }

  onDeviceClick(d: Device) {
    this.deviceService.setCurrentDevice(d);
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/device-detail'])
    })
  }
  goToHome() {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate(['/home'])
    })
  }

}
