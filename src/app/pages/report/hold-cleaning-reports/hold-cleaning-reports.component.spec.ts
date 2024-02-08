import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoldCleaningReportsComponent } from './hold-cleaning-reports.component';

describe('HoldCleaningReportsComponent', () => {
  let component: HoldCleaningReportsComponent;
  let fixture: ComponentFixture<HoldCleaningReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoldCleaningReportsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoldCleaningReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
