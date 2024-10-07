import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaffRetrieveComponent } from './staff-retrieve.component';

describe('StaffRetrieveComponent', () => {
  let component: StaffRetrieveComponent;
  let fixture: ComponentFixture<StaffRetrieveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaffRetrieveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaffRetrieveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
