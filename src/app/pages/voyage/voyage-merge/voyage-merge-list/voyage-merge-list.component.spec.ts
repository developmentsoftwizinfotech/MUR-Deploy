import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoyageMergeListComponent } from './voyage-merge-list.component';

describe('VoyageMergeListComponent', () => {
  let component: VoyageMergeListComponent;
  let fixture: ComponentFixture<VoyageMergeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoyageMergeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VoyageMergeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
