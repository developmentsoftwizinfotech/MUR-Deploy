import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChartererComponent } from './add-charterer.component';

describe('AddChartererComponent', () => {
  let component: AddChartererComponent;
  let fixture: ComponentFixture<AddChartererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddChartererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddChartererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
