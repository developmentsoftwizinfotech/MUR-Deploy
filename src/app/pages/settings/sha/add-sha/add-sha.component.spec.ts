import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddShaComponent } from './add-sha.component';

describe('AddShaComponent', () => {
  let component: AddShaComponent;
  let fixture: ComponentFixture<AddShaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddShaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddShaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
