import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CleaningMatrixComponent } from './cleaning-matrix.component';

describe('CleaningMatrixComponent', () => {
  let component: CleaningMatrixComponent;
  let fixture: ComponentFixture<CleaningMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CleaningMatrixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CleaningMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
