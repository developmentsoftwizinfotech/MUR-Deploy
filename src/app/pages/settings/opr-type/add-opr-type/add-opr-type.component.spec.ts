import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddOprTypeComponent } from './add-opr-type.component';

describe('AddOprTypeComponent', () => {
  let component: AddOprTypeComponent;
  let fixture: ComponentFixture<AddOprTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddOprTypeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddOprTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
