import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VesselInventoryListComponent } from './vessel-inventory-list.component';

describe('VesselInventoryListComponent', () => {
  let component: VesselInventoryListComponent;
  let fixture: ComponentFixture<VesselInventoryListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VesselInventoryListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VesselInventoryListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
