import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlyVendorAnalysisComponent } from './monthly-vendor-analysis.component';

describe('MonthlyVendorAnalysisComponent', () => {
  let component: MonthlyVendorAnalysisComponent;
  let fixture: ComponentFixture<MonthlyVendorAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonthlyVendorAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonthlyVendorAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
