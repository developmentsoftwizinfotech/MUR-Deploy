import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyTypeComponent } from './supply-type.component';

describe('SupplyTypeComponent', () => {
  let component: SupplyTypeComponent;
  let fixture: ComponentFixture<SupplyTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplyTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SupplyTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
