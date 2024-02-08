import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumptionLogComponent } from './consumption-log.component';

describe('ConsumptionLogComponent', () => {
  let component: ConsumptionLogComponent;
  let fixture: ComponentFixture<ConsumptionLogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumptionLogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumptionLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
