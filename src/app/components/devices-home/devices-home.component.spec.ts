import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { DevicesHomeComponent } from './devices-home.component';

describe('DevicesHomeComponent', () => {
  let component: DevicesHomeComponent;
  let fixture: ComponentFixture<DevicesHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DevicesHomeComponent],
      imports: [RouterTestingModule, HttpClientModule],
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevicesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Devices Length Greater than 0', () => {
    expect(component.devices.length).toBeGreaterThan(0);
  });
});
