import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSupplyTypeComponent } from './add-supply-type.component';

describe('AddSupplyTypeComponent', () => {
  let component: AddSupplyTypeComponent;
  let fixture: ComponentFixture<AddSupplyTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSupplyTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSupplyTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
