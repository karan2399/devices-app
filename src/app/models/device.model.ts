export class Device {
    constructor(
        public device_icon: string,
        public device_name: string,
        public device_status: string,
        public device_temperature?: string,
        public device_usage?: string,
    ) { }
}

