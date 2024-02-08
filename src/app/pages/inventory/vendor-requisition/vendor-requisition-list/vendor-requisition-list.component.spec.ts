import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendorRequisitionListComponent } from './vendor-requisition-list.component';

describe('VendorRequisitionListComponent', () => {
  let component: VendorRequisitionListComponent;
  let fixture: ComponentFixture<VendorRequisitionListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendorRequisitionListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VendorRequisitionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
