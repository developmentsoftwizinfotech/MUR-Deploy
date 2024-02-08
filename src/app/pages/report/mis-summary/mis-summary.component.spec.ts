import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisSummaryComponent } from './mis-summary.component';

describe('MisSummaryComponent', () => {
  let component: MisSummaryComponent;
  let fixture: ComponentFixture<MisSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisSummaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
