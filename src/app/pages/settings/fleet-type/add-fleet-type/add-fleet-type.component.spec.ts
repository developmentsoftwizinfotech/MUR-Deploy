import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFleetTypeComponent } from './add-fleet-type.component';

describe('AddFleetTypeComponent', () => {
  let component: AddFleetTypeComponent;
  let fixture: ComponentFixture<AddFleetTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFleetTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFleetTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
