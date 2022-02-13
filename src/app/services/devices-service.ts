import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Device } from '../models/device.model';

const DEV_API = 'http://localhost:3000/';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})

export class DeviceService {
    public devices_list;

    constructor(private http: HttpClient) {

    }
    public device: Device = {
        device_icon: '',
        device_name: '',
        device_status: '',
        device_temperature: '',
        device_usage: '',
    };
    setCurrentDevice(device: Device) {
        this.device = device;
    }

    getCurrentDevice() {
        return this.device;
    }

    getAllDevicesList() {
        return this.devices_list;
    }

    getAllDevices() {
        return this.http.get(DEV_API + 'getDevices', httpOptions);
    }

}