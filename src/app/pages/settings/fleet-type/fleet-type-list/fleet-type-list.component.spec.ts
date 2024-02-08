import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetTypeListComponent } from './fleet-type-list.component';

describe('FleetTypeListComponent', () => {
  let component: FleetTypeListComponent;
  let fixture: ComponentFixture<FleetTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FleetTypeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FleetTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
