import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FleetNameListComponent } from './fleet-name-list.component';

describe('FleetNameListComponent', () => {
  let component: FleetNameListComponent;
  let fixture: ComponentFixture<FleetNameListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FleetNameListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FleetNameListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
