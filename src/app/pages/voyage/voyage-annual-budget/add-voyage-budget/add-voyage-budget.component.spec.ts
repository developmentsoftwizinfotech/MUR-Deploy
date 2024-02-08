import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVoyageBudgetComponent } from './add-voyage-budget.component';

describe('AddVoyageBudgetComponent', () => {
  let component: AddVoyageBudgetComponent;
  let fixture: ComponentFixture<AddVoyageBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVoyageBudgetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVoyageBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
