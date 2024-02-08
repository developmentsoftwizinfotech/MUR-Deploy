import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCleaningGangComponent } from './add-cleaning-gang.component';

describe('AddCleaningGangComponent', () => {
  let component: AddCleaningGangComponent;
  let fixture: ComponentFixture<AddCleaningGangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCleaningGangComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCleaningGangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
