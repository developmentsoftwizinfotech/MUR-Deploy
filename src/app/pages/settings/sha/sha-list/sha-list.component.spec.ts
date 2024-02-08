import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShaListComponent } from './sha-list.component';

describe('ShaListComponent', () => {
  let component: ShaListComponent;
  let fixture: ComponentFixture<ShaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShaListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
