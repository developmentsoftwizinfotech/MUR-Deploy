import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OprTypeListComponent } from './opr-type-list.component';

describe('OprTypeListComponent', () => {
  let component: OprTypeListComponent;
  let fixture: ComponentFixture<OprTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OprTypeListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OprTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
