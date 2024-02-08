import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFleetNameComponent } from './add-fleet-name.component';

describe('AddFleetNameComponent', () => {
  let component: AddFleetNameComponent;
  let fixture: ComponentFixture<AddFleetNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFleetNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFleetNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
