import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaningStagesComponent } from './cleaning-stages.component';

describe('CleaningStagesComponent', () => {
  let component: CleaningStagesComponent;
  let fixture: ComponentFixture<CleaningStagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CleaningStagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CleaningStagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
