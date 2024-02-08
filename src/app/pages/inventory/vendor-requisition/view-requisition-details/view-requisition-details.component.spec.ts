import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewRequisitionDetailsComponent } from './view-requisition-details.component';

describe('ViewRequisitionDetailsComponent', () => {
  let component: ViewRequisitionDetailsComponent;
  let fixture: ComponentFixture<ViewRequisitionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewRequisitionDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewRequisitionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
