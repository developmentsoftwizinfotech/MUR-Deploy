import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyageAnnualBudgetComponent } from './voyage-annual-budget.component';

describe('VoyageAnnualBudgetComponent', () => {
  let component: VoyageAnnualBudgetComponent;
  let fixture: ComponentFixture<VoyageAnnualBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoyageAnnualBudgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoyageAnnualBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
