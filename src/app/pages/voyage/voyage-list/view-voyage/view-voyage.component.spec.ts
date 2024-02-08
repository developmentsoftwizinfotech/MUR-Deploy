import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewVoyageComponent } from './view-voyage.component';

describe('ViewVoyageComponent', () => {
  let component: ViewVoyageComponent;
  let fixture: ComponentFixture<ViewVoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewVoyageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
