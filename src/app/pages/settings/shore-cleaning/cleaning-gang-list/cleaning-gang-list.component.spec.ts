import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaningGangListComponent } from './cleaning-gang-list.component';

describe('CleaningGangListComponent', () => {
  let component: CleaningGangListComponent;
  let fixture: ComponentFixture<CleaningGangListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CleaningGangListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CleaningGangListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
