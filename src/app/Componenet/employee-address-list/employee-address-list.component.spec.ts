import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAddressListComponent } from './employee-address-list.component';

describe('EmployeeAddressListComponent', () => {
  let component: EmployeeAddressListComponent;
  let fixture: ComponentFixture<EmployeeAddressListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ EmployeeAddressListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeAddressListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
