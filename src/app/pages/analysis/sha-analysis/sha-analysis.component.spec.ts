import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShaAnalysisComponent } from './sha-analysis.component';

describe('ShaAnalysisComponent', () => {
  let component: ShaAnalysisComponent;
  let fixture: ComponentFixture<ShaAnalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShaAnalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShaAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
