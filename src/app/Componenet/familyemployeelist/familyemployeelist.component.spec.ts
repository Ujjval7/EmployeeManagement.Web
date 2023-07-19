import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FamilyemployeelistComponent } from './familyemployeelist.component';

describe('FamilyemployeelistComponent', () => {
  let component: FamilyemployeelistComponent;
  let fixture: ComponentFixture<FamilyemployeelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FamilyemployeelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FamilyemployeelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
