import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVendorRequisitionComponent } from './add-vendor-requisition.component';

describe('AddVendorRequisitionComponent', () => {
  let component: AddVendorRequisitionComponent;
  let fixture: ComponentFixture<AddVendorRequisitionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVendorRequisitionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVendorRequisitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
