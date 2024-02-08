import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CargoAnalysisComponent } from './cargo-analysis.component';

describe('CargoAnalysisComponent', () => {
  let component: CargoAnalysisComponent;
  let fixture: ComponentFixture<CargoAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CargoAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CargoAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
