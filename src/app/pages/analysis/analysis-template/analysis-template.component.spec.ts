import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalysisTemplateComponent } from './analysis-template.component';

describe('AnalysisTemplateComponent', () => {
  let component: AnalysisTemplateComponent;
  let fixture: ComponentFixture<AnalysisTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalysisTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalysisTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
