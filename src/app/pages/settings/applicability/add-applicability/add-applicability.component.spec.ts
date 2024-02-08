import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddApplicabilityComponent } from './add-applicability.component';

describe('AddApplicabilityComponent', () => {
  let component: AddApplicabilityComponent;
  let fixture: ComponentFixture<AddApplicabilityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddApplicabilityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddApplicabilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
