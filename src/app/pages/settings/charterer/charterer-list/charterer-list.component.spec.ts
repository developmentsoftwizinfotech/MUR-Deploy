import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartererListComponent } from './charterer-list.component';

describe('ChartererListComponent', () => {
  let component: ChartererListComponent;
  let fixture: ComponentFixture<ChartererListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartererListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartererListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
