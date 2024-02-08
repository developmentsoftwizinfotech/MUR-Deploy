import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVesselInventoryComponent } from './add-vessel-inventory.component';

describe('AddVesselInventoryComponent', () => {
  let component: AddVesselInventoryComponent;
  let fixture: ComponentFixture<AddVesselInventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddVesselInventoryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddVesselInventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
