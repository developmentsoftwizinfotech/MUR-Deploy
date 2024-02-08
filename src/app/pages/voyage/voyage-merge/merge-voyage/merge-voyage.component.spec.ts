import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergeVoyageComponent } from './merge-voyage.component';

describe('MergeVoyageComponent', () => {
  let component: MergeVoyageComponent;
  let fixture: ComponentFixture<MergeVoyageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergeVoyageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MergeVoyageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
