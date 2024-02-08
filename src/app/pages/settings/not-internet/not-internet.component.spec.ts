import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotInternetComponent } from './not-internet.component';

describe('NotInternetComponent', () => {
  let component: NotInternetComponent;
  let fixture: ComponentFixture<NotInternetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotInternetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NotInternetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
