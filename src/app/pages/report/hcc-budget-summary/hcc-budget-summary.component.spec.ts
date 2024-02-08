import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HccBudgetSummaryComponent } from './hcc-budget-summary.component';

describe('HccBudgetSummaryComponent', () => {
  let component: HccBudgetSummaryComponent;
  let fixture: ComponentFixture<HccBudgetSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HccBudgetSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HccBudgetSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
