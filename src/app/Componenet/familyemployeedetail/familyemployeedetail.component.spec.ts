import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyemployeedetailComponent } from './familyemployeedetail.component';

describe('FamilyemployeedetailComponent', () => {
  let component: FamilyemployeedetailComponent;
  let fixture: ComponentFixture<FamilyemployeedetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FamilyemployeedetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilyemployeedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
