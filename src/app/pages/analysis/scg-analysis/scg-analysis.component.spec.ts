import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScgAnalysisComponent } from './scg-analysis.component';

describe('ScgAnalysisComponent', () => {
  let component: ScgAnalysisComponent;
  let fixture: ComponentFixture<ScgAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScgAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScgAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
