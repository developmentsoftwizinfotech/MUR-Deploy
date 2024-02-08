import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoldCleaningListComponent } from './hold-cleaning-list.component';

describe('HoldCleaningListComponent', () => {
  let component: HoldCleaningListComponent;
  let fixture: ComponentFixture<HoldCleaningListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HoldCleaningListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HoldCleaningListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
